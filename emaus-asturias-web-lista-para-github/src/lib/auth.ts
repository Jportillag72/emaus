"use server";

import { cookies } from "next/headers";
import { getSupabaseAnonKey, getSupabaseUrl, hasSupabaseConfig } from "./supabase-rest";

const ACCESS_COOKIE = "emaus_admin_access_token";
const REFRESH_COOKIE = "emaus_admin_refresh_token";

export type AdminSession = {
  email: string;
  demo: boolean;
};

type AuthResponse = {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
  user?: {
    email?: string;
  };
};

export async function getAccessToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ACCESS_COOKIE)?.value;

  if (!hasSupabaseConfig()) {
    return token ?? "demo-admin-token";
  }

  return token;
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ACCESS_COOKIE)?.value;

  if (!hasSupabaseConfig()) {
    return { email: "modo-demo@emaus.local", demo: true };
  }

  if (!token) {
    return null;
  }

  return { email: "admin", demo: false };
}

export async function signInWithPassword(email: string, password: string) {
  const cookieStore = await cookies();

  if (!hasSupabaseConfig()) {
    cookieStore.set(ACCESS_COOKIE, "demo-admin-token", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8
    });
    return;
  }

  const supabaseUrl = getSupabaseUrl();
  const anonKey = getSupabaseAnonKey();

  if (!supabaseUrl || !anonKey) {
    throw new Error("Supabase is not configured");
  }

  const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error("Credenciales no validas");
  }

  const data = (await response.json()) as AuthResponse;
  const maxAge = data.expires_in ?? 60 * 60 * 8;

  const secureCookie = process.env.NODE_ENV === "production";

  cookieStore.set(ACCESS_COOKIE, data.access_token, {
    httpOnly: true,
    sameSite: "lax",
    secure: secureCookie,
    path: "/",
    maxAge
  });

  if (data.refresh_token) {
    cookieStore.set(REFRESH_COOKIE, data.refresh_token, {
      httpOnly: true,
      sameSite: "lax",
      secure: secureCookie,
      path: "/",
      maxAge: 60 * 60 * 24 * 30
    });
  }
}

export async function signOut() {
  const cookieStore = await cookies();
  cookieStore.delete(ACCESS_COOKIE);
  cookieStore.delete(REFRESH_COOKIE);
}

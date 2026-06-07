"use server";

import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "node:crypto";
import { getSupabaseAnonKey, getSupabaseUrl, hasSupabaseConfig } from "./supabase-rest";

const ACCESS_COOKIE = "emaus_admin_access_token";
const REFRESH_COOKIE = "emaus_admin_refresh_token";
const LOCAL_ADMIN_USERNAME = process.env.ADMIN_USERNAME ?? "SanLucas";
const LOCAL_ADMIN_PASSWORD_HASH =
  process.env.ADMIN_PASSWORD_SHA256 ?? "acde05ba234204871ebd2a431f6aeca27c62e3b434b28824519f9ea764294caf";
const LOCAL_ADMIN_SESSION_TOKEN =
  process.env.ADMIN_SESSION_TOKEN ?? "6168ece31dc89c9cca4d220a68842b1c03162e47c6489dbe96d3881c1368b942";

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

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

function isLocalAdminSession(token?: string) {
  return Boolean(token && safeEqual(token, LOCAL_ADMIN_SESSION_TOKEN));
}

function isLocalAdminCredentials(username: string, password: string) {
  return (
    safeEqual(username, LOCAL_ADMIN_USERNAME) &&
    safeEqual(sha256(password), LOCAL_ADMIN_PASSWORD_HASH)
  );
}

export async function getAccessToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ACCESS_COOKIE)?.value;

  if (!hasSupabaseConfig()) {
    return token;
  }

  return token;
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ACCESS_COOKIE)?.value;

  if (!hasSupabaseConfig()) {
    return isLocalAdminSession(token) ? { email: LOCAL_ADMIN_USERNAME, demo: false } : null;
  }

  if (!token) {
    return null;
  }

  return { email: isLocalAdminSession(token) ? LOCAL_ADMIN_USERNAME : "admin", demo: false };
}

export async function signInWithPassword(username: string, password: string) {
  const cookieStore = await cookies();
  const secureCookie = process.env.NODE_ENV === "production";

  if (isLocalAdminCredentials(username, password)) {
    cookieStore.set(ACCESS_COOKIE, LOCAL_ADMIN_SESSION_TOKEN, {
      httpOnly: true,
      sameSite: "lax",
      secure: secureCookie,
      path: "/",
      maxAge: 60 * 60 * 8
    });
    return;
  }

  if (!hasSupabaseConfig()) {
    throw new Error("Credenciales no válidas");
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
    body: JSON.stringify({ email: username, password })
  });

  if (!response.ok) {
    throw new Error("Credenciales no validas");
  }

  const data = (await response.json()) as AuthResponse;
  const maxAge = data.expires_in ?? 60 * 60 * 8;

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

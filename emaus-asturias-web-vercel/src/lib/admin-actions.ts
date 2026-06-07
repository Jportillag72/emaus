"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAccessToken, signInWithPassword, signOut } from "./auth";
import {
  deleteRows,
  insertRow,
  updateRows,
  upsertRows
} from "./supabase-rest";
import { uploadPublicFile } from "./storage";
import type { EditablePage, News, Retreat, SiteSetting } from "./types";
import { slugify } from "./utils";

export type LoginState = {
  error: string;
};

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function nullableText(formData: FormData, key: string) {
  const value = text(formData, key);
  return value.length > 0 ? value : null;
}

function fileFrom(formData: FormData, key: string) {
  const value = formData.get(key);
  return value instanceof File && value.size > 0 ? value : null;
}

export async function loginAction(_previousState: LoginState, formData: FormData): Promise<LoginState> {
  const username = text(formData, "username") || text(formData, "email");
  const password = text(formData, "password");

  if (!username || !password) {
    return { error: "Introduce usuario y contraseña." };
  }

  try {
    await signInWithPassword(username, password);
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "No se pudo iniciar sesión."
    };
  }

  redirect("/admin");
}

export async function logoutAction() {
  await signOut();
  redirect("/admin/login");
}

export async function saveRetreatAction(formData: FormData) {
  const token = await getAccessToken();
  const id = text(formData, "id");
  const title = text(formData, "title");
  const imageFile = fileFrom(formData, "image_file");
  const uploadedImageUrl = imageFile ? await uploadPublicFile(imageFile, "retreats", token) : "";

  const payload: Record<string, unknown> = {
    title,
    slug: slugify(text(formData, "slug") || title),
    community: text(formData, "community"),
    start_date: text(formData, "start_date"),
    end_date: text(formData, "end_date"),
    location: text(formData, "location"),
    image_url: uploadedImageUrl || nullableText(formData, "image_url"),
    short_description: text(formData, "short_description"),
    full_description: text(formData, "full_description"),
    status: text(formData, "status"),
    is_visible: formData.get("is_visible") === "on",
    updated_at: new Date().toISOString()
  };

  if (id) {
    await updateRows<Retreat>("retreats", `id=eq.${id}`, payload, token);
  } else {
    await insertRow<Retreat>("retreats", payload, token);
  }

  revalidatePath("/admin/retiros");
  revalidatePath("/retiros");
}

export async function deleteRetreatAction(formData: FormData) {
  const token = await getAccessToken();
  const id = text(formData, "id");

  if (id) {
    await deleteRows<Retreat>("retreats", `id=eq.${id}`, token);
  }

  revalidatePath("/admin/retiros");
  revalidatePath("/retiros");
}

export async function saveNewsAction(formData: FormData) {
  const token = await getAccessToken();
  const id = text(formData, "id");
  const title = text(formData, "title");
  const imageFile = fileFrom(formData, "image_file");
  const uploadedImageUrl = imageFile ? await uploadPublicFile(imageFile, "news", token) : "";

  const payload: Record<string, unknown> = {
    title,
    slug: slugify(text(formData, "slug") || title),
    category: text(formData, "category"),
    featured_image_url: uploadedImageUrl || nullableText(formData, "featured_image_url"),
    excerpt: text(formData, "excerpt"),
    content: text(formData, "content"),
    published_at: text(formData, "published_at") || new Date().toISOString(),
    is_published: formData.get("is_published") === "on",
    updated_at: new Date().toISOString()
  };

  if (id) {
    await updateRows<News>("news", `id=eq.${id}`, payload, token);
  } else {
    await insertRow<News>("news", payload, token);
  }

  revalidatePath("/admin/noticias");
  revalidatePath("/noticias");
}

export async function deleteNewsAction(formData: FormData) {
  const token = await getAccessToken();
  const id = text(formData, "id");

  if (id) {
    await deleteRows<News>("news", `id=eq.${id}`, token);
  }

  revalidatePath("/admin/noticias");
  revalidatePath("/noticias");
}

export async function updateRequestStatusAction(formData: FormData) {
  const token = await getAccessToken();
  const id = text(formData, "id");
  const status = text(formData, "status");

  if (id && status) {
    await updateRows("contact_requests", `id=eq.${id}`, { status }, token);
  }

  revalidatePath("/admin/solicitudes");
}

export async function saveSettingsAction(formData: FormData) {
  const token = await getAccessToken();
  const keys = [
    "site_name",
    "parish_name",
    "address",
    "phone",
    "notification_emails",
    "social_links",
    "seo_title",
    "seo_description",
    "legal_privacy",
    "legal_notice",
    "legal_cookies"
  ];

  const rows = keys.map((key) => ({
    setting_key: key,
    setting_value: text(formData, key),
    updated_at: new Date().toISOString()
  }));

  await upsertRows<SiteSetting>("site_settings", rows, "setting_key", token);
  revalidatePath("/admin/configuracion");
}

export async function savePageAction(formData: FormData) {
  const token = await getAccessToken();
  const id = text(formData, "id");
  const title = text(formData, "title");
  const slug = slugify(text(formData, "slug") || title);
  const payload = {
    title,
    slug,
    content: text(formData, "content"),
    seo_title: nullableText(formData, "seo_title"),
    seo_description: nullableText(formData, "seo_description"),
    updated_at: new Date().toISOString()
  };

  if (id) {
    await updateRows<EditablePage>("pages", `id=eq.${id}`, payload, token);
  } else {
    await upsertRows<EditablePage>("pages", [payload], "slug", token);
  }

  revalidatePath("/admin/configuracion");
  revalidatePath(`/${slug}`);
}

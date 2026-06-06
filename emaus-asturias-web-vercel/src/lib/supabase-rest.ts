import {
  sampleContactRequests,
  sampleNews,
  samplePages,
  sampleRetreats,
  sampleSettings
} from "./sample-data";
import type { ContactRequest, EditablePage, News, Retreat, SiteSetting } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type RestInit = RequestInit & {
  headers?: Record<string, string>;
};

export function hasSupabaseConfig() {
  return Boolean(supabaseUrl && anonKey);
}

export function getSupabaseUrl() {
  return supabaseUrl;
}

export function getSupabaseAnonKey() {
  return anonKey;
}

async function rest<T>(path: string, init: RestInit = {}, accessToken?: string) {
  if (!supabaseUrl || !anonKey) {
    throw new Error("Supabase is not configured");
  }

  const headers = {
    apikey: anonKey,
    Authorization: `Bearer ${accessToken ?? anonKey}`,
    "Content-Type": "application/json",
    ...init.headers
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...init,
    headers
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || `Supabase request failed with ${response.status}`);
  }

  if (response.status === 204) {
    return [] as T;
  }

  return (await response.json()) as T;
}

function bySlug(slug: string) {
  return `slug=eq.${encodeURIComponent(slug)}`;
}

export async function getPublicRetreats() {
  if (!hasSupabaseConfig()) {
    return sampleRetreats.filter((retreat) => retreat.is_visible);
  }

  return rest<Retreat[]>(
    "retreats?select=*&is_visible=eq.true&order=start_date.asc",
    { cache: "no-store" }
  );
}

export async function getRetreatBySlug(slug: string) {
  if (!hasSupabaseConfig()) {
    return sampleRetreats.find((retreat) => retreat.slug === slug && retreat.is_visible) ?? null;
  }

  const rows = await rest<Retreat[]>(
    `retreats?select=*&${bySlug(slug)}&is_visible=eq.true&limit=1`,
    { cache: "no-store" }
  );

  return rows[0] ?? null;
}

export async function getPublishedNews() {
  if (!hasSupabaseConfig()) {
    return sampleNews.filter((item) => item.is_published);
  }

  return rest<News[]>(
    "news?select=*&is_published=eq.true&order=published_at.desc",
    { cache: "no-store" }
  );
}

export async function getNewsBySlug(slug: string) {
  if (!hasSupabaseConfig()) {
    return sampleNews.find((item) => item.slug === slug && item.is_published) ?? null;
  }

  const rows = await rest<News[]>(
    `news?select=*&${bySlug(slug)}&is_published=eq.true&limit=1`,
    { cache: "no-store" }
  );

  return rows[0] ?? null;
}

export async function getPageBySlug(slug: string) {
  if (!hasSupabaseConfig()) {
    return samplePages.find((page) => page.slug === slug) ?? null;
  }

  const rows = await rest<EditablePage[]>(
    `pages?select=*&${bySlug(slug)}&limit=1`,
    { cache: "no-store" }
  );

  return rows[0] ?? null;
}

export async function getSettings(accessToken?: string) {
  if (!hasSupabaseConfig()) {
    return Object.fromEntries(
      sampleSettings.map((setting) => [setting.setting_key, setting.setting_value])
    );
  }

  const rows = await rest<SiteSetting[]>("site_settings?select=*", { cache: "no-store" }, accessToken);
  return Object.fromEntries(rows.map((setting) => [setting.setting_key, setting.setting_value]));
}

export async function createContactRequest(
  payload: Omit<ContactRequest, "id" | "created_at" | "status">
) {
  if (!hasSupabaseConfig()) {
    return null;
  }

  const rows = await rest<ContactRequest[]>(
    "contact_requests",
    {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({ ...payload, status: "nueva" })
    }
  );

  return rows[0] ?? null;
}

export async function getAdminRetreats(accessToken?: string) {
  if (!hasSupabaseConfig()) {
    return sampleRetreats;
  }

  return rest<Retreat[]>("retreats?select=*&order=start_date.desc", { cache: "no-store" }, accessToken);
}

export async function getAdminNews(accessToken?: string) {
  if (!hasSupabaseConfig()) {
    return sampleNews;
  }

  return rest<News[]>("news?select=*&order=published_at.desc", { cache: "no-store" }, accessToken);
}

export async function getContactRequests(accessToken?: string) {
  if (!hasSupabaseConfig()) {
    return sampleContactRequests;
  }

  return rest<ContactRequest[]>(
    "contact_requests?select=*&order=created_at.desc",
    { cache: "no-store" },
    accessToken
  );
}

export async function getEditablePages(accessToken?: string) {
  if (!hasSupabaseConfig()) {
    return samplePages;
  }

  return rest<EditablePage[]>("pages?select=*&order=title.asc", { cache: "no-store" }, accessToken);
}

export async function insertRow<T>(
  table: string,
  payload: Record<string, unknown>,
  accessToken?: string
) {
  if (!hasSupabaseConfig()) {
    return null;
  }

  const rows = await rest<T[]>(
    table,
    {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(payload)
    },
    accessToken
  );

  return rows[0] ?? null;
}

export async function updateRows<T>(
  table: string,
  filter: string,
  payload: Record<string, unknown>,
  accessToken?: string
) {
  if (!hasSupabaseConfig()) {
    return [];
  }

  return rest<T[]>(
    `${table}?${filter}`,
    {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(payload)
    },
    accessToken
  );
}

export async function deleteRows<T>(table: string, filter: string, accessToken?: string) {
  if (!hasSupabaseConfig()) {
    return [];
  }

  return rest<T[]>(
    `${table}?${filter}`,
    {
      method: "DELETE",
      headers: { Prefer: "return=representation" }
    },
    accessToken
  );
}

export async function upsertRows<T>(
  table: string,
  rows: Record<string, unknown>[],
  conflictKey: string,
  accessToken?: string
) {
  if (!hasSupabaseConfig()) {
    return [];
  }

  return rest<T[]>(
    `${table}?on_conflict=${conflictKey}`,
    {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify(rows)
    },
    accessToken
  );
}

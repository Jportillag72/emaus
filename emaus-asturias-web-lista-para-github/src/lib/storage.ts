"use server";

import { getSupabaseAnonKey, getSupabaseUrl, hasSupabaseConfig } from "./supabase-rest";
import { slugify } from "./utils";

export async function uploadPublicFile(file: File, folder: string, accessToken?: string) {
  if (!hasSupabaseConfig() || file.size === 0) {
    return "";
  }

  const supabaseUrl = getSupabaseUrl();
  const anonKey = getSupabaseAnonKey();
  const bucket = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET ?? "media";

  if (!supabaseUrl || !anonKey) {
    throw new Error("Supabase Storage is not configured");
  }

  const extension = file.name.split(".").pop() ?? "bin";
  const safeName = `${Date.now()}-${slugify(file.name.replace(/\.[^.]+$/, ""))}.${extension}`;
  const objectPath = `${folder}/${safeName}`;

  const response = await fetch(`${supabaseUrl}/storage/v1/object/${bucket}/${objectPath}`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${accessToken ?? anonKey}`,
      "Content-Type": file.type || "application/octet-stream",
      "Cache-Control": "3600",
      upsert: "true"
    },
    body: Buffer.from(await file.arrayBuffer())
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || "No se pudo subir la imagen");
  }

  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${objectPath}`;
}

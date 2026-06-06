import type { MetadataRoute } from "next";
import { getPublishedNews, getPublicRetreats } from "@/lib/supabase-rest";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emausasturias.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/que-es-emaus",
    "/comunidad",
    "/emaus-hombres",
    "/emaus-mujeres",
    "/effeta",
    "/bartimeo",
    "/retiros",
    "/noticias",
    "/preguntas-frecuentes",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
    "/cookies"
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));

  const [retreats, news] = await Promise.all([getPublicRetreats(), getPublishedNews()]);

  return [
    ...staticRoutes,
    ...retreats.map((retreat) => ({
      url: `${siteUrl}/retiros/${retreat.slug}`,
      lastModified: retreat.updated_at ? new Date(retreat.updated_at) : new Date()
    })),
    ...news.map((item) => ({
      url: `${siteUrl}/noticias/${item.slug}`,
      lastModified: item.updated_at ? new Date(item.updated_at) : new Date(item.published_at)
    }))
  ];
}

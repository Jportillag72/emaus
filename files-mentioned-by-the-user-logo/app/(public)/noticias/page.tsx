import type { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { PageHero } from "@/components/page-hero";
import { getPublishedNews } from "@/lib/supabase-rest";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Noticias y novedades de EMAÚS Asturias."
};

export default async function NewsPage() {
  const news = await getPublishedNews();

  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title="Vida de comunidad y próximas novedades"
        lead="Publicaciones, convocatorias y noticias de EMAÚS Asturias, Effetá y Bartimeo."
      />
      <section className="section">
        <div className="shell">
          {news.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-3">
              {news.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="card p-8">
              <p className="lead">No hay noticias publicadas ahora mismo.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

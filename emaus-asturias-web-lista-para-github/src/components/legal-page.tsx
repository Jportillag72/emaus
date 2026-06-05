import { PageHero } from "./page-hero";
import { RichText } from "./rich-text";
import { getPageBySlug } from "@/lib/supabase-rest";

type LegalPageProps = {
  slug: string;
  title: string;
  lead: string;
};

export async function LegalPage({ slug, title, lead }: LegalPageProps) {
  const page = await getPageBySlug(slug);

  return (
    <>
      <PageHero eyebrow="Legal" title={page?.title ?? title} lead={lead} />
      <section className="section">
        <div className="shell max-w-3xl">
          <article className="card p-6 md:p-8">
            <RichText
              content={
                page?.content ??
                "Texto legal provisional. Sustituir por el contenido definitivo desde el panel privado."
              }
            />
          </article>
        </div>
      </section>
    </>
  );
}

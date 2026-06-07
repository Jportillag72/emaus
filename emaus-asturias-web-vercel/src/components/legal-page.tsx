import { PageHero } from "./page-hero";
import { RichText } from "./rich-text";
import { getPageBySlug } from "@/lib/supabase-rest";

type LegalPageProps = {
  slug: string;
  title: string;
  lead: string;
  defaultContent?: string;
};

function isPlaceholderContent(content?: string | null) {
  if (!content) {
    return true;
  }

  return content.toLowerCase().includes("texto provisional");
}

export async function LegalPage({ slug, title, lead, defaultContent }: LegalPageProps) {
  const page = await getPageBySlug(slug);
  const fallbackContent =
    defaultContent ??
    "Texto legal provisional. Sustituir por el contenido definitivo desde el panel privado.";
  const content = isPlaceholderContent(page?.content) ? fallbackContent : page?.content;

  return (
    <>
      <PageHero eyebrow="Legal" title={page?.title ?? title} lead={lead} />
      <section className="section">
        <div className="shell max-w-3xl">
          <article className="card p-6 md:p-8">
            <RichText content={content ?? fallbackContent} />
          </article>
        </div>
      </section>
    </>
  );
}

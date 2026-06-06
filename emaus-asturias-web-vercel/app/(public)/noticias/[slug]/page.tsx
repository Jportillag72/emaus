import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { RichText } from "@/components/rich-text";
import { getNewsBySlug } from "@/lib/supabase-rest";
import { formatDateTime } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function absoluteUrl(path: string | null) {
  if (!path) {
    return undefined;
  }

  if (path.startsWith("http")) {
    return path;
  }

  return new URL(path, process.env.NEXT_PUBLIC_SITE_URL ?? "https://emausasturias.vercel.app").toString();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);

  if (!item) {
    return { title: "Noticia" };
  }

  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      images: absoluteUrl(item.featured_image_url) ? [{ url: absoluteUrl(item.featured_image_url)! }] : []
    }
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.excerpt,
    image: absoluteUrl(item.featured_image_url),
    datePublished: item.published_at,
    author: {
      "@type": "Organization",
      name: "EMAÚS Asturias"
    },
    publisher: {
      "@type": "Organization",
      name: "EMAÚS Asturias"
    }
  };

  return (
    <>
      <PageHero eyebrow={item.category} title={item.title} lead={item.excerpt} />
      <section className="section">
        <div className="shell max-w-3xl">
          <p className="mb-6 text-sm font-bold text-ink/55">{formatDateTime(item.published_at)}</p>
          {item.featured_image_url ? (
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-md border border-night/10 bg-white">
              <Image
                src={item.featured_image_url}
                alt={`Imagen de ${item.title}`}
                fill
                sizes="768px"
                className="object-cover"
                priority
              />
            </div>
          ) : null}
          <article className="card p-6 md:p-8">
            <RichText content={item.content} />
          </article>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

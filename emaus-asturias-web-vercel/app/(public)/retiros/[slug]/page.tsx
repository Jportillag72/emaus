import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@/components/rich-text";
import { StatusBadge } from "@/components/status-badge";
import { communityLabels, communityPaths } from "@/lib/site";
import { getRetreatBySlug } from "@/lib/supabase-rest";
import { formatDateRange } from "@/lib/utils";
import type { RetreatStatus } from "@/lib/types";

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

function eventStatus(status: RetreatStatus) {
  if (status === "finalizado") {
    return "https://schema.org/EventCompleted";
  }

  return "https://schema.org/EventScheduled";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const retreat = await getRetreatBySlug(slug);

  if (!retreat) {
    return { title: "Retiro" };
  }

  return {
    title: retreat.title,
    description: retreat.short_description,
    openGraph: {
      title: retreat.title,
      description: retreat.short_description,
      images: absoluteUrl(retreat.image_url) ? [{ url: absoluteUrl(retreat.image_url)! }] : []
    }
  };
}

export default async function RetreatDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const retreat = await getRetreatBySlug(slug);

  if (!retreat) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: retreat.title,
    description: retreat.short_description,
    startDate: retreat.start_date,
    endDate: retreat.end_date,
    eventStatus: eventStatus(retreat.status),
    image: absoluteUrl(retreat.image_url),
    location: {
      "@type": "Place",
      name: retreat.location
    },
    organizer: {
      "@type": "Organization",
      name: "EMAÚS Asturias"
    }
  };
  const contactHref = `${communityPaths[retreat.community]}#solicitar-informacion`;

  return (
    <>
      <section className="border-b border-night/10 bg-white">
        <div className="shell grid gap-10 py-14 lg:grid-cols-[1fr_360px] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow">{communityLabels[retreat.community]}</p>
            <h1 className="page-title mt-4">{retreat.title}</h1>
            <p className="lead mt-6">{retreat.short_description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <StatusBadge type="retreat" status={retreat.status} />
              <span className="rounded-full bg-parchment px-3 py-1 text-sm font-extrabold text-night">
                {formatDateRange(retreat.start_date, retreat.end_date)}
              </span>
            </div>
            <p className="mt-4 text-sm font-bold text-ink/62">{retreat.location}</p>
          </div>
          <div className="relative grid aspect-square place-items-center rounded-md border border-night/10 bg-parchment">
            {retreat.image_url ? (
              <Image
                src={retreat.image_url}
                alt={`Imagen de ${retreat.title}`}
                fill
                sizes="360px"
                className="object-cover"
                priority
              />
            ) : (
              <span className="font-display text-4xl font-bold text-night/28">EMAÚS</span>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="card h-fit p-6">
            <p className="eyebrow">Información</p>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-extrabold text-night">Comunidad</dt>
                <dd className="mt-1 text-ink/70">{communityLabels[retreat.community]}</dd>
              </div>
              <div>
                <dt className="font-extrabold text-night">Fechas</dt>
                <dd className="mt-1 text-ink/70">
                  {formatDateRange(retreat.start_date, retreat.end_date)}
                </dd>
              </div>
              <div>
                <dt className="font-extrabold text-night">Lugar</dt>
                <dd className="mt-1 text-ink/70">{retreat.location}</dd>
              </div>
            </dl>
            <Link href={contactHref} className="btn btn-primary mt-6 w-full">
              Más información
            </Link>
          </aside>
          <article className="card p-6 md:p-8">
            <RichText content={retreat.full_description} />
          </article>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

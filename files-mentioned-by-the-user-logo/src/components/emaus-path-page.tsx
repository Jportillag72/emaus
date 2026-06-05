import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { ContentSection } from "./content-section";
import { FaqList } from "./faq-list";
import { RetreatCard } from "./retreat-card";
import type { EmausPathContent } from "@/lib/emaus-content";
import { communityLabels } from "@/lib/site";
import type { Retreat } from "@/lib/types";

type EmausPathPageProps = {
  content: EmausPathContent;
  retreats: Retreat[];
};

export function EmausPathPage({ content, retreats }: EmausPathPageProps) {
  const communityRetreats = retreats
    .filter((retreat) => retreat.community === content.community && retreat.status !== "finalizado")
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-night/10 bg-white">
        <div className="shell grid gap-10 py-14 md:grid-cols-[1fr_320px] md:items-center md:py-20">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="page-title mt-4">{content.title}</h1>
            <p className="lead mt-6">{content.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={content.contactHref} className="btn btn-primary">
                Solicitar información
              </Link>
              <Link href="/retiros" className="btn btn-secondary">
                Ver próximos retiros
              </Link>
            </div>
          </div>
          <div className="grid min-h-64 place-items-center rounded-md border border-night/10 bg-parchment p-8">
            <Image
              src={content.logo}
              alt={content.logoAlt}
              width={260}
              height={220}
              className="max-h-56 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {content.sections.map((section, index) => (
        <ContentSection key={section.title} block={section} index={index} />
      ))}

      <section className="section border-t border-night/10 bg-white">
        <div className="shell">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Próximas fechas</p>
              <h2 className="page-title mt-3">{content.retreatsTitle}</h2>
              <p className="mt-5 leading-8 text-ink/72">
                {communityRetreats.length > 0 ? content.retreatsIntro : content.noRetreatsText}
              </p>
            </div>
            <Link href={content.contactHref} className="btn btn-primary w-fit">
              {content.retreatsButton}
            </Link>
          </div>
          {communityRetreats.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-3">
              {communityRetreats.map((retreat) => (
                <RetreatCard key={retreat.id} retreat={retreat} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="shell max-w-3xl">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="page-title mt-3 mb-8">{content.eyebrow}</h2>
          <FaqList faqs={content.faqs} />
        </div>
      </section>

      <section id="solicitar-informacion" className="section border-t border-night/10 bg-night text-white">
        <div className="shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow text-gold">Solicitar información</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              {content.ctaTitle}
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/76">{content.ctaText}</p>
          </div>
          <ContactForm defaultCommunity={communityLabels[content.community]} />
        </div>
      </section>
    </>
  );
}

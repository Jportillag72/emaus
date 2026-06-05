import Image from "next/image";
import Link from "next/link";
import { communityLabels, communityPaths } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { ContentSection } from "./content-section";
import { FaqList } from "./faq-list";
import { RetreatCard } from "./retreat-card";
import type { FaqItem, TextBlock } from "@/lib/emaus-content";
import type { Community, Retreat } from "@/lib/types";

type CommunityDetailPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  logo: string;
  logoAlt: string;
  paragraphs: string[];
  sections?: TextBlock[];
  faqs?: FaqItem[];
  retreatsTitle?: string;
  retreatsIntro?: string;
  noRetreatsText?: string;
  community: Community;
  retreats: Retreat[];
};

export function CommunityDetailPage({
  eyebrow,
  title,
  lead,
  logo,
  logoAlt,
  paragraphs,
  sections = [],
  faqs = [],
  retreatsTitle = "Próximas fechas",
  retreatsIntro,
  noRetreatsText,
  community,
  retreats
}: CommunityDetailPageProps) {
  const communityRetreats = retreats
    .filter((retreat) => retreat.community === community && retreat.status !== "finalizado")
    .slice(0, 3);
  const contactHref = `${communityPaths[community]}#solicitar-informacion`;

  return (
    <>
      <section className="border-b border-night/10 bg-white">
        <div className="shell grid gap-10 py-14 md:grid-cols-[1fr_320px] md:items-center md:py-20">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="page-title mt-4">{title}</h1>
            <p className="lead mt-6">{lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/retiros" className="btn btn-primary">
                Ver retiros
              </Link>
              <Link href={contactHref} className="btn btn-secondary">
                Solicitar información
              </Link>
            </div>
          </div>
          <div className="grid min-h-64 place-items-center rounded-md border border-night/10 bg-parchment p-8">
            <Image src={logo} alt={logoAlt} width={260} height={220} className="max-h-56 w-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="page-title">Un camino cuidado</h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-ink/76">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <ContentSection key={section.title} block={section} index={index + 1} />
      ))}

      <section className="section border-t border-night/10 bg-white">
        <div className="shell">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Agenda</p>
              <h2 className="page-title mt-3">{retreatsTitle}</h2>
              {retreatsIntro ? <p className="mt-5 leading-8 text-ink/72">{retreatsIntro}</p> : null}
            </div>
            <Link href="/retiros" className="btn btn-secondary w-fit">
              Ver todos
            </Link>
          </div>
          {communityRetreats.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-3">
              {communityRetreats.map((retreat) => (
                <RetreatCard key={retreat.id} retreat={retreat} />
              ))}
            </div>
          ) : (
            <div className="card p-7">
              <p className="leading-8 text-ink/72">
                {noRetreatsText ??
                  "No hay fechas publicadas para este camino ahora mismo. Puedes solicitar información y te avisaremos cuando se abra una nueva convocatoria."}
              </p>
            </div>
          )}
        </div>
      </section>

      {faqs.length > 0 ? (
        <section className="section">
          <div className="shell max-w-3xl">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="page-title mt-3 mb-8">{communityLabels[community]}</h2>
            <FaqList faqs={faqs} />
          </div>
        </section>
      ) : null}

      <section id="solicitar-informacion" className="section border-t border-night/10 bg-night text-white">
        <div className="shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow text-gold">Solicitar información</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              ¿Quieres saber más sobre {communityLabels[community]}?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/76">
              Puedes escribirnos desde este formulario y el equipo correspondiente se pondrá en
              contacto contigo cuando sea posible.
            </p>
          </div>
          <ContactForm defaultCommunity={communityLabels[community]} />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentSection } from "@/components/content-section";
import { FaqList } from "@/components/faq-list";
import { queEsEmausFaqs, queEsEmausSections } from "@/lib/emaus-content";

export const metadata: Metadata = {
  title: "Qué es EMAÚS | EMAÚS Asturias",
  description:
    "Conoce qué es EMAÚS, una experiencia cristiana de encuentro, oración y comunidad inspirada en el camino de los discípulos de Emaús."
};

export default function QueEsEmausPage() {
  return (
    <>
      <section className="border-b border-night/10 bg-white">
        <div className="shell grid gap-10 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow">Qué es EMAÚS</p>
            <h1 className="page-title mt-4">Qué es EMAÚS</h1>
            <p className="lead mt-6">
              Una experiencia de encuentro con Dios, con uno mismo y con los demás.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="btn btn-primary">
                Solicitar información
              </Link>
              <Link href="/retiros" className="btn btn-secondary">
                Ver próximos retiros
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-night/10 bg-parchment">
            <Image
              src="/images/religious/emaus-chapel-path.webp"
              alt="Camino de piedra hacia una pequeña capilla al amanecer"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {queEsEmausSections.map((section, index) => (
        <ContentSection key={section.title} block={section} index={index} />
      ))}

      <section className="section border-y border-night/10 bg-white">
        <div className="shell">
          <div className="mb-9 max-w-3xl">
            <p className="eyebrow">Caminos de EMAÚS</p>
            <h2 className="page-title mt-3">Dos caminos, una misma experiencia de encuentro</h2>
            <p className="mt-5 leading-8 text-ink/72">
              En EMAÚS Asturias existen dos comunidades diferenciadas para adultos. Ambas comparten
              el mismo espíritu de acogida, discreción, oración y comunidad.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "EMAÚS Hombres",
                href: "/emaus-hombres",
                logo: "/images/logos/logo-emaus-hombres.png",
                text:
                  "Una experiencia dirigida a hombres adultos que desean detenerse, mirar su vida con profundidad y abrirse al encuentro con Dios.",
                button: "Conocer EMAÚS Hombres"
              },
              {
                title: "EMAÚS Mujeres",
                href: "/emaus-mujeres",
                logo: "/images/logos/logo-emaus-mujeres.jpeg",
                text:
                  "Una experiencia dirigida a mujeres adultas que desean abrir un espacio de escucha, confianza, oración y reencuentro con Dios.",
                button: "Conocer EMAÚS Mujeres"
              }
            ].map((card) => (
              <article key={card.title} className="card grid gap-5 p-6">
                <div className="grid h-36 place-items-center rounded-md bg-parchment p-4">
                  <Image
                    src={card.logo}
                    alt={`Logo de ${card.title}`}
                    width={220}
                    height={140}
                    className="max-h-28 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-night">{card.title}</h3>
                  <p className="mt-4 leading-8 text-ink/72">{card.text}</p>
                </div>
                <Link href={card.href} className="btn btn-secondary w-fit">
                  {card.button}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell max-w-3xl">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="page-title mt-3 mb-8">Preguntas frecuentes de EMAÚS</h2>
          <FaqList faqs={queEsEmausFaqs} />
        </div>
      </section>

      <section className="section border-t border-night/10 bg-night text-white">
        <div className="shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow text-gold">Solicitar información</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              ¿Quieres recibir información sobre EMAÚS Asturias?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/76">
              Si quieres saber más sobre EMAÚS Hombres, EMAÚS Mujeres o próximos retiros, puedes
              escribirnos a través del formulario.
            </p>
          </div>
          <Link href="/contacto" className="btn bg-white text-night">
            Solicitar información
          </Link>
        </div>
      </section>
    </>
  );
}

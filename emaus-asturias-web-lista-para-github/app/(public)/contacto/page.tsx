import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita información sobre EMAÚS Asturias, Effetá o Bartimeo."
};

type ContactPageProps = {
  searchParams: Promise<{ interes?: string }>;
};

const interestLabels: Record<string, string> = {
  emaus_hombres: "EMAÚS Hombres",
  emaus_mujeres: "EMAÚS Mujeres",
  effeta: "Effetá",
  bartimeo: "Bartimeo",
  general: "Información general"
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { interes } = await searchParams;
  const defaultCommunity = interes ? interestLabels[interes] ?? "" : "";

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Solicita información"
        lead="Rellena el formulario indicando el camino que te interesa y la comunidad recibirá tu solicitud para poder responderte con calma. Este envío no supone una inscripción automática."
      />
      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card h-fit overflow-hidden">
            <div className="relative aspect-[16/10] bg-parchment">
              <Image
                src="/images/religious/stained-glass-light.webp"
                alt="Luz de vidriera y velas en una capilla"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <p className="eyebrow">EMAÚS Asturias</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-night">
                Parroquia de San Martín de El Berrón
              </h2>
              <p className="mt-4 leading-8 text-ink/72">
                Los datos reales de contacto, emails de aviso y redes sociales se configuran desde el
                panel privado.
              </p>
            </div>
          </div>
          <ContactForm defaultCommunity={defaultCommunity} />
        </div>
      </section>
    </>
  );
}

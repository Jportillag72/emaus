import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { parishName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Comunidad",
  description: "Comunidad de EMAÚS Asturias vinculada a la Parroquia de San Martín de El Berrón."
};

export default function ComunidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Comunidad"
        title={`Una comunidad vinculada a la ${parishName}`}
        lead="La vida que nace en un retiro necesita casa, continuidad y rostros concretos. EMAÚS Asturias cuida ese acompañamiento desde la parroquia, con espacios donde la fe pueda compartirse, madurar y ponerse al servicio."
      />
      <section className="border-b border-night/10 bg-white">
        <div className="shell py-8">
          <div className="relative aspect-[16/7] overflow-hidden rounded-md border border-night/10 bg-parchment">
            <Image
              src="/images/religious/parish-community-table.webp"
              alt="Mesa preparada para un encuentro comunitario de oración"
              fill
              sizes="1120px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell grid gap-8 md:grid-cols-3">
          {[
            ["Acogida", "Espacios sencillos para recibir a quien se acerca con preguntas, inquietud o deseo de volver a empezar, cuidando siempre la libertad y la historia de cada persona."],
            ["Continuidad", "Encuentros, celebraciones y acompañamiento para que la experiencia no se apague al terminar el retiro y pueda integrarse en la vida cotidiana."],
            ["Servicio", "Una comunidad que quiere poner lo recibido al servicio de otros, con discreción, alegría y una actitud humilde de disponibilidad."]
          ].map(([title, body]) => (
            <article key={title} className="card p-6">
              <h2 className="font-display text-3xl font-bold text-night">{title}</h2>
              <p className="mt-4 leading-8 text-ink/72">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section border-t border-night/10 bg-white">
        <div className="shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">Siguiente paso</p>
            <h2 className="page-title mt-3">Pide información sin compromiso</h2>
          </div>
          <Link href="/contacto" className="btn btn-primary">
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
}

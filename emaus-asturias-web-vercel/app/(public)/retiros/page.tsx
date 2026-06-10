import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { RetreatCard } from "@/components/retreat-card";
import { getPublicRetreats } from "@/lib/supabase-rest";

export const metadata: Metadata = {
  title: "Retiros",
  description: "Próximos retiros de EMAÚS Hombres, EMAÚS Mujeres, Effetá y Bartimeo en Asturias."
};

export default async function RetreatsPage() {
  const retreats = await getPublicRetreats();
  const visibleRetreats = retreats.filter((retreat) => retreat.is_visible);

  return (
    <>
      <PageHero
        eyebrow="Retiros"
        title="Próximas experiencias de encuentro"
        lead="Consulta las fechas publicadas para EMAÚS Hombres, EMAÚS Mujeres, Effetá y Bartimeo. Cada retiro indica su comunidad, fechas, lugar y estado de solicitud de información. El formulario no implica inscripción automática: el equipo responsable se pondrá en contacto posteriormente."
        wideLead
      />
      <section className="border-b border-night/10 bg-white">
        <div className="shell py-8">
          <div className="relative aspect-[16/6] overflow-hidden rounded-md border border-night/10 bg-parchment">
            <Image
              src="/images/religious/retreat-path-chapel.webp"
              alt="Camino hacia una capilla al amanecer"
              fill
              sizes="1120px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          {visibleRetreats.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-3">
              {visibleRetreats.map((retreat) => (
                <RetreatCard key={retreat.id} retreat={retreat} />
              ))}
            </div>
          ) : (
            <div className="card p-8">
              <p className="lead">No hay retiros publicados ahora mismo.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

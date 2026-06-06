import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { generalEmausFaqs } from "@/lib/emaus-content";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Preguntas frecuentes sobre EMAÚS Asturias, retiros y solicitudes de información."
};

const faqs = [
  {
    question: "¿Cómo puedo pedir información sobre un retiro?",
    answer:
      "Puedes hacerlo desde el formulario de contacto indicando la comunidad que te interesa. La solicitud queda guardada en el CMS privado."
  },
  {
    question: "¿Dónde se publican las fechas?",
    answer:
      "Las fechas aparecen en la página de retiros cuando el equipo las publica desde el panel de administración."
  },
  {
    question: "¿Qué diferencia hay entre EMAÚS, Effetá y Bartimeo?",
    answer:
      "Comparten el deseo de encuentro y comunidad, pero cada camino tiene destinatarios, lenguaje y dinámica propios."
  },
  {
    question: "¿La solicitud de información implica inscripción automática?",
    answer:
      "No. La web recoge solicitudes de información. El equipo responsable se pondrá en contacto posteriormente."
  }
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Preguntas frecuentes"
        title="Respuestas para orientarte"
        lead="Una guía breve para quienes quieren acercarse a EMAÚS Asturias o pedir información sobre los próximos retiros."
      />
      <section className="section">
        <div className="shell max-w-3xl">
          <p className="eyebrow">Bloque EMAÚS</p>
          <h2 className="page-title mt-3 mb-8">Preguntas frecuentes sobre EMAÚS</h2>
          <FaqList faqs={generalEmausFaqs} />
          <div className="mt-12">
            <p className="eyebrow">Información práctica</p>
            <h2 className="page-title mt-3 mb-8">Solicitudes y convocatorias</h2>
            <FaqList faqs={faqs} />
          </div>
          <Link href="/contacto" className="btn btn-primary mt-8">
            Solicitar información
          </Link>
        </div>
      </section>
    </>
  );
}

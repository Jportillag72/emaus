import type { Metadata } from "next";
import { CommunityDetailPage } from "@/components/community-detail-page";
import { getPublicRetreats } from "@/lib/supabase-rest";

export const metadata: Metadata = {
  title: "Effetá",
  description:
    "Effetá Asturias es una experiencia cristiana para jóvenes de 18 a 30 años que desean abrir el corazón, escuchar y vivir la fe en comunidad."
};

export default async function EffetaPage() {
  const retreats = await getPublicRetreats();

  return (
    <CommunityDetailPage
      eyebrow="Effetá"
      title="Abrir el corazón para escuchar de nuevo"
      lead="Una experiencia cristiana para jóvenes de 18 a 30 años que desean escuchar, abrir el corazón y vivir la fe en comunidad."
      logo="/images/logos/logo-effeta.png"
      logoAlt="Logo de Effetá"
      community="effeta"
      retreats={retreats}
      paragraphs={[
        "Effetá significa abrirse: abrir el oído, abrir el corazón y dejar que la fe dialogue con la vida real.",
        "En Asturias está dirigido a jóvenes adultos de 18 a 30 años, en una etapa vital marcada por decisiones, búsquedas, preguntas y deseo de vivir con más sentido.",
        "El camino se vive con otros jóvenes, en un ambiente de respeto, confianza y búsqueda sincera. Cada convocatoria cuida la acogida, el acompañamiento y la discreción necesaria para que la experiencia pueda vivirse con libertad."
      ]}
      sections={[
        {
          title: "Qué es un retiro de Effetá",
          paragraphs: [
            "Un retiro de Effetá es una experiencia cristiana de encuentro, escucha, oración y comunidad pensada para jóvenes de 18 a 30 años.",
            "Es una invitación a detenerse, mirar la propia vida con sinceridad y abrir un espacio interior para preguntarse por Dios, por la fe y por el sentido de lo que se está viviendo.",
            "No es solo una convivencia ni una actividad formativa. Es un tiempo cuidado para escuchar, compartir, rezar y dejarse acompañar en un clima de respeto, confianza y alegría serena.",
            "Los detalles concretos del retiro se preservan con discreción para cuidar la vivencia de quienes participan por primera vez."
          ]
        },
        {
          title: "Para quién está pensado",
          paragraphs: [
            "Effetá está dirigido a jóvenes adultos de 18 a 30 años.",
            "Puede ser para jóvenes con una vida de fe activa, para quienes tienen preguntas, para quienes se han alejado o para quienes desean descubrir la fe de una manera más cercana y compartida.",
            "No hace falta llegar con respuestas cerradas. Lo importante es acudir con respeto, libertad y disposición para vivir la experiencia.",
            "El equipo responsable acompaña cada solicitud de información para orientar bien a las personas interesadas y confirmar que la convocatoria corresponde a su edad y situación."
          ]
        },
        {
          title: "Qué se vive durante el retiro",
          paragraphs: [
            "Durante el retiro se viven momentos de oración, escucha, reflexión, convivencia, silencio y comunidad.",
            "La experiencia está preparada por personas que ya han vivido este camino y desean servir desde la acogida, la humildad y la fe.",
            "El ambiente busca favorecer una escucha sincera, sin presión y sin juicio, donde cada joven pueda vivir el proceso desde su propia historia.",
            "La discreción sobre el contenido ayuda a que quienes participan por primera vez puedan descubrir la experiencia personalmente."
          ]
        },
        {
          title: "Después del retiro",
          paragraphs: [
            "Effetá no termina al finalizar el retiro.",
            "Después puede abrirse un camino de continuidad, comunidad, oración, formación y servicio, siempre desde la libertad de cada persona.",
            "La comunidad ayuda a cuidar lo vivido y a integrarlo en la vida cotidiana, para que la fe pueda crecer acompañada y sostenida por otros."
          ]
        }
      ]}
      retreatsTitle="Próximos retiros de Effetá"
      retreatsIntro="Estas son las fechas publicadas para Effetá Asturias, dirigido a jóvenes de 18 a 30 años. Puedes solicitar información sobre la convocatoria que te interese y el equipo correspondiente se pondrá en contacto contigo."
      noRetreatsText="Actualmente no hay retiros publicados para Effetá. Próximamente compartiremos nuevas convocatorias."
      faqs={[
        {
          question: "¿Qué es Effetá?",
          answer:
            "Effetá es una experiencia cristiana para jóvenes de 18 a 30 años que invita a abrir el corazón, escuchar y vivir la fe en comunidad."
        },
        {
          question: "¿Quién puede participar?",
          answer:
            "En Asturias, Effetá está dirigido a jóvenes de 18 a 30 años. Si tienes dudas sobre una convocatoria concreta, puedes solicitar información y el equipo responsable te orientará."
        },
        {
          question: "¿Hace falta tener una vida de fe activa?",
          answer:
            "No es necesario tenerlo todo claro. Effetá acoge a jóvenes con recorridos distintos, siempre desde el respeto y la libertad."
        },
        {
          question: "¿Qué se hace durante el retiro?",
          answer:
            "Los detalles concretos se cuidan con discreción. Sí podemos decir que hay oración, escucha, reflexión, convivencia y comunidad."
        },
        {
          question: "¿La solicitud de información implica inscripción automática?",
          answer:
            "No. El formulario sirve para solicitar información. El equipo responsable se pondrá en contacto posteriormente."
        }
      ]}
    />
  );
}

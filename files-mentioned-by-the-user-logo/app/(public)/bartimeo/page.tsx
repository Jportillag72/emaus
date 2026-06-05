import type { Metadata } from "next";
import { CommunityDetailPage } from "@/components/community-detail-page";
import { getPublicRetreats } from "@/lib/supabase-rest";

export const metadata: Metadata = {
  title: "Bartimeo",
  description:
    "Bartimeo Asturias es una experiencia cristiana para jóvenes de 15 a 18 años que desean recuperar la mirada, dejarse acompañar y caminar en comunidad."
};

export default async function BartimeoPage() {
  const retreats = await getPublicRetreats();

  return (
    <CommunityDetailPage
      eyebrow="Bartimeo"
      title="Recuperar la mirada y ponerse en camino"
      lead="Una experiencia cristiana para jóvenes de 15 a 18 años que desean dejarse mirar por Dios, recuperar la esperanza y caminar acompañados."
      logo="/images/logos/logo-bartimeo.webp"
      logoAlt="Logo de Bartimeo"
      community="bartimeo"
      retreats={retreats}
      paragraphs={[
        "Bartimeo toma su nombre del hombre que, al encontrarse con Jesús, recupera la vista y se pone en camino.",
        "En Asturias está dirigido a jóvenes de 15 a 18 años, en una etapa en la que empiezan a tomar más conciencia de sí mismos, de sus preguntas y de su manera de vivir la fe.",
        "Es una propuesta para mirar la vida con esperanza, reconocer la propia historia y abrirse a una fe que acompaña. Cada convocatoria cuida la acogida, el acompañamiento y el respeto necesario para vivir la experiencia con libertad."
      ]}
      sections={[
        {
          title: "Qué es un retiro de Bartimeo",
          paragraphs: [
            "Un retiro de Bartimeo es una experiencia cristiana de encuentro, escucha, oración y comunidad dirigida a jóvenes de 15 a 18 años.",
            "Parte de una imagen evangélica muy sencilla y profunda: Bartimeo, que no se resigna a vivir al margen, llama a Jesús, se deja encontrar y recupera una mirada nueva para ponerse en camino.",
            "El retiro ofrece un tiempo para detenerse, mirar la propia vida con más profundidad y descubrir que Dios también se acerca a nuestras preguntas, cansancios y deseos de esperanza.",
            "No es una terapia ni una actividad turística. Es una experiencia de fe vivida en un clima cuidado, respetuoso y confidencial."
          ]
        },
        {
          title: "Para quién está pensado",
          paragraphs: [
            "Bartimeo está dirigido a jóvenes de 15 a 18 años.",
            "Puede ser para adolescentes que desean recuperar una mirada más esperanzada, para quienes sienten necesidad de acompañamiento o para quienes quieren acercarse a la fe desde una experiencia cercana.",
            "No hace falta llegar con todo resuelto. La experiencia está pensada para acoger a cada persona desde el punto en el que se encuentra.",
            "Al tratarse de menores de edad en muchos casos, la solicitud de información se acompaña con especial cuidado y el equipo responsable orientará sobre autorizaciones, condiciones de participación y pasos concretos de cada convocatoria."
          ]
        },
        {
          title: "Qué se vive durante el retiro",
          paragraphs: [
            "Durante el retiro se viven espacios de oración, escucha, reflexión, silencio, convivencia y comunidad.",
            "Los detalles concretos se preservan con discreción para cuidar la vivencia de quienes participan por primera vez.",
            "Cada momento está preparado por personas que desean servir desde la acogida, el respeto y la fe.",
            "Bartimeo busca ofrecer un clima donde sea posible dejarse mirar, reconocer la propia historia y abrirse a una esperanza nueva."
          ]
        },
        {
          title: "Después del retiro",
          paragraphs: [
            "La experiencia de Bartimeo puede continuar después del retiro.",
            "Quien lo desea puede seguir caminando en comunidad, compartiendo espacios de oración, acompañamiento y servicio.",
            "La continuidad ayuda a cuidar lo vivido y a traducirlo poco a poco en la vida cotidiana."
          ]
        }
      ]}
      retreatsTitle="Próximos retiros de Bartimeo"
      retreatsIntro="Estas son las fechas publicadas para Bartimeo Asturias, dirigido a jóvenes de 15 a 18 años. Puedes solicitar información sobre la convocatoria que te interese y el equipo correspondiente se pondrá en contacto contigo."
      noRetreatsText="Actualmente no hay retiros publicados para Bartimeo. Próximamente compartiremos nuevas convocatorias."
      faqs={[
        {
          question: "¿Qué es Bartimeo?",
          answer:
            "Bartimeo es una experiencia cristiana para jóvenes de 15 a 18 años, inspirada en el encuentro de Jesús con Bartimeo, una imagen de escucha, mirada nueva, esperanza y camino."
        },
        {
          question: "¿Quién puede participar?",
          answer:
            "En Asturias, Bartimeo está dirigido a jóvenes de 15 a 18 años. Si tienes dudas sobre una convocatoria concreta, puedes solicitar información y el equipo responsable te orientará."
        },
        {
          question: "¿Tengo que conocer a alguien para participar?",
          answer:
            "No. La experiencia está preparada para acoger también a quienes llegan sin conocer a otras personas."
        },
        {
          question: "¿Qué se hace durante el retiro?",
          answer:
            "El contenido concreto se cuida con discreción. Sí podemos decir que hay oración, escucha, reflexión, convivencia y comunidad."
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

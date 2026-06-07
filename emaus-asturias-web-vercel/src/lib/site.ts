import type { Community, RequestStatus, RetreatStatus } from "./types";

export const siteName = "EMAÚS Asturias";
export const parishName = "Parroquia de San Martín de El Berrón";

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/que-es-emaus", label: "Qué es EMAÚS" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/emaus-hombres", label: "EMAÚS Hombres" },
  { href: "/emaus-mujeres", label: "EMAÚS Mujeres" },
  { href: "/effeta", label: "Effetá" },
  { href: "/bartimeo", label: "Bartimeo" },
  { href: "/retiros", label: "Retiros" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" }
];

export const communityLabels: Record<Community, string> = {
  emaus_hombres: "EMAÚS Hombres",
  emaus_mujeres: "EMAÚS Mujeres",
  effeta: "Effetá",
  bartimeo: "Bartimeo"
};

export const communityPaths: Record<Community, string> = {
  emaus_hombres: "/emaus-hombres",
  emaus_mujeres: "/emaus-mujeres",
  effeta: "/effeta",
  bartimeo: "/bartimeo"
};

export const communityOptions = [
  {
    value: "emaus_hombres",
    label: "EMAÚS Hombres",
    help: "Selecciona esta opción si quieres recibir información sobre EMAÚS Hombres, próximas convocatorias o condiciones de participación."
  },
  {
    value: "emaus_mujeres",
    label: "EMAÚS Mujeres",
    help: "Selecciona esta opción si quieres recibir información sobre EMAÚS Mujeres, próximas convocatorias o condiciones de participación."
  },
  { value: "effeta", label: "Effetá" },
  { value: "bartimeo", label: "Bartimeo" },
  { value: "general", label: "Información general" }
];

export const retreatStatusLabels: Record<RetreatStatus, string> = {
  proximamente: "Próximamente",
  inscripciones_abiertas: "Solicitud de información abierta",
  completo: "Completo",
  finalizado: "Finalizado"
};

export const requestStatusLabels: Record<RequestStatus, string> = {
  nueva: "Nueva",
  en_revision: "En revisión",
  contestada: "Contestada",
  archivada: "Archivada"
};

export const communityCards = [
  {
    key: "emaus_hombres" as const,
    title: "EMAÚS Hombres",
    href: "/emaus-hombres",
    logo: "/images/logos/logo-emaus-hombres.png",
    description:
      "Un retiro para hombres adultos que desean detenerse, abrir el corazón y vivir una experiencia profunda de fe y comunidad.",
    buttonLabel: "Conocer EMAÚS Hombres"
  },
  {
    key: "emaus_mujeres" as const,
    title: "EMAÚS Mujeres",
    href: "/emaus-mujeres",
    logo: "/images/logos/logo-emaus-mujeres.jpeg",
    description:
      "Un retiro para mujeres adultas que desean abrir un espacio de escucha, confianza, oración y reencuentro con Dios.",
    buttonLabel: "Conocer EMAÚS Mujeres"
  },
  {
    key: "effeta" as const,
    title: "Effetá",
    href: "/effeta",
    logo: "/images/logos/logo-effeta.png",
    description:
      "Una experiencia cristiana para jóvenes de 18 a 30 años que desean abrir el corazón, escuchar y vivir la fe en comunidad.",
    buttonLabel: "Conocer Effetá"
  },
  {
    key: "bartimeo" as const,
    title: "Bartimeo",
    href: "/bartimeo",
    logo: "/images/logos/logo-bartimeo.webp",
    description:
      "Un camino cristiano para jóvenes de 15 a 18 años que invita a mirar la vida con esperanza, dejarse acompañar y descubrir una fe cercana.",
    buttonLabel: "Conocer Bartimeo"
  }
];

export const adminNavItems = [
  { href: "/admin", label: "Panel" },
  { href: "/admin/retiros", label: "Retiros" },
  { href: "/admin/noticias", label: "Noticias" },
  { href: "/admin/solicitudes", label: "Solicitudes" },
  { href: "/admin/configuracion", label: "Configuración" }
];

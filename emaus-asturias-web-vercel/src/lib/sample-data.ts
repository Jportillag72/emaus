import type { ContactRequest, EditablePage, News, Retreat, SiteSetting } from "./types";

export const sampleRetreats: Retreat[] = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    title: "Retiro EMAÚS Hombres Asturias",
    slug: "retiro-emaus-hombres-asturias",
    community: "emaus_hombres",
    start_date: "2026-10-02",
    end_date: "2026-10-04",
    location: "Asturias",
    image_url: "/images/religious/retreat-emaus-hombres.webp",
    short_description:
      "Una experiencia cristiana para hombres adultos que desean vivir un tiempo de encuentro, oración, escucha y comunidad.",
    full_description:
      "Este retiro de EMAÚS Hombres forma parte del camino de EMAÚS Asturias.\n\nEs una experiencia cristiana de encuentro, oración, convivencia y comunidad dirigida a hombres adultos que desean detenerse, abrir el corazón y mirar su vida desde la fe.\n\nEl contenido concreto del retiro se cuida con discreción para preservar la vivencia de quienes participan por primera vez. Todo está preparado por personas que ya han vivido EMAÚS y desean servir a otros desde la acogida y la fe.\n\nEl formulario permite solicitar información. La inscripción no es automática; el equipo correspondiente se pondrá en contacto con cada persona interesada.",
    status: "inscripciones_abiertas",
    is_visible: true,
    created_at: "2026-06-01T10:00:00Z",
    updated_at: "2026-06-01T10:00:00Z"
  },
  {
    id: "22222222-2222-4222-8222-222222222222",
    title: "Retiro EMAÚS Mujeres Asturias",
    slug: "retiro-emaus-mujeres-asturias",
    community: "emaus_mujeres",
    start_date: "2026-11-13",
    end_date: "2026-11-15",
    location: "Asturias",
    image_url: "/images/religious/retreat-emaus-mujeres.webp",
    short_description:
      "Una experiencia cristiana para mujeres adultas que desean vivir un tiempo de encuentro, oración, escucha y comunidad.",
    full_description:
      "Este retiro de EMAÚS Mujeres forma parte del camino de EMAÚS Asturias.\n\nEs una experiencia cristiana de encuentro, oración, convivencia y comunidad dirigida a mujeres adultas que desean detenerse, abrir el corazón y mirar su vida desde la fe.\n\nEl contenido concreto del retiro se cuida con discreción para preservar la vivencia de quienes participan por primera vez. Todo está preparado por personas que ya han vivido EMAÚS y desean servir a otras desde la acogida y la fe.\n\nEl formulario permite solicitar información. La inscripción no es automática; el equipo correspondiente se pondrá en contacto con cada persona interesada.",
    status: "proximamente",
    is_visible: true,
    created_at: "2026-06-01T10:00:00Z",
    updated_at: "2026-06-01T10:00:00Z"
  },
  {
    id: "33333333-3333-4333-8333-333333333333",
    title: "Encuentro Effetá Asturias",
    slug: "encuentro-effeta-asturias",
    community: "effeta",
    start_date: "2027-02-06",
    end_date: "2027-02-08",
    location: "Asturias",
    image_url: "/images/religious/retreat-effeta.webp",
    short_description:
      "Una experiencia cristiana para jóvenes de 18 a 30 años que desean abrir el corazón, escuchar y vivir la fe en comunidad.",
    full_description:
      "Este retiro de Effetá forma parte del camino de EMAÚS Asturias.\n\nEs una experiencia cristiana dirigida a jóvenes de 18 a 30 años que desean abrir el corazón, escuchar con sinceridad y vivir la fe en comunidad.\n\nDurante el retiro se cuidan espacios de oración, reflexión, convivencia, silencio, escucha y comunidad. El contenido concreto se preserva con discreción para cuidar la vivencia de quienes participan por primera vez.\n\nEl formulario permite solicitar información. La inscripción no es automática; el equipo correspondiente se pondrá en contacto con cada persona interesada.",
    status: "proximamente",
    is_visible: true,
    created_at: "2026-06-01T10:00:00Z",
    updated_at: "2026-06-01T10:00:00Z"
  },
  {
    id: "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb",
    title: "Retiro Bartimeo Asturias",
    slug: "retiro-bartimeo-asturias",
    community: "bartimeo",
    start_date: "2027-03-20",
    end_date: "2027-03-22",
    location: "Asturias",
    image_url: "/images/religious/retreat-bartimeo.webp",
    short_description:
      "Una experiencia cristiana para jóvenes de 15 a 18 años que desean recuperar la mirada, abrirse a la esperanza y caminar acompañados.",
    full_description:
      "Este retiro de Bartimeo forma parte del camino de EMAÚS Asturias.\n\nEs una experiencia cristiana dirigida a jóvenes de 15 a 18 años e inspirada en el encuentro de Jesús con Bartimeo, pensada para quienes desean dejarse mirar, recuperar esperanza y caminar acompañados.\n\nDurante el retiro se cuidan espacios de oración, reflexión, convivencia, silencio, escucha y comunidad. El contenido concreto se preserva con discreción para cuidar la vivencia de quienes participan por primera vez.\n\nEl formulario permite solicitar información. La inscripción no es automática; el equipo correspondiente se pondrá en contacto con cada persona interesada.",
    status: "proximamente",
    is_visible: true,
    created_at: "2026-06-01T10:00:00Z",
    updated_at: "2026-06-01T10:00:00Z"
  }
];

export const sampleNews: News[] = [
  {
    id: "44444444-4444-4444-8444-444444444444",
    title: "Nueva convocatoria de EMAÚS Hombres",
    slug: "nueva-convocatoria-de-emaus-hombres",
    category: "EMAÚS Hombres",
    featured_image_url: "/images/religious/news-emaus-hombres.webp",
    excerpt:
      "Ya está disponible la información sobre una nueva convocatoria de EMAÚS Asturias Hombres.",
    content:
      "Ya está disponible la información sobre una nueva convocatoria de EMAÚS Asturias Hombres.\n\nEsta experiencia está dirigida a hombres adultos que desean vivir un tiempo de encuentro, oración, escucha y comunidad.\n\nLas personas interesadas pueden solicitar información a través del formulario de contacto de la web. El equipo correspondiente se pondrá en contacto para ampliar los detalles de la convocatoria.",
    published_at: "2026-06-02T09:00:00Z",
    is_published: true,
    created_at: "2026-06-02T09:00:00Z",
    updated_at: "2026-06-02T09:00:00Z"
  },
  {
    id: "55555555-5555-4555-8555-555555555555",
    title: "Nueva convocatoria de EMAÚS Mujeres",
    slug: "nueva-convocatoria-de-emaus-mujeres",
    category: "EMAÚS Mujeres",
    featured_image_url: "/images/religious/news-emaus-mujeres.webp",
    excerpt:
      "Ya está disponible la información sobre una nueva convocatoria de EMAÚS Asturias Mujeres.",
    content:
      "Ya está disponible la información sobre una nueva convocatoria de EMAÚS Asturias Mujeres.\n\nEsta experiencia está dirigida a mujeres adultas que desean vivir un tiempo de encuentro, oración, escucha y comunidad.\n\nLas personas interesadas pueden solicitar información a través del formulario de contacto de la web. El equipo correspondiente se pondrá en contacto para ampliar los detalles de la convocatoria.",
    published_at: "2026-05-28T09:00:00Z",
    is_published: true,
    created_at: "2026-05-28T09:00:00Z",
    updated_at: "2026-05-28T09:00:00Z"
  },
  {
    id: "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
    title: "Nueva información de EMAÚS Asturias",
    slug: "nueva-informacion-de-emaus-asturias",
    category: "EMAÚS",
    featured_image_url: "/images/religious/news-emaus-general.webp",
    excerpt:
      "Compartimos una nueva actualización relacionada con la vida de EMAÚS Asturias.",
    content:
      "Desde EMAÚS Asturias compartimos esta actualización relacionada con la vida de la comunidad.\n\nNuestra comunidad, vinculada a la Parroquia de San Martín de El Berrón, sigue caminando a través de EMAÚS Hombres, EMAÚS Mujeres, Effetá y Bartimeo.\n\nPara cualquier duda o solicitud de información, puedes contactar con nosotros a través del formulario de la web.",
    published_at: "2026-05-20T09:00:00Z",
    is_published: true,
    created_at: "2026-05-20T09:00:00Z",
    updated_at: "2026-05-20T09:00:00Z"
  }
];

export const sampleContactRequests: ContactRequest[] = [
  {
    id: "66666666-6666-4666-8666-666666666666",
    name: "Persona de ejemplo",
    email: "persona@example.com",
    phone: "600000000",
    community_interest: "Información general",
    message: "Me gustaría recibir información sobre los próximos retiros.",
    privacy_accepted: true,
    status: "nueva",
    created_at: "2026-06-03T12:15:00Z"
  }
];

export const samplePages: EditablePage[] = [
  {
    id: "77777777-7777-4777-8777-777777777777",
    title: "Privacidad",
    slug: "privacidad",
    content:
      "Texto provisional de privacidad. Sustituir por el texto legal definitivo antes de publicar.",
    seo_title: "Privacidad",
    seo_description: "Política de privacidad de EMAÚS Asturias.",
    updated_at: "2026-06-01T10:00:00Z"
  },
  {
    id: "88888888-8888-4888-8888-888888888888",
    title: "Aviso legal",
    slug: "aviso-legal",
    content:
      "Texto provisional de aviso legal. Sustituir por el texto legal definitivo antes de publicar.",
    seo_title: "Aviso legal",
    seo_description: "Aviso legal de EMAÚS Asturias.",
    updated_at: "2026-06-01T10:00:00Z"
  },
  {
    id: "99999999-9999-4999-8999-999999999999",
    title: "Cookies",
    slug: "cookies",
    content:
      "Texto provisional sobre cookies. Sustituir por el texto legal definitivo antes de publicar.",
    seo_title: "Cookies",
    seo_description: "Política de cookies de EMAÚS Asturias.",
    updated_at: "2026-06-01T10:00:00Z"
  }
];

export const sampleSettings: SiteSetting[] = [
  { setting_key: "site_name", setting_value: "EMAÚS Asturias" },
  { setting_key: "parish_name", setting_value: "Parroquia de San Martín de El Berrón" },
  { setting_key: "address", setting_value: "El Berrón, Asturias" },
  { setting_key: "phone", setting_value: "" },
  { setting_key: "notification_emails", setting_value: "" },
  { setting_key: "social_links", setting_value: "" },
  { setting_key: "seo_title", setting_value: "EMAÚS Asturias" },
  {
    setting_key: "seo_description",
    setting_value:
      "EMAÚS, Effetá y Bartimeo en Asturias, vinculados a la Parroquia de San Martín de El Berrón."
  }
];

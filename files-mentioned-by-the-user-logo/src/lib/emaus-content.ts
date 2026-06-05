import type { Community } from "./types";

export type TextBlock = {
  title: string;
  paragraphs: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const queEsEmausSections: TextBlock[] = [
  {
    title: "El camino de Emaús",
    paragraphs: [
      "El nombre de EMAÚS nace del pasaje del Evangelio en el que dos discípulos caminan tristes y desorientados después de la muerte de Jesús.",
      "En ese camino, Jesús se acerca a ellos, aunque al principio no son capaces de reconocerlo. Camina a su lado, escucha sus preguntas, les ayuda a comprender lo que están viviendo y, finalmente, lo reconocen al partir el pan.",
      "Esa escena resume el sentido profundo de EMAÚS: descubrir que Dios camina con nosotros también en los momentos de duda, cansancio, tristeza, búsqueda o dificultad.",
      "EMAÚS nos recuerda que la fe no siempre comienza con respuestas claras, sino muchas veces con un camino, una conversación, una escucha y un corazón dispuesto a dejarse encontrar."
    ]
  },
  {
    title: "¿Qué es un retiro de EMAÚS?",
    paragraphs: [
      "Un retiro de EMAÚS es una experiencia cristiana de encuentro, oración, escucha y comunidad.",
      "Es una invitación a detenerse, abrir el corazón y mirar la propia vida desde la fe. En medio del ritmo diario, de las responsabilidades, de las dudas y de las preocupaciones, EMAÚS ofrece un tiempo para parar y dejarse acompañar.",
      "No es una charla. No es un curso. No es una terapia. No es una actividad turística.",
      "Es una experiencia personal y comunitaria, vivida en un clima de respeto, confianza y confidencialidad.",
      "Durante el retiro se viven momentos de oración, reflexión, silencio, convivencia, escucha y comunidad. El contenido concreto se cuida con discreción para preservar la vivencia de quienes participan por primera vez."
    ]
  },
  {
    title: "¿Para quién es EMAÚS?",
    paragraphs: [
      "EMAÚS está dirigido a personas adultas que desean vivir una experiencia cristiana de encuentro.",
      "Puede ser para personas con una vida de fe activa, para quienes se han alejado, para quienes tienen dudas o para quienes sienten que necesitan detenerse y mirar su vida con más profundidad.",
      "No hace falta tenerlo todo claro. No hace falta llegar con respuestas. No hace falta vivir la fe de una manera perfecta.",
      "Basta con acudir con respeto, libertad y el corazón abierto.",
      "EMAÚS acoge cada historia personal con cuidado, discreción y esperanza."
    ]
  },
  {
    title: "Una experiencia que se vive desde dentro",
    paragraphs: [
      "EMAÚS es una experiencia que se comprende mejor cuando se vive personalmente.",
      "Por eso, los detalles concretos del retiro se preservan con discreción. Esta reserva no busca ocultar, sino cuidar la experiencia de quienes participan por primera vez.",
      "Sí podemos decir que durante el retiro hay espacios de oración, escucha, reflexión, silencio, convivencia y comunidad.",
      "Cada momento está preparado por personas que ya han vivido EMAÚS y que desean servir a otros desde la acogida, la humildad y la fe."
    ]
  },
  {
    title: "El camino continúa",
    paragraphs: [
      "La experiencia de EMAÚS no termina al finalizar el retiro.",
      "Después comienza un camino de comunidad, oración, acompañamiento y servicio. Cada persona decide libremente cómo continuar, pero quien lo desea puede seguir vinculado a la comunidad y compartir la fe con otros.",
      "EMAÚS puede ser el comienzo de una nueva forma de vivir la fe: más acompañada, más consciente y más abierta a la presencia de Dios en la vida cotidiana."
    ]
  },
  {
    title: "EMAÚS Asturias",
    paragraphs: [
      "EMAÚS Asturias forma parte de una comunidad vinculada a la Parroquia de San Martín de El Berrón.",
      "Desde esta comunidad se acompañan diferentes caminos de encuentro cristiano: EMAÚS Hombres, EMAÚS Mujeres, Effetá y Bartimeo.",
      "Cada camino tiene su propia identidad, pero todos comparten una misma raíz: ayudar a las personas a descubrir que Dios sigue caminando a su lado."
    ]
  }
];

export const queEsEmausFaqs: FaqItem[] = [
  {
    question: "¿Qué significa EMAÚS?",
    answer:
      "EMAÚS hace referencia al camino de los discípulos que reconocen a Jesús al partir el pan. Es una imagen de encuentro, escucha, acompañamiento y fe."
  },
  {
    question: "¿Qué es un retiro de EMAÚS?",
    answer:
      "Es una experiencia cristiana de oración, reflexión, convivencia y comunidad, pensada para ayudar a cada persona a detenerse y mirar su vida desde la fe."
  },
  {
    question: "¿Tengo que ser practicante para participar?",
    answer:
      "No es necesario tenerlo todo claro. Lo importante es acudir con una actitud abierta, respetuosa y dispuesta a vivir la experiencia."
  },
  {
    question: "¿Qué se hace durante el retiro?",
    answer:
      "El contenido concreto se cuida con discreción para preservar la experiencia. Sí podemos decir que hay momentos de oración, escucha, reflexión, convivencia y comunidad."
  },
  {
    question: "¿Puedo participar si no conozco a nadie?",
    answer:
      "Sí. Muchas personas llegan sin conocer a otros participantes. La experiencia está preparada para favorecer un clima de acogida y confianza."
  },
  {
    question: "¿La solicitud de información implica inscripción automática?",
    answer:
      "No. El formulario sirve para solicitar información. El equipo responsable se pondrá en contacto posteriormente."
  }
];

export const generalEmausFaqs: FaqItem[] = [
  {
    question: "¿Qué es EMAÚS?",
    answer:
      "EMAÚS es una experiencia cristiana inspirada en el pasaje evangélico de los discípulos de Emaús. Invita a detenerse, escuchar, abrir el corazón y descubrir que Dios camina con nosotros."
  },
  {
    question: "¿Qué es un retiro de EMAÚS?",
    answer:
      "Es una experiencia de oración, reflexión, convivencia, escucha y comunidad, vivida en un clima de respeto, confianza y confidencialidad."
  },
  {
    question: "¿Por qué hay EMAÚS Hombres y EMAÚS Mujeres?",
    answer:
      "Porque se ofrecen espacios diferenciados para cuidar mejor la experiencia, la confianza, la escucha y el acompañamiento."
  },
  {
    question: "¿Son iguales EMAÚS Hombres y EMAÚS Mujeres?",
    answer:
      "Comparten una misma raíz espiritual y una misma inspiración evangélica, pero cada comunidad tiene su propio equipo, organización y forma de acompañar."
  },
  {
    question: "¿Tengo que estar muy vinculado a la Iglesia para participar?",
    answer:
      "No. EMAÚS acoge a personas con diferentes recorridos personales y espirituales. Lo importante es acudir con respeto y el corazón abierto."
  },
  {
    question: "¿Puedo participar si tengo dudas de fe?",
    answer:
      "Sí. Muchas personas llegan con preguntas, búsquedas o dudas. EMAÚS no exige tenerlo todo resuelto antes de vivir la experiencia."
  },
  {
    question: "¿Qué ocurre después del retiro?",
    answer:
      "Quien lo desea puede seguir caminando en comunidad, participando en encuentros, oración, servicio y acompañamiento."
  }
];

export type EmausPathContent = {
  community: Community;
  eyebrow: string;
  title: string;
  lead: string;
  logo: string;
  logoAlt: string;
  sections: TextBlock[];
  retreatsTitle: string;
  retreatsIntro: string;
  noRetreatsText: string;
  retreatsButton: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  contactHref: string;
};

export const emausHombresContent: EmausPathContent = {
  community: "emaus_hombres",
  eyebrow: "EMAÚS Hombres",
  title: "EMAÚS Asturias Hombres",
  lead:
    "Un retiro para hombres adultos que desean vivir una experiencia profunda de encuentro, fe y comunidad.",
  logo: "/images/logos/logo-emaus-hombres.png",
  logoAlt: "Logo de EMAÚS Hombres",
  retreatsTitle: "Próximos retiros de EMAÚS Hombres",
  retreatsIntro:
    "Estas son las próximas fechas publicadas para EMAÚS Asturias Hombres. Puedes solicitar información sobre la convocatoria que te interese y el equipo correspondiente se pondrá en contacto contigo.",
  noRetreatsText:
    "Actualmente no hay retiros publicados para EMAÚS Hombres. Próximamente compartiremos nuevas convocatorias.",
  retreatsButton: "Solicitar información sobre EMAÚS Hombres",
  ctaTitle: "¿Quieres saber más sobre EMAÚS Hombres?",
  ctaText:
    "Si quieres recibir información sobre próximas convocatorias, condiciones de participación o cualquier otra duda, puedes escribirnos a través del formulario.",
  contactHref: "/emaus-hombres#solicitar-informacion",
  sections: [
    {
      title: "Un espacio para detenerse y volver al corazón",
      paragraphs: [
        "EMAÚS Hombres es una experiencia dirigida a hombres adultos que sienten el deseo de detenerse, mirar su vida con profundidad y abrirse al encuentro con Dios.",
        "Es una invitación a hacer una pausa, escuchar y dejarse acompañar en un ambiente de respeto, confianza y confidencialidad.",
        "Cada hombre llega con su historia, sus preguntas, sus cansancios, sus búsquedas y su momento vital. EMAÚS ofrece un espacio para mirar todo eso desde la fe, la esperanza y la comunidad."
      ]
    },
    {
      title: "¿A quién va dirigido EMAÚS Hombres?",
      paragraphs: [
        "EMAÚS Hombres está pensado para hombres adultos que desean vivir un retiro cristiano en comunidad.",
        "Pueden participar hombres con una vida de fe activa, hombres que se han alejado de la Iglesia, hombres que tienen dudas o hombres que simplemente sienten que necesitan parar y hacerse preguntas importantes.",
        "No se trata de llegar con respuestas, sino con disposición.",
        "No hace falta tenerlo todo claro. Lo importante es acudir con respeto, libertad y el corazón abierto."
      ]
    },
    {
      title: "Una experiencia de escucha, oración y comunidad",
      paragraphs: [
        "Durante el retiro se viven momentos de escucha, oración, reflexión, silencio, convivencia y comunidad.",
        "El contenido concreto del retiro se preserva para cuidar la experiencia de quienes participan por primera vez.",
        "Todo está preparado por personas que ya han vivido EMAÚS y que desean servir a otros desde la discreción, la entrega y la acogida.",
        "EMAÚS Hombres no es una actividad formativa ni una convivencia más. Es una experiencia cristiana pensada para ayudar a cada hombre a abrir el corazón y dejarse encontrar."
      ]
    },
    {
      title: "Un clima de confianza",
      paragraphs: [
        "La confianza y la confidencialidad son esenciales en EMAÚS.",
        "Cada persona vive la experiencia desde su propia historia. Por eso, el respeto, la libertad y la discreción forman parte del cuidado del retiro.",
        "Nadie está obligado a llegar de una manera concreta. Nadie necesita aparentar. Cada hombre puede vivir el camino desde el punto en el que se encuentra."
      ]
    },
    {
      title: "Después, el camino continúa",
      paragraphs: [
        "Después del retiro, quien lo desea puede seguir vinculado a la comunidad.",
        "El camino continúa en los encuentros, la oración, el servicio y el acompañamiento. EMAÚS no termina en un fin de semana: puede convertirse en el comienzo de una nueva forma de vivir la fe.",
        "La comunidad ayuda a cuidar lo vivido y a integrarlo en la vida cotidiana."
      ]
    }
  ],
  faqs: [
    {
      question: "¿Qué es EMAÚS Hombres?",
      answer:
        "Es una experiencia cristiana de retiro dirigida a hombres adultos que desean vivir un encuentro de fe, escucha y comunidad."
    },
    {
      question: "¿Tengo que estar vinculado a la Iglesia para participar?",
      answer:
        "No es necesario tenerlo todo claro. Pueden participar hombres con diferentes recorridos personales y espirituales."
    },
    {
      question: "¿Puedo ir si no conozco a nadie?",
      answer:
        "Sí. La experiencia está preparada para acoger a cada persona, también a quienes llegan sin conocer a otros participantes."
    },
    {
      question: "¿Qué se hace durante el retiro?",
      answer:
        "El contenido concreto se cuida con discreción. Sí podemos decir que hay momentos de oración, reflexión, convivencia, escucha y comunidad."
    },
    {
      question: "¿Por qué se cuidan tanto los detalles del retiro?",
      answer:
        "Porque EMAÚS es una experiencia que se vive de forma personal. Preservar algunos detalles ayuda a cuidar la vivencia de quienes participan por primera vez."
    },
    {
      question: "¿Qué ocurre después del retiro?",
      answer:
        "Quien lo desea puede seguir vinculado a la comunidad mediante encuentros, oración, servicio y acompañamiento."
    },
    {
      question: "¿La solicitud de información implica inscripción automática?",
      answer:
        "No. El formulario sirve para solicitar información. El equipo responsable se pondrá en contacto posteriormente."
    }
  ]
};

export const emausMujeresContent: EmausPathContent = {
  community: "emaus_mujeres",
  eyebrow: "EMAÚS Mujeres",
  title: "EMAÚS Asturias Mujeres",
  lead:
    "Un retiro para mujeres adultas que desean abrir un espacio de escucha, fe y reencuentro con Dios.",
  logo: "/images/logos/logo-emaus-mujeres.jpeg",
  logoAlt: "Logo de EMAÚS Mujeres",
  retreatsTitle: "Próximos retiros de EMAÚS Mujeres",
  retreatsIntro:
    "Estas son las próximas fechas publicadas para EMAÚS Asturias Mujeres. Puedes solicitar información sobre la convocatoria que te interese y el equipo correspondiente se pondrá en contacto contigo.",
  noRetreatsText:
    "Actualmente no hay retiros publicados para EMAÚS Mujeres. Próximamente compartiremos nuevas convocatorias.",
  retreatsButton: "Solicitar información sobre EMAÚS Mujeres",
  ctaTitle: "¿Quieres saber más sobre EMAÚS Mujeres?",
  ctaText:
    "Si quieres recibir información sobre próximas convocatorias, condiciones de participación o cualquier otra duda, puedes escribirnos a través del formulario.",
  contactHref: "/emaus-mujeres#solicitar-informacion",
  sections: [
    {
      title: "Un espacio de encuentro, confianza y esperanza",
      paragraphs: [
        "EMAÚS Mujeres es una experiencia dirigida a mujeres adultas que desean detenerse, mirar su vida con calma y abrirse a una experiencia de fe vivida desde la confianza, la acogida y la comunidad.",
        "Es un tiempo para escuchar, compartir, orar y dejarse sorprender por Dios en medio de la propia historia.",
        "Cada mujer llega con su vida, sus preguntas, sus heridas, sus búsquedas y sus deseos. EMAÚS ofrece un espacio cuidado para vivir todo ello desde la esperanza."
      ]
    },
    {
      title: "¿A quién va dirigido EMAÚS Mujeres?",
      paragraphs: [
        "EMAÚS Mujeres está pensado para mujeres adultas que quieren vivir un retiro cristiano en un clima de respeto, confidencialidad y escucha.",
        "Pueden participar mujeres con una vida de fe activa, mujeres que buscan reencontrarse con Dios, mujeres que tienen dudas o mujeres que sienten que necesitan parar y abrir un espacio interior.",
        "No es necesario tenerlo todo claro. Basta con estar dispuesta a iniciar el camino."
      ]
    },
    {
      title: "Una experiencia para abrir el corazón",
      paragraphs: [
        "El retiro ofrece momentos de oración, reflexión, escucha, convivencia, silencio y comunidad.",
        "La experiencia se cuida con discreción para que cada mujer pueda vivirla de forma personal, libre y profunda.",
        "Cada detalle está preparado por personas que ya han vivido EMAÚS y que desean servir desde la acogida, la entrega y la fe.",
        "EMAÚS Mujeres no es una actividad formativa ni una charla. Es una experiencia cristiana pensada para ayudar a cada mujer a detenerse, escuchar y dejarse encontrar."
      ]
    },
    {
      title: "Un clima de respeto y acogida",
      paragraphs: [
        "La confianza y la confidencialidad son parte esencial de EMAÚS.",
        "Cada mujer vive la experiencia desde su propia historia. Por eso, el respeto, la libertad y la discreción son fundamentales.",
        "EMAÚS Mujeres quiere ofrecer un espacio donde cada persona pueda sentirse acogida sin juicio, escuchada con respeto y acompañada con delicadeza."
      ]
    },
    {
      title: "La experiencia continúa",
      paragraphs: [
        "La experiencia continúa después del retiro.",
        "Quien lo desea puede seguir caminando en comunidad, participando en encuentros, espacios de oración, formación y servicio.",
        "EMAÚS puede ser el inicio de una forma nueva de vivir la fe, acompañada por otras mujeres y sostenida en la comunidad."
      ]
    }
  ],
  faqs: [
    {
      question: "¿Qué es EMAÚS Mujeres?",
      answer:
        "Es una experiencia cristiana de retiro dirigida a mujeres adultas que desean vivir un encuentro de fe, escucha y comunidad."
    },
    {
      question: "¿Tengo que tener una vida de fe activa para participar?",
      answer:
        "No es necesario tenerlo todo claro. Pueden participar mujeres con diferentes recorridos personales y espirituales."
    },
    {
      question: "¿Puedo participar si voy sola?",
      answer:
        "Sí. Muchas mujeres llegan sin conocer a otras participantes. La experiencia está preparada para favorecer un clima de acogida y confianza."
    },
    {
      question: "¿Qué se hace durante el retiro?",
      answer:
        "El contenido concreto se cuida con discreción. Sí podemos decir que hay momentos de oración, reflexión, convivencia, escucha y comunidad."
    },
    {
      question: "¿Por qué no se explican todos los detalles del retiro?",
      answer:
        "Porque EMAÚS es una experiencia que se vive de forma personal. Preservar algunos detalles ayuda a cuidar la vivencia de quienes participan por primera vez."
    },
    {
      question: "¿Qué ocurre después del retiro?",
      answer:
        "Quien lo desea puede seguir vinculada a la comunidad mediante encuentros, oración, servicio y acompañamiento."
    },
    {
      question: "¿La solicitud de información implica inscripción automática?",
      answer:
        "No. El formulario sirve para solicitar información. El equipo responsable se pondrá en contacto posteriormente."
    }
  ]
};

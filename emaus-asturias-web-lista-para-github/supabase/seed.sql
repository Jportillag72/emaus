insert into public.retreats (
  title,
  slug,
  community,
  start_date,
  end_date,
  location,
  image_url,
  short_description,
  full_description,
  status,
  is_visible
)
values
(
  'Retiro EMAÚS Hombres Asturias',
  'retiro-emaus-hombres-asturias',
  'emaus_hombres',
  '2026-10-02',
  '2026-10-04',
  'Asturias',
  '/images/religious/retreat-emaus-hombres.webp',
  'Una experiencia cristiana para hombres adultos que desean vivir un tiempo de encuentro, oración, escucha y comunidad.',
  'Este retiro de EMAÚS Hombres forma parte del camino de EMAÚS Asturias.

Es una experiencia cristiana de encuentro, oración, convivencia y comunidad dirigida a hombres adultos que desean detenerse, abrir el corazón y mirar su vida desde la fe.

El contenido concreto del retiro se cuida con discreción para preservar la vivencia de quienes participan por primera vez. Todo está preparado por personas que ya han vivido EMAÚS y desean servir a otros desde la acogida y la fe.

El formulario permite solicitar información. La inscripción no es automática; el equipo correspondiente se pondrá en contacto con cada persona interesada.',
  'inscripciones_abiertas',
  true
),
(
  'Retiro EMAÚS Mujeres Asturias',
  'retiro-emaus-mujeres-asturias',
  'emaus_mujeres',
  '2026-11-13',
  '2026-11-15',
  'Asturias',
  '/images/religious/retreat-emaus-mujeres.webp',
  'Una experiencia cristiana para mujeres adultas que desean vivir un tiempo de encuentro, oración, escucha y comunidad.',
  'Este retiro de EMAÚS Mujeres forma parte del camino de EMAÚS Asturias.

Es una experiencia cristiana de encuentro, oración, convivencia y comunidad dirigida a mujeres adultas que desean detenerse, abrir el corazón y mirar su vida desde la fe.

El contenido concreto del retiro se cuida con discreción para preservar la vivencia de quienes participan por primera vez. Todo está preparado por personas que ya han vivido EMAÚS y desean servir a otras desde la acogida y la fe.

El formulario permite solicitar información. La inscripción no es automática; el equipo correspondiente se pondrá en contacto con cada persona interesada.',
  'proximamente',
  true
),
(
  'Encuentro Effetá Asturias',
  'encuentro-effeta-asturias',
  'effeta',
  '2027-02-06',
  '2027-02-08',
  'Asturias',
  '/images/religious/retreat-effeta.webp',
  'Una experiencia cristiana para jóvenes de 18 a 30 años que desean abrir el corazón, escuchar y vivir la fe en comunidad.',
  'Este retiro de Effetá forma parte del camino de EMAÚS Asturias.

Es una experiencia cristiana dirigida a jóvenes de 18 a 30 años que desean abrir el corazón, escuchar con sinceridad y vivir la fe en comunidad.

Durante el retiro se cuidan espacios de oración, reflexión, convivencia, silencio, escucha y comunidad. El contenido concreto se preserva con discreción para cuidar la vivencia de quienes participan por primera vez.

El formulario permite solicitar información. La inscripción no es automática; el equipo correspondiente se pondrá en contacto con cada persona interesada.',
  'proximamente',
  true
),
(
  'Retiro Bartimeo Asturias',
  'retiro-bartimeo-asturias',
  'bartimeo',
  '2027-03-20',
  '2027-03-22',
  'Asturias',
  '/images/religious/retreat-bartimeo.webp',
  'Una experiencia cristiana para jóvenes de 15 a 18 años que desean recuperar la mirada, abrirse a la esperanza y caminar acompañados.',
  'Este retiro de Bartimeo forma parte del camino de EMAÚS Asturias.

Es una experiencia cristiana dirigida a jóvenes de 15 a 18 años e inspirada en el encuentro de Jesús con Bartimeo, pensada para quienes desean dejarse mirar, recuperar esperanza y caminar acompañados.

Durante el retiro se cuidan espacios de oración, reflexión, convivencia, silencio, escucha y comunidad. El contenido concreto se preserva con discreción para cuidar la vivencia de quienes participan por primera vez.

El formulario permite solicitar información. La inscripción no es automática; el equipo correspondiente se pondrá en contacto con cada persona interesada.',
  'proximamente',
  true
)
on conflict (slug) do update set
  title = excluded.title,
  community = excluded.community,
  start_date = excluded.start_date,
  end_date = excluded.end_date,
  location = excluded.location,
  image_url = excluded.image_url,
  short_description = excluded.short_description,
  full_description = excluded.full_description,
  status = excluded.status,
  is_visible = excluded.is_visible;

insert into public.news (
  title,
  slug,
  category,
  featured_image_url,
  excerpt,
  content,
  published_at,
  is_published
)
values
(
  'Nueva convocatoria de EMAÚS Hombres',
  'nueva-convocatoria-de-emaus-hombres',
  'EMAÚS Hombres',
  '/images/religious/news-emaus-hombres.webp',
  'Ya está disponible la información sobre una nueva convocatoria de EMAÚS Asturias Hombres.',
  'Ya está disponible la información sobre una nueva convocatoria de EMAÚS Asturias Hombres.

Esta experiencia está dirigida a hombres adultos que desean vivir un tiempo de encuentro, oración, escucha y comunidad.

Las personas interesadas pueden solicitar información a través del formulario de contacto de la web. El equipo correspondiente se pondrá en contacto para ampliar los detalles de la convocatoria.',
  '2026-06-02 09:00:00+00',
  true
),
(
  'Nueva convocatoria de EMAÚS Mujeres',
  'nueva-convocatoria-de-emaus-mujeres',
  'EMAÚS Mujeres',
  '/images/religious/news-emaus-mujeres.webp',
  'Ya está disponible la información sobre una nueva convocatoria de EMAÚS Asturias Mujeres.',
  'Ya está disponible la información sobre una nueva convocatoria de EMAÚS Asturias Mujeres.

Esta experiencia está dirigida a mujeres adultas que desean vivir un tiempo de encuentro, oración, escucha y comunidad.

Las personas interesadas pueden solicitar información a través del formulario de contacto de la web. El equipo correspondiente se pondrá en contacto para ampliar los detalles de la convocatoria.',
  '2026-05-28 09:00:00+00',
  true
),
(
  'Nueva información de EMAÚS Asturias',
  'nueva-informacion-de-emaus-asturias',
  'EMAÚS',
  '/images/religious/news-emaus-general.webp',
  'Compartimos una nueva actualización relacionada con la vida de EMAÚS Asturias.',
  'Desde EMAÚS Asturias compartimos esta actualización relacionada con la vida de la comunidad.

Nuestra comunidad, vinculada a la Parroquia de San Martín de El Berrón, sigue caminando a través de EMAÚS Hombres, EMAÚS Mujeres, Effetá y Bartimeo.

Para cualquier duda o solicitud de información, puedes contactar con nosotros a través del formulario de la web.',
  '2026-05-20 09:00:00+00',
  true
)
on conflict (slug) do update set
  title = excluded.title,
  category = excluded.category,
  featured_image_url = excluded.featured_image_url,
  excerpt = excluded.excerpt,
  content = excluded.content,
  published_at = excluded.published_at,
  is_published = excluded.is_published;

insert into public.pages (title, slug, content, seo_title, seo_description)
values
(
  'Privacidad',
  'privacidad',
  'Texto provisional de privacidad. Sustituir por el texto legal definitivo antes de publicar.',
  'Privacidad',
  'Política de privacidad de EMAÚS Asturias.'
),
(
  'Aviso legal',
  'aviso-legal',
  'Texto provisional de aviso legal. Sustituir por el texto legal definitivo antes de publicar.',
  'Aviso legal',
  'Aviso legal de EMAÚS Asturias.'
),
(
  'Cookies',
  'cookies',
  'Texto provisional sobre cookies. Sustituir por el texto legal definitivo antes de publicar.',
  'Cookies',
  'Política de cookies de EMAÚS Asturias.'
)
on conflict (slug) do update set
  title = excluded.title,
  content = excluded.content,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description;

insert into public.site_settings (setting_key, setting_value)
values
  ('site_name', 'EMAÚS Asturias'),
  ('parish_name', 'Parroquia de San Martín de El Berrón'),
  ('address', 'El Berrón, Asturias'),
  ('phone', ''),
  ('notification_emails', ''),
  ('social_links', ''),
  ('seo_title', 'EMAÚS Asturias'),
  ('seo_description', 'EMAÚS, Effetá y Bartimeo en Asturias, vinculados a la Parroquia de San Martín de El Berrón.'),
  ('legal_privacy', ''),
  ('legal_notice', ''),
  ('legal_cookies', '')
on conflict (setting_key) do update set
  setting_value = excluded.setting_value;

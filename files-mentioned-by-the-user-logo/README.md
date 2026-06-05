# EMAÚS Asturias

Web completa para EMAÚS Asturias, vinculada a la Parroquia de San Martín de El Berrón.

Incluye frontend público, CMS privado, Supabase Auth, Supabase Storage, RLS, sitemap, robots, Open Graph y datos estructurados para organización, noticias y retiros.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase REST API
- Supabase Auth
- Supabase Storage
- Preparado para Vercel

## Rutas

Públicas: `/`, `/que-es-emaus`, `/comunidad`, `/emaus-hombres`, `/emaus-mujeres`, `/effeta`, `/bartimeo`, `/retiros`, `/retiros/[slug]`, `/noticias`, `/noticias/[slug]`, `/preguntas-frecuentes`, `/contacto`, `/privacidad`, `/aviso-legal`, `/cookies`.

Privadas: `/admin`, `/admin/retiros`, `/admin/noticias`, `/admin/solicitudes`, `/admin/configuracion`.

## Configuración local

1. Instala dependencias:

```bash
npm install
```

2. Crea `.env.local` a partir de `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=media
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

Sin variables de Supabase, la web funciona en modo demo con datos locales. Con variables reales, lee y escribe en Supabase.

## Supabase

1. Crea un proyecto en Supabase.
2. Ejecuta `supabase/schema.sql` en el SQL Editor.
3. Ejecuta `supabase/seed.sql` para cargar datos iniciales.
4. Crea un usuario en Supabase Auth.
5. Copia el UUID del usuario y añádelo como admin:

```sql
insert into public.admin_users (user_id)
values ('UUID_DEL_USUARIO');
```

El bucket `media` se crea desde el SQL y queda público para lectura. Solo admins pueden subir, editar o borrar objetos.

## CMS

El panel privado permite:

- Ver métricas de retiros, noticias y solicitudes.
- Crear, editar, ocultar y eliminar retiros.
- Crear, editar, publicar y eliminar noticias.
- Ver solicitudes, cambiar estado y exportar CSV.
- Editar configuración general, SEO, redes sociales, textos legales provisionales y páginas editables.

El formulario público de contacto guarda solicitudes en `contact_requests`, valida campos, exige privacidad aceptada e incluye honeypot antispam. La integración futura con email queda preparada desde las solicitudes y `notification_emails`.

## Seguridad

- `/admin` se protege con Supabase Auth cuando las variables de Supabase están configuradas.
- RLS está activado en todas las tablas.
- Las solicitudes pueden insertarse públicamente, pero no leerse públicamente.
- Las operaciones privadas requieren que el usuario autenticado exista en `admin_users`.
- Las claves sensibles no se exponen; la app solo usa la anon key pública en cliente/servidor.

## Despliegue en Vercel

Para una explicación paso a paso, abre `GUIA_PUBLICAR.md`.

Resumen:

1. Crea el proyecto en Supabase.
2. Ejecuta `supabase/schema.sql`.
3. Ejecuta `supabase/seed.sql`.
4. Crea un usuario en Supabase Auth y añádelo a `admin_users`.
5. Sube el proyecto a GitHub.
6. Importa el repositorio en Vercel.
7. Configura las variables de entorno de `.env.example`.
8. Despliega.
9. Actualiza `NEXT_PUBLIC_SITE_URL` con el dominio final.

No hay sección de testimonios por ahora. Emails reales, teléfonos, redes sociales, logos finales y fotografías finales quedan como datos configurables desde el panel.

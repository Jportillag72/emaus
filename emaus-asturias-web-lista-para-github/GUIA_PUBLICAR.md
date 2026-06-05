# Guía sencilla para publicar EMAÚS Asturias

Esta guía está pensada para publicar la web sin conocimientos técnicos. La idea general es:

1. Crear la base de datos en Supabase.
2. Subir este proyecto a GitHub.
3. Conectar GitHub con Vercel.
4. Pegar 4 variables en Vercel.
5. Publicar.

## 1. Crear Supabase

1. Entra en https://supabase.com.
2. Crea una cuenta o inicia sesión.
3. Pulsa `New project`.
4. Pon un nombre, por ejemplo `emaus-asturias`.
5. Guarda la contraseña que te pida Supabase.
6. Espera a que el proyecto termine de crearse.

## 2. Crear las tablas

1. Dentro de Supabase, entra en `SQL Editor`.
2. Abre el archivo `supabase/schema.sql` de este proyecto.
3. Copia todo su contenido.
4. Pégalo en Supabase y pulsa `Run`.
5. Abre el archivo `supabase/seed.sql`.
6. Copia todo su contenido.
7. Pégalo en Supabase y pulsa `Run`.

Con esto se crean retiros, noticias, páginas legales, configuración, permisos y el bucket de imágenes.

## 3. Crear usuario administrador

1. En Supabase entra en `Authentication`.
2. Ve a `Users`.
3. Pulsa `Add user`.
4. Crea el usuario con tu email y contraseña.
5. Copia el `User UID` del usuario.
6. Entra de nuevo en `SQL Editor`.
7. Pega esto, cambiando `PEGA_AQUI_EL_UID` por el UID real:

```sql
insert into public.admin_users (user_id)
values ('PEGA_AQUI_EL_UID');
```

8. Pulsa `Run`.

Ese usuario podrá entrar en `/admin`.

## 4. Copiar las claves de Supabase

En Supabase entra en `Project Settings` > `API`.

Necesitas copiar:

- `Project URL`
- `anon public key`

También usaremos:

- `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET` con valor `media`

## 5. Subir el proyecto a GitHub

La forma más sencilla es con GitHub Desktop:

1. Instala GitHub Desktop: https://desktop.github.com
2. Abre GitHub Desktop e inicia sesión.
3. Pulsa `File` > `Add local repository`.
4. Selecciona esta carpeta del proyecto.
5. Si te pide crear repositorio, acepta.
6. Pulsa `Publish repository`.
7. Pon el repositorio como privado si todavía no quieres hacerlo público.

## 6. Publicar en Vercel

1. Entra en https://vercel.com.
2. Inicia sesión con GitHub.
3. Pulsa `Add New` > `Project`.
4. Elige el repositorio de EMAÚS Asturias.
5. Vercel detectará `Next.js` automáticamente.
6. Antes de publicar, abre `Environment Variables`.
7. Añade estas variables:

```text
NEXT_PUBLIC_SITE_URL=https://TU-DOMINIO-DE-VERCEL.vercel.app
NEXT_PUBLIC_SUPABASE_URL=PEGA_AQUI_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=PEGA_AQUI_ANON_PUBLIC_KEY
NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=media
```

8. Pulsa `Deploy`.

Cuando Vercel termine, tendrás una URL pública.

## Si Vercel muestra 404 o no reconoce la web

Si aparece una pantalla parecida a `404: NOT_FOUND`, normalmente significa que Vercel no está apuntando al proyecto correcto o que ha elegido una carpeta equivocada.

Revisa esto:

1. En GitHub, abre el repositorio que has subido.
2. En la primera pantalla del repositorio deben verse estos archivos y carpetas:
   - `package.json`
   - `app`
   - `src`
   - `public`
   - `supabase`
   - `vercel.json`
3. Si en GitHub ves una carpeta dentro y esos archivos están dentro de esa carpeta, entonces en Vercel debes abrir `Settings` > `General` y poner esa carpeta como `Root Directory`.
4. Si esos archivos ya se ven directamente al abrir el repositorio, deja `Root Directory` vacío.
5. En Vercel, entra en el proyecto y pulsa `Redeploy`.
6. Asegúrate de abrir la URL que termina en `.vercel.app`, no una URL interna del panel de Vercel.

La pista importante es esta: Vercel debe encontrar el archivo `package.json` en la carpeta raíz del proyecto.

## 7. Actualizar la URL final

Cuando ya conozcas la URL definitiva de Vercel:

1. Entra en el proyecto de Vercel.
2. Ve a `Settings` > `Environment Variables`.
3. Cambia `NEXT_PUBLIC_SITE_URL` por la URL final.
4. Pulsa `Redeploy`.

Esto hace que SEO, sitemap y enlaces sociales usen la URL correcta.

## 8. Entrar al panel privado

Cuando la web esté publicada:

1. Abre `https://TU-WEB.vercel.app/admin`.
2. Entra con el email y contraseña creados en Supabase Auth.
3. Desde ahí puedes gestionar retiros, noticias, solicitudes, páginas y configuración.

## Notas importantes

- El formulario de contacto guarda solicitudes en Supabase.
- La solicitud de información no implica inscripción automática.
- Las fotos y logos finales se pueden cambiar desde el CMS cuando uses URLs de imágenes subidas.
- Los textos legales son provisionales y conviene sustituirlos por textos revisados antes de publicar oficialmente.
- Effetá está indicado para jóvenes de 18 a 30 años.
- Bartimeo está indicado para jóvenes de 15 a 18 años.

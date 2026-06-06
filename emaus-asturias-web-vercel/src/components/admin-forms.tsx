import {
  deleteNewsAction,
  deleteRetreatAction,
  saveNewsAction,
  savePageAction,
  saveRetreatAction,
  saveSettingsAction
} from "@/lib/admin-actions";
import { communityLabels, retreatStatusLabels } from "@/lib/site";
import type { EditablePage, News, Retreat } from "@/lib/types";

function dateTimeLocal(value: string) {
  if (!value) {
    return "";
  }

  return new Date(value).toISOString().slice(0, 16);
}

export function RetreatForm({ retreat }: { retreat?: Retreat }) {
  return (
    <form action={saveRetreatAction} className="grid gap-5">
      {retreat ? <input type="hidden" name="id" value={retreat.id} /> : null}
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          Título
          <input className="input" name="title" defaultValue={retreat?.title} required />
        </label>
        <label className="label">
          Slug
          <input className="input" name="slug" defaultValue={retreat?.slug} />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-4">
        <label className="label">
          Comunidad
          <select className="select" name="community" defaultValue={retreat?.community ?? "emaus_hombres"}>
            {Object.entries(communityLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="label">
          Inicio
          <input className="input" type="date" name="start_date" defaultValue={retreat?.start_date} required />
        </label>
        <label className="label">
          Fin
          <input className="input" type="date" name="end_date" defaultValue={retreat?.end_date} required />
        </label>
        <label className="label">
          Estado
          <select className="select" name="status" defaultValue={retreat?.status ?? "proximamente"}>
            {Object.entries(retreatStatusLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="label">
        Lugar
        <input className="input" name="location" defaultValue={retreat?.location} required />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          URL de imagen
          <input className="input" name="image_url" defaultValue={retreat?.image_url ?? ""} />
        </label>
        <label className="label">
          Subir imagen
          <input className="input" type="file" name="image_file" accept="image/*" />
        </label>
      </div>
      <label className="label">
        Descripción corta
        <textarea className="textarea" name="short_description" defaultValue={retreat?.short_description} required />
      </label>
      <label className="label">
        Descripción completa
        <textarea className="textarea min-h-56" name="full_description" defaultValue={retreat?.full_description} required />
      </label>
      <label className="flex items-center gap-3 text-sm font-extrabold text-night">
        <input className="size-4 accent-night" type="checkbox" name="is_visible" defaultChecked={retreat?.is_visible ?? true} />
        Visible en la web
      </label>
      <button className="btn btn-primary w-fit" type="submit">
        Guardar retiro
      </button>
    </form>
  );
}

export function RetreatDeleteForm({ retreat }: { retreat: Retreat }) {
  return (
    <form action={deleteRetreatAction}>
      <input type="hidden" name="id" value={retreat.id} />
      <button className="btn btn-secondary" type="submit">
        Eliminar
      </button>
    </form>
  );
}

export function NewsForm({ item }: { item?: News }) {
  return (
    <form action={saveNewsAction} className="grid gap-5">
      {item ? <input type="hidden" name="id" value={item.id} /> : null}
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          Título
          <input className="input" name="title" defaultValue={item?.title} required />
        </label>
        <label className="label">
          Slug
          <input className="input" name="slug" defaultValue={item?.slug} />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          Categoría
          <input className="input" name="category" defaultValue={item?.category} required />
        </label>
        <label className="label">
          Publicación
          <input
            className="input"
            type="datetime-local"
            name="published_at"
            defaultValue={item?.published_at ? dateTimeLocal(item.published_at) : ""}
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          URL de imagen
          <input className="input" name="featured_image_url" defaultValue={item?.featured_image_url ?? ""} />
        </label>
        <label className="label">
          Subir imagen
          <input className="input" type="file" name="image_file" accept="image/*" />
        </label>
      </div>
      <label className="label">
        Resumen
        <textarea className="textarea" name="excerpt" defaultValue={item?.excerpt} required />
      </label>
      <label className="label">
        Contenido
        <textarea className="textarea min-h-56" name="content" defaultValue={item?.content} required />
      </label>
      <label className="flex items-center gap-3 text-sm font-extrabold text-night">
        <input className="size-4 accent-night" type="checkbox" name="is_published" defaultChecked={item?.is_published ?? false} />
        Publicada
      </label>
      <button className="btn btn-primary w-fit" type="submit">
        Guardar noticia
      </button>
    </form>
  );
}

export function NewsDeleteForm({ item }: { item: News }) {
  return (
    <form action={deleteNewsAction}>
      <input type="hidden" name="id" value={item.id} />
      <button className="btn btn-secondary" type="submit">
        Eliminar
      </button>
    </form>
  );
}

export function SettingsForm({ settings }: { settings: Record<string, string> }) {
  return (
    <form action={saveSettingsAction} className="card grid gap-5 p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          Nombre del sitio
          <input className="input" name="site_name" defaultValue={settings.site_name ?? ""} />
        </label>
        <label className="label">
          Nombre de parroquia
          <input className="input" name="parish_name" defaultValue={settings.parish_name ?? ""} />
        </label>
      </div>
      <label className="label">
        Dirección
        <input className="input" name="address" defaultValue={settings.address ?? ""} />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          Teléfono
          <input className="input" name="phone" defaultValue={settings.phone ?? ""} />
        </label>
        <label className="label">
          Emails pendientes
          <input className="input" name="notification_emails" defaultValue={settings.notification_emails ?? ""} />
        </label>
      </div>
      <label className="label">
        Redes sociales
        <textarea className="textarea" name="social_links" defaultValue={settings.social_links ?? ""} />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          SEO global
          <input className="input" name="seo_title" defaultValue={settings.seo_title ?? ""} />
        </label>
        <label className="label">
          Descripción SEO
          <input className="input" name="seo_description" defaultValue={settings.seo_description ?? ""} />
        </label>
      </div>
      <label className="label">
        Texto legal provisional de privacidad
        <textarea className="textarea" name="legal_privacy" defaultValue={settings.legal_privacy ?? ""} />
      </label>
      <label className="label">
        Texto legal provisional de aviso legal
        <textarea className="textarea" name="legal_notice" defaultValue={settings.legal_notice ?? ""} />
      </label>
      <label className="label">
        Texto legal provisional de cookies
        <textarea className="textarea" name="legal_cookies" defaultValue={settings.legal_cookies ?? ""} />
      </label>
      <button className="btn btn-primary w-fit" type="submit">
        Guardar configuración
      </button>
    </form>
  );
}

export function PageEditForm({ page }: { page?: EditablePage }) {
  return (
    <form action={savePageAction} className="grid gap-5">
      {page ? <input type="hidden" name="id" value={page.id} /> : null}
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          Título
          <input className="input" name="title" defaultValue={page?.title} required />
        </label>
        <label className="label">
          Slug
          <input className="input" name="slug" defaultValue={page?.slug} required />
        </label>
      </div>
      <label className="label">
        Contenido
        <textarea className="textarea min-h-56" name="content" defaultValue={page?.content} required />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          SEO título
          <input className="input" name="seo_title" defaultValue={page?.seo_title ?? ""} />
        </label>
        <label className="label">
          SEO descripción
          <input className="input" name="seo_description" defaultValue={page?.seo_description ?? ""} />
        </label>
      </div>
      <button className="btn btn-primary w-fit" type="submit">
        Guardar página
      </button>
    </form>
  );
}

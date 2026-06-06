import { AdminShell } from "@/components/admin-shell";
import { PageEditForm, SettingsForm } from "@/components/admin-forms";
import { getAccessToken } from "@/lib/auth";
import { getEditablePages, getSettings } from "@/lib/supabase-rest";

export default async function AdminSettingsPage() {
  const token = await getAccessToken();
  const [settings, pages] = await Promise.all([getSettings(token), getEditablePages(token)]);

  return (
    <AdminShell
      title="Configuración"
      description="Edita datos generales, SEO, redes sociales, textos legales provisionales y páginas editables."
    >
      <div className="grid gap-8">
        <section>
          <h2 className="mb-5 font-display text-3xl font-bold text-night">Datos generales</h2>
          <SettingsForm settings={settings} />
        </section>

        <section className="grid gap-4">
          <h2 className="font-display text-3xl font-bold text-night">Páginas editables</h2>
          {pages.map((page) => (
            <details key={page.id} className="card p-5">
              <summary className="cursor-pointer list-none">
                <div>
                  <p className="font-display text-2xl font-bold text-night">{page.title}</p>
                  <p className="mt-1 text-sm text-ink/60">/{page.slug}</p>
                </div>
              </summary>
              <div className="mt-6 border-t border-night/10 pt-6">
                <PageEditForm page={page} />
              </div>
            </details>
          ))}
          <details className="card p-5">
            <summary className="cursor-pointer list-none font-display text-2xl font-bold text-night">
              Nueva página editable
            </summary>
            <div className="mt-6 border-t border-night/10 pt-6">
              <PageEditForm />
            </div>
          </details>
        </section>
      </div>
    </AdminShell>
  );
}

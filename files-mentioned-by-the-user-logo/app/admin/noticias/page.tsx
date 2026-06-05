import { AdminShell } from "@/components/admin-shell";
import { NewsDeleteForm, NewsForm } from "@/components/admin-forms";
import { getAccessToken } from "@/lib/auth";
import { getAdminNews } from "@/lib/supabase-rest";
import { formatDateTime } from "@/lib/utils";

export default async function AdminNewsPage() {
  const token = await getAccessToken();
  const news = await getAdminNews(token);

  return (
    <AdminShell title="Noticias" description="Gestiona noticias publicadas y borradores.">
      <div className="grid gap-8">
        <section className="card p-6">
          <h2 className="font-display text-3xl font-bold text-night">Nueva noticia</h2>
          <div className="mt-6">
            <NewsForm />
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className="font-display text-3xl font-bold text-night">Noticias existentes</h2>
          {news.map((item) => (
            <details key={item.id} className="card p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-2xl font-bold text-night">{item.title}</p>
                    <p className="mt-1 text-sm text-ink/60">
                      {item.category} · {formatDateTime(item.published_at)}
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-night">
                    {item.is_published ? "Publicada" : "Borrador"}
                  </span>
                </div>
              </summary>
              <div className="mt-6 border-t border-night/10 pt-6">
                <NewsForm item={item} />
                <div className="mt-4">
                  <NewsDeleteForm item={item} />
                </div>
              </div>
            </details>
          ))}
        </section>
      </div>
    </AdminShell>
  );
}

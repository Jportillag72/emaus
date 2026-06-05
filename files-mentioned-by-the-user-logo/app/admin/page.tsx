import { AdminShell } from "@/components/admin-shell";
import { getAccessToken } from "@/lib/auth";
import { getAdminNews, getAdminRetreats, getContactRequests } from "@/lib/supabase-rest";

export default async function AdminDashboardPage() {
  const token = await getAccessToken();
  const [retreats, news, requests] = await Promise.all([
    getAdminRetreats(token),
    getAdminNews(token),
    getContactRequests(token)
  ]);

  const stats = [
    { label: "Retiros publicados", value: retreats.filter((retreat) => retreat.is_visible).length },
    {
      label: "Próximos retiros",
      value: retreats.filter((retreat) => retreat.status !== "finalizado").length
    },
    { label: "Noticias publicadas", value: news.filter((item) => item.is_published).length },
    { label: "Solicitudes recibidas", value: requests.length }
  ];

  return (
    <AdminShell title="Panel" description="Resumen del contenido publicado y las solicitudes recibidas.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="card p-6">
            <p className="text-sm font-extrabold text-ink/58">{stat.label}</p>
            <p className="mt-3 font-display text-5xl font-bold text-night">{stat.value}</p>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}

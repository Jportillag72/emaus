import { AdminShell } from "@/components/admin-shell";
import { RetreatDeleteForm, RetreatForm } from "@/components/admin-forms";
import { StatusBadge } from "@/components/status-badge";
import { getAccessToken } from "@/lib/auth";
import { communityLabels } from "@/lib/site";
import { getAdminRetreats } from "@/lib/supabase-rest";
import { formatDateRange } from "@/lib/utils";

export default async function AdminRetreatsPage() {
  const token = await getAccessToken();
  const retreats = await getAdminRetreats(token);

  return (
    <AdminShell title="Retiros" description="Crea, edita, publica, oculta o elimina retiros.">
      <div className="grid gap-8">
        <section className="card p-6">
          <h2 className="font-display text-3xl font-bold text-night">Nuevo retiro</h2>
          <div className="mt-6">
            <RetreatForm />
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className="font-display text-3xl font-bold text-night">Retiros existentes</h2>
          {retreats.map((retreat) => (
            <details key={retreat.id} className="card p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-2xl font-bold text-night">{retreat.title}</p>
                    <p className="mt-1 text-sm text-ink/60">
                      {communityLabels[retreat.community]} · {formatDateRange(retreat.start_date, retreat.end_date)}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge type="retreat" status={retreat.status} />
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-night">
                      {retreat.is_visible ? "Visible" : "Oculto"}
                    </span>
                  </div>
                </div>
              </summary>
              <div className="mt-6 border-t border-night/10 pt-6">
                <RetreatForm retreat={retreat} />
                <div className="mt-4">
                  <RetreatDeleteForm retreat={retreat} />
                </div>
              </div>
            </details>
          ))}
        </section>
      </div>
    </AdminShell>
  );
}

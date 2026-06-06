import Link from "next/link";
import { AdminShell } from "@/components/admin-shell";
import { StatusBadge } from "@/components/status-badge";
import { updateRequestStatusAction } from "@/lib/admin-actions";
import { getAccessToken } from "@/lib/auth";
import { requestStatusLabels } from "@/lib/site";
import { getContactRequests } from "@/lib/supabase-rest";
import { formatDateTime } from "@/lib/utils";
import type { RequestStatus } from "@/lib/types";

const statuses = Object.keys(requestStatusLabels) as RequestStatus[];

export default async function AdminRequestsPage() {
  const token = await getAccessToken();
  const requests = await getContactRequests(token);

  return (
    <AdminShell title="Solicitudes" description="Revisa solicitudes, cambia su estado y expórtalas en CSV.">
      <div className="mb-5 flex justify-end">
        <Link href="/admin/solicitudes/export" className="btn btn-primary">
          Exportar CSV
        </Link>
      </div>
      <div className="grid gap-4">
        {requests.map((request) => (
          <details key={request.id} className="card p-5">
            <summary className="cursor-pointer list-none">
              <div className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-center">
                <div>
                  <p className="font-display text-2xl font-bold text-night">{request.name}</p>
                  <p className="mt-1 text-sm text-ink/62">{formatDateTime(request.created_at)}</p>
                </div>
                <div className="text-sm leading-6 text-ink/70">
                  <p>{request.email}</p>
                  <p>{request.phone}</p>
                  <p>{request.community_interest}</p>
                </div>
                <StatusBadge type="request" status={request.status} />
              </div>
            </summary>
            <div className="mt-6 grid gap-5 border-t border-night/10 pt-6 lg:grid-cols-[1fr_300px]">
              <div>
                <p className="text-sm font-extrabold text-night">Mensaje</p>
                <p className="mt-3 whitespace-pre-line leading-8 text-ink/72">{request.message}</p>
              </div>
              <form action={updateRequestStatusAction} className="grid gap-3">
                <input type="hidden" name="id" value={request.id} />
                <label className="label">
                  Estado
                  <select className="select" name="status" defaultValue={request.status}>
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {requestStatusLabels[status]}
                      </option>
                    ))}
                  </select>
                </label>
                <button className="btn btn-primary" type="submit">
                  Guardar estado
                </button>
              </form>
            </div>
          </details>
        ))}
      </div>
    </AdminShell>
  );
}

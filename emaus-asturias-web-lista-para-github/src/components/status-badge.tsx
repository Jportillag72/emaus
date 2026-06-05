import type { RequestStatus, RetreatStatus } from "@/lib/types";
import { requestStatusLabels, retreatStatusLabels } from "@/lib/site";

type StatusBadgeProps =
  | {
      type: "retreat";
      status: RetreatStatus;
    }
  | {
      type: "request";
      status: RequestStatus;
    };

const colorByStatus: Record<string, string> = {
  proximamente: "bg-olive/12 text-olive",
  inscripciones_abiertas: "bg-gold/20 text-night",
  completo: "bg-night/10 text-night",
  finalizado: "bg-stone text-ink/70",
  nueva: "bg-gold/20 text-night",
  en_revision: "bg-olive/12 text-olive",
  contestada: "bg-night/10 text-night",
  archivada: "bg-stone text-ink/70"
};

export function StatusBadge(props: StatusBadgeProps) {
  const label =
    props.type === "retreat"
      ? retreatStatusLabels[props.status]
      : requestStatusLabels[props.status];

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold ${colorByStatus[props.status]}`}
    >
      {label}
    </span>
  );
}

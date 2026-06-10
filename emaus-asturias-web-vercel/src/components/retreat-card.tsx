import Image from "next/image";
import Link from "next/link";
import { communityLabels } from "@/lib/site";
import type { Retreat } from "@/lib/types";
import { formatDateRange } from "@/lib/utils";
import { StatusBadge } from "./status-badge";

type RetreatCardProps = {
  retreat: Retreat;
};

export function RetreatCard({ retreat }: RetreatCardProps) {
  return (
    <article className="card grid overflow-hidden">
      <Link href={`/retiros/${retreat.slug}`} className="grid">
        <span className="relative grid aspect-[4/3] place-items-center bg-white sm:aspect-[16/10]">
          {retreat.image_url ? (
            <Image
              src={retreat.image_url}
              alt={`Imagen de ${retreat.title}`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          ) : (
            <span className="font-display text-3xl font-bold text-night/30">EMAÚS</span>
          )}
        </span>
      </Link>
      <div className="grid gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge type="retreat" status={retreat.status} />
          <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-olive">
            {communityLabels[retreat.community]}
          </span>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold leading-tight text-night">
            <Link href={`/retiros/${retreat.slug}`}>{retreat.title}</Link>
          </h3>
          <p className="mt-3 text-sm font-bold text-ink/70">
            {formatDateRange(retreat.start_date, retreat.end_date)}
          </p>
          <p className="mt-1 text-sm text-ink/62">{retreat.location}</p>
          <p className="mt-4 text-sm leading-7 text-ink/72">{retreat.short_description}</p>
        </div>
        <Link href={`/retiros/${retreat.slug}`} className="btn btn-secondary w-full sm:w-fit">
          Más información
        </Link>
      </div>
    </article>
  );
}

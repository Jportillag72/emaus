import Image from "next/image";
import Link from "next/link";
import type { News } from "@/lib/types";
import { formatDateTime } from "@/lib/utils";

type NewsCardProps = {
  item: News;
};

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="card grid overflow-hidden">
      <Link href={`/noticias/${item.slug}`} className="relative grid aspect-[16/9] place-items-center bg-white">
        {item.featured_image_url ? (
          <Image
            src={item.featured_image_url}
            alt={`Imagen de ${item.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <span className="font-display text-3xl font-bold text-night/30">EMAÚS</span>
        )}
      </Link>
      <div className="grid gap-3 p-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-olive">
          {item.category}
        </p>
        <h3 className="font-display text-2xl font-bold leading-tight text-night">
          <Link href={`/noticias/${item.slug}`}>{item.title}</Link>
        </h3>
        <p className="text-xs font-bold text-ink/55">{formatDateTime(item.published_at)}</p>
        <p className="text-sm leading-7 text-ink/72">{item.excerpt}</p>
        <Link href={`/noticias/${item.slug}`} className="btn btn-secondary w-fit">
          Leer noticia
        </Link>
      </div>
    </article>
  );
}

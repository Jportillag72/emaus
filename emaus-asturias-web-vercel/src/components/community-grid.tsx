import Image from "next/image";
import Link from "next/link";
import { communityCards } from "@/lib/site";

export function CommunityGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {communityCards.map((card) => (
        <Link key={card.key} href={card.href} className="card group grid min-h-[290px] gap-5 p-6">
          <span className="grid h-28 place-items-center rounded-md bg-white p-4">
            <Image
              src={card.logo}
              alt={`Logo de ${card.title}`}
              width={170}
              height={120}
              className="max-h-24 w-auto object-contain transition duration-200 group-hover:scale-[1.03]"
            />
          </span>
          <span>
            <span className="block font-display text-2xl font-bold text-night">{card.title}</span>
            <span className="mt-3 block text-sm leading-7 text-ink/72">{card.description}</span>
            <span className="btn btn-secondary mt-5 w-fit">{card.buttonLabel}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

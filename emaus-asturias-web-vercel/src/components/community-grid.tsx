import Image from "next/image";
import Link from "next/link";
import { communityCards } from "@/lib/site";

export function CommunityGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {communityCards.map((card) => (
        <Link
          key={card.key}
          href={card.href}
          className="card group grid gap-4 p-4 sm:min-h-[290px] sm:gap-5 sm:p-6"
        >
          <span className="grid h-20 place-items-center rounded-md bg-white p-3 sm:h-28 sm:p-4">
            <Image
              src={card.logo}
              alt={`Logo de ${card.title}`}
              width={170}
              height={120}
              className="max-h-16 w-auto object-contain transition duration-200 group-hover:scale-[1.03] sm:max-h-24"
            />
          </span>
          <span>
            <span className="block font-display text-2xl font-bold text-night">{card.title}</span>
            <span className="mt-3 block text-sm leading-6 text-ink/72 sm:leading-7">
              {card.description}
            </span>
            <span className="btn btn-secondary mt-4 w-full sm:mt-5 sm:w-fit">{card.buttonLabel}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

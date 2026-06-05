import Image from "next/image";
import Link from "next/link";
import { navItems, siteName } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-night/10 bg-parchment/95 backdrop-blur">
      <div className="header-shell flex min-h-16 items-center justify-between gap-3 py-2">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Inicio EMAÚS Asturias">
          <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-gold/45 bg-white">
            <Image
              src="/images/logos/logo-emaus-hombres.png"
              alt="Símbolo de EMAÚS Asturias"
              width={38}
              height={38}
              className="object-contain"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold leading-tight text-night">
              {siteName}
            </span>
            <span className="hidden truncate text-[0.64rem] font-bold uppercase tracking-[0.08em] text-olive xl:block">
              San Martín de El Berrón
            </span>
          </span>
        </Link>

        <nav className="hidden flex-none items-center justify-end gap-2 whitespace-nowrap text-[0.78rem] font-extrabold text-night/82 lg:flex xl:gap-3 xl:text-[0.82rem]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 px-0.5 hover:text-olive">
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group relative lg:hidden">
          <summary className="btn btn-secondary cursor-pointer list-none">Menú</summary>
          <nav className="absolute right-0 mt-3 grid w-72 gap-1 rounded-lg border border-night/10 bg-white p-3 text-sm font-bold shadow-soft">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 hover:bg-parchment">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

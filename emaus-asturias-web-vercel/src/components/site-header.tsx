"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteName } from "@/lib/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function closeOnDesktop() {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-night/10 bg-parchment/95 backdrop-blur">
      <div className="header-shell flex min-h-16 items-center justify-between gap-3 py-2">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2.5"
          aria-label="Inicio EMAÚS Asturias"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-gold/45 bg-white max-[380px]:size-9">
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
            <span className="block truncate font-display text-lg font-bold leading-tight text-night max-[380px]:text-base">
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

        <div className="lg:hidden">
          <button
            type="button"
            className="btn btn-secondary min-w-[78px] px-4"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Cerrar menú"
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-night/25 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <nav
            id="mobile-menu"
            className="fixed left-3 right-3 top-[4.75rem] z-50 grid max-h-[calc(100svh-5.5rem)] gap-1 overflow-y-auto rounded-lg border border-night/12 bg-white p-3 text-base font-extrabold text-night shadow-soft lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-3 hover:bg-parchment"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </>
      ) : null}
    </header>
  );
}

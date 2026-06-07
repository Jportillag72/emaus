import Link from "next/link";
import { navItems, parishName, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-night/10 bg-night text-white">
      <div className="shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold">{siteName}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            EMAÚS, Effetá y Bartimeo en Asturias, vinculados a la {parishName}.
          </p>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold">Mapa</p>
          <div className="mt-4 grid gap-2 text-sm text-white/78">
            {navItems.slice(0, 7).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold">Legal</p>
          <div className="mt-4 grid gap-2 text-sm text-white/78">
            <Link href="/privacidad" className="hover:text-gold">
              Privacidad
            </Link>
            <Link href="/aviso-legal" className="hover:text-gold">
              Aviso legal
            </Link>
            <Link href="/cookies" className="hover:text-gold">
              Cookies
            </Link>
            <Link href="/admin" className="hover:text-gold">
              Admin
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="shell text-xs text-white/55">
          Textos legales, emails, teléfonos, redes sociales, logos y fotografías finales se gestionan
          desde el panel privado.
        </div>
      </div>
    </footer>
  );
}

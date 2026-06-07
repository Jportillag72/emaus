import Link from "next/link";
import { logoutAction } from "@/lib/admin-actions";
import { getAdminSession } from "@/lib/auth";
import { adminNavItems, siteName } from "@/lib/site";

type AdminShellProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export async function AdminShell({ children, title, description }: AdminShellProps) {
  const session = await getAdminSession();

  return (
    <main className="min-h-screen bg-parchment">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-night/10 bg-night p-5 text-white lg:border-b-0 lg:border-r">
          <Link href="/admin" className="font-display text-3xl font-bold">
            {siteName}
          </Link>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-gold">
            Panel privado
          </p>
          <nav className="mt-8 grid gap-2">
            {adminNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-bold text-white/78 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            className="mt-6 block rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-extrabold text-white hover:bg-white hover:text-night"
          >
            Volver a la web
          </Link>
          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="text-xs leading-6 text-white/62">
              {session?.demo ? "Modo demo local" : session?.email}
            </p>
            <form action={logoutAction} className="mt-4">
              <button className="btn bg-white text-night" type="submit">
                Cerrar sesión
              </button>
            </form>
          </div>
        </aside>
        <section className="min-w-0">
          <header className="border-b border-night/10 bg-white">
            <div className="px-5 py-8 md:px-8">
              <h1 className="font-display text-4xl font-bold text-night">{title}</h1>
              {description ? <p className="mt-2 max-w-2xl text-sm leading-7 text-ink/65">{description}</p> : null}
            </div>
          </header>
          <div className="px-5 py-8 md:px-8">{children}</div>
        </section>
      </div>
    </main>
  );
}

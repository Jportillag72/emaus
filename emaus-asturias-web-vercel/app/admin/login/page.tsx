import type { Metadata } from "next";
import Link from "next/link";
import { AdminLoginForm } from "@/components/admin-login-form";

export const metadata: Metadata = {
  title: "Acceso privado | EMAÚS Asturias",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-parchment p-5">
      <div className="w-full max-w-md">
        <p className="eyebrow">Panel privado</p>
        <h1 className="page-title mt-3">Acceso CMS</h1>
        <p className="mt-4 text-sm leading-7 text-ink/68">
          Inicia sesión con el usuario y la contraseña del panel privado.
        </p>
        <div className="mt-7">
          <AdminLoginForm />
        </div>
        <Link
          href="/"
          className="mt-5 block text-center text-sm font-extrabold text-night hover:text-olive"
        >
          Volver a la web
        </Link>
      </div>
    </main>
  );
}

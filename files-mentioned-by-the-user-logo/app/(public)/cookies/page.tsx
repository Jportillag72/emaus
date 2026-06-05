import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Política de cookies de EMAÚS Asturias."
};

export default function CookiesPage() {
  return (
    <LegalPage
      slug="cookies"
      title="Cookies"
      lead="Información provisional sobre el uso de cookies y tecnologías similares."
    />
  );
}

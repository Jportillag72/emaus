import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de EMAÚS Asturias."
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      slug="aviso-legal"
      title="Aviso legal"
      lead="Información provisional sobre titularidad, responsabilidad y condiciones de uso."
    />
  );
}

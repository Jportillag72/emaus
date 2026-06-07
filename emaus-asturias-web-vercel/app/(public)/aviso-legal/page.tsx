import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalNoticeContent } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de EMAÚS Asturias."
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      slug="aviso-legal"
      title="Aviso legal"
      lead="Información sobre titularidad, finalidad de la web, condiciones de uso, responsabilidad y contenidos."
      defaultContent={legalNoticeContent}
    />
  );
}

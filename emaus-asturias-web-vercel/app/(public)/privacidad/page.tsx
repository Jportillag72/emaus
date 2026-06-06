import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad de EMAÚS Asturias."
};

export default function PrivacyPage() {
  return (
    <LegalPage
      slug="privacidad"
      title="Privacidad"
      lead="Información provisional sobre el tratamiento de datos personales."
    />
  );
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacyPolicyContent } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales en la web de EMAÚS Asturias."
};

export default function PrivacyPage() {
  return (
    <LegalPage
      slug="privacidad"
      title="Política de privacidad"
      lead="Información sobre el tratamiento de datos personales en solicitudes de información, contacto y uso de la web."
      defaultContent={privacyPolicyContent}
    />
  );
}

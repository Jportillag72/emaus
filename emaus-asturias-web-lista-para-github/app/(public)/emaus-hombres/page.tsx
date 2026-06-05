import type { Metadata } from "next";
import { EmausPathPage } from "@/components/emaus-path-page";
import { emausHombresContent } from "@/lib/emaus-content";
import { getPublicRetreats } from "@/lib/supabase-rest";

export const metadata: Metadata = {
  title: "EMAÚS Asturias Hombres | Retiros para hombres",
  description:
    "EMAÚS Asturias Hombres es una experiencia de retiro cristiano para hombres adultos que desean vivir un encuentro profundo de fe y comunidad."
};

export default async function EmausHombresPage() {
  const retreats = await getPublicRetreats();

  return <EmausPathPage content={emausHombresContent} retreats={retreats} />;
}

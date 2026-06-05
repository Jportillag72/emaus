import type { Metadata } from "next";
import { EmausPathPage } from "@/components/emaus-path-page";
import { emausMujeresContent } from "@/lib/emaus-content";
import { getPublicRetreats } from "@/lib/supabase-rest";

export const metadata: Metadata = {
  title: "EMAÚS Asturias Mujeres | Retiros para mujeres",
  description:
    "EMAÚS Asturias Mujeres es una experiencia de retiro cristiano para mujeres adultas que desean vivir un encuentro de fe, escucha y comunidad."
};

export default async function EmausMujeresPage() {
  const retreats = await getPublicRetreats();

  return <EmausPathPage content={emausMujeresContent} retreats={retreats} />;
}

import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/auth";
import { getContactRequests } from "@/lib/supabase-rest";
import { escapeCsv } from "@/lib/utils";

export async function GET() {
  const token = await getAccessToken();
  const requests = await getContactRequests(token);
  const header = [
    "fecha",
    "nombre",
    "email",
    "telefono",
    "comunidad",
    "estado",
    "mensaje",
    "privacidad"
  ];
  const rows = requests.map((request) => [
    request.created_at,
    request.name,
    request.email,
    request.phone ?? "",
    request.community_interest,
    request.status,
    request.message,
    request.privacy_accepted ? "si" : "no"
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => escapeCsv(String(cell))).join(","))
    .join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=solicitudes-emaus-asturias.csv"
    }
  });
}

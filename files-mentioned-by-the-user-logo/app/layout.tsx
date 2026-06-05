import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emausasturias.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EMAÚS Asturias",
    template: "%s | EMAÚS Asturias"
  },
  description:
    "EMAÚS, Effetá y Bartimeo en Asturias, vinculados a la Parroquia de San Martín de El Berrón.",
  openGraph: {
    title: "EMAÚS Asturias",
    description:
      "Caminos de fe y comunidad vinculados a la Parroquia de San Martín de El Berrón.",
    url: siteUrl,
    siteName: "EMAÚS Asturias",
    locale: "es_ES",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

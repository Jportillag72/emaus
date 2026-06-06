import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { parishName, siteName } from "@/lib/site";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://emausasturias.vercel.app",
    parentOrganization: {
      "@type": "Organization",
      name: parishName
    }
  };

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

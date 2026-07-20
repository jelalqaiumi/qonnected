import type { Metadata } from "next";
import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServiceAreas from "@/components/ServiceAreas";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { fontVariables } from "@/lib/fonts";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
    languages: { "sv-SE": "/", "en-GB": "/en" },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SwedishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={fontVariables}>
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Nav locale="sv" />
        <main>{children}</main>
        <ServiceAreas locale="sv" />
        <Footer locale="sv" />
      </body>
    </html>
  );
}

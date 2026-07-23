import type { Metadata } from "next";
import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServiceAreas from "@/components/ServiceAreas";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { fontVariables } from "@/lib/fonts";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const englishTagline = "Software developer building websites and custom systems";
const englishDescription =
  "Software developer based in Motala, Sweden. I build websites, web apps and custom systems — from idea to running in production.";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${englishTagline}`,
    template: `%s — ${site.name}`,
  },
  description: englishDescription,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/en",
    languages: { "sv-SE": "/", "en-GB": "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${site.url}/en`,
    siteName: site.name,
    title: `${site.name} — ${englishTagline}`,
    description: englishDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${englishTagline}`,
    description: englishDescription,
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

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}",
          }}
        />
      </head>
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Nav locale="en" />
        <main>{children}</main>
        <ServiceAreas locale="en" />
        <Footer locale="en" />
      </body>
    </html>
  );
}

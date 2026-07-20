import { absoluteUrl, site } from "@/lib/site";
import type { Service } from "@/lib/services";

/** Stabilt @id så att övriga scheman kan peka tillbaka på samma organisation. */
export const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    logo: absoluteUrl("/logo-dark.webp"),
    image: absoluteUrl("/logo-dark.webp"),
    areaServed: [
      { "@type": "AdministrativeArea", name: site.region },
      { "@type": "Country", name: "Sverige" },
    ],
    knowsAbout: [
      "Webbutveckling",
      "Systemutveckling",
      "Fullstackutveckling",
      "Bokningssystem",
      "E-handel",
      "Sökmotoroptimering",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    inLanguage: "sv-SE",
    publisher: { "@id": organizationId },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceSchema(service: Service, path = `/tjanster/${service.slug}`) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    url: absoluteUrl(path),
    provider: { "@id": organizationId },
    areaServed: [
      { "@type": "AdministrativeArea", name: site.region },
      { "@type": "Country", name: "Sverige" },
    ],
    inLanguage: "sv-SE",
  };
}

/**
 * Tjänst knuten till en specifik ort. Ger Google en tydlig koppling mellan
 * verksamheten och orten, vilket är det som driver lokal synlighet.
 */
export function localServiceSchema(areaName: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: "Webbutveckling och systemutveckling",
    provider: { "@id": organizationId },
    areaServed: { "@type": "Place", name: areaName },
    inLanguage: "sv-SE",
  };
}

/** Brödsmulor hjälper Google visa sidhierarkin i sökresultatet. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

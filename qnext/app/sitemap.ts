import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { servicesEn } from "@/lib/services.en";
import { locations } from "@/lib/locations";
import { locationsEn } from "@/lib/locations.en";
import { absoluteUrl } from "@/lib/site";
import { paths } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const svPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl(paths.sv.services), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl(paths.sv.about), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl(paths.sv.contact), lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl(paths.sv.privacy), lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const enPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl(paths.en.home), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl(paths.en.services), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl(paths.en.about), lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl(paths.en.contact), lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];

  const svServices: MetadataRoute.Sitemap = services.map((s) => ({
    url: absoluteUrl(`${paths.sv.services}/${s.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const enServices: MetadataRoute.Sitemap = servicesEn.map((s) => ({
    url: absoluteUrl(`${paths.en.services}/${s.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const svAreas: MetadataRoute.Sitemap = locations.map((l) => ({
    url: absoluteUrl(`${paths.sv.areas}/${l.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const enAreas: MetadataRoute.Sitemap = locationsEn.map((l) => ({
    url: absoluteUrl(`${paths.en.areas}/${l.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...svPages,
    ...svServices,
    ...svAreas,
    ...enPages,
    ...enServices,
    ...enAreas,
  ];
}

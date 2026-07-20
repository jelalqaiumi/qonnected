import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/tjanster"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/om"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/kontakt"), lastModified, changeFrequency: "yearly", priority: 0.8 },
    {
      url: absoluteUrl("/integritetspolicy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: absoluteUrl(`/tjanster/${s.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: absoluteUrl(`/orter/${l.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}

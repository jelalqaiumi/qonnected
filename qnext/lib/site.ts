export const site = {
  url: "https://qonnected.se",
  name: "Qonnected",
  /** Används som default-title och i strukturerad data. */
  tagline: "Systemutvecklare som bygger hemsidor och system",
  description:
    "Systemutvecklare i Östergötland. Jag bygger hemsidor, webbappar och skräddarsydda system — från idé till drift.",
  email: "hej@qonnected.se",
  /** Ort/region för lokal SEO. */
  region: "Östergötland",
  country: "SE",
  locale: "sv_SE",
} as const;

/** Absolut URL för canonical, sitemap och OG-taggar. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

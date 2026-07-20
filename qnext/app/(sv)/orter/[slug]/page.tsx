import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationDetail from "@/components/LocationDetail";
import { locations, getLocation } from "@/lib/locations";
import { getService } from "@/lib/services";
import { areaSlugMap } from "@/lib/i18n";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Ort" };

  const path = `/orter/${location.slug}`;
  const enPath = `/en/areas/${areaSlugMap[location.slug]}`;

  return {
    title: location.title,
    description: location.description,
    alternates: {
      canonical: path,
      languages: { "sv-SE": path, "en-GB": enPath },
    },
    openGraph: {
      type: "article",
      url: path,
      title: location.title,
      description: location.description,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const highlighted = location.highlight
    .map((s) => getService(s))
    .filter((s) => s !== undefined);

  return <LocationDetail location={location} highlighted={highlighted} locale="sv" />;
}

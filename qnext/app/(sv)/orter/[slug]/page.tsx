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

  // Sidorna ska inte nås av någon — varken via länk eller sökresultat.
  // De ligger kvar i koden ifall de ska tas i bruk igen. Tas de i bruk måste
  // robots-blocket bort och sidorna läggas tillbaka i sitemap.ts.
  return {
    title: location.title,
    description: location.description,
    robots: { index: false, follow: false },
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

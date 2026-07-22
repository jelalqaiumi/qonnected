import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationDetail from "@/components/LocationDetail";
import { locationsEn, getLocationEn } from "@/lib/locations.en";
import { getServiceEn } from "@/lib/services.en";
import { areaSlugMapReverse } from "@/lib/i18n";

export function generateStaticParams() {
  return locationsEn.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationEn(slug);
  if (!location) return { title: "Area" };

  // Se kommentaren i app/(sv)/orter/[slug]/page.tsx — sidorna är avsiktligt
  // undantagna från både navigation och sökresultat.
  return {
    title: location.title,
    description: location.description,
    robots: { index: false, follow: false },
  };
}

export default async function LocationPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationEn(slug);
  if (!location) notFound();

  const highlighted = location.highlight
    .map((s) => getServiceEn(s))
    .filter((s) => s !== undefined);

  return <LocationDetail location={location} highlighted={highlighted} locale="en" />;
}

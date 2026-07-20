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

  const path = `/en/areas/${location.slug}`;
  const svPath = `/orter/${areaSlugMapReverse[location.slug]}`;

  return {
    title: location.title,
    description: location.description,
    alternates: {
      canonical: path,
      languages: { "sv-SE": svPath, "en-GB": path },
    },
    openGraph: {
      type: "article",
      url: path,
      title: location.title,
      description: location.description,
    },
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

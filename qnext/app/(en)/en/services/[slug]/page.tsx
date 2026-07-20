import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { servicesEn, getServiceEn } from "@/lib/services.en";
import { serviceSlugMapReverse } from "@/lib/i18n";

export function generateStaticParams() {
  return servicesEn.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceEn(slug);
  if (!service) return { title: "Service" };

  const path = `/en/services/${service.slug}`;
  const svPath = `/tjanster/${serviceSlugMapReverse[service.slug]}`;

  return {
    title: service.title,
    description: service.short,
    alternates: {
      canonical: path,
      languages: { "sv-SE": svPath, "en-GB": path },
    },
    openGraph: {
      type: "article",
      url: path,
      title: `${service.title} — Qonnected`,
      description: service.short,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} — Qonnected`,
      description: service.short,
    },
  };
}

export default async function ServicePageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceEn(slug);
  if (!service) notFound();

  const others = servicesEn.filter((s) => s.slug !== service.slug);

  return <ServiceDetail service={service} others={others} locale="en" />;
}

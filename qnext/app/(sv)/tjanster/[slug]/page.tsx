import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { services, getService } from "@/lib/services";
import { serviceSlugMap } from "@/lib/i18n";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Tjänst" };

  const path = `/tjanster/${service.slug}`;
  const enPath = `/en/services/${serviceSlugMap[service.slug]}`;

  return {
    title: service.title,
    description: service.short,
    alternates: {
      canonical: path,
      languages: { "sv-SE": path, "en-GB": enPath },
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return <ServiceDetail service={service} others={others} locale="sv" />;
}

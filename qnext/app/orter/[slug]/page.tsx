import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { PageHead, CtaStrip } from "@/components/Sections";
import { ServiceIcon, ArrowUpRight } from "@/components/Icons";
import { locations, getLocation } from "@/lib/locations";
import { getService } from "@/lib/services";
import { faqSchema, breadcrumbSchema, localServiceSchema } from "@/lib/schema";

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
  return {
    title: location.title,
    description: location.description,
    alternates: { canonical: path },
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

  return (
    <>
      <JsonLd data={localServiceSchema(location.name, location.title)} />
      <JsonLd data={faqSchema(location.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", path: "/" },
          { name: location.title, path: `/orter/${location.slug}` },
        ])}
      />

      <PageHead
        eyebrow={location.name}
        title={location.title}
        intro={location.intro}
      />

      {/* BRÖDTEXT */}
      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="max-w-[760px]">
            {location.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mb-6 text-[1.08rem] leading-relaxed text-muted last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* RELEVANTA TJÄNSTER */}
      <section className="border-t border-line bg-paper py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="mb-14 max-w-[620px]">
            <span className="eyebrow">Vanligast här</span>
            <h2 className="section-h2">
              Det jag oftast bygger {location.inName}
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-7 max-[920px]:grid-cols-1">
            {highlighted.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/tjanster/${s.slug}`}
                  className="group block h-full rounded-2xl border border-line bg-white p-[30px] transition duration-300 hover:-translate-y-1 hover:border-signal hover:shadow-[0_18px_40px_-22px_rgba(6,51,142,0.5)]"
                >
                  <ServiceIcon
                    name={s.icon}
                    className="mb-[18px] h-[42px] w-[42px] text-royal transition-colors group-hover:text-signal"
                  />
                  <h3 className="font-display text-[1.24rem] font-semibold tracking-[-0.01em] text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[0.98rem] text-muted">{s.short}</p>
                  <span className="mt-[18px] inline-flex items-center gap-1.5 font-mono text-[0.76rem] tracking-[0.08em] text-royal-bright">
                    Läs mer
                    <ArrowUpRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink py-20 text-white max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="mb-14 max-w-[620px]">
            <span className="eyebrow eyebrow-light">Vanliga frågor</span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
              Att jobba med mig {location.inName}
            </h2>
          </Reveal>
          <Reveal className="mx-auto max-w-[820px]">
            <Faq items={location.faqs} />
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title={`Ska vi bygga något ${location.inName}?`}
        text="Berätta kort vad du vill få gjort så återkommer jag med ett förslag."
      />
    </>
  );
}

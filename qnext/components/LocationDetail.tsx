import Link from "next/link";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { PageHead, CtaStrip } from "@/components/Sections";
import { ServiceIcon, ArrowUpRight } from "@/components/Icons";
import type { Location } from "@/lib/locations";
import type { Service } from "@/lib/services";
import { paths, ui, type Locale } from "@/lib/i18n";
import { faqSchema, breadcrumbSchema, localServiceSchema } from "@/lib/schema";

/** Delas av /orter/[slug] och /en/areas/[slug]. */
export default function LocationDetail({
  location,
  highlighted,
  locale,
}: {
  location: Location;
  highlighted: Service[];
  locale: Locale;
}) {
  const t = ui[locale];
  const p = paths[locale];

  return (
    <>
      <JsonLd data={localServiceSchema(location.name, location.title)} />
      <JsonLd data={faqSchema(location.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.navHome, path: p.home },
          { name: location.title, path: `${p.areas}/${location.slug}` },
        ])}
      />

      <PageHead eyebrow={location.name} title={location.title} intro={location.intro} />

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
            <span className="eyebrow">
              {locale === "en" ? "Most common here" : "Vanligast här"}
            </span>
            <h2 className="section-h2">
              {locale === "en"
                ? `What I mostly build ${location.inName}`
                : `Det jag oftast bygger ${location.inName}`}
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-7 max-[920px]:grid-cols-1">
            {highlighted.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`${p.services}/${s.slug}`}
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
                    {t.readMore}
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
            <span className="eyebrow eyebrow-light">{t.faqEyebrow}</span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
              {locale === "en"
                ? `Working with me ${location.inName}`
                : `Att jobba med mig ${location.inName}`}
            </h2>
          </Reveal>
          <Reveal className="mx-auto max-w-[820px]">
            <Faq items={location.faqs} />
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title={
          locale === "en"
            ? `Shall we build something ${location.inName}?`
            : `Ska vi bygga något ${location.inName}?`
        }
        text={
          locale === "en"
            ? "Tell me briefly what you need and I'll come back with a proposal."
            : "Berätta kort vad du vill få gjort så återkommer jag med ett förslag."
        }
        cta={t.navContact}
        href={p.contact}
      />
    </>
  );
}

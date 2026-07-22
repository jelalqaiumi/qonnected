import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { CtaStrip } from "@/components/Sections";
import { ServiceIcon, CheckIcon, ArrowRight, ArrowUpRight } from "@/components/Icons";
import type { Service } from "@/lib/services";
import { paths, ui, type Locale } from "@/lib/i18n";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

/** Delas av /tjanster/[slug] och /en/services/[slug]. */
export default function ServiceDetail({
  service,
  others,
  locale,
}: {
  service: Service;
  others: Service[];
  locale: Locale;
}) {
  const t = ui[locale];
  const p = paths[locale];
  const base = `${p.services}/${service.slug}`;

  return (
    <>
      <JsonLd data={serviceSchema(service, base)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.navHome, path: p.home },
          { name: t.navServices, path: p.services },
          { name: service.title, path: base },
        ])}
      />

      {/* HEAD */}
      <section className="relative mx-4 mt-4 overflow-hidden rounded-[30px] bg-[radial-gradient(120%_160%_at_85%_0%,#062a6e_0%,var(--color-navy)_48%,var(--color-navy-deep)_100%)] px-0 pb-[76px] pt-[150px] text-white max-md:mx-3 max-md:mt-3 max-md:rounded-[22px] max-md:pb-[60px] max-md:pt-[126px]">
        {service.heroImage ? (
          <>
            {/* Bild + mörk gradient så att den vita rubriktexten förblir läsbar. */}
            <Image
              src={service.heroImage}
              alt=""
              fill
              priority
              quality={90}
              sizes="100vw"
              className="z-0 object-cover object-center"
            />
            {/* Neutralt mörkt filter (inte blått) som tonar av mot höger — håller
                den vita rubriktexten läsbar utan att lägga en färgton på bilden. */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(100deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.42)_55%,rgba(0,0,0,0.12)_100%)]" />
          </>
        ) : (
          <div className="pointer-events-none absolute -right-20 -top-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(70,180,255,0.18)_0%,rgba(70,180,255,0)_70%)]" />
        )}
        <div className="wrap relative z-[2]">
          <Link
            href={p.services}
            className="mb-7 inline-flex items-center gap-2 font-mono text-[0.78rem] tracking-[0.08em] text-signal-soft transition-colors hover:text-white"
          >
            {t.allServices}
          </Link>
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-xl border border-signal-soft/30 bg-white/5">
              <ServiceIcon name={service.icon} className="h-7 w-7 text-signal" />
            </span>
            <span className="font-mono text-[0.8rem] tracking-[0.12em] text-signal-soft">
              {service.num} / {locale === "en" ? "Service" : "Tjänst"}
            </span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.3rem,5vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.025em]">
            {service.title}
          </h1>
          <p className="mt-5 max-w-[620px] text-[clamp(1.02rem,1.6vw,1.18rem)] text-[#e7eefc]/80">
            {service.intro}
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap grid grid-cols-[1.1fr_1fr] gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-12">
          <Reveal>
            <span className="eyebrow">{t.included}</span>
            <h2 className="section-h2 mb-8">{t.whatYouGet}</h2>
            <ul className="grid gap-4">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-signal/15 text-royal">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[1.02rem] text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-[20px] border border-line bg-white p-9">
              <span className="eyebrow">{t.goodForYou}</span>
              <h3 className="mb-6 mt-4 font-display text-[1.5rem] font-semibold tracking-[-0.01em] text-ink">
                {t.goodForHeading}
              </h3>
              <ul className="grid gap-4">
                {service.goodFor.map((g) => (
                  <li key={g} className="border-l-2 border-signal pl-4 text-[1rem] text-muted">
                    {g}
                  </li>
                ))}
              </ul>
              <Link href={p.contact} className="btn-primary mt-9 w-full justify-center">
                {t.navContact}
                <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VARFÖR DET SPELAR ROLL — branschsiffror med källa, inga resultatlöften */}
      <section className="pb-[104px] max-md:pb-[72px]">
        <div className="wrap">
          <Reveal className="mx-auto max-w-[860px] rounded-[22px] border border-signal/25 bg-[linear-gradient(140deg,rgba(6,51,142,0.05)_0%,rgba(70,180,255,0.08)_100%)] p-11 max-md:p-7">
            {service.impact.stat && (
              <div className="mb-6 flex items-baseline gap-4 max-md:flex-col max-md:gap-1.5">
                <span className="font-display text-[clamp(2.6rem,6vw,3.8rem)] font-semibold leading-none tracking-[-0.03em] text-royal">
                  {service.impact.stat}
                </span>
                <span className="max-w-[440px] text-[1.02rem] leading-snug text-ink">
                  {service.impact.statLabel}
                </span>
              </div>
            )}
            <p className="text-[1.05rem] leading-relaxed text-muted">{service.impact.body}</p>
            {service.impact.source && (
              <p className="mt-5 font-mono text-[0.76rem] tracking-[0.06em] text-muted/70">
                {t.source}{" "}
                <a
                  href={service.impact.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-royal"
                >
                  {service.impact.source}
                </a>
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-line bg-paper py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="mb-14 max-w-[620px]">
            <span className="eyebrow">{t.processEyebrow}</span>
            <h2 className="section-h2">{t.processHeading}</h2>
          </Reveal>
          <ol className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <li className="h-full rounded-2xl border border-line bg-white p-[30px]">
                  <span className="font-mono text-[0.78rem] tracking-[0.12em] text-royal-bright">
                    {t.step} {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-[1.2rem] font-semibold tracking-[-0.01em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.99rem] leading-relaxed text-muted">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PRIS — renderas bara när prisuppgifter är ifyllda */}
      {service.pricing && (
        <section className="py-[104px] max-md:py-[72px]">
          <div className="wrap">
            <Reveal className="mx-auto max-w-[720px] rounded-[20px] border border-line bg-white p-10 text-center max-md:p-7">
              <span className="eyebrow">{t.pricingEyebrow}</span>
              <p className="mt-5 font-display text-[clamp(2rem,4.4vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
                {service.pricing.to
                  ? `${service.pricing.from} – ${service.pricing.to}`
                  : `${t.pricingFrom} ${service.pricing.from}`}
              </p>
              <p className="mx-auto mt-4 max-w-[520px] text-[1.02rem] leading-relaxed text-muted">
                {service.pricing.note}
              </p>
              <Link href={p.contact} className="btn-primary mt-8">
                {t.getQuote}
                <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-ink py-20 text-white max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="mb-14 max-w-[620px]">
            <span className="eyebrow eyebrow-light">{t.faqEyebrow}</span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
              {service.title} {t.faqHeadingSuffix}
            </h2>
          </Reveal>
          <Reveal className="mx-auto max-w-[820px]">
            <Faq items={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="border-t border-line py-20 max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="mb-10">
            <span className="eyebrow">{t.moreIBuild}</span>
            <h2 className="section-h2">{t.otherServices}</h2>
          </Reveal>
          <div className="grid grid-cols-5 gap-3.5 max-[920px]:grid-cols-2 max-md:grid-cols-1">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`${p.services}/${o.slug}`}
                className="group rounded-2xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-signal"
              >
                <ServiceIcon
                  name={o.icon}
                  className="mb-3 h-8 w-8 text-royal transition-colors group-hover:text-signal"
                />
                <div className="text-[0.98rem] font-medium text-ink">{o.title}</div>
                <span className="mt-2 inline-flex items-center gap-1 font-mono text-[0.72rem] text-royal-bright">
                  {t.readMore}
                  <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title={
          locale === "en"
            ? "Shall we build something together?"
            : "Ska vi bygga något ihop?"
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

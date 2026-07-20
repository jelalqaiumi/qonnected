import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { CtaStrip } from "@/components/Sections";
import { ServiceIcon, CheckIcon, ArrowRight, ArrowUpRight } from "@/components/Icons";
import { services, getService } from "@/lib/services";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

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
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: path },
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

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", path: "/" },
          { name: "Tjänster", path: "/tjanster" },
          { name: service.title, path: `/tjanster/${service.slug}` },
        ])}
      />

      {/* HEAD */}
      <section className="relative overflow-hidden bg-[radial-gradient(120%_160%_at_85%_0%,#062a6e_0%,var(--color-navy)_48%,var(--color-navy-deep)_100%)] px-0 pb-[76px] pt-[150px] text-white max-md:pb-[60px] max-md:pt-[126px]">
        <div className="pointer-events-none absolute -right-20 -top-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(70,180,255,0.18)_0%,rgba(70,180,255,0)_70%)]" />
        <div className="wrap relative z-[2]">
          <Link
            href="/tjanster"
            className="mb-7 inline-flex items-center gap-2 font-mono text-[0.78rem] tracking-[0.08em] text-signal-soft transition-colors hover:text-white"
          >
            ← Alla tjänster
          </Link>
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-xl border border-signal-soft/30 bg-white/5">
              <ServiceIcon name={service.icon} className="h-7 w-7 text-signal" />
            </span>
            <span className="font-mono text-[0.8rem] tracking-[0.12em] text-signal-soft">
              {service.num} / Tjänst
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
            <span className="eyebrow">Det här ingår</span>
            <h2 className="section-h2 mb-8">Vad du får</h2>
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
              <span className="eyebrow">Passar dig</span>
              <h3 className="mb-6 mt-4 font-display text-[1.5rem] font-semibold tracking-[-0.01em] text-ink">
                Bra för dig som
              </h3>
              <ul className="grid gap-4">
                {service.goodFor.map((g) => (
                  <li key={g} className="border-l-2 border-signal pl-4 text-[1rem] text-muted">
                    {g}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary mt-9 w-full justify-center">
                Kontakta oss
                <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-line bg-paper py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="mb-14 max-w-[620px]">
            <span className="eyebrow">Så går det till</span>
            <h2 className="section-h2">Från första samtal till färdigt</h2>
          </Reveal>
          <ol className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <li className="h-full rounded-2xl border border-line bg-white p-[30px]">
                  <span className="font-mono text-[0.78rem] tracking-[0.12em] text-royal-bright">
                    Steg {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-[1.2rem] font-semibold tracking-[-0.01em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.99rem] leading-relaxed text-muted">
                    {step.body}
                  </p>
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
              <span className="eyebrow">Vad det kostar</span>
              <p className="mt-5 font-display text-[clamp(2rem,4.4vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
                {service.pricing.to
                  ? `${service.pricing.from} – ${service.pricing.to}`
                  : `Från ${service.pricing.from}`}
              </p>
              <p className="mx-auto mt-4 max-w-[520px] text-[1.02rem] leading-relaxed text-muted">
                {service.pricing.note}
              </p>
              <Link href="/kontakt" className="btn-primary mt-8">
                Få en offert
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
            <span className="eyebrow eyebrow-light">Vanliga frågor</span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
              {service.title} — det du oftast undrar
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
            <span className="eyebrow">Mer jag bygger</span>
            <h2 className="section-h2">Andra tjänster</h2>
          </Reveal>
          <div className="grid grid-cols-5 gap-3.5 max-[920px]:grid-cols-2 max-md:grid-cols-1">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/tjanster/${o.slug}`}
                className="group flex items-center justify-between gap-2 rounded-xl border border-line bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-signal"
              >
                <span className="font-display text-[0.98rem] font-semibold text-ink">
                  {o.title}
                </span>
                <ArrowUpRight className="h-4 w-4 flex-none text-line transition-colors group-hover:text-signal" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title={`Vill du prata ${service.title.toLowerCase()}?`}
        text="Beskriv vad du behöver så återkommer jag inom en arbetsdag."
        cta="Kontakta oss"
      />
    </>
  );
}

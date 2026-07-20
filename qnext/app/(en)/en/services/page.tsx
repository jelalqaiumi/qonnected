import Link from "next/link";
import type { Metadata } from "next";
import { PageHead, CtaStrip } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import { ServiceIcon, ArrowUpRight } from "@/components/Icons";
import { servicesEn } from "@/lib/services.en";
import { paths } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, fullstack development, booking systems, e-commerce and SEO — built from scratch around your business.",
  alternates: {
    canonical: "/en/services",
    languages: { "sv-SE": "/tjanster", "en-GB": "/en/services" },
  },
};

export default function ServicesPageEn() {
  return (
    <>
      <PageHead
        eyebrow="Services"
        title="This is what I build for you"
        intro="From a website built from scratch to a complete system. I pick the simplest solution that solves the problem — not the most elaborate one. Each service has its own page."
      />

      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
            {servicesEn.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`${paths.en.services}/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-[34px] transition duration-300 hover:-translate-y-1 hover:border-signal hover:shadow-[0_18px_40px_-22px_rgba(6,51,142,0.5)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <ServiceIcon
                      name={s.icon}
                      className="h-[42px] w-[42px] text-royal transition-colors group-hover:text-signal"
                    />
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] text-royal-bright">
                      {s.num}
                    </span>
                  </div>
                  <h2 className="font-display text-[1.34rem] font-semibold tracking-[-0.01em] text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-[1rem] leading-relaxed text-muted">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[0.76rem] tracking-[0.08em] text-royal-bright">
                    Read more
                    <ArrowUpRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Not sure which one you need?"
        text="Tell me what you want to solve and I'll suggest the simplest route there."
        cta="Get in touch"
        href={paths.en.contact}
      />
    </>
  );
}

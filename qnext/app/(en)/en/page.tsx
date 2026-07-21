import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import NetworkCanvas from "@/components/NetworkCanvas";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, ServiceIcon } from "@/components/Icons";
import { servicesEn } from "@/lib/services.en";
import { paths } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Software developer in Sweden — websites & custom systems",
  description:
    "I build websites, web apps, booking systems and online shops from scratch. Software developer based in Motala, working with clients across Sweden.",
  alternates: {
    canonical: "/en",
    languages: { "sv-SE": "/", "en-GB": "/en" },
  },
  openGraph: {
    title: "Software developer in Sweden — websites & custom systems",
    description:
      "I build websites, web apps, booking systems and online shops from scratch — from idea to running in production.",
    url: "/en",
  },
};

const faqs = [
  {
    q: "What can you help me with?",
    a: "I build websites, web apps and custom systems — including fullstack applications, booking systems and integrations. If you're not sure what you need, I'm happy to help you work that out.",
  },
  {
    q: "What does a website or system cost?",
    a: "It depends entirely on the scope. A simpler website is one thing, a larger system with a database and logins quite another. Tell me what you want to build and I'll put together a clear proposal and a quote, with no obligation.",
  },
  {
    q: "Do you work with clients outside Östergötland?",
    a: "Yes. I'm based in Motala but work remotely across the Nordics. Most of it is handled perfectly well online, and I'm happy to meet in person when it helps.",
  },
  {
    q: "Can you help me show up on Google?",
    a: "Yes. I always build with performance and search engines in mind, and I can help you with technical SEO and local visibility so your business gets found when customers search.",
  },
  {
    q: "Do I own the code and the site afterwards?",
    a: "Yes. What I build is yours. You'll never end up in a subscription you haven't signed up for — if we haven't agreed on ongoing hosting or maintenance, there's no subscription to get out of. The code can be developed further by me or by someone else.",
  },
  {
    q: "How do we get started?",
    a: "Simply get in touch via the form, email or phone. We'll have an informal conversation, go through what you want to achieve, and then I'll put a proposal together.",
  },
];

export default function HomeEn() {
  const top = servicesEn.slice(0, 3);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep text-white">
        <Image
          src="/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <NetworkCanvas />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(100deg,rgba(0,9,32,0.94)_0%,rgba(0,9,32,0.7)_45%,rgba(0,9,32,0.4)_100%)]" />
        <div className="wrap relative z-[3] pb-20 pt-[120px]">
          <div className="max-w-[760px]">
            <span className="eyebrow eyebrow-light">Software developer</span>
            <h1 className="mt-[26px] font-display text-[clamp(2.6rem,6.2vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              We connect{" "}
              <span className="bg-[linear-gradient(100deg,var(--color-signal),var(--color-signal-soft))] bg-clip-text text-transparent">
                ideas, systems
              </span>{" "}
              and people.
            </h1>
            <p className="mt-[26px] max-w-[560px] text-[clamp(1.05rem,1.7vw,1.28rem)] text-[#e7eefc]/80">
              Software developer in Motala, Sweden. I build websites and custom systems
              that solve real problems. Considered, reliable, and built to grow into.
            </p>
            <div className="mt-[38px] flex flex-wrap gap-4">
              <Link href={paths.en.contact} className="btn-primary">
                Get in touch
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEASER */}
      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="mb-14 max-w-[620px]">
            <span className="eyebrow">What I build</span>
            <h2 className="section-h2">Three things I do most of</h2>
            <p className="mt-4 text-[1.08rem] text-muted">
              You'll find the full range under Services. These are the ones I'm asked for most.
            </p>
          </Reveal>
          <div className="grid grid-cols-3 gap-7 max-[920px]:grid-cols-1">
            {top.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`${paths.en.services}/${s.slug}`}
                  className="group block h-full rounded-2xl border border-line bg-white p-[30px] pb-[34px] transition duration-300 hover:-translate-y-1 hover:border-signal hover:shadow-[0_18px_40px_-22px_rgba(6,51,142,0.5)]"
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
                    Read more →
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
            <span className="eyebrow eyebrow-light">Common questions</span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
              Worth knowing before we start
            </h2>
            <p className="mt-4 text-[1.08rem] text-[#e7eefc]/70">
              Here I answer what I'm asked most often. Can't find your answer? Get in touch.
            </p>
          </Reveal>
          <Reveal className="mx-auto max-w-[820px]">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

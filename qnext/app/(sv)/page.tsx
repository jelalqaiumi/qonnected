import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import NetworkCanvas from "@/components/NetworkCanvas";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, ServiceIcon } from "@/components/Icons";
import { services } from "@/lib/services";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Systemutvecklare i Motala — hemsidor & skräddarsydda system",
  description:
    "Jag bygger hemsidor, webbappar, bokningssystem och e-handel från grunden. Systemutvecklare i Motala som arbetar med kunder i hela Sverige.",
  alternates: {
    canonical: "/",
    languages: { "sv-SE": "/", "en-GB": "/en" },
  },
  openGraph: {
    title: "Systemutvecklare i Motala — hemsidor & skräddarsydda system",
    description:
      "Jag bygger hemsidor, webbappar, bokningssystem och e-handel från grunden — från idé till drift.",
    url: "/",
  },
};

const faqs = [
  {
    q: "Vad kan du hjälpa mig med?",
    a: "Jag bygger hemsidor, webbappar och skräddarsydda system — inklusive fullstackapplikationer, bokningssystem och integrationer. Är du osäker på vad du behöver hjälper jag dig gärna att reda ut det.",
  },
  {
    q: "Vad kostar det att bygga en hemsida eller ett system?",
    a: "Det beror helt på omfattningen. En enklare hemsida är en sak, ett större system med databas och inloggning en annan. Kontakta oss med vad du vill bygga så tar jag fram ett tydligt förslag och en offert utan förpliktelser.",
  },
  {
    q: "Jobbar du med kunder utanför Östergötland?",
    a: "Ja. Jag utgår från Motala men arbetar på distans i hela Sverige. Det mesta går utmärkt att sköta digitalt, och vi ses gärna på plats när det behövs.",
  },
  {
    q: "Hjälper du till med att synas på Google?",
    a: "Ja. Jag bygger alltid med prestanda och sökmotorer i åtanke, och kan hjälpa dig med teknisk SEO och lokal synlighet så att ditt företag hittas när kunder söker.",
  },
  {
    q: "Äger jag koden och sajten efteråt?",
    a: "Ja. Det jag bygger är ditt. Du hamnar aldrig i en prenumeration du inte själv har skrivit på för — har vi inte avtalat om löpande drift eller förvaltning finns det inget abonnemang att ta sig ur. Koden kan vidareutvecklas av mig eller någon annan.",
  },
  {
    q: "Hur kommer vi igång?",
    a: "Enkelt — kontakta oss via kontaktformuläret, mejl eller telefon. Vi tar en förutsättningslös pratstund, går igenom vad du vill uppnå, och sedan sätter jag ihop ett förslag.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep text-white">
        {/* Hero-bilden är sidans LCP-element — via next/image serveras den i
            rätt storlek och format för varje enhet. */}
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
            <span className="eyebrow eyebrow-light">Systemutvecklare</span>
            <h1 className="mt-[26px] font-display text-[clamp(2.6rem,6.2vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Vi kopplar ihop{" "}
              <span className="bg-[linear-gradient(100deg,var(--color-signal),var(--color-signal-soft))] bg-clip-text text-transparent">
                idéer, system
              </span>{" "}
              och människor.
            </h1>
            <p className="mt-[26px] max-w-[560px] text-[clamp(1.05rem,1.7vw,1.28rem)] text-[#e7eefc]/80">
              Systemutvecklare i Motala. Jag bygger hemsidor och
              skräddarsydda system som löser riktiga problem. Genomtänkt,
              driftsäkert och byggt för att växa i.
            </p>
            <div className="mt-[38px] flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Kontakta oss
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
            <span className="eyebrow">Det här bygger jag</span>
            <h2 className="section-h2">Saker jag gör mest av</h2>
            <p className="mt-4 text-[1.08rem] text-muted">
              Varje tjänst har en egen sida med process, priser och vanliga frågor.
            </p>
          </Reveal>
          <div className="grid grid-cols-3 gap-7 max-[920px]:grid-cols-2 max-md:grid-cols-1">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/tjanster/${s.slug}`}
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
                    Läs mer →
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
              Bra att veta innan vi börjar
            </h2>
            <p className="mt-4 text-[1.08rem] text-[#e7eefc]/70">
              Här svarar jag på det jag oftast får frågor om. Hittar du inte svaret? Kontakta oss.
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

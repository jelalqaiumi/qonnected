import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

export function PageHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_160%_at_85%_0%,#062a6e_0%,var(--color-navy)_48%,var(--color-navy-deep)_100%)] px-0 pb-[76px] pt-[160px] text-white max-md:pb-[60px] max-md:pt-[130px]">
      <div className="pointer-events-none absolute -right-20 -top-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(70,180,255,0.18)_0%,rgba(70,180,255,0)_70%)]" />
      <div className="wrap relative z-[2]">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1 className="mt-[18px] font-display text-[clamp(2.3rem,5vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.025em]">
          {title}
        </h1>
        <p className="mt-5 max-w-[560px] text-[clamp(1.02rem,1.6vw,1.18rem)] text-[#e7eefc]/80">
          {intro}
        </p>
      </div>
    </section>
  );
}

export function CtaStrip({
  title,
  text,
  cta = "Kontakta oss",
  href = "/kontakt",
}: {
  title: string;
  text: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="py-20 max-md:py-[72px]">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-center justify-between gap-7 rounded-[22px] border border-line bg-white px-12 py-[54px] max-md:px-7 max-md:py-[38px]">
          <div>
            <h3 className="max-w-[520px] font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold tracking-[-0.02em] text-ink">
              {title}
            </h3>
            <p className="mt-2 text-muted">{text}</p>
          </div>
          <Link href={href} className="btn-dark">
            {cta}
            <ArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function SwedenCoverageSection() {
  return (
    <section className="bg-paper py-20 max-md:py-[72px]">
      <div className="wrap">
        <Reveal className="overflow-hidden rounded-[22px] border border-line bg-white p-4 md:p-6">
          <div className="rounded-xl bg-[linear-gradient(160deg,#eef3fb_0%,#dfe8f6_100%)] p-3 md:p-4">
            <Image
              src="/sverige.webp"
              alt="Karta över Sverige markerad i rött"
              width={1152}
              height={768}
              className="h-auto w-full rounded-lg border border-line/60"
              priority={false}
            />
            <p className="mt-3 text-center font-mono text-[0.82rem] uppercase tracking-[0.1em] text-royal-bright">
              Vi jobbar inom Sverige
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BeliefBand({ locale = "sv" }: { locale?: "sv" | "en" }) {
  const en = locale === "en";
  return (
    <section className="bg-[radial-gradient(120%_140%_at_15%_0%,var(--color-royal)_0%,var(--color-navy)_55%,var(--color-navy-deep)_100%)] text-white">
      <div className="wrap py-[100px]">
        <Reveal>
          <span className="eyebrow eyebrow-light">
            {en ? "How I see it" : "Så tänker jag"}
          </span>
          <p className="mt-6 block max-w-[860px] font-display text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-[1.22] tracking-[-0.02em]">
            {en ? "Technology is never the point. I build things so that " : "Teknik är aldrig målet. Jag bygger saker så att "}
            <span className="text-signal">
              {en
                ? "people get more time for the things only people can do."
                : "människor får mer tid till sådant som bara människor kan göra."}
            </span>
          </p>
          <div className="mt-8 font-mono text-[0.8rem] tracking-[0.1em] text-signal-soft">
            — Qonnected
          </div>
        </Reveal>
      </div>
    </section>
  );
}

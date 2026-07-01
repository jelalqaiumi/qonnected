import Link from "next/link";
import NetworkCanvas from "@/components/NetworkCanvas";
import Reveal from "@/components/Reveal";
import { CtaStrip } from "@/components/Sections";
import { ArrowRight, ServiceIcon } from "@/components/Icons";
import { services } from "@/lib/services";

const stack = {
  Frontend: ["JavaScript", "TypeScript", "React", "HTML & CSS", "Vite"],
  "Backend & data": ["Node.js", "Python", "PHP", "PostgreSQL", "REST & API"],
  "Drift & verktyg": ["Docker", "Git", "Linux", "CI/CD", "Molnhosting"],
};

export default function Home() {
  const top = services.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[radial-gradient(120%_120%_at_80%_0%,#062a6e_0%,var(--color-navy)_42%,var(--color-navy-deep)_100%)] text-white">
        <NetworkCanvas />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(100deg,rgba(0,9,32,0.92)_0%,rgba(0,9,32,0.55)_38%,rgba(0,9,32,0)_66%)]" />
        <div className="wrap relative z-[3] pb-20 pt-[120px]">
          <div className="max-w-[760px]">
            <span className="eyebrow">Systemutvecklare · Webb · Integrationer</span>
            <h1 className="mt-[26px] font-display text-[clamp(2.6rem,6.2vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Jag bygger{" "}
              <span className="bg-[linear-gradient(100deg,var(--color-signal),var(--color-signal-soft))] bg-clip-text text-transparent">
                hemsidor och system
              </span>{" "}
              — från idé till drift.
            </h1>
            <p className="mt-[26px] max-w-[540px] text-[clamp(1.05rem,1.7vw,1.28rem)] text-[#e7eefc]/80">
              Frilansande systemutvecklare i Stockholm. Jag tar idéer hela vägen
              till körbar kod: webbplatser, skräddarsydda system och
              integrationer som får saker att hänga ihop.
            </p>
            <div className="mt-[38px] flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Boka ett samtal
                <ArrowRight />
              </Link>
              <Link href="/arbete" className="btn-ghost">
                Se vad jag byggt
              </Link>
            </div>
            <div className="mt-[54px] flex flex-wrap gap-x-7 gap-y-2.5 border-t border-signal-soft/20 pt-6 font-mono text-[0.78rem] tracking-[0.06em] text-signal-soft/70">
              {["Frilans · Stockholm", "Projekt i hela Norden", "Från idé till drift"].map((m) => (
                <span key={m} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_var(--color-signal)]" />
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEASER */}
      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="mb-14 max-w-[620px]">
            <span className="eyebrow">Det här bygger jag</span>
            <h2 className="section-h2">Tre saker jag gör mest av</h2>
            <p className="mt-4 text-[1.08rem] text-muted">
              Hela bredden hittar du under Tjänster. Det här är det jag oftast får bygga.
            </p>
          </Reveal>
          <div className="grid grid-cols-3 gap-7 max-[920px]:grid-cols-1">
            {top.map((s, i) => (
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

      {/* STACK */}
      <section className="bg-ink py-20 text-white max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="mb-14 max-w-[620px]">
            <span className="eyebrow eyebrow-light">Verktygslådan</span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
              Det jag bygger med
            </h2>
            <p className="mt-4 text-[1.08rem] text-[#e7eefc]/70">
              Ett urval — byt gärna ut mot exakt din stack.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-3 gap-[34px] max-[920px]:grid-cols-2 max-md:grid-cols-1">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group}>
                <h4 className="mb-4 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-signal">
                  {group}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((it) => (
                    <span key={it} className="chip-dark">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title="Har du något du vill få byggt?"
        text="En rak första pratstund, utan säljsnack."
      />
    </>
  );
}

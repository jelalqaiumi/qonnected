import Link from "next/link";
import type { Metadata } from "next";
import { PageHead, CtaStrip } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import { ServiceIcon, ArrowUpRight } from "@/components/Icons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Webbutveckling, systemutveckling, integrationer, automation, drift och teknisk rådgivning.",
};

export default function TjansterPage() {
  return (
    <>
      <PageHead
        eyebrow="Tjänster"
        title="Sex saker jag bygger åt dig"
        intro="Från en hemsida från grunden till ett helt system. Jag väljer den enklaste lösningen som löser problemet — inte den krångligaste. Varje tjänst har en egen sida."
      />

      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/tjanster/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-9 transition duration-300 hover:-translate-y-1 hover:border-signal hover:shadow-[0_18px_40px_-22px_rgba(6,51,142,0.5)]"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <ServiceIcon
                      name={s.icon}
                      className="h-[46px] w-[46px] text-royal transition-colors group-hover:text-signal"
                    />
                    <span className="font-mono text-[0.74rem] tracking-[0.1em] text-royal-bright">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="font-display text-[1.4rem] font-semibold tracking-[-0.01em] text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.98rem] text-muted">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.76rem] tracking-[0.08em] text-royal-bright">
                    Läs mer
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Osäker på var du ska börja?"
        text="Beskriv vad du vill få byggt så föreslår jag minsta möjliga väg framåt."
        cta="Boka ett samtal"
      />
    </>
  );
}

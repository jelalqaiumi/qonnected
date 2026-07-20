import type { Metadata } from "next";
import { PageHead, BeliefBand, CtaStrip } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import { paths } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software developer in Östergötland, Sweden, building websites and custom systems. A look at how I work.",
  alternates: {
    canonical: "/en/about",
    languages: { "sv-SE": "/om", "en-GB": "/en/about" },
  },
};

const values = [
  { h: "People first", p: "Technology exists for the people using it — never the other way round." },
  { h: "As simple as possible", p: "I pick the solution that fixes the problem with the fewest moving parts." },
  { h: "Straight talking", p: "No buzzwords. I explain things so everyone in the room can follow." },
  { h: "Still here afterwards", p: "I don't disappear at launch. I stay on and keep improving." },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        eyebrow="About"
        title="A developer who likes building things that work"
        intro="I'm a software developer based in Östergötland, Sweden. I build websites and custom systems — and keep things simple along the way."
      />

      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap grid grid-cols-[1.1fr_1fr] items-center gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-10">
          <Reveal>
            <div className="space-y-[18px] text-[1.08rem] text-muted">
              <p>
                <strong className="font-semibold text-ink">Qonnected is me.</strong> A developer
                who got tired of convoluted systems and vague projects, and decided to do the
                opposite: build things that are simple to use, simple to maintain, and that
                actually solve the problem.
              </p>
              <p>
                That might be a website built from scratch, a custom system, or an integration
                that gets two programs talking to each other. The size matters less — whether it
                works in the real world matters entirely.
              </p>
              <p>
                As an independent developer, I'm the person you talk to{" "}
                <strong className="font-semibold text-ink">and</strong> the person who builds it.
                No middlemen, no sales pitch. I'd rather tell you &quot;you don't need that&quot;
                than build something you won't get any use out of.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid overflow-hidden rounded-2xl border border-line bg-line/60 [gap:1px]">
              {values.map((v) => (
                <div key={v.h} className="bg-white px-7 py-[26px]">
                  <h4 className="font-display text-[1.14rem] font-semibold text-ink">{v.h}</h4>
                  <p className="mt-1.5 text-[0.96rem] text-muted">{v.p}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <BeliefBand locale="en" />

      <CtaStrip
        title="Sound like the right person for the job?"
        text="Have a first chat with me — no strings attached."
        cta="Get in touch"
        href={paths.en.contact}
      />
    </>
  );
}

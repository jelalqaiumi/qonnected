import type { Metadata } from "next";
import { PageHead, BeliefBand, CtaStrip } from "@/components/Sections";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Om mig",
  description:
    "Systemutvecklare i Motala som bygger hemsidor och skräddarsydda system. Lär känna hur jag jobbar.",
  alternates: {
    canonical: "/om",
    languages: { "sv-SE": "/om", "en-GB": "/en/about" },
  },
};

const values = [
  { h: "Människor först", p: "Tekniken finns för folket som använder den — aldrig tvärtom." },
  { h: "Enklast möjliga", p: "Jag väljer lösningen som löser problemet med minst rörliga delar." },
  { h: "Rakt på", p: "Inga buzzwords. Jag förklarar så att alla i rummet hänger med." },
  { h: "Kvar efteråt", p: "Jag försvinner inte vid lansering. Jag följer med och förbättrar." },
];

export default function OmPage() {
  return (
    <>
      <PageHead
        eyebrow="Om mig"
        title="En systemutvecklare som gillar att bygga saker som funkar"
        intro="Jag är systemutvecklare i Motala. Jag bygger hemsidor och skräddarsydda system — och håller det enkelt på vägen."
      />

      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap grid grid-cols-[1.1fr_1fr] items-center gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-10">
          <Reveal>
            <div className="space-y-[18px] text-[1.08rem] text-muted">
              <p>
                <strong className="font-semibold text-ink">Qonnected är jag.</strong> En
                utvecklare som tröttnat på krångliga system och otydliga projekt, och som
                bestämde mig för att göra tvärtom: bygga saker som är enkla att använda, enkla
                att förvalta och faktiskt löser problemet.
              </p>
              <p>
                Det kan vara en hemsida från grunden, ett skräddarsytt system eller en
                integration som får två program att prata med varandra. Storleken spelar mindre
                roll — att det fungerar i verkligheten spelar all roll.
              </p>
              <p>
                Som oberoende utvecklare är jag den du pratar med{" "}
                <strong className="font-semibold text-ink">och</strong> den som bygger. Inga
                mellanhänder, inget säljsnack. Jag säger hellre &quot;det där behöver du
                inte&quot; än bygger något du inte har nytta av.
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

      <BeliefBand />

      <CtaStrip
        title="Låter jag som rätt person för jobbet?"
        text="Ta en första pratstund med mig — helt förutsättningslöst."
        cta="Kontakta oss"
      />
    </>
  );
}

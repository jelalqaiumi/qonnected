import Link from "next/link";
import type { Metadata } from "next";
import { PageHead, BeliefBand, CtaStrip } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Arbete",
  description: "Ett urval av hemsidor och system jag byggt — förklarade så att alla hänger med.",
};

const cases = [
  {
    num: "01",
    cat: "Webb · E-handel",
    title: "En webbshop som håller koll på samma lager som butiken",
    text: "Jag byggde en webbshop och kopplade den mot butikens kassasystem. Slut på dubbelsålda varor — samma lagersaldo i realtid.",
  },
  {
    num: "02",
    cat: "System · Logistik",
    title: "Ett ordersystem som slutade tappa bort beställningar",
    text: "Jag kopplade ihop e-handel, lager och transportörer i ett enda flöde. Det som tog timmar sker nu på sekunder.",
  },
  {
    num: "03",
    cat: "Automation",
    title: "Rapporter som skriver sig själva varje måndag",
    text: "Jag automatiserade datainsamlingen från fyra system till en rapport. Ekonomiteamet fick tillbaka en hel dag i veckan.",
  },
  {
    num: "04",
    cat: "Webb · Verktyg",
    title: "Ett internt verktyg som ersatte ett hav av kalkylark",
    text: "Jag byggde en enkel webbapp där teamet samlar allt på ett ställe. En sanning istället för tjugo filer.",
  },
];

export default function ArbetePage() {
  return (
    <>
      <PageHead
        eyebrow="Arbete"
        title="Saker jag byggt"
        intro="Ett urval av hemsidor och system jag levererat — formulerat så att även de utan teknisk bakgrund hänger med."
      />

      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="border-t border-line">
            {cases.map((c) => (
              <Link
                key={c.num}
                href="/kontakt"
                className="group grid grid-cols-[80px_1.4fr_2fr_auto] items-center gap-7 border-b border-line py-[34px] pl-2 transition-all duration-300 hover:bg-[#fbfcff] hover:pl-6 max-[920px]:grid-cols-[46px_1fr_auto] max-[920px]:gap-4"
              >
                <span className="font-mono text-[0.8rem] text-royal-bright">{c.num}</span>
                <div>
                  <div className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-muted">
                    {c.cat}
                  </div>
                  <h3 className="mt-1 font-display text-[1.4rem] font-semibold tracking-[-0.01em] text-ink">
                    {c.title}
                  </h3>
                </div>
                <p className="text-[0.98rem] text-muted max-[920px]:hidden">{c.text}</p>
                <ArrowUpRight className="h-[22px] w-[22px] text-line transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal" />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <BeliefBand />

      <CtaStrip
        title="Vill du höra hur jag skulle lösa det hos er?"
        text="Jag berättar gärna mer om något av exemplen ovan."
      />
    </>
  );
}

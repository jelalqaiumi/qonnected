import type { Metadata } from "next";
import { PageHead } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta oss. Berätta kort vad du vill få byggt så svarar jag inom en arbetsdag.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHead
        eyebrow="Kontakt"
        title="Har du något du vill få byggt?"
        intro="Berätta kort vad du vill lösa så hör jag av mig inom en arbetsdag. Inget säljsnack — bara en rak första pratstund."
      />

      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap grid grid-cols-2 items-start gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-11">
          <Reveal>
            <span className="eyebrow">Når mig direkt</span>
            <h2 className="mt-[18px] font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink">
              Kontakta oss hur du vill
            </h2>
            <p className="mt-[18px] max-w-[420px] text-[1.08rem] text-muted">
              Hellre telefon? Ring på. Hellre mejl? Skriv. Hellre formuläret? Det funkar lika bra.
            </p>
            <div className="mt-[38px] grid gap-[18px]">
              <a href="mailto:hej@qonnected.se" className="flex items-center gap-3.5 text-[1.02rem] text-ink transition-colors hover:text-royal">
                <MailIcon className="h-5 w-5 text-royal" />
                hej@qonnected.se
              </a>
              <a href="tel:+46812345678" className="flex items-center gap-3.5 text-[1.02rem] text-ink transition-colors hover:text-royal">
                <PhoneIcon className="h-5 w-5 text-royal" />
                08-123 456 78
              </a>
              <span className="flex items-center gap-3.5 text-[1.02rem] text-ink">
                <PinIcon className="h-5 w-5 text-royal" />
                Östergötland, Sverige
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

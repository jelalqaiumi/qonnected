import type { Metadata } from "next";
import { PageHead } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch. Tell me briefly what you want built and I'll reply within one working day.",
  alternates: {
    canonical: "/en/contact",
    languages: { "sv-SE": "/kontakt", "en-GB": "/en/contact" },
  },
};

export default function ContactPageEn() {
  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Got something you want built?"
        intro="Tell me briefly what you're trying to solve and I'll get back to you within one working day. No sales pitch — just a straight first conversation."
      />

      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap grid grid-cols-2 items-start gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-11">
          <Reveal>
            <span className="eyebrow">Reach me directly</span>
            <h2 className="mt-[18px] font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink">
              Get in touch however you like
            </h2>
            <p className="mt-[18px] max-w-[420px] text-[1.08rem] text-muted">
              Prefer the phone? Call. Prefer email? Write. Prefer the form? That works just as
              well.
            </p>
            <div className="mt-[38px] grid gap-[18px]">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3.5 text-[1.02rem] text-ink transition-colors hover:text-royal"
              >
                <MailIcon className="h-5 w-5 text-royal" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3.5 text-[1.02rem] text-ink transition-colors hover:text-royal"
              >
                <PhoneIcon className="h-5 w-5 text-royal" />
                {site.phoneDisplay}
              </a>
              <span className="flex items-center gap-3.5 text-[1.02rem] text-ink">
                <PinIcon className="h-5 w-5 text-royal" />
                Motala, Sweden
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ContactForm locale="en" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

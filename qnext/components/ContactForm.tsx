"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const copy = {
  sv: {
    name: "Namn",
    namePlaceholder: "Vad heter du?",
    email: "E-post",
    emailPlaceholder: "du@foretaget.se",
    message: "Vad vill du få byggt?",
    messagePlaceholder: "Beskriv kort vad du funderar på…",
    submit: "Skicka — så hörs vi",
    note: "Jag svarar normalt inom en arbetsdag.",
    subject: (n: string) => `Förfrågan från ${n}`,
    contactLine: "Kontakt",
  },
  en: {
    name: "Name",
    namePlaceholder: "What's your name?",
    email: "Email",
    emailPlaceholder: "you@company.com",
    message: "What would you like built?",
    messagePlaceholder: "Briefly describe what you have in mind…",
    submit: "Send — and we'll talk",
    note: "I normally reply within one working day.",
    subject: (n: string) => `Enquiry from ${n}`,
    contactLine: "Contact",
  },
} as const;

export default function ContactForm({ locale = "sv" }: { locale?: Locale }) {
  const t = copy[locale];
  const [namn, setNamn] = useState("");
  const [epost, setEpost] = useState("");
  const [meddelande, setMeddelande] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(t.subject(namn));
    const body = encodeURIComponent(`${meddelande}\n\n${t.contactLine}: ${epost}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[20px] border border-line bg-white p-[34px]"
    >
      <Field label={t.name}>
        <input
          type="text"
          required
          value={namn}
          onChange={(e) => setNamn(e.target.value)}
          placeholder={t.namePlaceholder}
          className="w-full rounded-[11px] border border-line bg-paper px-4 py-3.5 text-base text-ink outline-none transition focus:border-royal-bright focus:shadow-[0_0_0_4px_rgba(30,79,208,0.12)]"
        />
      </Field>
      <Field label={t.email}>
        <input
          type="email"
          required
          value={epost}
          onChange={(e) => setEpost(e.target.value)}
          placeholder={t.emailPlaceholder}
          className="w-full rounded-[11px] border border-line bg-paper px-4 py-3.5 text-base text-ink outline-none transition focus:border-royal-bright focus:shadow-[0_0_0_4px_rgba(30,79,208,0.12)]"
        />
      </Field>
      <Field label={t.message}>
        <textarea
          required
          value={meddelande}
          onChange={(e) => setMeddelande(e.target.value)}
          placeholder={t.messagePlaceholder}
          className="min-h-[120px] w-full resize-y rounded-[11px] border border-line bg-paper px-4 py-3.5 text-base text-ink outline-none transition focus:border-royal-bright focus:shadow-[0_0_0_4px_rgba(30,79,208,0.12)]"
        />
      </Field>
      <button
        type="submit"
        className="w-full rounded-[11px] bg-navy py-4 font-display text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-royal"
      >
        {t.submit}
      </button>
      <p className="mt-3.5 text-center text-[0.8rem] text-muted">{t.note}</p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mb-5 block">
      <span className="mb-2.5 block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

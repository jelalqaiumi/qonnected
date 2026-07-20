"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [namn, setNamn] = useState("");
  const [epost, setEpost] = useState("");
  const [meddelande, setMeddelande] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Förfrågan från ${namn}`);
    const body = encodeURIComponent(`${meddelande}\n\nKontakt: ${epost}`);
    window.location.href = `mailto:info@qonnected.se?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[20px] border border-line bg-white p-[34px]"
    >
      <Field label="Namn">
        <input
          type="text"
          required
          value={namn}
          onChange={(e) => setNamn(e.target.value)}
          placeholder="Vad heter du?"
          className="w-full rounded-[11px] border border-line bg-paper px-4 py-3.5 text-base text-ink outline-none transition focus:border-royal-bright focus:shadow-[0_0_0_4px_rgba(30,79,208,0.12)]"
        />
      </Field>
      <Field label="E-post">
        <input
          type="email"
          required
          value={epost}
          onChange={(e) => setEpost(e.target.value)}
          placeholder="du@foretaget.se"
          className="w-full rounded-[11px] border border-line bg-paper px-4 py-3.5 text-base text-ink outline-none transition focus:border-royal-bright focus:shadow-[0_0_0_4px_rgba(30,79,208,0.12)]"
        />
      </Field>
      <Field label="Vad vill du få byggt?">
        <textarea
          required
          value={meddelande}
          onChange={(e) => setMeddelande(e.target.value)}
          placeholder="Beskriv kort vad du funderar på…"
          className="min-h-[120px] w-full resize-y rounded-[11px] border border-line bg-paper px-4 py-3.5 text-base text-ink outline-none transition focus:border-royal-bright focus:shadow-[0_0_0_4px_rgba(30,79,208,0.12)]"
        />
      </Field>
      <button
        type="submit"
        className="w-full rounded-[11px] bg-navy py-4 font-display text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-royal"
      >
        Skicka — så hörs vi
      </button>
      <p className="mt-3.5 text-center text-[0.8rem] text-muted">
        Jag svarar normalt inom en arbetsdag.
      </p>
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

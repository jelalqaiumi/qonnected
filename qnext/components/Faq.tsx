"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

export default function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-3.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-xl border border-signal-soft/15 bg-white/[0.03] transition-colors hover:border-signal-soft/30"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-[1.08rem] font-semibold text-white">
                {item.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={`flex-none text-signal transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M5 8l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[1rem] leading-relaxed text-[#e7eefc]/70">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

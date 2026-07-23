"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/lib/services";
import { servicesEn } from "@/lib/services.en";
import { ServiceIcon } from "@/components/Icons";
import { FlagSE, FlagGB } from "@/components/Flags";
import { paths, ui, alternatePath, type Locale } from "@/lib/i18n";

export default function Nav({ locale = "sv" }: { locale?: Locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const t = ui[locale];
  const p = paths[locale];
  const list = locale === "en" ? servicesEn : services;

  const links = [
    { href: p.home, label: t.navHome },
    { href: p.about, label: t.navAbout },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved === "dark" || saved === "light" ? saved : prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const isActive = (href: string) =>
    href === p.home ? pathname === p.home : pathname.startsWith(href);

  const servicesActive = pathname.startsWith(p.services);
  const lightLogoVisible = !scrolled || theme === "dark";
  const darkLogoVisible = scrolled && theme !== "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-400 ${
        scrolled
          ? "border-mist bg-paper/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap relative flex h-[74px] items-center justify-between">
        <Link href={p.home} aria-label={t.logoAria} className="relative block h-[26px] w-[170px]">
          <Image
            src="/logo-light.webp"
            alt="Qonnected"
            fill
            priority
            sizes="170px"
            className={`object-contain object-left transition-opacity duration-300 ${
              lightLogoVisible ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/logo-dark.webp"
            alt=""
            fill
            sizes="170px"
            className={`object-contain object-left transition-opacity duration-300 ${
              darkLogoVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        {/* Desktop links — centrerade */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-[0.92rem] font-medium transition-colors ${
                scrolled
                  ? isActive(l.href)
                    ? "text-royal"
                    : "text-muted hover:text-royal"
                  : isActive(l.href)
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded bg-signal" />
              )}
            </Link>
          ))}

          <div className="group relative">
            <Link
              href={p.services}
              className={`relative inline-flex items-center gap-2 text-[0.92rem] font-medium transition-colors ${
                servicesActive
                  ? scrolled
                    ? "text-royal"
                    : "text-white"
                  : scrolled
                  ? "text-muted hover:text-royal"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {t.navServices}
              <span className="mt-0.5 h-2 w-2 rotate-45 border-b border-r border-current transition-colors" />
              {servicesActive && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded bg-signal" />
              )}
            </Link>

            <div className="invisible absolute left-1/2 top-full mt-5 w-[310px] -translate-x-1/2 overflow-hidden rounded-[18px] border border-[#d8dfeb] bg-white p-3 opacity-0 shadow-[0_18px_38px_-20px_rgba(10,20,48,0.35)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-[#d8dfeb] bg-white" />
              <div className="relative grid gap-1.5">
                {list.map((service) => (
                  <Link
                    key={service.slug}
                    href={`${p.services}/${service.slug}`}
                    className="flex w-full min-w-0 items-center gap-3 rounded-2xl px-2.5 py-2.5 transition-colors hover:bg-[#f3f7ff]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e8f0ff] text-[#0b2f74] shadow-[inset_0_0_0_1px_rgba(11,47,116,0.08)]">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-[0.96rem] font-medium text-ink">{service.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Höger sida: språkväljare + knapp (desktop) + mobilmeny */}
        <div className="flex items-center gap-3">
          <ThemeToggleButton
            theme={theme}
            scrolled={scrolled}
            locale={locale}
            onToggle={toggleTheme}
          />
          <LangSwitch locale={locale} pathname={pathname} scrolled={scrolled} />
          <Link
            href={p.contact}
            className="hidden rounded-full bg-signal px-5 py-2.5 text-[0.9rem] font-semibold text-navy-deep transition duration-200 hover:-translate-y-0.5 hover:bg-[#5fc0ff] hover:shadow-[0_10px_26px_-8px_rgba(70,180,255,0.7)] md:inline-flex"
          >
            {t.navContact}
          </Link>
          <button
            aria-label={t.menu}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] flex w-[30px] flex-col gap-[5px] md:hidden"
          >
            <span className={`h-0.5 w-full transition-all duration-300 ${open ? "translate-y-[7px] rotate-45 bg-white" : ""} ${scrolled && !open ? "bg-ink" : "bg-white"}`} />
            <span className={`h-0.5 w-full transition-all duration-300 ${open ? "opacity-0" : "opacity-100"} ${scrolled && !open ? "bg-ink" : "bg-white"}`} />
            <span className={`h-0.5 w-full transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45 bg-white" : ""} ${scrolled && !open ? "bg-ink" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(78vw,320px)] flex-col justify-center gap-7 bg-navy p-10 transition-transform duration-400 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-signal-soft/30 bg-white/10 px-3 py-1.5 text-[0.8rem] text-white"
          aria-label={
            locale === "en"
              ? theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
              : theme === "dark"
              ? "Byt till ljust läge"
              : "Byt till mörkt läge"
          }
          title={
            locale === "en"
              ? theme === "dark"
                ? "Light mode"
                : "Dark mode"
              : theme === "dark"
              ? "Ljust läge"
              : "Mörkt läge"
          }
        >
          {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          <span>{theme === "dark" ? (locale === "en" ? "Light" : "Ljust") : locale === "en" ? "Dark" : "Morkt"}</span>
        </button>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-[1.1rem] font-medium text-white">
            {l.label}
          </Link>
        ))}
        <div className="space-y-3">
          <Link href={p.services} className="text-[1.1rem] font-medium text-white">
            {t.navServices}
          </Link>
          <div className="grid gap-2 border-l border-signal-soft/20 pl-4">
            {list.map((service) => (
              <Link
                key={service.slug}
                href={`${p.services}/${service.slug}`}
                className="text-[0.94rem] text-white/80 transition-colors hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <Link href={p.contact} className="mt-2 w-fit rounded-full bg-signal px-5 py-2.5 text-[0.95rem] font-semibold text-navy-deep">
          {t.navContact}
        </Link>
      </div>
    </header>
  );
}

function ThemeToggleButton({
  theme,
  scrolled,
  locale,
  onToggle,
}: {
  theme: "light" | "dark";
  scrolled: boolean;
  locale: Locale;
  onToggle: () => void;
}) {
  const toDark = theme !== "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
        scrolled ? "border-mist bg-white/65 text-ink hover:bg-white" : "border-white/25 bg-white/10 text-white hover:bg-white/15"
      }`}
      aria-label={
        locale === "en"
          ? toDark
            ? "Switch to dark mode"
            : "Switch to light mode"
          : toDark
          ? "Byt till morkt lage"
          : "Byt till ljust lage"
      }
      title={
        locale === "en"
          ? toDark
            ? "Dark mode"
            : "Light mode"
          : toDark
          ? "Morkt lage"
          : "Ljust lage"
      }
    >
      {theme === "dark" ? <SunIcon className="h-4.5 w-4.5" /> : <MoonIcon className="h-4.5 w-4.5" />}
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.8v2.2M12 19v2.2M21.2 12H19M5 12H2.8M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6M18.5 18.5l-1.6-1.6M7.1 7.1 5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 13.2A8.4 8.4 0 1 1 10.8 4a7 7 0 1 0 9.2 9.2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Visar båda språken med flagga så att besökaren ser vilket som är aktivt.
 * Länkarna måste vara <a> och inte <Link> — språken har separata root-layouter,
 * så bytet kräver en riktig sidladdning för att <html lang> ska hinna växlas.
 */
function LangSwitch({
  locale,
  pathname,
  scrolled,
}: {
  locale: Locale;
  pathname: string;
  scrolled: boolean;
}) {
  const options = [
    { code: "sv" as Locale, Flag: FlagSE, label: "Svenska", short: "SV" },
    { code: "en" as Locale, Flag: FlagGB, label: "English", short: "EN" },
  ];

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border p-0.5 transition-colors ${
        scrolled ? "border-mist bg-white/60" : "border-white/25 bg-white/10"
      }`}
    >
      {options.map(({ code, Flag, label, short }) => {
        const active = code === locale;
        const cls = `flex items-center gap-1.5 rounded-full px-2 py-1 font-mono text-[0.7rem] tracking-[0.08em] transition-all ${
          active
            ? scrolled
              ? "bg-royal text-white"
              : "bg-white/90 text-navy-deep"
            : scrolled
            ? "text-muted hover:text-royal"
            : "text-white/70 hover:text-white"
        }`;

        // Aktivt språk är ingen länk — den skulle bara leda till samma sida.
        if (active) {
          return (
            <span key={code} className={cls} aria-current="true">
              <Flag className={active ? "" : "opacity-60"} />
              {short}
            </span>
          );
        }

        return (
          <a
            key={code}
            href={alternatePath(pathname, code)}
            hrefLang={code}
            aria-label={code === "en" ? "Switch to English" : "Byt till svenska"}
            title={label}
            className={cls}
          >
            <Flag className="opacity-75 transition-opacity hover:opacity-100" />
            {short}
          </a>
        );
      })}
    </div>
  );
}

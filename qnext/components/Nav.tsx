"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/lib/services";
import { ServiceIcon } from "@/components/Icons";

const links = [
  { href: "/", label: "Start" },
  { href: "/om", label: "Om mig" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-400 ${
        scrolled
          ? "border-mist bg-paper/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap relative flex h-[74px] items-center justify-between">
        <Link href="/" aria-label="Qonnected start" className="relative block h-[26px] w-[170px]">
          <Image
            src="/logo-light.webp"
            alt="Qonnected"
            fill
            priority
            sizes="170px"
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/logo-dark.webp"
            alt="Qonnected"
            fill
            sizes="170px"
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
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
              href="/tjanster"
              className={`relative inline-flex items-center gap-2 text-[0.92rem] font-medium transition-colors ${
                pathname.startsWith("/tjanster")
                  ? scrolled
                    ? "text-royal"
                    : "text-white"
                  : scrolled
                  ? "text-muted hover:text-royal"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Tjänster
              <span
                className={`mt-0.5 h-2 w-2 rotate-45 border-b border-r transition-colors ${
                  scrolled ? "border-current" : "border-current"
                }`}
              />
              {pathname.startsWith("/tjanster") && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded bg-signal" />
              )}
            </Link>

            <div className="invisible absolute left-1/2 top-full mt-5 w-[310px] -translate-x-1/2 overflow-hidden rounded-[18px] border border-[#d8dfeb] bg-white p-3 opacity-0 shadow-[0_18px_38px_-20px_rgba(10,20,48,0.35)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-[#d8dfeb] bg-white" />
              <div className="relative grid gap-1.5">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/tjanster/${service.slug}`}
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

        {/* Höger sida: knapp (desktop) + mobilmeny */}
        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="hidden rounded-full bg-signal px-5 py-2.5 text-[0.9rem] font-semibold text-navy-deep transition duration-200 hover:-translate-y-0.5 hover:bg-[#5fc0ff] hover:shadow-[0_10px_26px_-8px_rgba(70,180,255,0.7)] md:inline-flex"
          >
            Kontakta oss
          </Link>
          <button
            aria-label="Meny"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] flex w-[30px] flex-col gap-[5px] md:hidden"
          >
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""} ${scrolled && !open ? "bg-ink" : "bg-white"}`} />
            <span className={`h-0.5 w-full transition-all duration-300 ${open ? "opacity-0" : "opacity-100"} ${scrolled && !open ? "bg-ink" : "bg-white"}`} />
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""} ${scrolled && !open ? "bg-ink" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(78vw,320px)] flex-col justify-center gap-7 bg-navy p-10 transition-transform duration-400 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-[1.1rem] font-medium text-white">
            {l.label}
          </Link>
        ))}
        <div className="space-y-3">
          <Link href="/tjanster" className="text-[1.1rem] font-medium text-white">
            Tjänster
          </Link>
          <div className="grid gap-2 border-l border-signal-soft/20 pl-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/tjanster/${service.slug}`}
                className="text-[0.94rem] text-white/80 transition-colors hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/kontakt" className="mt-2 w-fit rounded-full bg-signal px-5 py-2.5 text-[0.95rem] font-semibold text-navy-deep">
          Kontakta oss
        </Link>
      </div>
    </header>
  );
}

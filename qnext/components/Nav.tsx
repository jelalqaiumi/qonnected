"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Start" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/arbete", label: "Arbete" },
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
      <div className="wrap flex h-[74px] items-center justify-between">
        <Link href="/" aria-label="Qonnected start" className="relative block h-[26px] w-[170px]">
          <Image
            src="/logo-light.png"
            alt="Qonnected"
            fill
            priority
            sizes="170px"
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/logo-dark.png"
            alt="Qonnected"
            fill
            sizes="170px"
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
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
          <Link href="/kontakt" className="rounded-full bg-signal px-5 py-2.5 text-[0.9rem] font-semibold text-navy-deep transition duration-200 hover:-translate-y-0.5 hover:bg-[#5fc0ff] hover:shadow-[0_10px_26px_-8px_rgba(70,180,255,0.7)]">
            Boka ett samtal
          </Link>
        </nav>

        {/* Mobile toggle */}
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
        <Link href="/kontakt" className="mt-2 w-fit rounded-full bg-signal px-5 py-2.5 text-[0.95rem] font-semibold text-navy-deep">
          Boka ett samtal
        </Link>
      </div>
    </header>
  );
}

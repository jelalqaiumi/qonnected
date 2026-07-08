import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[radial-gradient(120%_120%_at_80%_0%,#062a6e_0%,var(--color-navy)_42%,var(--color-navy-deep)_100%)] text-white">
      <div className="wrap py-32">
        <span className="eyebrow eyebrow-light">404</span>
        <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-semibold tracking-[-0.025em]">
          Den sidan kunde jag inte koppla upp
        </h1>
        <p className="mt-4 max-w-[480px] text-[#e7eefc]/80">
          Länken leder ingenstans. Kontakta oss om du letade efter något särskilt.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Till startsidan
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { locations } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="bg-navy-deep pb-9 pt-16 text-white">
      <div className="wrap">
        <div className="flex flex-wrap justify-between gap-10 border-b border-signal-soft/15 pb-12">
          <div className="max-w-[320px]">
            <Link href="/" aria-label="Qonnected start" className="block">
              <Image
                src="/logo-light.webp"
                alt="Qonnected"
                width={224}
                height={34}
                className="h-[34px] w-auto"
              />
            </Link>
            <p className="mt-4 text-[0.95rem] text-white/60">
              Vi kopplar ihop idéer, system och människor.
            </p>
          </div>
          <div className="flex flex-wrap gap-16">
            <div>
              <h5 className="mb-[18px] font-mono text-[0.72rem] uppercase tracking-[0.12em] text-signal-soft">
                Sidor
              </h5>
              <FootLink href="/tjanster">Tjänster</FootLink>
              <FootLink href="/om">Om mig</FootLink>
              <FootLink href="/kontakt">Kontakt</FootLink>
            </div>
            <div>
              <h5 className="mb-[18px] font-mono text-[0.72rem] uppercase tracking-[0.12em] text-signal-soft">
                Orter
              </h5>
              {locations.map((l) => (
                <FootLink key={l.slug} href={`/orter/${l.slug}`}>
                  {l.name === "hela Sverige" ? "Hela Sverige" : l.name}
                </FootLink>
              ))}
            </div>
            <div>
              <h5 className="mb-[18px] font-mono text-[0.72rem] uppercase tracking-[0.12em] text-signal-soft">
                Kontakta oss
              </h5>
              <FootLink href="mailto:info@qonnected.se">info@qonnected.se</FootLink>
              <FootLink href="tel:+46761913446">076-191 34 46</FootLink>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-7 font-mono text-[0.85rem] tracking-[0.05em] text-white/50">
          <span>© {new Date().getFullYear()} Qonnected</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/integritetspolicy" className="transition-colors hover:text-white">
              Integritetspolicy
            </Link>
            <span>Östergötland · Sverige</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("mailto:") || href.startsWith("tel:");
  const cls = "mb-3 block text-[0.95rem] text-white/70 transition-colors hover:text-white";
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

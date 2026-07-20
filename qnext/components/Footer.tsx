import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { paths, ui, type Locale } from "@/lib/i18n";

export default function Footer({ locale = "sv" }: { locale?: Locale }) {
  const t = ui[locale];
  const p = paths[locale];

  return (
    <footer className="bg-navy-deep pb-9 pt-16 text-white">
      <div className="wrap">
        <div className="flex flex-wrap justify-between gap-10 border-b border-signal-soft/15 pb-12">
          <div className="max-w-[320px]">
            <Link href={p.home} aria-label={t.logoAria} className="block">
              <Image
                src="/logo-light.webp"
                alt="Qonnected"
                width={224}
                height={34}
                className="h-[34px] w-auto"
              />
            </Link>
            <p className="mt-4 text-[0.95rem] text-white/60">{t.footerTagline}</p>
          </div>
          <div className="flex flex-wrap gap-16">
            <div>
              <h5 className="mb-[18px] font-mono text-[0.72rem] uppercase tracking-[0.12em] text-signal-soft">
                {t.footerPages}
              </h5>
              <FootLink href={p.services}>{t.navServices}</FootLink>
              <FootLink href={p.about}>{t.navAbout}</FootLink>
              <FootLink href={p.contact}>{t.navContact}</FootLink>
            </div>
            <div>
              <h5 className="mb-[18px] font-mono text-[0.72rem] uppercase tracking-[0.12em] text-signal-soft">
                {t.footerContact}
              </h5>
              <FootLink href={`mailto:${site.email}`}>{site.email}</FootLink>
              <FootLink href={`tel:${site.phone}`}>{site.phoneDisplay}</FootLink>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-7 font-mono text-[0.85rem] tracking-[0.05em] text-white/50">
          <span>© {new Date().getFullYear()} Qonnected</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href={p.privacy} className="transition-colors hover:text-white">
              {t.privacy}
            </Link>
            <span>
              {locale === "en" ? "Östergötland · Sweden" : "Östergötland · Sverige"}
            </span>
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

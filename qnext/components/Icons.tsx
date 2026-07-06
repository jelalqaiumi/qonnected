import type { SVGProps, ReactElement } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowRight(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
      <path d="M6 16L16 6M16 6H8M16 6v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const paths: Record<string, ReactElement> = {
  web: (
    <>
      <rect x="6" y="10" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2.4" />
      <path d="M6 17h36" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="11" cy="13.5" r="1.2" fill="currentColor" />
      <circle cx="15" cy="13.5" r="1.2" fill="currentColor" />
    </>
  ),
  code: (
    <path d="M17 16l-7 8 7 8M31 16l7 8-7 8M27 12l-6 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  nodes: (
    <>
      <circle cx="12" cy="24" r="4" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="36" cy="14" r="4" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="36" cy="34" r="4" stroke="currentColor" strokeWidth="2.4" />
      <path d="M16 24h6m0 0l10-8m-10 8l10 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  flow: (
    <>
      <circle cx="12" cy="24" r="4" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="36" cy="14" r="4" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="36" cy="34" r="4" stroke="currentColor" strokeWidth="2.4" />
      <path d="M16 24h6m0 0l10-8m-10 8l10 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  cloud: (
    <path d="M14 32a8 8 0 0 1-1-15.9A11 11 0 0 1 35 18a7 7 0 0 1-1 14H14z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
  ),
  shield: (
    <>
      <path d="M24 6l16 7v9c0 9-7 16-16 20C15 38 8 31 8 22v-9l16-7z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  calendar: (
    <>
      <rect x="8" y="11" width="32" height="29" rx="3" stroke="currentColor" strokeWidth="2.4" />
      <path d="M8 19h32M17 7v7M31 7v7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M15 27h5M23 27h5M31 27h2M15 33h5M23 33h5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  chat: (
    <>
      <path d="M8 12a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H19l-8 7v-7a3 3 0 0 1-3-3V12z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="18" cy="20" r="1.6" fill="currentColor" />
      <circle cx="24" cy="20" r="1.6" fill="currentColor" />
      <circle cx="30" cy="20" r="1.6" fill="currentColor" />
    </>
  ),
  database: (
    <>
      <ellipse cx="24" cy="12" rx="14" ry="5" stroke="currentColor" strokeWidth="2.4" />
      <path d="M10 12v12c0 2.8 6.3 5 14 5s14-2.2 14-5V12" stroke="currentColor" strokeWidth="2.4" />
      <path d="M10 24v12c0 2.8 6.3 5 14 5s14-2.2 14-5V24" stroke="currentColor" strokeWidth="2.4" />
    </>
  ),
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {paths[name] ?? paths.code}
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

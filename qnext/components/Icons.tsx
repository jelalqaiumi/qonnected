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
      <rect x="6" y="9" width="36" height="23" rx="3.5" stroke="currentColor" strokeWidth="2.4" />
      <path d="M24 32v7M16 39h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M6 26h36" stroke="currentColor" strokeWidth="2.4" />
    </>
  ),
  code: (
    <>
      <rect x="8" y="10" width="13" height="28" rx="2.5" stroke="currentColor" strokeWidth="2.4" />
      <rect x="27" y="10" width="13" height="28" rx="2.5" stroke="currentColor" strokeWidth="2.4" />
      <path d="M17 17l-3 3 3 3M31 17l3 3-3 3M19 30h10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  cart: (
    <>
      <path d="M14 15h20a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M18 15a6 6 0 1 1 12 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M18 22v6M30 22v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </>
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
  camera: (
    <>
      <path d="M12 16h6l3-4h6l3 4h6a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3V19a3 3 0 0 1 3-3z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="24" cy="27" r="6.5" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="33.5" cy="19.5" r="1.5" fill="currentColor" />
    </>
  ),
  video: (
    <>
      <rect x="8" y="15" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.4" />
      <path d="M8 22h32" stroke="currentColor" strokeWidth="2.4" />
      <path d="M14 15l4 7M22 15l4 7M30 15l4 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  search: (
    <>
      <rect x="8" y="14" width="30" height="20" rx="2.5" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="20.5" cy="24" r="4.5" stroke="currentColor" strokeWidth="2.4" />
      <path d="M24 27.5l4 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M8 34h30" stroke="currentColor" strokeWidth="2.4" />
    </>
  ),
  coin: (
    <>
      <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="2.4" />
      <path d="M28 18.8c-1-1-2.4-1.6-4-1.6-2.6 0-4.5 1.5-4.5 3.6 0 2.3 2 3.1 4.4 3.7 2.5.6 4.6 1.2 4.6 3.8 0 2.1-1.9 3.7-4.6 3.7-1.8 0-3.5-.7-4.7-2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 15v18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  ads: (
    <>
      <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="2.4" />
      <path d="M28 18.8c-1-1-2.4-1.6-4-1.6-2.6 0-4.5 1.5-4.5 3.6 0 2.3 2 3.1 4.4 3.7 2.5.6 4.6 1.2 4.6 3.8 0 2.1-1.9 3.7-4.6 3.7-1.8 0-3.5-.7-4.7-2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 15v18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
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

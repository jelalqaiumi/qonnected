/**
 * Flaggor som SVG i stället för emoji — Windows saknar glyfer för flaggemoji
 * och skulle rendera 🇸🇪 som bokstäverna "SE".
 * Dekorativa: texten bredvid bär betydelsen, så de döljs för skärmläsare.
 */

const base = {
  width: 20,
  height: 14,
  viewBox: "0 0 20 14",
  "aria-hidden": true,
  focusable: false,
} as const;

export function FlagSE({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect width="20" height="14" fill="#005293" />
      <rect x="6" width="2.6" height="14" fill="#FECB00" />
      <rect y="5.7" width="20" height="2.6" fill="#FECB00" />
    </svg>
  );
}

export function FlagGB({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect width="20" height="14" fill="#012169" />
      {/* Vita diagonaler */}
      <path d="M0 0 L20 14 M20 0 L0 14" stroke="#FFF" strokeWidth="2.8" />
      {/* Röda diagonaler */}
      <path d="M0 0 L20 14 M20 0 L0 14" stroke="#C8102E" strokeWidth="1.4" />
      {/* Vitt kors */}
      <path d="M10 0 V14 M0 7 H20" stroke="#FFF" strokeWidth="4.6" />
      {/* Rött kors */}
      <path d="M10 0 V14 M0 7 H20" stroke="#C8102E" strokeWidth="2.8" />
    </svg>
  );
}

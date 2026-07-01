# Qonnected

Webbplats byggd med **Next.js (App Router)** och **Tailwind CSS v4**. Ren kod, inga page builders.

## Kom igång

```bash
npm install
npm run dev
```

Öppna http://localhost:3000

## Bygg för produktion

```bash
npm run build
npm start
```

## Struktur

```
app/
  layout.tsx            # Typsnitt (next/font), Nav + Footer, metadata
  page.tsx              # Startsida (hero med kopplingsnätverk)
  globals.css           # Tailwind + designsystem (färger/typsnitt från loggan)
  tjanster/
    page.tsx            # Översikt över alla tjänster
    [slug]/page.tsx     # En egen statiskt genererad sida per tjänst
  arbete/page.tsx
  om/page.tsx
  kontakt/page.tsx
  not-found.tsx
components/              # Nav, Footer, Hero-canvas, ikoner, sektioner m.m.
lib/
  services.ts           # Datakälla — lägg till/ändra tjänster här
public/                 # Loggor (logo-dark/light/foot.png)
```

## Lägga till eller ändra en tjänst

Allt styrs från `lib/services.ts`. Lägg till ett objekt i `services`-arrayen så
skapas automatiskt både ett kort i översikten och en egen sida på
`/tjanster/<slug>` (statiskt genererad via `generateStaticParams`).

## Att fylla i

- Riktig e-post och telefon (sök på `hej@qonnected.se` och `08-123 456 78`)
- Din faktiska teknikstack i `app/page.tsx` (objektet `stack`)
- Riktiga case i `app/arbete/page.tsx`
- Domän i `app/layout.tsx` (`metadataBase`)
```

import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Genereras vid build och används automatiskt som og:image + twitter:image
 * på alla sidor som inte definierar en egen bild.
 */
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(120deg, #000920 0%, #052368 55%, #06338e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7ba7f0",
          }}
        >
          Systemutvecklare
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
            marginTop: 28,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Vi kopplar ihop idéer, system och människor.
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 36,
            color: "rgba(231,238,252,0.75)",
          }}
        >
          {`${site.name} · ${site.region}`}
        </div>
      </div>
    ),
    size,
  );
}

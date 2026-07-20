import { Space_Grotesk, Hanken_Grotesk, Space_Mono } from "next/font/google";

/** Delas av båda root-layouterna så att typsnitten laddas identiskt på båda språken. */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const fontVariables = `${spaceGrotesk.variable} ${hanken.variable} ${spaceMono.variable}`;

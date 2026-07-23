export type Locale = "sv" | "en";

export const locales: Locale[] = ["sv", "en"];

/** Svenska är standardspråk och ligger på roten utan prefix. */
export const defaultLocale: Locale = "sv";

/** Språkkod för html lang och strukturerad data. */
export const htmlLang: Record<Locale, string> = {
  sv: "sv",
  en: "en",
};

export const ogLocale: Record<Locale, string> = {
  sv: "sv_SE",
  en: "en_GB",
};

/**
 * Sidsökvägar per språk. Svenska på roten, engelska under /en med översatta
 * segment. Ändras en väg här måste motsvarande route-mapp byta namn.
 */
export const paths = {
  sv: {
    home: "/",
    services: "/tjanster",
    areas: "/orter",
    about: "/om",
    contact: "/kontakt",
    privacy: "/integritetspolicy",
  },
  en: {
    home: "/en",
    services: "/en/services",
    areas: "/en/areas",
    about: "/en/about",
    contact: "/en/contact",
    /** Policyn finns bara på svenska — juridisk text översätts inte fritt. */
    privacy: "/integritetspolicy",
  },
} as const;

/** Tjänsteslugar: svensk slug -> engelsk slug. */
export const serviceSlugMap: Record<string, string> = {
  webbutveckling: "web-development",
  fullstack: "fullstack-development",
  bokningssystem: "booking-systems",
  "e-handel": "ecommerce",
  seo: "seo",
};

/** Ortsslugar: svensk slug -> engelsk slug. */
export const areaSlugMap: Record<string, string> = {
  motala: "motala",
  linkoping: "linkoping",
  norrkoping: "norrkoping",
  "hela-sverige": "all-of-sweden",
};

function invert(map: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
}

export const serviceSlugMapReverse = invert(serviceSlugMap);
export const areaSlugMapReverse = invert(areaSlugMap);

/**
 * Översätter en sökväg till motsvarande sida på det andra språket. Används av
 * språkväljaren och för hreflang — utan den skulle byte av språk alltid landa
 * på startsidan i stället för på samma sida.
 */
export function alternatePath(pathname: string, to: Locale): string {
  const clean = pathname.replace(/\/+$/, "") || "/";

  if (to === "en") {
    if (clean === "/") return paths.en.home;
    if (clean === paths.sv.about) return paths.en.about;
    if (clean === paths.sv.contact) return paths.en.contact;
    if (clean === paths.sv.services) return paths.en.services;
    if (clean === paths.sv.privacy) return paths.sv.privacy;

    const service = clean.match(/^\/tjanster\/(.+)$/);
    if (service) {
      const slug = serviceSlugMap[service[1]];
      return slug ? `${paths.en.services}/${slug}` : paths.en.services;
    }
    const area = clean.match(/^\/orter\/(.+)$/);
    if (area) {
      const slug = areaSlugMap[area[1]];
      return slug ? `${paths.en.areas}/${slug}` : paths.en.home;
    }
    return paths.en.home;
  }

  if (clean === paths.en.home) return "/";
  if (clean === paths.en.about) return paths.sv.about;
  if (clean === paths.en.contact) return paths.sv.contact;
  if (clean === paths.en.services) return paths.sv.services;

  const service = clean.match(/^\/en\/services\/(.+)$/);
  if (service) {
    const slug = serviceSlugMapReverse[service[1]];
    return slug ? `${paths.sv.services}/${slug}` : paths.sv.services;
  }
  const area = clean.match(/^\/en\/areas\/(.+)$/);
  if (area) {
    const slug = areaSlugMapReverse[area[1]];
    return slug ? `${paths.sv.areas}/${slug}` : "/";
  }
  return "/";
}

/** Vilket språk en sökväg tillhör. */
export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "sv";
}

/** Återkommande gränssnittstexter. Sidspecifik text bor i respektive content-fil. */
export const ui = {
  sv: {
    navHome: "Start",
    navAbout: "Om mig",
    navServices: "Tjänster",
    navContact: "Kontakta oss",
    menu: "Meny",
    logoAria: "Qonnected start",
    footerPages: "Sidor",
    footerContact: "Kontakta oss",
    footerTagline: "Vi kopplar ihop idéer, system och människor.",
    privacy: "Integritetspolicy",
    areasLabel: "Områden vi jobbar i",
    allServices: "← Alla tjänster",
    readMore: "Läs mer",
    whatYouGet: "Vad du får",
    included: "Det här ingår",
    goodForYou: "Passar dig",
    goodForHeading: "Bra för dig som",
    processEyebrow: "Så går det till",
    processHeading: "Från första samtal till färdigt",
    step: "Steg",
    eta: "Tidsestimat",
    personalEyebrow: "Vem du jobbar med",
    caseEyebrow: "Exempel på upplägg",
    caseHeading: "Typiska scenarier",
    caseChallenge: "Utmaning",
    caseSolution: "Lösning",
    caseOutcome: "Effekt",
    trustEyebrow: "Teknisk trygghet",
    trustHeading: "Det här får du alltid",
    fitEyebrow: "Projektmatchning",
    fitHeading: "Passar det här uppdraget dig?",
    fitGood: "Passar bra när",
    fitBad: "Passar sämre när",
    pricingEyebrow: "Vad det kostar",
    pricingFrom: "Från",
    typicalScope: "Typiska projekt",
    getQuote: "Få en offert",
    faqEyebrow: "Vanliga frågor",
    faqHeadingSuffix: "— det du oftast undrar",
    source: "Källa:",
    otherServices: "Andra tjänster",
    moreIBuild: "Mer jag bygger",
    langLabel: "Språk",
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navContact: "Get in touch",
    menu: "Menu",
    logoAria: "Qonnected home",
    footerPages: "Pages",
    footerContact: "Get in touch",
    footerTagline: "We connect ideas, systems and people.",
    privacy: "Privacy policy",
    areasLabel: "Areas we work in",
    allServices: "← All services",
    readMore: "Read more",
    whatYouGet: "What you get",
    included: "What's included",
    goodForYou: "A good fit",
    goodForHeading: "Right for you if",
    processEyebrow: "How it works",
    processHeading: "From first call to finished",
    step: "Step",
    eta: "Estimated time",
    personalEyebrow: "Who you'll work with",
    caseEyebrow: "Example setups",
    caseHeading: "Typical scenarios",
    caseChallenge: "Challenge",
    caseSolution: "Solution",
    caseOutcome: "Outcome",
    trustEyebrow: "Technical assurance",
    trustHeading: "What you always get",
    fitEyebrow: "Project fit",
    fitHeading: "Is this the right setup for you?",
    fitGood: "A good fit when",
    fitBad: "A poor fit when",
    pricingEyebrow: "What it costs",
    pricingFrom: "From",
    typicalScope: "Typical projects",
    getQuote: "Get a quote",
    faqEyebrow: "Common questions",
    faqHeadingSuffix: "— what people usually ask",
    source: "Source:",
    otherServices: "Other services",
    moreIBuild: "More I build",
    langLabel: "Language",
  },
} as const;

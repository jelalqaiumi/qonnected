export type Service = {
  slug: string;
  num: string;
  title: string;
  short: string;
  icon: string;
  intro: string;
  includes: string[];
  goodFor: string[];
};

export const services: Service[] = [
  {
    slug: "webbutveckling",
    num: "01",
    title: "Webbutveckling",
    short:
      "Hemsidor, webbappar och e-handel byggda från grunden — snabba, responsiva och enkla att förvalta.",
    icon: "web",
    intro:
      "Jag bygger webbplatser från grunden i stället för ur en mall. Det ger en sajt som laddar snabbt, ser ut precis som du vill och är enkel att bygga vidare på — utan att du sitter fast i ett verktyg du inte äger.",
    includes: [
      "Design och kod anpassad efter din verksamhet, inte en färdig mall",
      "Responsivt — fungerar lika bra i mobil som på desktop",
      "Byggt för fart och bra sökmotorsynlighet",
      "Enkel struktur som du eller jag kan vidareutveckla senare",
    ],
    goodFor: [
      "Dig som behöver en ny sajt eller vill byta ut en gammal",
      "Dig som vill ha något eget i stället för en låst page builder",
      "Webbshoppar och kundportaler med specifika behov",
    ],
  },
  {
    slug: "systemutveckling",
    num: "02",
    title: "Systemutveckling",
    short:
      "Skräddarsydda system och interna verktyg som gör exakt det ni behöver — byggda för att hålla.",
    icon: "code",
    intro:
      "När standardprogrammen inte räcker bygger jag ett system som passar just ert sätt att arbeta. Resultatet blir mindre krångel, färre manuella steg och en lösning ni faktiskt äger.",
    includes: [
      "Kartläggning av hur ni jobbar idag innan något byggs",
      "Ett skräddarsytt system eller internt verktyg",
      "Tydlig kod som går att underhålla och bygga vidare på",
      "Dokumentation så att ni inte är beroende av en enda person",
    ],
    goodFor: [
      "Verksamheter som vuxit ur sina kalkylark",
      "Team med en process som ingen standardprodukt riktigt stödjer",
      "Dig som vill äga din lösning fullt ut",
    ],
  },
  {
    slug: "integrationer",
    num: "03",
    title: "Integrationer & API:er",
    short:
      "Jag kopplar ihop era affärssystem, API:er och databaser så att de pratar samma språk.",
    icon: "nodes",
    intro:
      "De flesta problem handlar inte om att ett system saknas, utan om att systemen inte pratar med varandra. Jag bygger kopplingarna så att data flödar automatiskt i stället för att klippas och klistras för hand.",
    includes: [
      "Integration mellan affärssystem, e-handel, CRM och liknande",
      "Egna API:er eller koppling mot befintliga",
      "Säker hantering av data på vägen mellan systemen",
      "Övervakning så att du märker om något slutar fungera",
    ],
    goodFor: [
      "Företag där samma uppgift matas in i flera system",
      "Dig som vill att webb, lager och ekonomi ska hänga ihop",
      "Verksamheter som vuxit och fått en spretig systemflora",
    ],
  },
  {
    slug: "automation",
    num: "04",
    title: "Automation & dataflöden",
    short:
      "Manuella steg ersätts med flöden som sköter sig själva. Mindre klick, färre fel.",
    icon: "flow",
    intro:
      "Återkommande, manuella moment är både tidstjuvar och felkällor. Jag automatiserar dem så att rätt sak händer av sig själv — och era timmar går till sådant som faktiskt kräver en människa.",
    includes: [
      "Automatisering av återkommande, manuella moment",
      "Schemalagda jobb och rapporter som skapas av sig själva",
      "Sammanställning av data från flera källor till ett ställe",
      "Larm när något behöver din uppmärksamhet",
    ],
    goodFor: [
      "Team som lägger timmar på samma uppgift varje vecka",
      "Dig som vill minska risken för slarvfel",
      "Verksamheter som vill skala utan att anställa fler för rutinjobb",
    ],
  },
  {
    slug: "drift",
    num: "05",
    title: "Drift & hosting",
    short:
      "Jag sätter upp servern, deployen och övervakningen — så att det ni byggt rullar stabilt.",
    icon: "cloud",
    intro:
      "En lösning är inte klar förrän den rullar stabilt i drift. Jag sätter upp en grund som är säker, skalbar och enkel att uppdatera — och håller koll så att den fortsätter fungera.",
    includes: [
      "Uppsättning av server, hosting och domän",
      "Automatiska driftsättningar (CI/CD) vid varje uppdatering",
      "Säkerhetskopior och övervakning",
      "En faktisk människa att höra av sig till när något hänger sig",
    ],
    goodFor: [
      "Dig som vill slippa pyssla med servrar själv",
      "Sajter och system som måste vara igång dygnet runt",
      "Projekt som ska kunna växa utan att byggas om",
    ],
  },
  {
    slug: "radgivning",
    num: "06",
    title: "Teknisk rådgivning",
    short:
      "Kodgranskning, arkitektur och en rak teknisk åsikt innan ni bygger vidare.",
    icon: "shield",
    intro:
      "Ibland behöver du inte mer kod — du behöver någon som granskar det som finns och ger en rak rekommendation. Jag hjälper dig fatta tekniska beslut du kan luta dig mot.",
    includes: [
      "Granskning av befintlig kod och arkitektur",
      "Rekommendationer kring teknikval och struktur",
      "Bollplank inför större beslut och ombyggnader",
      "Översättning av teknik till något ledningen kan ta ställning till",
    ],
    goodFor: [
      "Dig som ska påbörja ett bygge och vill ha rätt riktning",
      "Team som vill ha en second opinion på sin lösning",
      "Beslutsfattare som behöver tekniken förklarad rakt",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

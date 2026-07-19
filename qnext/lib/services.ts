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
    title: "Webb & hemsidor",
    short:
      "Hemsidor och webbappar byggda från grunden — snabba, responsiva och enkla att förvalta.",
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
      "Företag som vill synas proffsigt på nätet",
    ],
  },
  {
    slug: "fullstack",
    num: "02",
    title: "Fullstackutveckling",
    short:
      "Kompletta applikationer med både frontend och backend — databas, logik och gränssnitt i ett.",
    icon: "code",
    intro:
      "Jag bygger hela applikationen, inte bara ytan. Frontend som användaren möter, backend som gör jobbet och databasen som håller ordning på allt — byggt för att hänga ihop och hålla över tid.",
    includes: [
      "Frontend och backend byggt från grunden och anpassat efter era behov",
      "Databas som håller ordning på er information på ett säkert sätt",
      "Inloggning, behörigheter och allt annat en riktig applikation behöver",
      "Ren, dokumenterad kod som går att bygga vidare på",
    ],
    goodFor: [
      "Dig som behöver en komplett applikation, inte bara en hemsida",
      "Verksamheter som vuxit ur färdiga standardverktyg",
      "Projekt där data, logik och gränssnitt måste spela ihop",
    ],
  },
  {
    slug: "bokningssystem",
    num: "03",
    title: "Bokningssystem & skräddarsydda system",
    short:
      "Boknings- och verksamhetssystem byggda kring exakt ert flöde — tider, resurser och kunder på ett ställe.",
    icon: "calendar",
    intro:
      "Ett bokningssystem måste passa hur just ni jobbar — inte tvinga in er i någon annans mall. Jag bygger boknings- och verksamhetssystem från grunden, med tider, resurser, kunder och betalning samlat på ett ställe.",
    includes: [
      "Bokning av tider, resurser eller platser efter ert upplägg",
      "Separata vyer — en för kunden, en för er som administrerar",
      "Bekräftelser, påminnelser och överblick i realtid",
      "Byggt så att det kan växa med fler funktioner senare",
    ],
    goodFor: [
      "Verksamheter som tar emot bokningar och tröttnat på kalkylark",
      "Dig som inte hittar en färdig produkt som passar ert flöde",
      "Företag som vill ha bokning, kunder och betalning i samma system",
    ],
  },
  /*
  {
    slug: "ai-losningar",
    num: "05",
    title: "AI-lösningar & chattbottar",
    short:
      "Chattbottar och AI-funktioner som svarar kunder, sparar tid och kopplas ihop med era system.",
    icon: "chat",
    intro:
      "AI är som mest användbart när det löser en konkret uppgift. Jag bygger chattbottar och AI-funktioner som faktiskt hjälper — kopplade till era egna data och system, inte en generisk låda bredvid.",
    includes: [
      "Chattbottar som svarar kunder dygnet runt, tränade på ert material",
      "AI kopplad till era egna system, dokument och data",
      "Automatisering av text, svar och återkommande frågor",
      "En lösning ni äger — inte en dyr prenumeration ni fastnar i",
    ],
    goodFor: [
      "Företag som får många liknande kundfrågor",
      "Dig som vill spara tid på support och manuellt svarande",
      "Verksamheter som vill testa AI på ett konkret, avgränsat sätt",
    ],
  },
  */
 {
    slug: "e-handel",
    num: "04",
    title: "E-handel",
    short:
      "Webbshop med betalning, produkter och lager — byggd för att sälja och enkel att sköta.",
    icon: "cart",
    intro:
      "Jag bygger webbutiker från grunden, anpassade efter vad du säljer. Med smidig kassa, säkra betalningar och koll på lagret — så att kunden handlar enkelt och du slipper krångel bakom kulisserna.",
    includes: [
      "Webbshop anpassad efter dina produkter och ditt flöde",
      "Säker betalning med de vanligaste betalsätten",
      "Koll på lager, ordrar och kunder på ett ställe",
      "Byggt för mobilen, där de flesta handlar idag",
    ],
    goodFor: [
      "Dig som vill börja sälja på nätet",
      "Butiker som vill koppla ihop webb och fysisk försäljning",
      "Verksamheter som vuxit ur en enkel, färdig webbshopstjänst",
    ],
  },
  {
    slug: "seo",
    num: "05",
    title: "SEO & synlighet",
    short:
      "Att synas när kunder söker på Google — teknisk SEO, innehåll och lokal synlighet.",
    icon: "search",
    intro:
      "SEO - Nyckeln till fler kunder online. En snygg hemsida räcker inte om ingen hittar den. Med professionell SEO (sökmotoroptimering) förbättras din synlighet på Google, vilket gör att fler potentiella kunder hittar ditt företag när de söker efter dina produkter eller tjänster. En väloptimerad hemsida kan ge betydligt mer organisk trafik och fler kundförfrågningar över tid. Många företag ser en ökning av den organiska trafiken på 20-100 % eller mer inom 6-12 månader när SEO genomförs på rätt sätt. Hur mycket försäljningen ökar varierar, men fler relevanta besökare leder ofta till fler affärer. SEO är en långsiktig investering som stärker ditt varumärke, ökar din trovärdighet och hjälper dig att ligga steget före dina konkurrenter. Ju bättre du syns på Google, desto större är chansen att kunderna väljer dig.",
    includes: [
      "Teknisk SEO — snabb sajt, rätt struktur och kod Google förstår",
      "Titlar och beskrivningar som får folk att klicka i sökresultatet",
      "Lokal synlighet så att du hittas av kunder i din närhet",
      "Uppsättning av Google Search Console så du kan följa resultatet",
    ],
    goodFor: [
      "Dig som har en sajt men inte syns på Google",
      "Företag som vill hittas av lokala kunder",
      "Dig som vill ha fler besökare utan att betala för annonser",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

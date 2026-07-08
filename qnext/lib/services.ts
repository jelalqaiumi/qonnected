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

  

  

];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

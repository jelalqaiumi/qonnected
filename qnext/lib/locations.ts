import type { ServiceFaq } from "@/lib/services";

/**
 * Ortssidor för lokal synlighet. Varje ort måste ha eget innehåll — kopierad
 * text med utbytt ortsnamn klassas av Google som doorway pages och kan skada
 * hela domänen. Lägg inte till orter utan verklig koppling till verksamheten.
 */
export type Location = {
  slug: string;
  /** Ortens namn i grundform, t.ex. "Motala". */
  name: string;
  /** Böjd form för rubriker: "i Motala". */
  inName: string;
  title: string;
  description: string;
  intro: string;
  /** Varför just den här orten — måste vara sant och specifikt. */
  body: string[];
  /** Slugs ur services.ts som är mest relevanta här. */
  highlight: string[];
  faqs: ServiceFaq[];
};

export const locations: Location[] = [
  {
    slug: "motala",
    name: "Motala",
    inName: "i Motala",
    title: "Webbutveckling & systemutveckling i Motala",
    description:
      "Systemutvecklare i Motala som bygger hemsidor, bokningssystem och skräddarsydda system. Lokal utvecklare med kontakt på plats — ring 076-191 34 46.",
    intro:
      "Jag bor och arbetar i Motala. Behöver du en ny hemsida, en webbshop eller ett system som passar hur ditt företag faktiskt jobbar, finns jag på plats — inte i andra änden av landet.",
    body: [
      "Motala är en stad där mycket fortfarande görs på handslag och personlig kontakt. Det märks också i hur företag köper teknik: man vill kunna prata med någon, inte skicka in ett ärende i ett formulär och vänta.",
      "Det är därför jag jobbar som jag gör. Vi kan ses över en kaffe, gå igenom vad du behöver och reda ut om det ens är en hemsida du ska lägga pengar på — ibland är svaret något helt annat. Sedan bygger jag det, och du vet vem du ringer när något behöver ändras.",
      "Många mindre verksamheter här sitter med en sajt som byggdes för tio år sedan, eller med bokningar i ett kalkylark. Båda går att lösa utan att det blir ett stort projekt.",
    ],
    highlight: ["webbutveckling", "bokningssystem", "seo"],
    faqs: [
      {
        q: "Kan vi träffas fysiskt i Motala?",
        a: "Ja, gärna. Jag bor här, så vi kan ses på ditt kontor, i din butik eller över en kaffe i stan. För många är det enklare att förklara vad man behöver när man kan peka och visa.",
      },
      {
        q: "Jobbar du bara med företag i Motala?",
        a: "Nej. Motala är min utgångspunkt och jag tar gärna uppdrag i Linköping, Norrköping och övriga Östergötland. Utanför regionen arbetar jag på distans, vilket fungerar utmärkt för det mesta.",
      },
      {
        q: "Jag har redan en hemsida som känns gammal — måste jag börja om?",
        a: "Inte alltid. Ibland räcker det med att göra om delar av den, snabba upp den och fixa det tekniska så att Google hittar rätt. Jag tittar på vad du har innan jag föreslår att riva och bygga nytt.",
      },
    ],
  },
  {
    slug: "linkoping",
    name: "Linköping",
    inName: "i Linköping",
    title: "Webbutveckling & systemutveckling i Linköping",
    description:
      "Systemutvecklare som bygger hemsidor, webbappar och skräddarsydda system åt företag i Linköping. Utgår från Motala — nära nog för möten på plats.",
    intro:
      "Linköping är en teknikstad, och det märks på vad företagen här efterfrågar. Jag bygger hemsidor, webbappar och system för verksamheter som vet vad de vill ha — och för dem som behöver hjälp att reda ut det.",
    body: [
      "Med universitet och en stor teknikindustri har Linköping ett företagsklimat där många redan är vana vid utveckling. Det gör samtalen annorlunda: oftare handlar de om arkitektur, integrationer och hur något ska förvaltas över tid, inte bara om hur sajten ska se ut.",
      "Samtidigt finns här massor av mindre verksamheter — butiker, mottagningar, hantverkare, konsulter — som inte har någon teknisk avdelning alls och bara vill ha något som fungerar. Jag jobbar med båda.",
      "Jag utgår från Motala, drygt en halvtimmes bilresa härifrån. Det innebär att möten på plats i Linköping går alldeles utmärkt när det behövs.",
    ],
    highlight: ["fullstack", "webbutveckling", "bokningssystem"],
    faqs: [
      {
        q: "Kommer du ut till oss i Linköping?",
        a: "Ja. Det är en kort bilresa från Motala, så möten på plats är inget problem — särskilt i början av ett projekt när det är lättast att reda ut saker ansikte mot ansikte.",
      },
      {
        q: "Vi har redan utvecklare internt. Kan du komplettera?",
        a: "Absolut. Ibland behövs en extra person för en avgränsad del, eller någon som tar hand om webben medan teamet fokuserar på produkten. Jag skriver kod som är dokumenterad och läsbar, just för att andra ska kunna ta vid.",
      },
      {
        q: "Kan du bygga något som kopplas ihop med våra befintliga system?",
        a: "Oftast ja. Har systemen ett öppet gränssnitt går de att koppla ihop så att information inte matas in på två ställen. Vi går igenom vad ni har innan jag lovar något.",
      },
    ],
  },
  {
    slug: "norrkoping",
    name: "Norrköping",
    inName: "i Norrköping",
    title: "Webbutveckling & systemutveckling i Norrköping",
    description:
      "Hemsidor, webbshoppar och skräddarsydda system åt företag i Norrköping. Systemutvecklare från Östergötland med möten på plats när det behövs.",
    intro:
      "Jag bygger hemsidor, webbshoppar och verksamhetssystem åt företag i Norrköping. Från grunden och anpassat efter hur ni jobbar — inte hämtat ur en mall.",
    body: [
      "Norrköping har ett brett näringsliv där handel, tjänster och tillverkning lever sida vid sida. Det ger väldigt olika behov: en butik som vill börja sälja på nätet har inte samma problem som ett företag där bokningar och resurser ska hänga ihop internt.",
      "Gemensamt är att många har vuxit ur sina första lösningar. En webbshop hos en färdig tjänst där avgifterna börjat bita, eller ett schema som fortfarande bor i ett kalkylark. Det är precis de lägena där ett eget bygge börjar löna sig.",
      "Jag utgår från Motala och tar mig gärna till Norrköping för möten. Resten sköts smidigt digitalt.",
    ],
    highlight: ["e-handel", "bokningssystem", "webbutveckling"],
    faqs: [
      {
        q: "Vi säljer redan via en färdig webbshopstjänst. Är det värt att byta?",
        a: "Det beror på volymen. Räkna ihop månadsavgift och transaktionsavgifter över ett år — passerar den summan vad ett eget bygge kostar börjar det luta åt eget. Har du dessutom flöden som plattformen inte klarar är svaret oftast ja.",
      },
      {
        q: "Kan webbshopen kopplas till vår fysiska butik?",
        a: "Ja, om kassasystemet tillåter det. Då kan lagersaldot hållas gemensamt så att samma vara inte säljs två gånger. Vi kollar vad ert nuvarande system klarar först.",
      },
      {
        q: "Hur går ett projekt till när vi inte sitter i samma stad?",
        a: "Vi ses på plats i början om du vill, sedan sköts det mesta digitalt. Du får se sajten växa fram på en testadress och kan tycka till löpande i stället för att vänta på ett färdigt resultat.",
      },
    ],
  },
  {
    slug: "hela-sverige",
    name: "hela Sverige",
    inName: "i hela Sverige",
    title: "Systemutvecklare på distans — uppdrag i hela Sverige",
    description:
      "Jag bygger hemsidor och skräddarsydda system på distans åt kunder i hela Sverige. Utgår från Östergötland, arbetar digitalt — enkelt att komma igång.",
    intro:
      "Jag utgår från Östergötland men tar uppdrag i hela Sverige. Det mesta i ett utvecklingsprojekt sköts ändå digitalt, och avståndet spelar mindre roll än att vi förstår varandra.",
    body: [
      "Jag tänker inte påstå att jag har kontor i din stad. Det har jag inte. Däremot fungerar utvecklingsarbete på distans riktigt bra, förutsatt att man är tydlig med hur samarbetet går till.",
      "Så här ser det ut i praktiken: vi har ett första samtal över video där vi går igenom vad du behöver. Du får en offert med tidplan. Under bygget ligger sajten på en testadress som du kan öppna när du vill och kommentera på — du behöver inte vänta på en stor avtäckning i slutet. Vi stämmer av löpande, oftare i början.",
      "Fördelen är att du inte är begränsad till utvecklarna som råkar finnas där du bor. Nackdelen är att vi inte kan peka på samma skärm. Min erfarenhet är att en delad testlänk löser det mesta av det.",
      "Behöver ni ses fysiskt för ett uppstartsmöte går det att ordna — men för de flesta projekt är det inte nödvändigt.",
    ],
    highlight: ["webbutveckling", "fullstack", "e-handel"],
    faqs: [
      {
        q: "Fungerar det verkligen att bygga en sajt på distans?",
        a: "Ja, och det är så de flesta utvecklingsprojekt görs idag. Det som krävs är tydlighet: att du vet vad som händer när, och att du kan se resultatet under vägen i stället för bara på slutet. Det bygger jag in i hur jag arbetar.",
      },
      {
        q: "Hur ofta hörs vi under projektet?",
        a: "Tätare i början när vi formar vad det ska bli, glesare när jag bygger. Du får alltid en testlänk att titta på, och du kan höra av dig när du vill — du behöver inte vänta på ett inbokat möte.",
      },
      {
        q: "Kan vi ses fysiskt om vi vill?",
        a: "I Östergötland gärna. Längre bort går det att ordna för ett uppstartsmöte om projektet motiverar det, men för de allra flesta uppdrag behövs det inte.",
      },
      {
        q: "Spelar det roll var utvecklaren sitter?",
        a: "För själva bygget: nej. Det som spelar roll är att du får tag på personen som byggt det när något behöver ändras — och att koden är din, så att du aldrig är låst till en enskild leverantör.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

/**
 * Orter vi tar uppdrag i. Ren uppräkning som visas på startsidan — inga
 * länkar och inga egna sidor, bara en faktauppgift om var vi jobbar.
 */
export const serviceAreas: string[] = [
  "Motala",
  "Linköping",
  "Norrköping",
  "Mjölby",
  "Skänninge",
  "Vadstena",
  "Stockholm",
  "Göteborg",
  "Umeå",
];

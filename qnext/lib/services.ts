export type ProcessStep = { title: string; body: string; time?: string };

export type ServiceFaq = { q: string; a: string };

/**
 * Prisuppgifter per tjänst. Sektionen renderas bara när `from` är ifyllt —
 * så att inga halvfärdiga platshållare kan gå live av misstag.
 */
export type Pricing = {
  /** Lägsta pris, t.ex. "15 000 kr". */
  from: string;
  /** Övre delen av spannet, t.ex. "40 000 kr". Utelämna för rena "från"-priser. */
  to?: string;
  /** Exempel på projekt som brukar ligga i spannet. */
  typical?: string;
  /** Kort förklaring av vad som påverkar priset. */
  note: string;
};

export type PersonalPitch = {
  title: string;
  body: string[];
};

export type ServiceCase = {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export type Fit = {
  good: string[];
  bad: string[];
};

/**
 * Faktaruta om varför tjänsten spelar roll. Siffrorna ska vara publicerad
 * branschforskning med angiven källa — aldrig löften om vad en enskild kund
 * kommer att få. Resultatpåståenden kräver bevis enligt marknadsföringslagen,
 * och vi har inga egna mätdata att luta oss mot. Det gäller även "upp till".
 */
export type Impact = {
  /** Siffran som visas stort. Utelämnas när det saknas en källa värd namnet. */
  stat?: string;
  statLabel?: string;
  body: string;
  source?: string;
  sourceUrl?: string;
};

export type Service = {
  slug: string;
  num: string;
  title: string;
  short: string;
  icon: string;
  intro: string;
  includes: string[];
  goodFor: string[];
  process: ProcessStep[];
  faqs: ServiceFaq[];
  pricing?: Pricing;
  impact: Impact;
  /** Valfri bakgrundsbild i sidhuvudet. Utan den visas den blå gradienten. */
  heroImage?: string;
  /** Kort text ovanpå hero-bilden för mer kontext. */
  heroNote?: string;
  personal?: PersonalPitch;
  cases?: ServiceCase[];
  trust?: string[];
  fit?: Fit;
  /** Kort svarstidslöfte i sista CTA-rutan. */
  responseTime?: string;
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
    pricing: {
      from: "10 000 kr",
      to: "45 000 kr",
      note: "Var i spannet du hamnar beror på hur många sidor sajten har, om innehåll och bilder finns färdigt, och om det behövs databas, inloggning eller andra funktioner bakom ytan. Du får en fast offert innan vi börjar — inga överraskningar på fakturan.",
    },
    process: [
      {
        title: "Vi reder ut vad sajten ska göra",
        body: "Innan en rad kod skrivs går vi igenom vilka som ska besöka sajten och vad du vill att de gör där — ringa, boka, handla eller bara förstå vad du erbjuder. Det avgör vilka sidor som behövs och hur de ska hänga ihop.",
      },
      {
        title: "Struktur och formgivning",
        body: "Jag skissar upp sidorna och hur innehållet ska ligga, och vi stämmer av innan bygget börjar. Det är billigare att flytta saker i en skiss än i färdig kod, och du slipper överraskningar på slutet.",
      },
      {
        title: "Jag bygger",
        body: "Sajten byggs från grunden med kod jag skriver själv. Du får se den växa fram på en testadress och kan tycka till längs vägen i stället för att vänta på en stor avslöjning.",
      },
      {
        title: "Lansering och överlämning",
        body: "Vi kopplar på domänen, kontrollerar att allt fungerar i mobil och på desktop och att Google kan hitta sidorna. Du får koden och en genomgång av hur du sköter det som är tänkt att skötas löpande.",
      },
    ],
    faqs: [
      {
        q: "Hur lång tid tar det att bygga en hemsida?",
        a: "En enklare sajt med några sidor brukar ta ett par veckor. Har du många sidor, funktioner som bokning eller behöver texter och bilder tas fram blir det längre. Jag ger dig en tidplan tillsammans med offerten så du vet vad som gäller innan vi börjar.",
      },
      {
        q: "Kan jag uppdatera innehållet själv efteråt?",
        a: "Ja, om du vill. Behöver du ändra texter och bilder löpande bygger jag in ett enkelt sätt att göra det utan att du rör koden. Räcker det att jag gör ändringar när de dyker upp blir sajten enklare och billigare — vi bestämmer vilket som passar dig.",
      },
      {
        q: "Behöver jag fixa domän och webbhotell själv?",
        a: "Nej, jag hjälper dig med det. Har du redan en domän använder vi den. Saknas det ser jag till att allt kommer på plats och att sajten ligger någonstans som är snabbt och driftsäkert.",
      },
      {
        q: "Vad händer om jag vill lägga till funktioner senare?",
        a: "Det går bra. Eftersom sajten är byggd från grunden och inte låst till en plattform kan den byggas ut när behovet dyker upp — med bokning, inloggning, webbshop eller vad det nu blir. Du behöver inte börja om.",
      },
      {
        q: "Syns sajten på Google?",
        a: "Jag bygger alltid med teknisk sökmotoroptimering på plats: snabb laddning, rätt struktur, titlar och beskrivningar som Google förstår, samt sitemap. Att ranka på konkurrensutsatta sökord kräver därutöver innehåll över tid — det hjälper jag gärna till med separat.",
      },
    ],
    impact: {
      stat: "53 %",
      statLabel:
        "av besökarna på mobil lämnar en sida som tar mer än tre sekunder att ladda",
      body: "Du kan vara bäst i länet på det du gör — hinner sajten inte fram får besökaren aldrig veta det. Därför bygger jag för fart från början, med bilder och kod som väger så lite som möjligt. Du behöver inte kunna något om det själv: jag sköter tekniken, strukturen och det som gör att Google förstår vad du erbjuder.",
      source: "Google",
      sourceUrl:
        "https://business.google.com/think/marketing-strategies/mobile-page-speed-new-industry-benchmarks/",
    },
  },
  {
    slug: "fullstack",
    num: "02",
    title: "Fullstackutveckling",
    short:
      "Kompletta applikationer med både frontend och backend — databas, logik och gränssnitt i ett.",
    icon: "code",
    heroImage: "/fullstack.webp",
    heroNote: "Från idé till drift: gränssnitt, logik och data i samma leverans.",
    intro:
      "Jag bygger hela applikationen, inte bara ytan. Frontend som användaren möter, backend som gör jobbet och databasen som håller ordning på allt — byggt för att hänga ihop och hålla över tid.",
    personal: {
      title: "Hej, jag heter Qaium och bygger fullstacklösningar som faktiskt används i vardagen.",
      body: [
        "Jag jobbar nära dig som beställare, utan mellanhänder. Vi börjar i hur ni arbetar idag och bygger runt det i stället för att pressa in er i ett standardflöde.",
        "Du får tydliga avstämningar, läsbar kod och en lösning som går att lämna över. Målet är alltid samma sak: mindre manuellt arbete och bättre kontroll.",
      ],
    },
    cases: [
      {
        title: "När orderflödet sitter i kalkylark",
        challenge:
          "Sälj, lager och leverans låg i olika filer, vilket gav dubbelregistrering och missade uppdateringar.",
        solution:
          "Ett vanligt upplägg är att bygga ett internt webbgränssnitt med central databas, rollstyrd inloggning och tydlig orderstatus.",
        outcome:
          "Resultatet brukar bli bättre överblick i realtid och mindre tid på manuell avstämning varje vecka.",
      },
      {
        title: "När bokningar saknar överblick",
        challenge:
          "Bokningar sköttes via mejl och telefon, vilket gav krockar och svårt att planera bemanning.",
        solution:
          "Ett vanligt upplägg är ett bokningsflöde med regler för tillgänglighet, adminvy och automatiska bekräftelser.",
        outcome:
          "Det brukar ge färre krockar, snabbare administration och tydligare planering av personal och resurser.",
      },
      {
        title: "När en kundportal behöver struktur",
        challenge:
          "Kunder skickade in underlag i olika format och ärenden tappades bort mellan system.",
        solution:
          "Ett vanligt upplägg är en portal med inloggning, filuppladdning och koppling till befintligt ärendeflöde.",
        outcome:
          "Det brukar skapa mer förutsägbar leverans och kortare ledtid från underlag till färdigt beslut.",
      },
    ],
    trust: [
      "Du äger alltid koden och all data efter leverans.",
      "Kodbasen dokumenteras så att den kan tas över av andra utvecklare.",
      "Backup, loggning och grundläggande övervakning sätts upp vid driftstart.",
      "Behörigheter och säker hantering av användardata byggs in från start.",
    ],
    fit: {
      good: [
        "Ni har ett manuellt arbetsflöde som kostar tid varje vecka.",
        "Ni behöver en lösning som passar er process, inte en färdig mall.",
        "Ni vill kunna bygga vidare med fler funktioner stegvis.",
      ],
      bad: [
        "Ni behöver bara en enkel informationssida utan inloggning eller dataflöden.",
        "Ni vill ha billigast möjliga snabbfix utan plan för förvaltning.",
        "Ni har inte möjlighet att avsätta tid för korta avstämningar under projektet.",
      ],
    },
    responseTime: "Jag återkommer inom 24h på vardagar.",
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
    pricing: {
      from: "20 000 kr",
      typical:
        "Internt verksamhetsstöd, kundportal eller bokningsflöde med inloggning och databas.",
      note: "Startpriset gäller en avgränsad applikation med ett tydligt syfte. Priset styrs av hur många funktioner som ska in, hur komplex datamodellen är och om det behövs inloggning, behörigheter eller kopplingar till andra system. Du får en fast offert innan vi börjar.",
    },
    process: [
      {
        title: "Vi kartlägger flödet",
        time: "1-3 dagar",
        body: "Vi går igenom hur arbetet faktiskt går till hos er idag — vem som gör vad, var informationen finns och var det skaver. Det är det som avgör hur applikationen ska byggas, inte tvärtom.",
      },
      {
        title: "Datamodell och struktur",
        time: "2-5 dagar",
        body: "Jag bestämmer hur informationen ska lagras och hänga ihop innan bygget drar igång. Den delen är svår att ändra i efterhand, så den är värd att göra rätt från början.",
      },
      {
        title: "Bygge i etapper",
        time: "2-6 veckor",
        body: "Vi tar den viktigaste funktionen först och får den att fungera skarpt, sedan bygger vi vidare därifrån. Du ser resultat tidigt och kan styra om medan det fortfarande är enkelt.",
      },
      {
        title: "Driftsättning och förvaltning",
        time: "1-3 dagar + löpande",
        body: "Applikationen sätts i drift med säkerhetskopior och övervakning på plats. Sedan hjälper jag till löpande eller lämnar över till er — beroende på vad ni vill.",
      },
    ],
    faqs: [
      {
        q: "Vad är skillnaden mot en vanlig hemsida?",
        a: "En hemsida visar information. En applikation gör saker — sparar data, räknar, håller reda på användare och behörigheter, kopplar ihop system. Behöver du logga in för att använda den är det oftast en applikation.",
      },
      {
        q: "Vilken teknik bygger du i?",
        a: "Jag arbetar med moderna, väletablerade verktyg som det finns gott om utvecklare till. Det är ett medvetet val: du ska aldrig sitta med kod som bara jag kan underhålla eller som bygger på något som slutar uppdateras.",
      },
      {
        q: "Kan någon annan ta över koden sen?",
        a: "Ja. Koden är din, den är dokumenterad och skriven för att gå att läsa. Vill du byta utvecklare eller ta in fler i teamet ska det inte vara ett hinder.",
      },
      {
        q: "Vad kostar det att ha applikationen igång?",
        a: "Utöver bygget tillkommer löpande kostnader för server och databas. För mindre applikationer handlar det ofta om några hundralappar i månaden. Jag går igenom vad just din lösning kommer att kosta i drift innan vi börjar.",
      },
      {
        q: "Kan den kopplas ihop med system vi redan använder?",
        a: "Oftast ja. Har systemen ett öppet gränssnitt går de att koppla ihop, så att information inte behöver matas in på två ställen. Vi tittar på vad era befintliga system klarar innan vi lovar något.",
      },
    ],
    impact: {
      body:
        `En applikation som fungerar smidigt och håller ordning på informationen gör att ni kan fokusera på det ni är bra på i stället för att jaga data. Jag bygger både gränssnittet och logiken bakom, så att det hänger ihop och går att bygga vidare på och finns kvar när något behöver justeras.
`,
    
    },
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
    pricing: {
      from: "15 000 kr",
      to: "50 000 kr",
      note: "Var i spannet du hamnar beror på hur många resurser som ska bokas, hur krångliga reglerna kring tiderna är, och om det ska in betalning, påminnelser eller koppling till er befintliga kalender. Du får en fast offert innan vi börjar.",
    },
    process: [
      {
        title: "Vi går igenom hur ni bokar idag",
        body: "Vad bokas — tider, personal, lokaler, utrustning? Hur länge, hur ofta, och vad får inte krocka? Det är reglerna kring bokningen som gör varje verksamhet unik, och de måste sitta rätt.",
      },
      {
        title: "Kundvy och adminvy",
        body: "Kunden ska kunna boka på några sekunder utan att fundera. Ni ska kunna se allt, ändra snabbt och lägga in undantag. Det är två olika behov och de byggs som två olika gränssnitt.",
      },
      {
        title: "Betalning och påminnelser",
        body: "Ska kunden betala vid bokning eller på plats? Behövs bekräftelse och påminnelse via mejl? Här kopplas det på — påminnelser är det enskilt effektivaste sättet att minska uteblivna besök.",
      },
      {
        title: "Test i skarp drift",
        body: "Vi kör systemet parallellt med ert nuvarande sätt en period, så att inget faller mellan stolarna. När det sitter går ni över helt.",
      },
    ],
    faqs: [
      {
        q: "Passar det min bransch?",
        a: "Systemet byggs efter ert flöde, så branschen spelar mindre roll än hur bokningen fungerar. Salong, verkstad, mottagning, uthyrning, konsult — det som avgör är vad som bokas och vilka regler som gäller.",
      },
      {
        q: "Kan kunderna betala när de bokar?",
        a: "Ja. Betalning vid bokning går att koppla på med de vanliga betalsätten, och det minskar antalet uteblivna besök rejält. Vill ni hellre ta betalt på plats fungerar det också.",
      },
      {
        q: "Skickas bekräftelser och påminnelser automatiskt?",
        a: "Ja, bekräftelse när kunden bokar och påminnelse innan besöket. Det är den funktion som brukar märkas mest direkt, eftersom uteblivna tider kostar pengar varje vecka.",
      },
      {
        q: "Kan det kopplas till kalendern vi redan använder?",
        a: "Oftast ja. Använder ni en vanlig digital kalender går bokningarna att synka dit så att ni slipper hålla två kalendrar uppdaterade. Vi kollar vad er kalender stödjer innan vi lovar något.",
      },
      {
        q: "Varför inte bara använda en färdig bokningstjänst?",
        a: "Passar en färdig tjänst ert flöde är det ofta ett bra val, och det säger jag hellre än säljer något onödigt. Ett eget system är rätt när ni har regler som inte får plats i mallen, när avgiften per bokning börjar bita, eller när ni vill ha bokning, kunder och betalning i samma system.",
      },
    ],
    impact: {
      stat: "85 %",
      statLabel:
        "tycker att kontaktuppgifter och öppettider är viktiga när de undersöker ett lokalt företag",
      body: "Folk vill se när du är ledig och boka direkt, helst utan att behöva ringa på kontorstid. Ett bokningssystem står öppet dygnet runt även när du inte gör det, och automatiska påminnelser är det enklaste sättet att minska uteblivna tider. Jag bygger både kundvyn och din adminvy, kopplar på betalning och påminnelser, och finns kvar när något behöver justeras.",
      source: "BrightLocal",
      sourceUrl: "https://www.brightlocal.com/research/consumer-search-behavior/",
    },
  },
  {
    slug: "e-handel",
    num: "04",
    title: "E-handel",
    short:
      "Webbshop med betalning, produkter och lager — byggd för att sälja och enkel att sköta.",
    icon: "cart",
    heroImage: "/ehandel.webp",
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
    pricing: {
      from: "10 000 kr",
      note: "Startpriset gäller en butik med ett avgränsat sortiment. Priset styrs av hur många produkter du säljer, om de har varianter i storlek och färg, vilka betalsätt som ska kopplas på, och om lager och ordrar ska hänga ihop med system du redan använder. Du får en fast offert innan vi börjar.",
    },
    process: [
      {
        title: "Sortiment och struktur",
        body: "Vi går igenom vad du säljer och hur det ska sorteras. Har produkterna varianter i storlek och färg, eller ska de kunna kombineras? Strukturen avgör hur lätt kunden hittar rätt.",
      },
      {
        title: "Kassa och betalning",
        body: "Kassan är där affärer tappas. Den byggs så kort som möjligt, fungerar i mobilen och erbjuder de betalsätt dina kunder faktiskt använder — kort, Swish och faktura.",
      },
      {
        title: "Lager, order och frakt",
        body: "Lagersaldo som uppdateras när något säljs, ordrar samlade på ett ställe och fraktalternativ som räknas rätt i kassan. Det är den delen du kommer leva med varje dag.",
      },
      {
        title: "Lansering och uppföljning",
        body: "Vi testar hela köpflödet skarpt innan öppning. Efter lansering tittar vi på var kunderna hoppar av — det är oftast där de snabbaste förbättringarna finns.",
      },
    ],
    faqs: [
      {
        q: "Vilka betalsätt kan jag erbjuda?",
        a: "De som dina kunder förväntar sig: kort, Swish och faktura eller delbetalning. Vilken betalleverantör vi väljer beror på dina volymer och avgifter — jag hjälper dig jämföra innan vi kopplar på något.",
      },
      {
        q: "Hur många produkter klarar butiken?",
        a: "Allt från en handfull till flera tusen. Har du ett stort sortiment blir sökning, filter och hur produkterna importeras viktigare — det påverkar bygget och tas med i offerten.",
      },
      {
        q: "Kan webbshopen kopplas till min fysiska butik?",
        a: "Ja, om ditt kassasystem tillåter det. Då kan lagersaldot hållas gemensamt så att du slipper sälja samma vara två gånger. Vi kollar vad ditt nuvarande system klarar först.",
      },
      {
        q: "Kan ordrar hamna i bokföringen automatiskt?",
        a: "Oftast ja. De flesta bokföringsprogram går att koppla ihop med butiken så att ordrar och betalningar hamnar rätt utan handpåläggning. Det sparar tid varje månad.",
      },
      {
        q: "Varför inte en färdig plattform som Shopify?",
        a: "För många är en färdig plattform helt rätt, och då säger jag det. Ett eget bygge lönar sig när månadsavgifter och transaktionsavgifter börjar kosta mer än det smakar, när du behöver flöden plattformen inte stödjer, eller när du vill äga hela lösningen.",
      },
    ],
    impact: {
      stat: "2×",
      statLabel:
        "så mycket tjänar mobilsajter som laddar på fem sekunder, jämfört med dem som tar nitton",
      body: "I en webbutik är varje extra sekund i kassan en anledning att hoppa av. Därför bygger jag butiken lätt och kassan kort, med de betalsätt dina kunder faktiskt använder. Lager, ordrar och frakt hänger ihop så att du slipper hålla ordning på det manuellt — och jag finns kvar efter lansering när det är dags att se var kunderna faller ifrån.",
      source: "Google",
      sourceUrl:
        "https://business.google.com/think/marketing-strategies/mobile-page-speed-new-industry-benchmarks/",
    },
  },
  {
    slug: "seo",
    num: "05",
    title: "SEO & synlighet",
    short:
      "Att synas när kunder söker på Google — teknisk SEO, innehåll och lokal synlighet.",
    icon: "search",
    intro:
      "En snygg hemsida räcker inte om ingen hittar den. Med genomtänkt sökmotoroptimering syns du när kunder söker efter det du erbjuder — och det ger trafik som fortsätter komma utan att du betalar per klick.",
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
    process: [
      {
        title: "Teknisk genomgång",
        body: "Jag går igenom sajten som en sökmotor ser den: laddtid, struktur, rubriker, sitemap och strukturerad data. Är grunden trasig spelar innehållet mindre roll, så den delen kommer först.",
      },
      {
        title: "Sökordsanalys",
        body: "Vi tar reda på vad dina kunder faktiskt skriver i sökrutan — inte vad branschen kallar det internt. Ofta finns de bästa möjligheterna i längre, mer specifika sökningar med lägre konkurrens.",
      },
      {
        title: "Innehåll och struktur",
        body: "Varje sida får ett tydligt syfte och ett sökord den ska svara på, med titlar och rubriker därefter. Saknas sidor för det kunderna söker på behöver de skapas — det är oftast här jobbet ligger.",
      },
      {
        title: "Mätning och uppföljning",
        body: "Search Console sätts upp så att du ser vad folk söker på när du dyker upp, och vad de klickar på. Utan mätning är SEO gissningar, och då går det inte att veta vad som fungerar.",
      },
    ],
    faqs: [
      {
        q: "Hur lång tid tar det innan jag ser resultat?",
        a: "Tekniska förbättringar kan slå igenom på veckor. Att klättra på sökord med verklig konkurrens tar normalt tre till sex månader, och längre i tuffa branscher. SEO är en investering som växer över tid, inte en knapp man trycker på.",
      },
      {
        q: "Kan du garantera att jag hamnar först på Google?",
        a: "Nej, och du bör vara skeptisk mot alla som lovar det. Ingen kontrollerar Googles rangordning. Det jag kan lova är att grunden blir rätt, att vi arbetar mot sökord som faktiskt är realistiska, och att du kan mäta utvecklingen själv.",
      },
      {
        q: "Vad är lokal SEO och behöver jag det?",
        a: "Lokal SEO handlar om att synas när någon söker med en ort eller när Google vet var personen befinner sig. Säljer du tjänster i ett geografiskt område är det ofta det som ger mest — konkurrensen är lägre och besökarna är närmare ett köp.",
      },
      {
        q: "Behöver jag en Google Business Profile?",
        a: "Om du har lokala kunder: ja, absolut. Det är gratis, och det är den som avgör om du dyker upp i kartresultaten. För många lokala verksamheter ger den mer synlighet än sajten gör på egen hand.",
      },
      {
        q: "Ingår det att skriva innehåll?",
        a: "Det beror på upplägget. Jag kan arbeta enbart tekniskt, ta fram struktur och förslag som du fyller i, eller skriva texterna åt dig. Vi bestämmer omfattningen utifrån hur mycket tid du själv vill lägga.",
      },
    ],
    impact: {
      stat: "84 %",
      statLabel:
        "har sökt efter ett lokalt företag på nätet de senaste tre månaderna",
      body: "Kunderna letar redan efter det du säljer — frågan är bara om de hittar dig eller någon annan. Syns du inte på första sidan är du i praktiken osynlig för dem. Jag går igenom tekniken, tar reda på vad dina kunder faktiskt söker på, ser till att sidorna svarar på det och sätter upp mätningen så att du själv kan följa utvecklingen i stället för att lita på mitt ord.",
      source: "BrightLocal",
      sourceUrl: "https://www.brightlocal.com/research/consumer-search-behavior/",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

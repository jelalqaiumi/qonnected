import type { Service } from "@/lib/services";

/**
 * Engelska tjänstesidor. Slugarna måste matcha serviceSlugMap i i18n.ts —
 * ändras en slug här måste den ändras där också, annars pekar språkväljaren
 * och hreflang fel.
 */
export const servicesEn: Service[] = [
  {
    slug: "web-development",
    num: "01",
    title: "Web & websites",
    short:
      "Websites and web apps built from scratch — fast, responsive and easy to maintain.",
    icon: "web",
    intro:
      "I build websites from the ground up rather than from a template. That gives you a site that loads fast, looks exactly the way you want, and is easy to extend later — without locking you into a tool you don't own.",
    includes: [
      "Design and code shaped around your business, not a stock template",
      "Responsive — works just as well on a phone as on a desktop",
      "Built for speed and for search engines to understand",
      "A clean structure that you or I can build on later",
    ],
    goodFor: [
      "You who need a new site, or want to replace an ageing one",
      "You who want something you own instead of a locked page builder",
      "Businesses that want to look professional online",
    ],
    pricing: {
      from: "SEK 10,000",
      to: "SEK 45,000",
      note: "Where you land in that range depends on how many pages the site has, whether the content and images already exist, and whether you need a database, logins or other functionality behind the scenes. You get a fixed quote before we start — no surprises on the invoice.",
    },
    process: [
      {
        title: "We work out what the site should do",
        body: "Before a line of code is written we go through who will visit the site and what you want them to do there — call, book, buy, or simply understand what you offer. That decides which pages are needed and how they connect.",
      },
      {
        title: "Structure and design",
        body: "I sketch out the pages and how the content sits, and we agree on it before the build starts. It is cheaper to move things in a sketch than in finished code, and you avoid surprises at the end.",
      },
      {
        title: "I build it",
        body: "The site is built from scratch with code I write myself. You watch it take shape on a test address and can give feedback along the way, rather than waiting for one big reveal.",
      },
      {
        title: "Launch and handover",
        body: "We point the domain, check that everything works on mobile and desktop, and make sure Google can find the pages. You get the code and a walkthrough of anything meant to be maintained over time.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to build a website?",
        a: "A simpler site with a handful of pages usually takes a couple of weeks. More pages, features like booking, or content that still needs writing will push that out. You get a timeline along with the quote, so you know where you stand before we begin.",
      },
      {
        q: "Can I update the content myself afterwards?",
        a: "Yes, if you want to. If you need to change text and images regularly, I build in a simple way to do that without touching code. If it's enough that I make changes as they come up, the site stays simpler and cheaper — we pick whichever suits you.",
      },
      {
        q: "Do I need to sort out the domain and hosting myself?",
        a: "No, I'll help you with that. If you already have a domain we'll use it. If not, I make sure everything is set up and that the site sits somewhere fast and reliable.",
      },
      {
        q: "What if I want to add features later?",
        a: "That's fine. Because the site is built from scratch and isn't tied to a platform, it can grow when the need appears — booking, logins, a shop, whatever it turns out to be. You don't have to start over.",
      },
      {
        q: "Will the site show up on Google?",
        a: "I always build with the technical groundwork in place: fast loading, sound structure, titles and descriptions Google understands, and a sitemap. Ranking for genuinely competitive terms also takes content over time — something I'm happy to help with separately.",
      },
    ],
    impact: {
      stat: "53%",
      statLabel:
        "of mobile visitors leave a page that takes more than three seconds to load",
      body: "You can be the best in the region at what you do — if the site doesn't arrive in time, the visitor never finds out. That's why I build for speed from the start, with images and code that weigh as little as possible. You don't need to understand any of it yourself: I handle the technical side, the structure, and what makes Google understand what you offer.",
      source: "Google",
      sourceUrl:
        "https://business.google.com/think/marketing-strategies/mobile-page-speed-new-industry-benchmarks/",
    },
  },
  {
    slug: "fullstack-development",
    num: "02",
    title: "Fullstack development",
    short:
      "Complete applications with both frontend and backend — database, logic and interface in one.",
    icon: "code",
    intro:
      "I build the whole application, not just the surface. The frontend your users meet, the backend that does the work, and the database that keeps track of it all — built to hold together and to last.",
    includes: [
      "Frontend and backend built from scratch around your needs",
      "A database that keeps your information in order, securely",
      "Logins, permissions and everything else a real application needs",
      "Clean, documented code that can be built on",
    ],
    goodFor: [
      "You who need a complete application, not just a website",
      "Businesses that have outgrown off-the-shelf tools",
      "Projects where data, logic and interface all have to work together",
    ],
    pricing: {
      from: "SEK 20,000",
      note: "The starting price covers a focused application with a clear purpose. What moves it is how many features go in, how complex the data model is, and whether you need logins, permissions or connections to other systems. You get a fixed quote before we start.",
    },
    process: [
      {
        title: "We map the workflow",
        body: "We go through how the work actually happens today — who does what, where the information lives, and where it chafes. That's what shapes the application, not the other way round.",
      },
      {
        title: "Data model and structure",
        body: "I decide how the information should be stored and connected before the build begins. That part is hard to change afterwards, so it's worth getting right from the start.",
      },
      {
        title: "Built in stages",
        body: "We take the most important feature first and get it working properly, then build out from there. You see results early and can change direction while it's still easy.",
      },
      {
        title: "Deployment and maintenance",
        body: "The application goes live with backups and monitoring in place. After that I either help out on an ongoing basis or hand it over to you — whichever you prefer.",
      },
    ],
    faqs: [
      {
        q: "How is this different from an ordinary website?",
        a: "A website shows information. An application does things — stores data, calculates, keeps track of users and permissions, connects systems. If you need to log in to use it, it's usually an application.",
      },
      {
        q: "What technology do you build in?",
        a: "I work with modern, well-established tools that plenty of developers know. That's deliberate: you should never end up with code only I can maintain, or built on something that stops being updated.",
      },
      {
        q: "Can someone else take over the code later?",
        a: "Yes. The code is yours, it's documented, and it's written to be read. If you want to change developer or bring more people onto the team, that shouldn't be an obstacle.",
      },
      {
        q: "What does it cost to keep the application running?",
        a: "On top of the build there are ongoing costs for server and database. For smaller applications that's often a few hundred kronor a month. I go through what your particular solution will cost to run before we start.",
      },
      {
        q: "Can it connect to systems we already use?",
        a: "Usually yes. If those systems have an open interface they can be connected, so information doesn't have to be entered twice. We check what your existing systems can do before promising anything.",
      },
    ],
    impact: {
      body: "I'm deliberately not putting a percentage here. What a custom system is worth depends entirely on how much manual work you do today — duplicate data entry, information living in three different files, time spent searching for things. We do that calculation together before you decide, using your numbers rather than someone else's. Then I build the whole thing: interface, logic, database and hosting.",
    },
  },
  {
    slug: "booking-systems",
    num: "03",
    title: "Booking & custom systems",
    short:
      "Booking and operations systems built around exactly how you work — times, resources and customers in one place.",
    icon: "calendar",
    intro:
      "A booking system has to fit how you actually work — not force you into someone else's template. I build booking and operations systems from scratch, with times, resources, customers and payment gathered in one place.",
    includes: [
      "Booking of times, resources or spaces on your terms",
      "Separate views — one for the customer, one for you as administrator",
      "Confirmations, reminders and a real-time overview",
      "Built so it can grow with more features later",
    ],
    goodFor: [
      "Businesses taking bookings that have had enough of spreadsheets",
      "You who can't find an off-the-shelf product that fits your workflow",
      "Companies that want bookings, customers and payment in one system",
    ],
    pricing: {
      from: "SEK 15,000",
      to: "SEK 50,000",
      note: "Where you land depends on how many resources are booked, how intricate the rules around availability are, and whether payment, reminders or a link to your existing calendar go in. You get a fixed quote before we start.",
    },
    process: [
      {
        title: "We go through how you book today",
        body: "What gets booked — times, staff, rooms, equipment? For how long, how often, and what must never clash? It's the rules around the booking that make each business different, and they have to be right.",
      },
      {
        title: "Customer view and admin view",
        body: "The customer should be able to book in seconds without thinking. You need to see everything, change things quickly and add exceptions. Those are two different needs, so they're built as two different interfaces.",
      },
      {
        title: "Payment and reminders",
        body: "Should the customer pay at booking or on arrival? Do you need confirmations and reminders by email? This is where that gets connected — reminders are the single most effective way to cut no-shows.",
      },
      {
        title: "Tested in real use",
        body: "We run the system alongside your current way of working for a while, so nothing falls through the cracks. Once it's settled, you switch over fully.",
      },
    ],
    faqs: [
      {
        q: "Will it suit my industry?",
        a: "The system is built around your workflow, so the industry matters less than how the booking works. Salon, workshop, clinic, rentals, consulting — what decides it is what gets booked and which rules apply.",
      },
      {
        q: "Can customers pay when they book?",
        a: "Yes. Payment at booking can be connected with the usual payment methods, and it cuts no-shows considerably. If you'd rather take payment on arrival, that works too.",
      },
      {
        q: "Are confirmations and reminders sent automatically?",
        a: "Yes — a confirmation when the customer books and a reminder before the appointment. It's the feature people notice most immediately, because missed slots cost money every week.",
      },
      {
        q: "Can it connect to the calendar we already use?",
        a: "Usually yes. If you use a common digital calendar, bookings can sync there so you don't have to keep two calendars up to date. We'll check what your calendar supports before promising anything.",
      },
      {
        q: "Why not just use an off-the-shelf booking service?",
        a: "If a ready-made service fits your workflow, that's often the right call, and I'd rather say so than sell you something unnecessary. A custom system makes sense when you have rules that don't fit the template, when per-booking fees start to bite, or when you want bookings, customers and payment in the same system.",
      },
    ],
    impact: {
      stat: "85%",
      statLabel:
        "say contact details and opening hours matter when researching a local business",
      body: "People want to see when you're free and book straight away, ideally without having to ring during office hours. A booking system stays open around the clock even when you don't, and automatic reminders are the simplest way to cut missed appointments. I build both the customer view and your admin view, connect payment and reminders, and stay around when something needs adjusting.",
      source: "BrightLocal",
      sourceUrl: "https://www.brightlocal.com/research/consumer-search-behavior/",
    },
  },
  {
    slug: "ecommerce",
    num: "04",
    title: "E-commerce",
    short:
      "An online shop with payment, products and stock — built to sell and simple to run.",
    icon: "cart",
    intro:
      "I build online shops from scratch, shaped around what you sell. With a smooth checkout, secure payments and control of your stock — so customers buy easily and you avoid the mess behind the scenes.",
    includes: [
      "A shop shaped around your products and your workflow",
      "Secure payment with the methods people actually use",
      "Stock, orders and customers in one place",
      "Built for mobile, where most shopping happens",
    ],
    goodFor: [
      "You who want to start selling online",
      "Shops wanting to connect their physical and online sales",
      "Businesses that have outgrown a simple off-the-shelf shop service",
    ],
    process: [
      {
        title: "Range and structure",
        body: "We go through what you sell and how it should be organised. Do products come in sizes and colours, or need combining? The structure decides how easily customers find the right thing.",
      },
      {
        title: "Checkout and payment",
        body: "Checkout is where sales are lost. It's built as short as possible, works on mobile, and offers the payment methods your customers actually use — card, Swish and invoice.",
      },
      {
        title: "Stock, orders and shipping",
        body: "Stock levels that update when something sells, orders gathered in one place, and shipping options that calculate correctly at checkout. This is the part you'll live with every day.",
      },
      {
        title: "Launch and follow-up",
        body: "We test the entire purchase flow properly before opening. After launch we look at where customers drop off — that's usually where the quickest improvements are.",
      },
    ],
    faqs: [
      {
        q: "Which payment methods can I offer?",
        a: "The ones your customers expect: card, Swish, and invoice or instalments. Which payment provider we choose depends on your volumes and fees — I'll help you compare before we connect anything.",
      },
      {
        q: "How many products can the shop handle?",
        a: "Anything from a handful to several thousand. With a large range, search, filtering and how products are imported become more important — that affects the build and goes into the quote.",
      },
      {
        q: "Can the shop connect to my physical store?",
        a: "Yes, if your point-of-sale system allows it. Then stock can be shared so you don't sell the same item twice. We'll check what your current system can do first.",
      },
      {
        q: "Can orders go into my accounting automatically?",
        a: "Usually yes. Most accounting packages can be connected to the shop so orders and payments land in the right place without manual work. That saves time every month.",
      },
      {
        q: "Why not a ready-made platform like Shopify?",
        a: "For many people a ready-made platform is exactly right, and I'll say so. A custom build pays off when monthly and transaction fees start costing more than they're worth, when you need flows the platform doesn't support, or when you want to own the whole thing.",
      },
    ],
    impact: {
      stat: "2×",
      statLabel:
        "the revenue for mobile sites loading in five seconds, compared with those taking nineteen",
      body: "In a shop, every extra second at checkout is a reason to abandon the purchase. So I build the shop light and the checkout short, with the payment methods your customers actually use. Stock, orders and shipping hang together so you don't have to keep track manually — and I'm still around after launch when it's time to look at where customers drop off.",
      source: "Google",
      sourceUrl:
        "https://business.google.com/think/marketing-strategies/mobile-page-speed-new-industry-benchmarks/",
    },
  },
  {
    slug: "seo",
    num: "05",
    title: "SEO & visibility",
    short:
      "Showing up when customers search on Google — technical SEO, content and local visibility.",
    icon: "search",
    intro:
      "A good-looking website isn't much use if nobody finds it. With considered search engine optimisation you show up when customers look for what you offer — and that brings traffic that keeps arriving without paying per click.",
    includes: [
      "Technical SEO — a fast site, sound structure and code Google understands",
      "Titles and descriptions that make people click in the results",
      "Local visibility so nearby customers find you",
      "Google Search Console set up so you can follow the results",
    ],
    goodFor: [
      "You who have a site but don't show up on Google",
      "Businesses that want to be found by local customers",
      "You who want more visitors without paying for ads",
    ],
    process: [
      {
        title: "Technical review",
        body: "I go through the site the way a search engine sees it: load time, structure, headings, sitemap and structured data. If the foundation is broken the content matters less, so that part comes first.",
      },
      {
        title: "Keyword research",
        body: "We find out what your customers actually type into the search box — not what the industry calls it internally. The best opportunities are often in longer, more specific searches with less competition.",
      },
      {
        title: "Content and structure",
        body: "Every page gets a clear purpose and a term it should answer, with titles and headings to match. If pages are missing for what customers search for, they need creating — that's usually where the work lies.",
      },
      {
        title: "Measurement and follow-up",
        body: "Search Console gets set up so you can see what people search for when you appear, and what they click. Without measurement, SEO is guesswork, and there's no way to know what's working.",
      },
    ],
    faqs: [
      {
        q: "How long before I see results?",
        a: "Technical improvements can show within weeks. Climbing for terms with real competition normally takes three to six months, longer in tough industries. SEO is an investment that compounds over time, not a button you press.",
      },
      {
        q: "Can you guarantee I'll rank first on Google?",
        a: "No, and you should be sceptical of anyone who promises that. Nobody controls Google's rankings. What I can promise is that the foundation will be right, that we'll work towards terms that are realistic, and that you'll be able to measure progress yourself.",
      },
      {
        q: "What is local SEO and do I need it?",
        a: "Local SEO is about showing up when someone searches with a place name, or when Google knows where they are. If you sell services in a geographic area it's often what pays off most — competition is lower and those visitors are closer to buying.",
      },
      {
        q: "Do I need a Google Business Profile?",
        a: "If you have local customers: absolutely. It's free, and it's what determines whether you appear in map results. For many local businesses it delivers more visibility than the website does on its own.",
      },
      {
        q: "Does that include writing content?",
        a: "It depends on the arrangement. I can work purely on the technical side, produce structure and suggestions for you to fill in, or write the copy for you. We set the scope based on how much time you want to spend yourself.",
      },
    ],
    impact: {
      stat: "84%",
      statLabel: "have searched online for a local business in the past three months",
      body: "Your customers are already looking for what you sell — the only question is whether they find you or someone else. If you're not on the first page you're effectively invisible to them. I go through the technical side, find out what your customers actually search for, make sure the pages answer it, and set up the measurement so you can follow progress yourself rather than take my word for it.",
      source: "BrightLocal",
      sourceUrl: "https://www.brightlocal.com/research/consumer-search-behavior/",
    },
  },
];

export function getServiceEn(slug: string): Service | undefined {
  return servicesEn.find((s) => s.slug === slug);
}

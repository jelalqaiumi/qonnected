import type { Location } from "@/lib/locations";

/**
 * Engelska ortssidor. Slugarna måste matcha areaSlugMap i i18n.ts.
 * `highlight` refererar till engelska tjänsteslugar ur services.en.ts.
 */
export const locationsEn: Location[] = [
  {
    slug: "motala",
    name: "Motala",
    inName: "in Motala",
    title: "Web & software development in Motala",
    description:
      "Software developer based in Motala building websites, booking systems and custom software. Local developer you can meet in person — call +46 76 191 34 46.",
    intro:
      "I live and work in Motala. If you need a new website, an online shop or a system that fits how your business actually runs, I'm here — not at the other end of the country.",
    body: [
      "Motala is a town where a lot still runs on personal contact and a handshake. That shows in how businesses buy technology: people want to talk to someone, not file a ticket and wait.",
      "That's why I work the way I do. We can meet over a coffee, go through what you need, and work out whether a website is even the thing worth spending money on — sometimes the answer is something else entirely. Then I build it, and you know who to call when something needs changing.",
      "Plenty of smaller businesses here are sitting on a site built a decade ago, or running bookings out of a spreadsheet. Both are fixable without turning into a large project.",
    ],
    highlight: ["web-development", "booking-systems", "seo"],
    faqs: [
      {
        q: "Can we meet in person in Motala?",
        a: "Yes, gladly. I live here, so we can meet at your office, in your shop, or over a coffee in town. For many people it's easier to explain what they need when they can point at things.",
      },
      {
        q: "Do you only work with businesses in Motala?",
        a: "No. Motala is my base, and I take on work in Linköping, Norrköping and the rest of Östergötland. Beyond the region I work remotely, which suits most projects perfectly well.",
      },
      {
        q: "My site feels dated — do I have to start over?",
        a: "Not always. Sometimes it's enough to rework parts of it, speed it up and fix the technical side so Google finds the right things. I'll look at what you have before suggesting we tear it down.",
      },
    ],
  },
  {
    slug: "linkoping",
    name: "Linköping",
    inName: "in Linköping",
    title: "Web & software development in Linköping",
    description:
      "Software developer building websites, web apps and custom systems for businesses in Linköping. Based in Motala — close enough to meet in person.",
    intro:
      "Linköping is a technology city, and it shows in what businesses here ask for. I build websites, web apps and systems for organisations that know what they want — and for those who need help working it out.",
    body: [
      "With a university and a substantial technology industry, Linköping has a business culture where many people are already used to software development. That makes the conversations different: more often they're about architecture, integrations and long-term maintenance, not only how the site should look.",
      "At the same time there are plenty of smaller businesses here — shops, clinics, tradespeople, consultants — with no technical department at all, who simply want something that works. I work with both.",
      "I'm based in Motala, a bit over half an hour away by car. That means meeting in person in Linköping works perfectly well when it's needed.",
    ],
    highlight: ["fullstack-development", "web-development", "booking-systems"],
    faqs: [
      {
        q: "Will you come out to us in Linköping?",
        a: "Yes. It's a short drive from Motala, so meeting in person is no problem — particularly at the start of a project, when things are easiest to sort out face to face.",
      },
      {
        q: "We already have developers in-house. Can you complement them?",
        a: "Absolutely. Sometimes an extra pair of hands is needed for a defined piece of work, or someone to look after the web while the team focuses on the product. I write documented, readable code precisely so others can pick it up.",
      },
      {
        q: "Can you build something that connects to our existing systems?",
        a: "Usually yes. If those systems have an open interface they can be connected, so information isn't entered in two places. We'll go through what you have before I promise anything.",
      },
    ],
  },
  {
    slug: "norrkoping",
    name: "Norrköping",
    inName: "in Norrköping",
    title: "Web & software development in Norrköping",
    description:
      "Websites, online shops and custom systems for businesses in Norrköping. Software developer from Östergötland, meeting in person when it helps.",
    intro:
      "I build websites, online shops and operations systems for businesses in Norrköping. From scratch and shaped around how you work — not pulled from a template.",
    body: [
      "Norrköping has a broad business base where retail, services and manufacturing sit side by side. That produces very different needs: a shop wanting to start selling online doesn't have the same problem as a company whose bookings and resources need to line up internally.",
      "What they share is that many have outgrown their first solution. An online shop on a ready-made service where the fees have started to bite, or a schedule still living in a spreadsheet. Those are exactly the points where building your own starts to pay off.",
      "I'm based in Motala and happy to come to Norrköping for meetings. The rest is handled smoothly online.",
    ],
    highlight: ["ecommerce", "booking-systems", "web-development"],
    faqs: [
      {
        q: "We already sell through a ready-made shop service. Is it worth switching?",
        a: "It depends on volume. Add up the monthly and transaction fees over a year — if that figure passes what a custom build costs, it starts to lean towards building your own. If you also need flows the platform can't handle, the answer is usually yes.",
      },
      {
        q: "Can the shop connect to our physical store?",
        a: "Yes, if your point-of-sale system allows it. Stock can then be shared so the same item isn't sold twice. We'll check what your current system can do first.",
      },
      {
        q: "How does a project work when we're not in the same city?",
        a: "We can meet in person at the start if you want, then most of it runs online. You watch the site take shape on a test address and give feedback as we go, rather than waiting for a finished result.",
      },
    ],
  },
  {
    slug: "all-of-sweden",
    name: "all of Sweden",
    inName: "across Sweden",
    title: "Remote software developer — projects across Sweden",
    description:
      "I build websites and custom systems remotely for clients across Sweden. Based in Östergötland, working online — straightforward to get started.",
    intro:
      "I'm based in Östergötland but take on work across Sweden. Most of a development project happens online anyway, and distance matters less than whether we understand each other.",
    body: [
      "I'm not going to claim I have an office in your city. I don't. What I will say is that development work runs well remotely, provided you're clear about how the collaboration actually works.",
      "In practice it looks like this: we have a first conversation over video and go through what you need. You get a quote with a timeline. During the build, the site sits on a test address you can open whenever you like and comment on — you don't have to wait for a big reveal at the end. We check in as we go, more often at the start.",
      "The advantage is that you aren't limited to whichever developers happen to be near you. The drawback is that we can't point at the same screen. In my experience a shared test link solves most of that.",
      "If you need an in-person kick-off meeting it can be arranged — but for most projects it isn't necessary.",
    ],
    highlight: ["web-development", "fullstack-development", "ecommerce"],
    faqs: [
      {
        q: "Does building a site remotely actually work?",
        a: "Yes, and it's how most development happens today. What it takes is clarity: knowing what happens when, and being able to see the result along the way rather than only at the end. I build that into how I work.",
      },
      {
        q: "How often will we be in touch during the project?",
        a: "More often at the start while we shape what it should be, less often while I build. You always have a test link to look at, and you can get in touch whenever — you don't have to wait for a scheduled meeting.",
      },
      {
        q: "Can we meet in person if we want to?",
        a: "In Östergötland, gladly. Further afield it can be arranged for a kick-off if the project warrants it, but for most work it isn't needed.",
      },
      {
        q: "Does it matter where the developer sits?",
        a: "For the build itself, no. What matters is that you can reach the person who built it when something needs changing — and that the code is yours, so you're never locked to a single supplier.",
      },
    ],
  },
];

export function getLocationEn(slug: string): Location | undefined {
  return locationsEn.find((l) => l.slug === slug);
}

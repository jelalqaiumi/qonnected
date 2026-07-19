import type { Metadata } from "next";
import { PageHead } from "@/components/Sections";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Så hanterar Qonnected dina personuppgifter — vilka uppgifter vi samlar in, varför och vilka rättigheter du har.",
  alternates: { canonical: "/integritetspolicy" },
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <PageHead
        eyebrow="Juridik"
        title="Integritetspolicy"
        intro="Din integritet är viktig för oss. Här förklarar vi vilka personuppgifter vi samlar in, varför, och vilka rättigheter du har."
      />

      <section className="py-[104px] max-md:py-[72px]">
        <div className="wrap">
          <Reveal className="max-w-[760px]">
            <p className="text-sm text-muted">
              <strong className="font-semibold text-ink">Senast uppdaterad:</strong>{" "}
              [fyll i datum]
            </p>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-muted">
              Den här policyn gäller för webbplatsen qonnected.se och kontakten
              oss emellan.
            </p>

            <Block title="Vilka uppgifter vi samlar in">
              <p>
                <strong className="font-semibold text-ink">När du kontaktar oss.</strong>{" "}
                Om du kontaktar oss via kontaktformuläret, mejl eller telefon
                behandlar vi de uppgifter du själv lämnar — vanligtvis ditt namn,
                din e-postadress och innehållet i ditt meddelande.
                Kontaktformuläret på sajten öppnar ditt eget e-postprogram, så
                ditt meddelande skickas som ett vanligt mejl till oss.
              </p>
              <p>
                <strong className="font-semibold text-ink">Tekniska uppgifter.</strong>{" "}
                När du besöker sajten kan viss teknisk information automatiskt
                loggas, till exempel din IP-adress, webbläsartyp och tidpunkt för
                besöket. Det sker av säkerhets- och driftskäl och används inte för
                att identifiera dig personligen.
              </p>
            </Block>

            <Block title="Varför vi behandlar uppgifterna">
              <p>Vi använder dina uppgifter för att:</p>
              <List
                items={[
                  "svara på din förfrågan och kommunicera med dig",
                  "kunna genomföra och leverera ett uppdrag om vi inleder ett samarbete",
                  "hålla sajten säker och fungerande",
                ]}
              />
              <p>
                Den rättsliga grunden är vårt berättigade intresse av att kunna
                besvara och hantera din kontakt, samt att fullgöra ett avtal om vi
                ingår ett sådant.
              </p>
            </Block>

            <Block title="Hur länge uppgifterna sparas">
              <p>
                Vi sparar dina uppgifter så länge det behövs för ändamålet. Vanlig
                kontakt som inte leder till ett samarbete raderar vi inom [t.ex. 12
                månader]. Uppgifter kopplade till ett faktiskt uppdrag sparar vi så
                länge samarbetet pågår och så länge lagen kräver.
              </p>
            </Block>

            <Block title="Vilka som har tillgång till uppgifterna">
              <p>
                Vi säljer aldrig dina personuppgifter och lämnar dem inte vidare
                för marknadsföring. För att kunna driva sajten och sköta kontakten
                använder vi vissa tekniska tjänster, till exempel för webbhotell
                och e-post. I den mån de hanterar uppgifter sker det endast för vår
                räkning och för att tjänsten ska fungera — de får inte använda
                uppgifterna för egna syften.
              </p>
            </Block>

            <Block title="Kakor (cookies)">
              <p>
                Sajten använder i nuläget inga kakor för spårning eller
                marknadsföring. Skulle vi längre fram lägga till exempelvis
                besöksstatistik uppdaterar vi den här policyn och informerar om
                det.
              </p>
            </Block>

            <Block title="Dina rättigheter">
              <p>Enligt dataskyddsförordningen (GDPR) har du rätt att:</p>
              <List
                items={[
                  "få veta vilka uppgifter vi har om dig",
                  "få felaktiga uppgifter rättade",
                  "få dina uppgifter raderade",
                  "begära att behandlingen begränsas",
                  "invända mot behandlingen",
                  "få ut dina uppgifter i ett maskinläsbart format",
                ]}
              />
              <p>
                Vill du använda någon av dessa rättigheter, kontakta oss på{" "}
                <a href="mailto:hej@qonnected.se" className="text-royal underline underline-offset-2">
                  hej@qonnected.se
                </a>{" "}
                så hjälper vi dig.
              </p>
              <p>
                Om du anser att vi hanterar dina uppgifter felaktigt har du rätt
                att lämna klagomål till Integritetsskyddsmyndigheten (IMY), som är
                tillsynsmyndighet i Sverige.
              </p>
            </Block>

            <Block title="Ändringar i policyn">
              <p>
                Vi kan komma att uppdatera den här policyn. Den senaste versionen
                finns alltid här på sajten, med datumet högst upp.
              </p>
            </Block>

            <Block title="Kontakt">
              <p>
                Har du frågor om hur vi hanterar dina personuppgifter? Kontakta oss:
              </p>
              <p className="text-ink">
                <a href="mailto:hej@qonnected.se" className="text-royal underline underline-offset-2">
                  hej@qonnected.se
                </a>{" "}
                · 08-123 456 78
              </p>
            </Block>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <h2 className="font-display text-[1.5rem] font-semibold tracking-[-0.01em] text-ink">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[1.05rem] leading-relaxed text-muted">
        {children}
      </div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-signal" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

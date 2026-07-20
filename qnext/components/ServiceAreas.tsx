import { serviceAreas } from "@/lib/locations";

/**
 * Ren uppräkning av orter vi tar uppdrag i. Renderas i layouten, direkt
 * ovanför footern, så att den syns längst ner på varje sida. Inga länkar —
 * det här är en faktauppgift, inte navigation.
 */
export default function ServiceAreas() {
  return (
    <section className="border-t border-line py-14">
      <div className="wrap text-center">
        <span className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-royal-bright">
          Områden vi jobbar i
        </span>
        <ul className="mx-auto mt-5 flex max-w-[720px] flex-wrap justify-center gap-x-3.5 gap-y-2">
          {serviceAreas.map((area) => (
            <li key={area} className="text-[0.98rem] text-muted">
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

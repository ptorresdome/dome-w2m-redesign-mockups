import { createFileRoute } from "@tanstack/react-router";
import { BrandButton, BrandCard } from "@/components/brand";
import { SearchForm } from "@/components/search/SearchForm";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { paxText, validateTransferSearch } from "@/lib/transfer-search";
import { capturedCSS, redesignCSS } from "@/styles/page-styles";
import bus from "@/assets/vehicle-bus.jpg";
import van from "@/assets/vehicle-van.jpg";
import suv from "@/assets/vehicle-suv.jpg";

export const Route = createFileRoute("/resultados")({
  validateSearch: validateTransferSearch,
  head: () => ({ meta: [
    { title: "Resultados de traslados | B2C-W2M Redesign" },
    { name: "description", content: "Elige el vehículo para tu traslado entre aeropuerto, zona u hotel." },
    { property: "og:title", content: "Resultados de traslados" },
    { property: "og:description", content: "Compara traslados compartidos y privados para tu trayecto." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Results,
});

type Vehicle = { type: string; private: boolean; capacity: number; name: string; desc: string; img: string };

// Sample results (placeholder until the real availability service is connected).
const RESULTS: Vehicle[] = [
  { type: "Bus", private: false, capacity: 55, name: "General", desc: "SERVICIO GRATUITO: Condicionado a que ud. disponga de una reserva en los hoteles Iberostar.", img: bus },
  { type: "Privado", private: true, capacity: 6, name: "Minivan 6 pax", desc: "Ideal para familias o pequeños grupos, nuestras vans para hasta 8 personas ofrecen espacio, comodidad y seguridad para su traslado.", img: van },
  { type: "Privado", private: true, capacity: 4, name: "SUV 4 pax", desc: "Traslado privado y directo en vehículo SUV con aire acondicionado, ideal para parejas.", img: suv },
  { type: "Privado", private: true, capacity: 10, name: "Van 10 pax", desc: "Traslado privado para grupos con amplio espacio para equipaje.", img: van },
  { type: "Compartido", private: false, capacity: 12, name: "Shuttle", desc: "Servicio compartido con otros pasajeros; puede hacer paradas en otros hoteles de la zona.", img: van },
  { type: "Privado", private: true, capacity: 4, name: "SUV Premium", desc: "Traslado privado de lujo con bebidas de cortesía a bordo.", img: suv },
  { type: "Privado", private: true, capacity: 14, name: "Sprinter 14 pax", desc: "Vehículo amplio para grupos grandes con conductor bilingüe.", img: van },
  { type: "Bus", private: false, capacity: 40, name: "Express", desc: "Servicio regular con salidas programadas desde el aeropuerto.", img: bus },
  { type: "Privado", private: true, capacity: 6, name: "Minivan Plus", desc: "Minivan privada con asiento infantil disponible bajo petición.", img: van },
];

// Demo data shown when the URL has no search values (real logic comes later).
const DEMO: Required<Pick<TransferSearch, "from" | "to" | "date">> & { adults: number } = {
  from: "Aeropuerto de Cancun",
  to: "Hotel Iberostar Selection Paraiso del Mar (CUN)",
  date: "01/12/2026",
  adults: 2,
};

function Results() {
  const s = Route.useSearch();
  const form: TransferSearch = {
    from: s.from ?? DEMO.from,
    to: s.to ?? DEMO.to,
    date: s.date ?? DEMO.date,
    ret: s.ret,
    adults: s.adults ?? DEMO.adults,
    children: s.children,
    babies: s.babies,
    privateOnly: s.privateOnly,
  };
  const people = (form.adults ?? 0) + (form.children ?? 0) + (form.babies ?? 0);
  const list = RESULTS.filter((r) => r.capacity >= people && (!s.privateOnly || r.private));
  const pax = paxText(form.adults ?? 0, form.children ?? 0, form.babies ?? 0);

  return (
    <>
      <style>{capturedCSS}</style>
      <style>{redesignCSS}</style>
      <div role="main">
        <SiteHeader active="transfers" />
        <div className="rd-results">
          <div className="rd-results__layout">
            <aside aria-label="Buscador de traslados">
              <SearchForm key={JSON.stringify(form)} variant="sidebar" initialValues={form} />
            </aside>
            <section aria-labelledby="rd-results-count">
              <h1 className="rd-results__count" id="rd-results-count">{list.length} {list.length === 1 ? "resultado" : "resultados"}</h1>
              <ul className="rd-results__list">
                {list.map((r, i) => (
                  <li key={i}>
                    <BrandCard className="rd-vcard">
                      <img className="rd-vcard__img" src={r.img} alt={`${r.type} ${r.name}`} width={1024} height={640} loading={i < 2 ? "eager" : "lazy"} />
                      <div className="rd-vcard__body">
                        <div className="rd-vcard__head">
                          <h3 className="rd-vcard__title">
                            {r.type} <span className="rd-vcard__cap"><svg className="rd-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="4.5" r="2.5"/><path d="M9 8h6a2 2 0 0 1 2 2v5h-2v7h-2.2v-6h-1.6v6H9v-7H7v-5a2 2 0 0 1 2-2Z"/></svg> {r.capacity}<span className="sr-only"> plazas</span></span>
                          </h3>
                          <span className="rd-vcard__pax">{pax}</span>
                        </div>
                        <p className="rd-vcard__name">{r.name}</p>
                        <div className="rd-vcard__foot">
                          <p className="rd-vcard__desc">{r.desc}</p>
                          <BrandButton>Añadir <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 8H6"/></svg></BrandButton>
                        </div>
                      </div>
                    </BrandCard>
                  </li>
                ))}
              </ul>
              {list.length === 0 && <BrandCard className="rd-vcard rd-vcard--empty">No hay vehículos disponibles para {pax}. Prueba a modificar la búsqueda.</BrandCard>}
            </section>
          </div>
        </div>
        <SiteFooter />
      </div>
    </>
  );
}

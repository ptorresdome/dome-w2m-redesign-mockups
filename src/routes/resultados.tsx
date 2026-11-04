import { createFileRoute } from "@tanstack/react-router";
import { BrandButton, BrandCard } from "@/components/brand";
import { SearchForm } from "@/components/search/SearchForm";
import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
const RouteMap = lazy(() => import("@/components/results/RouteMap"));
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { paxText, validateTransferSearch, type TransferSearch } from "@/lib/transfer-search";
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

type Vehicle = { type: string; private: boolean; capacity: number; name: string; note?: string; desc: string; img: string; price: number; luggage: number; duration: number };

// Sample results (placeholder until the real availability service is connected).
// Prices, luggage and durations are demo values.
const RESULTS: Vehicle[] = [
  { type: "Bus", private: false, capacity: 55, name: "General", note: "Gratis con reserva en hotel Iberostar", desc: "", img: bus, price: 0, luggage: 1, duration: 35 },
  { type: "Minivan", private: true, capacity: 6, name: "Minivan 6 pax", desc: "Ideal para familias o pequeños grupos: espacio, comodidad y seguridad.", img: van, price: 65, luggage: 6, duration: 25 },
  { type: "SUV", private: true, capacity: 4, name: "SUV 4 pax", desc: "Traslado directo con aire acondicionado, ideal para parejas.", img: suv, price: 55, luggage: 4, duration: 25 },
  { type: "Van", private: true, capacity: 10, name: "Van 10 pax", desc: "Traslado para grupos con amplio espacio para equipaje.", img: van, price: 89, luggage: 10, duration: 25 },
  { type: "Shuttle", private: false, capacity: 12, name: "Shuttle", desc: "Compartido con otros pasajeros; puede parar en otros hoteles.", img: van, price: 18, luggage: 1, duration: 50 },
  { type: "SUV", private: true, capacity: 4, name: "SUV Premium", desc: "Traslado de lujo con bebidas de cortesía a bordo.", img: suv, price: 95, luggage: 4, duration: 25 },
  { type: "Sprinter", private: true, capacity: 14, name: "Sprinter 14 pax", desc: "Vehículo amplio para grupos grandes con conductor bilingüe.", img: van, price: 120, luggage: 14, duration: 25 },
  { type: "Bus", private: false, capacity: 40, name: "Express", desc: "Servicio regular con salidas programadas desde el aeropuerto.", img: bus, price: 12, luggage: 1, duration: 45 },
  { type: "Minivan", private: true, capacity: 6, name: "Minivan Plus", desc: "Asiento infantil disponible bajo petición.", img: van, price: 75, luggage: 6, duration: 25 },
];

const ico = (d: string) => <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>;
const ICON_SEATS = "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8";
const ICON_BAG = "M6 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2ZM9 7V4h6v3";
const ICON_TIME = "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v6l4 2";
const ICON_INFO = "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 16v-4M12 8h.01";

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
    from: DEMO.from,
    to: DEMO.to,
    date: DEMO.date,
    adults: DEMO.adults,
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
              <BrandCard className="rd-map"><ClientOnly fallback={<div className="rd-map__canvas" />}><Suspense fallback={<div className="rd-map__canvas" />}><RouteMap /></Suspense></ClientOnly></BrandCard>
            </aside>
            <section aria-labelledby="rd-results-count">
              <h1 className="rd-results__count" id="rd-results-count">{list.length} {list.length === 1 ? "resultado" : "resultados"}</h1>
              <ul className="rd-results__list">
                {list.map((r, i) => (
                  <li key={i}>
                    <BrandCard className="rd-vcard">
                      <div className="rd-vcard__media"><img className="rd-vcard__img" src={r.img} alt={`${r.type} ${r.name}`} width={1024} height={640} loading={i < 2 ? "eager" : "lazy"} /></div>
                      <div className="rd-vcard__body">
                        <span className={`rd-vcard__badge${r.private ? " rd-vcard__badge--private" : ""}`}>{r.private ? "Privado" : "Compartido"}</span>
                        <h3 className="rd-vcard__title">{r.type} <span className="rd-vcard__name">· {r.name}</span></h3>
                        <ul className="rd-vcard__facts">
                          <li>{ico(ICON_SEATS)} {r.capacity} plazas</li>
                          <li>{ico(ICON_BAG)} {r.private ? `${r.luggage} maletas` : "1 maleta/pers."}</li>
                          <li>{ico(ICON_TIME)} ~{r.duration} min</li>
                        </ul>
                        {r.desc && <p className="rd-vcard__desc">{r.desc}</p>}
                        {r.note && <p className="rd-vcard__note">{ico(ICON_INFO)} {r.note}</p>}
                      </div>
                      <div className="rd-vcard__price">
                        <p className="rd-vcard__amount">{r.price === 0 ? "Gratis" : <><small>desde</small> {r.price} €</>}</p>
                        <p className="rd-vcard__pax">para {pax}</p>
                        <BrandButton>Añadir <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 8H6"/></svg></BrandButton>
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

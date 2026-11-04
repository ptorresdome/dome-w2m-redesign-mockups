import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BrandButton, BrandCard } from "@/components/brand";
import { SearchForm } from "@/components/search/SearchForm";
import { lazy, Suspense, useEffect, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
const RouteMap = lazy(() => import("@/components/results/RouteMap"));
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { paxText } from "@/lib/transfer-search";
import { capturedCSS, redesignCSS } from "@/styles/page-styles";
import { RETURN_VEHICLES, VEHICLES, resolveTransferSearch, validateResultsSearch } from "@/lib/transfer-booking";

export const Route = createFileRoute("/resultados")({
  validateSearch: validateResultsSearch,
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

const ico = (d: string) => <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>;
const ICON_SEATS = "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8";
const ICON_INFO = "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 16v-4M12 8h.01";

function Results() {
  const s = Route.useSearch();
  const navigate = useNavigate();
  const { vehicle, retVehicle: _r, leg, ...searchOnly } = s;
  const form = resolveTransferSearch(searchOnly);
  const isReturn = leg === "ret" && Boolean(form.ret) && Boolean(vehicle);
  const roundTrip = Boolean(form.ret);
  const [loading, setLoading] = useState(false);
  useEffect(() => { if (!isReturn) return; setLoading(true); const t = setTimeout(() => setLoading(false), 1200); return () => clearTimeout(t); }, [isReturn]);
  const add = (id: string) => {
    if (isReturn) navigate({ to: "/confirmacion", search: { ...form, vehicle, retVehicle: id } });
    else if (roundTrip) { navigate({ to: "/resultados", search: { ...form, vehicle: id, leg: "ret" } }); window.scrollTo({ top: 0 }); }
    else navigate({ to: "/confirmacion", search: { ...form, vehicle: id } });
  };
  const people = (form.adults ?? 0) + (form.children ?? 0) + (form.babies ?? 0);
  const list = (isReturn ? RETURN_VEHICLES : VEHICLES).filter((r) => r.capacity >= people && (!s.privateOnly || r.private)).sort((a, b) => a.price - b.price);
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
              {roundTrip && <ol className="rd-results__steps" aria-label="Traslados de ida y vuelta">
                <li className={isReturn ? "is-done" : "is-current"} aria-current={isReturn ? undefined : "step"}><span>1</span><div><strong>Llegada · {form.date}</strong><small>{form.from} → {form.to}</small></div></li>
                <li className={isReturn ? "is-current" : ""} aria-current={isReturn ? "step" : undefined}><span>2</span><div><strong>Regreso · {form.ret}</strong><small>{form.to} → {form.from}</small></div></li>
              </ol>}
              <h1 className="rd-results__count" id="rd-results-count">{roundTrip ? (isReturn ? "Elige tu traslado de regreso" : "Elige tu traslado de llegada") + " · " : ""}{loading ? "…" : `${list.length} ${list.length === 1 ? "resultado" : "resultados"}`}</h1>
              {loading ? <div className="rd-results__loading" role="status" aria-live="polite"><p><span className="rd-results__spinner" aria-hidden="true" />Buscando traslados de regreso…</p><ul className="rd-results__list">{[0, 1, 2].map(i => <li key={i}><div className="rd-vcard rd-skel"><div className="rd-skel__img" /><div className="rd-skel__lines"><i /><i /><i /></div><div className="rd-skel__price" /></div></li>)}</ul></div> : <>
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
                        </ul>
                        {r.desc && <p className="rd-vcard__desc">{r.desc}</p>}
                        {r.note && <p className="rd-vcard__note">{ico(ICON_INFO)} {r.note}</p>}
                      </div>
                      <div className="rd-vcard__price">
                        <p className="rd-vcard__amount">{r.price === 0 ? "Gratis" : `${r.price} €`}</p>
                        <p className="rd-vcard__pax">para {pax}</p>
                        <BrandButton onClick={() => add(r.id)}>Añadir <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 8H6"/></svg></BrandButton>
                      </div>
                    </BrandCard>
                  </li>
                ))}
              </ul>
              {list.length === 0 && <BrandCard className="rd-vcard rd-vcard--empty">No hay vehículos disponibles para {pax}. Prueba a modificar la búsqueda.</BrandCard>}
              </>}
            </section>
          </div>
        </div>
        <SiteFooter />
      </div>
    </>
  );
}

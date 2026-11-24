import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useMemo, useState } from "react";
import { BrandButton, BrandCard } from "@/components/brand";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ExcursionSearchForm } from "@/components/search/ExcursionSearchForm";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { EXCURSIONS, LANGUAGES, modalityTotal, validateExcursionSearch, type Modality } from "@/lib/excursions";
import { formatDate, parseTransferDate, paxText } from "@/lib/transfer-search";
import { capturedCSS, redesignCSS } from "@/styles/page-styles";
const ExcursionMap = lazy(() => import("@/components/results/ExcursionMap"));

export const Route = createFileRoute("/excursion-resultados")({
  validateSearch: validateExcursionSearch,
  head: () => ({ meta: [
    { title: "Disponibilidad de excursiones | B2C-W2M Redesign" },
    { name: "description", content: "Consulta la disponibilidad y precios de excursiones para tus fechas." },
    { property: "og:title", content: "Disponibilidad de excursiones" },
    { property: "og:description", content: "Elige modalidad, fecha, idioma y punto de encuentro de tu excursión." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ExcursionResults,
});

const eur = (n: number) => `${n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR`;
const ICON_TICKET = "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z M9 5v12";
const svg = (d: string) => <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>;

function dateRange(from?: string, to?: string) {
  const start = parseTransferDate(from) ?? new Date();
  const end = parseTransferDate(to) ?? start;
  const out: string[] = [];
  for (let d = new Date(start); d <= end && out.length < 14; d.setDate(d.getDate() + 1)) out.push(formatDate(d)!);
  return out.length ? out : [formatDate(start)!];
}

function ModalityRow({ m, dates, adults, children, babies }: { m: Modality; dates: string[]; adults: number; children: number; babies: number }) {
  const navigate = useNavigate();
  const [date, setDate] = useState(dates[0] ?? "");
  const [lang, setLang] = useState(LANGUAGES[0] ?? "");
  const [pickup, setPickup] = useState(m.pickups?.[0] ?? "");
  const [breakdown, setBreakdown] = useState(false);
  const total = modalityTotal(m, adults, children);
  return (
    <div className="rd-mod">
      <div className="rd-mod__head">
        <h3 className="rd-mod__title">{svg(ICON_TICKET)} {m.name} <span>( {paxText(adults, children, babies)} )</span></h3>
        <button type="button" className="rd-link">Ver más {svg("M5 12h14M13 6l6 6-6 6")}</button>
      </div>
      <div className={m.pickups ? "rd-mod__row" : "rd-mod__row rd-mod__row--nopickup"}>
        <label className="rd-mod__field"><span>Fecha</span><select value={date} onChange={(e) => setDate(e.target.value)}>{dates.map((d) => <option key={d}>{d}</option>)}</select></label>
        <label className="rd-mod__field"><span>Idioma</span><select value={lang} onChange={(e) => setLang(e.target.value)}>{LANGUAGES.map((l) => <option key={l}>{l}</option>)}</select></label>
        {m.pickups && <label className="rd-mod__field"><span>Punto de encuentro y hora</span><select value={pickup} onChange={(e) => setPickup(e.target.value)}>{m.pickups.map((p) => <option key={p}>{p}</option>)}</select></label>}
        <div className="rd-mod__price">
          <span>Importe total</span>
          <strong>{eur(total)}</strong>
          <button type="button" className="rd-mod__breakdown" aria-expanded={breakdown} onClick={() => setBreakdown((v) => !v)}><svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg> Desglose</button>
          {breakdown && <ul className="rd-mod__lines">
            <li>{adults} × adulto · {eur(m.adult)}</li>
            {children > 0 && <li>{children} × niño · {eur(m.child)}</li>}
            {babies > 0 && <li>{babies} × bebé · gratis</li>}
          </ul>}
        </div>
        <BrandButton className="rd-mod__add" onClick={() => navigate({ to: "/excursion-confirmacion", search: { mod: m.id, date, lang, pickup: pickup || undefined, adults, children, babies } })}>
          Añadir <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 8H6"/></svg>
        </BrandButton>
      </div>
    </div>
  );
}

function ExcursionResults() {
  const s = Route.useSearch();
  const adults = s.adults ?? 2, children = s.children ?? 0, babies = s.babies ?? 0;
  const dates = dateRange(s.from, s.to);
  const prices = EXCURSIONS.flatMap((e) => e.modalities.map((m) => modalityTotal(m, adults, children)));
  const minP = Math.floor(Math.min(...prices)), maxP = Math.ceil(Math.max(...prices));
  const [nameInput, setNameInput] = useState("");
  const [name, setName] = useState("");
  const [range, setRange] = useState<[number, number]>([minP, maxP]);
  const [sort, setSort] = useState("featured");
  const [perPage, setPerPage] = useState("10");

  const list = useMemo(() => {
    const q = name.trim().toLowerCase();
    const items = EXCURSIONS.map((e) => ({ ...e, modalities: e.modalities.filter((m) => {
      const t = modalityTotal(m, adults, children);
      return t >= range[0] && t <= range[1] && (!q || `${e.title} ${m.name}`.toLowerCase().includes(q));
    }) })).filter((e) => e.modalities.length);
    const min = (e: (typeof items)[number]) => Math.min(...e.modalities.map((m) => modalityTotal(m, adults, children)));
    if (sort === "asc") items.sort((a, b) => min(a) - min(b));
    if (sort === "desc") items.sort((a, b) => min(b) - min(a));
    return items.slice(0, Number(perPage));
  }, [name, range, sort, perPage, adults, children]);

  return (
    <>
      <style>{capturedCSS}</style>
      <style>{redesignCSS}</style>
      <div role="main">
        <SiteHeader active="excursions" />
        <div className="rd-results">
          <div className="rd-results__layout">
            <aside aria-label="Buscador de excursiones">
              <ExcursionSearchForm key={JSON.stringify(s)} variant="sidebar" initialValues={s} />
              <BrandCard className="rd-xfilter">
                <h2 className="rd-xfilter__title"><svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 3H2l8 9.5V19l4 2v-8.5Z" /></svg> Filtrar resultados</h2>
                <form className="rd-xfilter__name" onSubmit={(e) => { e.preventDefault(); setName(nameInput); }}>
                  <label htmlFor="excursionName">Nombre de excursión</label>
                  <div><input id="excursionName" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Ej. Xcaret" /><BrandButton type="submit">Filtrar</BrandButton></div>
                </form>
                <div className="rd-xfilter__price">
                  <span>Precio</span>
                  <div className="rd-xfilter__values"><strong>{minP === maxP ? eur(minP) : eur(range[0])}</strong><strong>{eur(range[1])}</strong></div>
                  <SliderPrimitive.Root className="rd-range" min={minP} max={maxP} step={1} value={range} minStepsBetweenThumbs={0} onValueChange={(v) => setRange([v[0] ?? minP, v[1] ?? maxP])}>
                    <SliderPrimitive.Track className="rd-range__track"><SliderPrimitive.Range className="rd-range__fill" /></SliderPrimitive.Track>
                    <SliderPrimitive.Thumb className="rd-range__thumb" aria-label="Precio mínimo" />
                    <SliderPrimitive.Thumb className="rd-range__thumb" aria-label="Precio máximo" />
                  </SliderPrimitive.Root>
                </div>
              </BrandCard>
              <BrandCard className="rd-map"><ClientOnly fallback={<div className="rd-map__canvas" />}><Suspense fallback={<div className="rd-map__canvas" />}><ExcursionMap points={list.map((e) => ({ name: e.title, coords: e.coords }))} /></Suspense></ClientOnly></BrandCard>
            </aside>
            <section aria-labelledby="rd-xcount">
              <div className="rd-xbar">
                <h1 className="rd-results__count" id="rd-xcount">{list.length} {list.length === 1 ? "Resultado" : "Resultados"} <small>· Mostrando {list.length ? `1-${list.length}` : "0"}</small></h1>
                <div className="rd-xbar__selects">
                  <select aria-label="Ordenar" value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Destacados</option><option value="asc">Precio: menor a mayor</option><option value="desc">Precio: mayor a menor</option></select>
                  <select aria-label="Resultados por página" value={perPage} onChange={(e) => setPerPage(e.target.value)}><option value="10">10 resultados</option><option value="20">20 resultados</option></select>
                </div>
              </div>
              <ul className="rd-results__list">
                {list.map((e, i) => (
                  <li key={e.id}>
                    <BrandCard className="rd-xcard">
                      <div className="rd-xcard__top">
                        <img src={e.img} alt={e.title} width={1024} height={704} loading={i < 1 ? "eager" : "lazy"} />
                        <div className="rd-xcard__info">
                          <h2>{e.title}</h2>
                          <p>{e.desc}</p>
                          <button type="button" className="rd-link">Ver más {svg("m9 6 6 6-6 6")}</button>
                        </div>
                      </div>
                      {e.modalities.map((m) => <ModalityRow key={m.id} m={m} dates={dates} adults={adults} children={children} babies={babies} />)}
                    </BrandCard>
                  </li>
                ))}
              </ul>
              {list.length === 0 && <BrandCard className="rd-vcard rd-vcard--empty">No hay excursiones con estos filtros. Prueba a ampliar el rango de precio o cambiar el nombre.</BrandCard>}
            </section>
          </div>
        </div>
        <SiteFooter />
      </div>
    </>
  );
}

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useState } from "react";
import { DatePicker } from "@/components/DatePicker";
import { LocationAutocomplete } from "@/components/LocationAutocomplete";
import { BrandButton } from "@/components/brand";
import { useNavigate } from "@tanstack/react-router";
import { formatDate, parseTransferDate } from "@/lib/transfer-search";
import type { ExcursionSearch } from "@/lib/excursions";
import boat from "@/assets/excursion_boat.avif.asset.json";

/** Excursion search form, same look and selectors as the transfer search. */
type Pax = { adults: number; children: number; babies: number };
const PAX_MAX = 5;
const paxMin = (key: keyof Pax) => (key === "adults" ? 1 : 0);
const clampPax = (key: keyof Pax, n: number) => Math.max(paxMin(key), Math.min(PAX_MAX, n));
function paxSummary(p: Pax) {
  const parts = [`${p.adults} ${p.adults === 1 ? "adulto" : "adultos"}`];
  if (p.children) parts.push(`${p.children} ${p.children === 1 ? "niño" : "niños"}`);
  if (p.babies) parts.push(`${p.babies} ${p.babies === 1 ? "bebé" : "bebés"}`);
  return parts.join(", ");
}

export function ExcursionSearchForm({ variant = "hero", initialValues = {} }: { variant?: "hero" | "sidebar"; initialValues?: ExcursionSearch }) {
  const navigate = useNavigate();
  const [dest, setDest] = useState(initialValues.dest ?? "");
  const [checkIn, setCheckIn] = useState<Date | null>(() => parseTransferDate(initialValues.from));
  const [checkOut, setCheckOut] = useState<Date | null>(() => parseTransferDate(initialValues.to));
  const [pax, setPax] = useState<Pax>({ adults: initialValues.adults ?? 2, children: initialValues.children ?? 0, babies: initialValues.babies ?? 0 });
  const [draft, setDraft] = useState<Pax>(pax);
  const [paxOpen, setPaxOpen] = useState(false);
  const step = (key: keyof Pax, delta: number) => setDraft((p) => ({ ...p, [key]: clampPax(key, p[key] + delta) }));
  const counters: { key: keyof Pax; label: string; hint: string }[] = [
    { key: "adults", label: "Adultos", hint: "12 años o más" },
    { key: "children", label: "Niños", hint: "De 2 a 11 años" },
    { key: "babies", label: "Bebés", hint: "Menores de 2 años" },
  ];

  return (
    <section className={variant === "sidebar" ? "rd-search-section rd-sidebar-search" : "rd-search-section"} aria-label="Buscar excursiones">
      <div className="rd-search-wrap">
        <form className="rd-search" id="searcher-excursion" onSubmit={(e) => { e.preventDefault(); void navigate({ to: "/excursion-resultados", search: { dest: dest || undefined, from: formatDate(checkIn), to: formatDate(checkOut), adults: pax.adults, children: pax.children || undefined, babies: pax.babies || undefined } }); }}>
          <h2 className="rd-search__title">Buscar Excursiones</h2>
          <div className="rd-search__grid">
            <label className="rd-field rd-exc-dest" htmlFor="excursionDestination">
              <span className="rd-field__icon"><svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg></span>
              <span className="rd-field__body">
                <span className="rd-field__label">Destino / Nombre de excursión</span>
                <LocationAutocomplete id="excursionDestination" tabIndex={1} value={dest} onChange={setDest} panelLabel="Destinos disponibles" />
              </span>
            </label>

            <div className="rd-dates">
              <label className="rd-field" htmlFor="dateFrom-datetimepicker-input">
                <span className="rd-field__icon fa fa-calendar" aria-hidden="true" />
                <span className="rd-field__body">
                  <span className="rd-field__label">Desde</span>
                  <DatePicker id="dateFrom-datetimepicker-input" tabIndex={2} title="Fecha desde" value={checkIn} onChange={(d) => { setCheckIn(d); if (d && checkOut && checkOut < d) setCheckOut(null); }} />
                </span>
              </label>
              <label className="rd-field" htmlFor="dateTo-datetimepicker-input">
                <span className="rd-field__icon fa fa-calendar" aria-hidden="true" />
                <span className="rd-field__body">
                  <span className="rd-field__label">Hasta</span>
                  <DatePicker id="dateTo-datetimepicker-input" tabIndex={3} title="Fecha hasta" value={checkOut} onChange={setCheckOut} minDate={checkIn ?? undefined} />
                </span>
              </label>
            </div>

            <div className="rd-pax">
              <button
                                type="button"
                className="rd-field rd-pax__trigger"
                aria-expanded={paxOpen}
                aria-controls="rd-pax-panel"
                onClick={() => { setDraft(pax); setPaxOpen(true); }}
              >
                <span className="rd-field__icon fa fa-user" aria-hidden="true" />
                <span className="rd-field__body">
                  <span className="rd-field__label">Personas</span>
                  <span className="rd-field__value">{paxSummary(pax)}</span>
                </span>
                <span className="rd-pax__chev fa fa-chevron-down" aria-hidden="true" />
              </button>
              <input type="hidden" id="accommodation" value={paxSummary(pax)} readOnly />
              <DialogPrimitive.Root open={paxOpen} onOpenChange={setPaxOpen}>
                <DialogPrimitive.Portal>
                  <DialogPrimitive.Overlay className="rd-ac__backdrop" />
                  <DialogPrimitive.Content className="rd-ac__modal rd-pax__modal" id="rd-pax-panel">
                    <div className="rd-ac__modal-head">
                      <DialogPrimitive.Title className="rd-pax__title">Personas</DialogPrimitive.Title>
                      <DialogPrimitive.Close className="rd-pax__x" aria-label="Cerrar">
                        <span className="fa fa-times" aria-hidden="true" />
                      </DialogPrimitive.Close>
                    </div>
                    <DialogPrimitive.Description className="rd-pax__hint">
                      Especifique la cantidad de adultos, niños y bebés (máximo {PAX_MAX} de cada tipo).
                    </DialogPrimitive.Description>
                    <div className="rd-pax__list">
                      {counters.map((c) => (
                        <div className="rd-counter" key={c.key}>
                          <span className="rd-counter__text">
                            <span className="rd-counter__label">{c.label}</span>
                            <span className="rd-counter__hint">{c.hint}</span>
                          </span>
                          <div className="rd-counter__ctrl">
                            <button type="button" aria-label={`Quitar ${c.label.toLowerCase()}`} onClick={() => step(c.key, -1)} disabled={draft[c.key] <= paxMin(c.key)}>−</button>
                            <output aria-live="polite" id={c.key}>{draft[c.key]}</output>
                            <button type="button" aria-label={`Añadir ${c.label.toLowerCase()}`} onClick={() => step(c.key, 1)} disabled={draft[c.key] >= PAX_MAX}>+</button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="rd-pax__accept"
                      id="accommodationBtn"
                      onClick={() => { setPax(draft); setPaxOpen(false); }}
                    >
                      Aceptar
                    </button>
                  </DialogPrimitive.Content>
                </DialogPrimitive.Portal>
              </DialogPrimitive.Root>
            </div>

            <div className="rd-submit-col">
              <BrandButton className="rd-btn rd-btn--primary rd-search__submit" id="searchBtn" type="submit">
                Buscar <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              </BrandButton>
            </div>
          </div>
        </form>
      </div>
      {variant === "hero" && <div className="rd-hero">
        <div className="rd-hero__track">
          <div className="rd-hero__slide"><img src={boat.url} alt="Barco de excursión en el mar Caribe" /></div>
        </div>
      </div>}
    </section>
  );
}

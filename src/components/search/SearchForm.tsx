import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useEffect, useRef, useState } from "react";
import { DatePicker } from "@/components/DatePicker";
import { LocationAutocomplete } from "@/components/LocationAutocomplete";

/** Transfer search form over the hero carousel. Keeps the original field ids. */
const HERO_SLIDES = [
  "/site-assets/c51f2863e87e79e3.webp",
  "/site-assets/ce888aa8731e4ed3.webp",
  "/site-assets/c1a3a76f809953b5.webp",
  "/site-assets/6e96a3cf8c10387f.webp",
];

type Pax = { adults: number; children: number; babies: number };

function paxSummary(p: Pax) {
  const parts = [`${p.adults} ${p.adults === 1 ? "adulto" : "adultos"}`];
  if (p.children) parts.push(`${p.children} ${p.children === 1 ? "niño" : "niños"}`);
  if (p.babies) parts.push(`${p.babies} ${p.babies === 1 ? "bebé" : "bebés"}`);
  return parts.join(", ");
}

const PAX_MAX = 5;
const paxMin = (key: keyof Pax) => (key === "adults" ? 1 : 0);
function clampPax(key: keyof Pax, n: number) {
  return Math.max(paxMin(key), Math.min(PAX_MAX, n));
}

export function SearchForm() {
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [roundTrip, setRoundTrip] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [pax, setPax] = useState<Pax>({ adults: 1, children: 0, babies: 0 });
  const [draft, setDraft] = useState<Pax>({ adults: 1, children: 0, babies: 0 });
  const [paxOpen, setPaxOpen] = useState(false);
  const paxTriggerRef = useRef<HTMLButtonElement>(null);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const n = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
    track.scrollTo({ left: n * track.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const current = Math.round(track.scrollLeft / track.clientWidth);
      const n = (current + 1) % HERO_SLIDES.length;
      track.scrollTo({ left: n * track.clientWidth, behavior: "smooth" });
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const step = (key: keyof Pax, delta: number) =>
    setDraft((p) => ({ ...p, [key]: clampPax(key, p[key] + delta) }));

  const counters: { key: keyof Pax; label: string; hint: string }[] = [
    { key: "adults", label: "Adultos", hint: "12 años o más" },
    { key: "children", label: "Niños", hint: "De 2 a 11 años" },
    { key: "babies", label: "Bebés", hint: "Menores de 2 años" },
  ];

  return (
    <section className="rd-search-section" aria-label="Buscar traslados">
      <div className="rd-search-wrap">
        <form className="rd-search" id="searcher-transfer" onSubmit={(e) => e.preventDefault()}>
          <h1 className="rd-search__title">
            Buscar Traslados
          </h1>

          <div className="rd-search__grid">
            <div className="rd-route">
              <label className="rd-field" htmlFor="pickupLocation">
                <span className="rd-field__icon"><svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg></span>
                <span className="rd-field__body">
                  <span className="rd-field__label">Origen</span>
                  <LocationAutocomplete id="pickupLocation" tabIndex={1} value={from} onChange={setFrom} panelLabel="Orígenes disponibles" />
                </span>
              </label>
              <button
                type="button"
                className="rd-swap"
                aria-label="Intercambiar origen y destino"
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                }}
              >
                <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 4 3 8l4 4" /><path d="M3 8h14" /><path d="m17 20 4-4-4-4" /><path d="M21 16H7" /></svg>
              </button>
              <label className="rd-field" htmlFor="returnLocation">
                <span className="rd-field__icon"><svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 21V4" /><path d="M5 4h11l-2 4 2 4H5" /></svg></span>
                <span className="rd-field__body">
                  <span className="rd-field__label">Destino</span>
                  <LocationAutocomplete id="returnLocation" tabIndex={3} value={to} onChange={setTo} panelLabel="Destinos disponibles" />
                </span>
              </label>
            </div>

            <div className="rd-dates">
              <label className="rd-field" htmlFor="checkIn-datetimepicker-input">
                <span className="rd-field__icon fa fa-calendar" aria-hidden="true" />
                <span className="rd-field__body">
                  <span className="rd-field__label">Llegada</span>
                  <DatePicker id="checkIn-datetimepicker-input" tabIndex={2} title="Fecha de llegada" value={checkIn} onChange={(d) => { setCheckIn(d); if (d && checkOut && checkOut < d) setCheckOut(null); }} />
                </span>
                <input type="hidden" id="checkInDate" defaultValue="" />
              </label>

              <div className={roundTrip ? "rd-field rd-return is-on" : "rd-field rd-return"} id="returnData">
                <button
                  type="button"
                  id="roundTrip-button"
                  className="rd-return__toggle"
                  role="switch"
                  aria-checked={roundTrip}
                  onClick={() => setRoundTrip((v) => !v)}
                >
                  <span className="rd-switch" aria-hidden="true"><span /></span>
                  <span className="rd-field__label">{roundTrip ? "Regreso" : "Añadir regreso"}</span>
                </button>
                {roundTrip && (
                  <DatePicker id="checkOut-datetimepicker-input" tabIndex={4} title="Fecha de regreso" ariaLabel="Regreso" value={checkOut} onChange={setCheckOut} minDate={checkIn ?? undefined} />
                )}
                <input type="hidden" defaultValue="" id="checkOutDate" />
              </div>
            </div>

            <div className="rd-pax">
              <button
                ref={paxTriggerRef}
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
              <label className="rd-check" htmlFor="servicetype">
                <input type="checkbox" id="servicetype" name="servicetype" />
                <span>Solo privado</span>
              </label>
              <button className="rd-btn rd-btn--primary rd-search__submit" id="searchBtn" type="button" tabIndex={13}>
                Buscar <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="rd-hero" id="myCarousel">
        <div
          className="rd-hero__track"
          ref={trackRef}
          onScroll={(e) => {
            const t = e.currentTarget;
            setSlide(Math.round(t.scrollLeft / t.clientWidth));
          }}
        >
          {HERO_SLIDES.map((src, i) => (
            <div className="rd-hero__slide" key={src} aria-hidden={i !== slide}>
              <img src={src} alt="Autobús World2Meet" loading={i === 0 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>
        <button type="button" className="rd-hero__nav rd-hero__nav--prev" aria-label="Anterior" onClick={() => goTo(slide - 1)}>
          <span className="fa fa-chevron-left" aria-hidden="true" />
        </button>
        <button type="button" className="rd-hero__nav rd-hero__nav--next" aria-label="Siguiente" onClick={() => goTo(slide + 1)}>
          <span className="fa fa-chevron-right" aria-hidden="true" />
        </button>
        <div className="rd-hero__dots">
          {HERO_SLIDES.map((src, i) => (
            <button key={src} type="button" className={i === slide ? "is-active" : ""} aria-label={`Foto ${i + 1}`} aria-current={i === slide} onClick={() => goTo(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}


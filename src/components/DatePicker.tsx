import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { closePanel, openPanel } from "./openPanelRegistry";

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const DAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const sameDay = (a?: Date | null, b?: Date | null) => !!a && !!b && a.getTime() === b.getTime();
const fmt = (d: Date) => `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023.98px)");
    const f = () => setM(mq.matches);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  return m;
}

type Props = {
  id: string;
  tabIndex?: number | undefined;
  value: Date | null;
  onChange: (d: Date | null) => void;
  minDate?: Date | undefined;
  title: string;
  placeholder?: string;
  ariaLabel?: string | undefined;
};

export function DatePicker({ id, tabIndex, value, onChange, minDate, title, placeholder = "Elige fecha", ariaLabel }: Props) {
  const today = startOfDay(new Date());
  const min = minDate ? startOfDay(minDate) : today;
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(() => value ?? min);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (open) setView(value ?? min);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) {
      closePanel(`dp-${id}`);
      return;
    }
    if (!isMobile) openPanel(`dp-${id}`, () => setOpen(false));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: MouseEvent) => {
      if (!isMobile && wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    let prev = "";
    if (isMobile) {
      prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
      if (isMobile) document.body.style.overflow = prev;
    };
  }, [open, isMobile]);

  const y = view.getFullYear();
  const m = view.getMonth();
  const first = new Date(y, m, 1);
  const offset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(y, m, d));
  while (cells.length % 7) cells.push(null);

  const canPrev = new Date(y, m, 0) >= min;
  const pick = (d: Date) => {
    onChange(d);
    setOpen(false);
  };

  const panel = (
    <div className={isMobile ? "rd-cal rd-cal--modal" : "rd-cal"} role="dialog" aria-modal={isMobile} aria-label={title} onMouseDown={(e) => e.stopPropagation()}>
      {isMobile && (
        <div className="rd-cal__top">
          <span>{title}</span>
          <button type="button" className="rd-cal__close" aria-label="Cerrar" onClick={() => setOpen(false)}>×</button>
        </div>
      )}
      <div className="rd-cal__head">
        <button type="button" className="rd-cal__nav" aria-label="Mes anterior" disabled={!canPrev} onClick={() => setView(new Date(y, m - 1, 1))}>‹</button>
        <span className="rd-cal__month">{MONTHS[m]} {y}</span>
        <button type="button" className="rd-cal__nav" aria-label="Mes siguiente" onClick={() => setView(new Date(y, m + 1, 1))}>›</button>
      </div>
      <div className="rd-cal__grid">
        {DAYS.map((d) => <span key={d} className="rd-cal__dow">{d}</span>)}
        {cells.map((d, i) => {
          if (!d) return <span key={i} />;
          const disabled = d < min;
          const cls = ["rd-cal__day", sameDay(d, value) && "is-selected", sameDay(d, today) && "is-today"].filter(Boolean).join(" ");
          return (
            <button key={i} type="button" className={cls} disabled={disabled} aria-pressed={sameDay(d, value)} onClick={() => pick(d)}>
              {d.getDate()}
            </button>
          );
        })}
      </div>
      <div className="rd-cal__foot">
        <button type="button" className="rd-cal__link" disabled={today < min} onClick={() => pick(today)}>Hoy</button>
        {value && <button type="button" className="rd-cal__link" onClick={() => { onChange(null); setOpen(false); }}>Borrar</button>}
      </div>
    </div>
  );

  return (
    <span className="rd-cal-wrap" ref={wrapRef}>
      <input
        className="rd-field__input"
        id={id}
        tabIndex={tabIndex}
        type="text"
        readOnly
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-haspopup="dialog"
        aria-expanded={open}
        value={value ? fmt(value) : ""}
        onClick={(e) => { e.preventDefault(); setOpen(true); }}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true); } }}
      />
      {open && (isMobile
        ? createPortal(<div className="rd-cal-backdrop" onClick={() => setOpen(false)}><div onClick={(e) => e.stopPropagation()}>{panel}</div></div>, document.body)
        : panel)}
    </span>
  );
}

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { closePanel, openPanel } from "./openPanelRegistry";

const ORIGIN_GROUPS: { title: string; icon: string; items: string[] }[] = [
  {
    title: "Aeropuertos",
    icon: "fa-plane",
    items: [
      "Aeropuerto de Cancun",
      "Aeropuerto de Cozumel",
      "Aeropuerto de La Romana",
      "Aeropuerto de Las Americas",
      "Aeropuerto de Mallorca",
      "Aeropuerto de Samana",
    ],
  },
  {
    title: "Zonas",
    icon: "fa-map",
    items: [
      "Quintana Roo",
      "Cancún",
      "Puerto Morelos",
      "Playa del Carmen",
      "Riviera Maya",
      "Cozumel",
      "Tulum",
    ],
  },
  {
    title: "Hoteles",
    icon: "fa-bed",
    items: [
      "Hotel Iberostar Heritage Las Mercedes (SDQ)",
      "Hotel Iberostar Cancun (CUN)",
      "Hotel Iberostar Selection Cancun (CUN)",
      "Hotel Iberostar Cozumel (CZM)",
      "Hotel Iberostar Tucan (CUN)",
      "Hotel Iberostar Quetzal (CUN)",
      "Hotel Iberostar Selection Paraiso del Mar (CUN)",
      "Hotel Iberostar Selection Paraiso Beach (CUN)",
      "Hotel Iberostar Selection Paraiso Lindo (CUN)",
      "Hotel Iberostar Selection Paraiso Maya (CUN)",
    ],
  },
];

const subscribeMobile = (callback: () => void) => {
  const media = window.matchMedia("(max-width: 1023.98px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};

export function LocationAutocomplete({ id, tabIndex, value, onChange, panelLabel }: {
  id: string;
  tabIndex: number;
  value: string;
  onChange: (v: string) => void;
  panelLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useSyncExternalStore(subscribeMobile, () => window.matchMedia("(max-width: 1023.98px)").matches, () => false);

  useEffect(() => {
    if (!open) {
      closePanel(`ac-${id}`);
      return;
    }
    if (isMobile) return;
    openPanel(`ac-${id}`, () => setOpen(false));
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, isMobile]);

  const show = () => {
    setQuery("");
    setOpen(true);
  };
  const q = (isMobile ? query : value).trim().toLowerCase();
  const groups = ORIGIN_GROUPS
    .map((g) => ({ ...g, items: q ? g.items.filter((it) => it.toLowerCase().includes(q)) : g.items }))
    .filter((g) => g.items.length > 0);
  const options = (
    <div className={isMobile ? "rd-ac__panel rd-ac__panel--modal" : "rd-ac__panel"} role="listbox" aria-label={panelLabel}>
      {groups.map((group) => (
        <div className="rd-ac__group" key={group.title}>
          <div className="rd-ac__group-title"><span className={`fa ${group.icon}`} aria-hidden="true" />{group.title}</div>
          {group.items.map((item) => (
            <Button key={item} type="button" variant="ghost" className="rd-ac__item" role="option" aria-selected={value === item}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => { onChange(item); setOpen(false); }}>
              <span className="fa fa-map-marker" aria-hidden="true" /><span>{item}</span>
            </Button>
          ))}
        </div>
      ))}
      {groups.length === 0 && <p className="rd-ac__empty" role="status">No hay resultados</p>}
    </div>
  );

  return (
    <div className="rd-ac" ref={wrapRef} onMouseEnter={() => { if (!isMobile) setOpen(true); }}>
      <input ref={inputRef} className="rd-field__input" id={id} tabIndex={tabIndex} type="text" placeholder="Aeropuerto, zona u hotel"
        data-hotel="Hoteles" value={value} readOnly={isMobile} onChange={(e) => onChange(e.target.value)} autoComplete="off"
        aria-haspopup={isMobile ? "dialog" : "listbox"} aria-expanded={open}
        onFocus={() => { if (!isMobile) setOpen(true); }} onClick={show}
        onKeyDown={(e) => { if (isMobile && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); show(); } }} />
      {isMobile ? (
        <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="rd-ac__backdrop" />
            <DialogPrimitive.Content className="rd-ac__modal" aria-describedby={undefined}
              onOpenAutoFocus={(e) => e.preventDefault()}
              onCloseAutoFocus={(e) => { e.preventDefault(); inputRef.current?.focus(); }}>
              <div className="rd-ac__modal-head">
                <DialogPrimitive.Title className="rd-ac__modal-title">{id === "pickupLocation" ? "Origen" : "Destino"}</DialogPrimitive.Title>
                <DialogPrimitive.Close asChild>
                  <Button type="button" variant="ghost" size="icon" className="rd-ac__close" aria-label="Cerrar lista"><X aria-hidden="true" /></Button>
                </DialogPrimitive.Close>
              </div>
              <input className="rd-ac__filter" type="search" placeholder="Aeropuerto, zona u hotel" aria-label="Buscar aeropuerto, zona u hotel"
                value={query} onChange={(e) => setQuery(e.target.value)} autoComplete="off" />
              {open && options}
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      ) : open && options}
    </div>
  );
}

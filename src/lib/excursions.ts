import chichen from "@/assets/chichen-itza.jpg";
import xcaret from "@/assets/xcaret.jpg";

/** Illustrative excursion catalog based on a real search on the W2M dev site. */
export type Modality = { id: string; name: string; adult: number; child: number; pickups?: string[] };
export type Excursion = { id: string; title: string; desc: string; img: string; coords: [number, number]; modalities: Modality[] };

const PICKUPS = ["Pickup: ADHARA HACIENDA CANCÚN · 07:00", "Pickup: IBEROSTAR SELECTION CANCÚN · 07:15", "Pickup: IBEROSTAR PARAÍSO DEL MAR · 07:45"];

export const EXCURSIONS: Excursion[] = [
  {
    id: "chichen", img: chichen, coords: [20.6843, -88.5678],
    title: "Chichen Itza corazón de la civilización maya",
    desc: "Visita Chichén Itzá, una de las Siete Maravillas del Mundo Moderno. Explora el majestuoso sitio arqueológico de Chichén Itzá, una joya de la antigua civilización maya y una visita imprescindible en la península de Yucatán. Déjate sorprender por el imponente Templo de Kukulkán, maravíllate con la acústica del Gran Juego de Pelota y refréscate en un cenote sagrado.",
    modalities: [
      { id: "chichen-clasico", name: "Chichen Itza Clasico", adult: 143, child: 72, pickups: PICKUPS },
      { id: "chichen-deluxe", name: "Chichen Itza Deluxe", adult: 120, child: 60, pickups: PICKUPS },
    ],
  },
  {
    id: "xcaret", img: xcaret, coords: [20.5799, -87.1199],
    title: "Tour Xcaret Total",
    desc: "Enamórate de México en más de 50 atracciones rodeadas de selva, ríos subterráneos y el Mar Caribe. Disfruta de danzas típicas mexicanas, zonas arqueológicas mayas y la presentación de Xcaret México Espectacular.",
    modalities: [{ id: "xcaret-basico", name: "Tour Xcaret Básico", adult: 155, child: 78 }],
  },
];

export const LANGUAGES = ["Español", "Inglés"];

export type ExcursionSearch = { dest?: string | undefined; from?: string | undefined; to?: string | undefined; adults?: number | undefined; children?: number | undefined; babies?: number | undefined };
const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim().slice(0, 120) : undefined);
const num = (v: unknown, min: number) => { const n = Number(v); return Number.isFinite(n) ? Math.max(min, Math.min(5, Math.round(n))) : undefined; };
export function validateExcursionSearch(s: Record<string, unknown>): ExcursionSearch {
  return { dest: str(s["dest"]), from: str(s["from"]), to: str(s["to"]), adults: num(s["adults"], 1), children: num(s["children"], 0), babies: num(s["babies"], 0) };
}

/** Total for the party: adults and children pay, babies are free. */
export const modalityTotal = (m: Modality, adults: number, children: number) => m.adult * adults + m.child * children;

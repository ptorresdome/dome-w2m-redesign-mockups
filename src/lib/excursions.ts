import chichen from "@/assets/chichen-itza.jpg";
import xcaret from "@/assets/xcaret.jpg";
import actBoogies from "@/assets/act-boogies.jpg";
import actTulum from "@/assets/act-tulum.jpg";
import actCozumel from "@/assets/act-cozumel.jpg";
import dCancun from "@/assets/dest-cancun.jpg";
import dRiviera from "@/assets/dest-riviera.jpg";
import dPlaya from "@/assets/dest-playa.jpg";
import dTulum from "@/assets/dest-tulum.jpg";
import dCozumel from "@/assets/dest-cozumel.jpg";
import dPuntaCana from "@/assets/dest-puntacana.jpg";

/** Illustrative excursion catalog based on a real search on the W2M dev site. */
export type Modality = { id: string; name: string; adult: number; child: number; pickups?: string[] };
export type Excursion = { id: string; title: string; desc: string; img: string; coords: [number, number]; modalities: Modality[]; destination: string; duration: string; rating: number; reviews: number };

const PICKUPS = ["Pickup: ADHARA HACIENDA CANCÚN · 07:00", "Pickup: IBEROSTAR SELECTION CANCÚN · 07:15", "Pickup: IBEROSTAR PARAÍSO DEL MAR · 07:45"];

export const EXCURSIONS: Excursion[] = [
  {
    id: "chichen", img: chichen, destination: "Cancún", duration: "12 horas", rating: 4.8, reviews: 1240, coords: [20.6843, -88.5678],
    title: "Chichen Itza corazón de la civilización maya",
    desc: "Visita Chichén Itzá, una de las Siete Maravillas del Mundo Moderno. Explora el majestuoso sitio arqueológico de Chichén Itzá, una joya de la antigua civilización maya y una visita imprescindible en la península de Yucatán. Déjate sorprender por el imponente Templo de Kukulkán, maravíllate con la acústica del Gran Juego de Pelota y refréscate en un cenote sagrado.",
    modalities: [
      { id: "chichen-clasico", name: "Chichen Itza Clasico", adult: 143, child: 72, pickups: PICKUPS },
      { id: "chichen-deluxe", name: "Chichen Itza Deluxe", adult: 120, child: 60, pickups: PICKUPS },
    ],
  },
  {
    id: "xcaret", img: xcaret, destination: "Playa del Carmen", duration: "Día completo", rating: 4.9, reviews: 2315, coords: [20.5799, -87.1199],
    title: "Tour Xcaret Total",
    desc: "Enamórate de México en más de 50 atracciones rodeadas de selva, ríos subterráneos y el Mar Caribe. Disfruta de danzas típicas mexicanas, zonas arqueológicas mayas y la presentación de Xcaret México Espectacular.",
    modalities: [{ id: "xcaret-basico", name: "Tour Xcaret Básico", adult: 155, child: 78 }],
  },
  {
    id: "boogies", img: actBoogies, coords: [18.6820, -68.4100], destination: "Punta Cana", duration: "4 horas", rating: 4.7, reviews: 860,
    title: "Boogies Tours Punta Cana",
    desc: "Recorre caminos de tierra entre plantaciones y selva en buggy, visita una cueva con agua cristalina y termina en la playa de Macao.",
    modalities: [{ id: "boogie-single", name: "Boogie Single", adult: 85, child: 43, pickups: ["Pickup: WHALA!BAVARO · 06:55", "Pickup: IBEROSTAR SELECTION BÁVARO · 07:10"] }],
  },
  {
    id: "tulum", img: actTulum, coords: [20.2149, -87.4290], destination: "Tulum", duration: "8 horas", rating: 4.6, reviews: 540,
    title: "Ruinas de Tulum y cenote",
    desc: "Visita guiada a la ciudad maya amurallada frente al Caribe y baño en un cenote de la Riviera Maya.",
    modalities: [{ id: "tulum-clasico", name: "Tulum Clásico", adult: 95, child: 48, pickups: PICKUPS }],
  },
  {
    id: "cozumel", img: actCozumel, coords: [20.4230, -86.9223], destination: "Cozumel", duration: "5 horas", rating: 4.8, reviews: 710,
    title: "Snorkel en los arrecifes de Cozumel",
    desc: "Navega en catamarán hasta los arrecifes de Palancar y El Cielo para hacer snorkel entre peces tropicales.",
    modalities: [{ id: "cozumel-snorkel", name: "Snorkel en catamarán", adult: 70, child: 35 }],
  },
];

/** Main destinations shown on the excursion home. */
export const DESTINATIONS = [
  { name: "Cancún", country: "México", img: dCancun },
  { name: "Riviera Maya", country: "México", img: dRiviera },
  { name: "Playa del Carmen", country: "México", img: dPlaya },
  { name: "Tulum", country: "México", img: dTulum },
  { name: "Cozumel", country: "México", img: dCozumel },
  { name: "Punta Cana", country: "República Dominicana", img: dPuntaCana },
];
const RIVIERA = ["Playa del Carmen", "Tulum", "Riviera Maya"];
/** Excursions of a destination; Riviera Maya groups its towns. */
export const excursionsIn = (dest: string) => EXCURSIONS.filter((e) => e.destination === dest || (dest === "Riviera Maya" && RIVIERA.includes(e.destination)));
export const fromPrice = (e: Excursion) => Math.min(...e.modalities.map((m) => m.adult));

export const LANGUAGES = ["Español", "Inglés"];

export type ExcursionSearch = { act?: string | undefined; dest?: string | undefined; from?: string | undefined; to?: string | undefined; adults?: number | undefined; children?: number | undefined; babies?: number | undefined };
const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim().slice(0, 120) : undefined);
const num = (v: unknown, min: number) => { const n = Number(v); return Number.isFinite(n) ? Math.max(min, Math.min(5, Math.round(n))) : undefined; };
export function validateExcursionSearch(s: Record<string, unknown>): ExcursionSearch {
  return { act: str(s["act"]), dest: str(s["dest"]), from: str(s["from"]), to: str(s["to"]), adults: num(s["adults"], 1), children: num(s["children"], 0), babies: num(s["babies"], 0) };
}

/** Total for the party: adults and children pay, babies are free. */
export const modalityTotal = (m: Modality, adults: number, children: number) => m.adult * adults + m.child * children;

export type ExcursionCartSearch = { mod?: string | undefined; date?: string | undefined; lang?: string | undefined; pickup?: string | undefined; adults?: number | undefined; children?: number | undefined; babies?: number | undefined };
export function validateExcursionCart(s: Record<string, unknown>): ExcursionCartSearch {
  return { mod: str(s["mod"]), date: str(s["date"]), lang: str(s["lang"]), pickup: str(s["pickup"]), adults: num(s["adults"], 1), children: num(s["children"], 0), babies: num(s["babies"], 0) };
}
/** Finds the excursion and modality chosen on the results page. */
export function findModality(id?: string) {
  for (const e of EXCURSIONS) { const m = e.modalities.find((x) => x.id === id); if (m) return { excursion: e, modality: m }; }
  return null;
}

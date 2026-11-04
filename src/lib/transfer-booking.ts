import bus from "@/assets/vehicle-bus.jpg";
import van from "@/assets/vehicle-van.jpg";
import suv from "@/assets/vehicle-suv.jpg";
import { validateTransferSearch, type TransferSearch } from "./transfer-search";

export type Vehicle = { id: string; type: string; private: boolean; capacity: number; name: string; note?: string; desc: string; img: string; price: number };
// The same illustrative availability and prices are used on results and confirmation.
export const VEHICLES: Vehicle[] = [
  { id: "bus-general", type: "Bus", private: false, capacity: 55, name: "General", note: "SERVICIO GRATUITO: Condicionado a que ud. disponga de una reserva en los hoteles Iberostar.", desc: "", img: bus, price: 0 },
  { id: "minivan-65", type: "Minivan", private: true, capacity: 6, name: "Minivan 6 pax", desc: "Ideal para familias o pequeños grupos, nuestras vans para hasta 8 personas ofrecen espacio, comodidad y seguridad para su traslado.", img: van, price: 65 },
  { id: "minivan-70", type: "Minivan", private: true, capacity: 6, name: "Minivan 6 pax", desc: "Ideal para familias o pequeños grupos, nuestras vans para hasta 8 personas ofrecen espacio, comodidad y seguridad para su traslado.", img: van, price: 70 },
  { id: "van-89", type: "Van", private: true, capacity: 10, name: "Van 10 pax", desc: "Diseñadas para grupos medianos, estas vans ofrecen un amplio interior, aire acondicionado y la garantía de un viaje cómodo y seguro.", img: van, price: 89 },
  { id: "van-95", type: "Van", private: true, capacity: 10, name: "Van 10 pax", desc: "Diseñadas para grupos medianos, estas vans ofrecen un amplio interior, aire acondicionado y la garantía de un viaje cómodo y seguro.", img: van, price: 95 },
  { id: "minibus-140", type: "Mini Bus", private: true, capacity: 17, name: "Mini Bus 17 pax", desc: "La mejor opción para grupos grandes. Nuestras vans de hasta 17 pasajeros combinan amplitud, confort y confiabilidad, ideales para traslados turísticos, corporativos o eventos.", img: van, price: 140 },
  { id: "minibus-150", type: "Mini Bus", private: true, capacity: 17, name: "Mini Bus 17 pax", desc: "La mejor opción para grupos grandes. Nuestras vans de hasta 17 pasajeros combinan amplitud, confort y confiabilidad, ideales para traslados turísticos, corporativos o eventos.", img: van, price: 150 },
  { id: "suburban-110", type: "Suburban", private: true, capacity: 5, name: "Suburban", desc: "Disfrute de la máxima comodidad y elegancia en nuestros vehículos de lujo, perfectos para traslados privados, ejecutivos o viajes especiales. Un servicio exclusivo con la mejor atención.", img: suv, price: 110 },
  { id: "suburban-120", type: "Suburban", private: true, capacity: 5, name: "Suburban", desc: "Disfrute de la máxima comodidad y elegancia en nuestros vehículos de lujo, perfectos para traslados privados, ejecutivos o viajes especiales. Un servicio exclusivo con la mejor atención.", img: suv, price: 120 },
];

export function resolveTransferSearch(s: TransferSearch) {
  return { ...s, from: s.from ?? "Aeropuerto de Cancun", to: s.to ?? "Hotel Iberostar Selection Paraiso del Mar (CUN)", date: s.date ?? "01/12/2026", adults: s.adults ?? 2, children: s.children ?? 0, babies: s.babies ?? 0 };
}

export function validateBookingSearch(s: Record<string, unknown>) {
  return { ...validateTransferSearch(s), vehicle: typeof s["vehicle"] === "string" && VEHICLES.some(v => v.id === s["vehicle"]) ? s["vehicle"] : undefined };
}

export function passengerLabels(s: TransferSearch) {
  const resolved = resolveTransferSearch(s);
  return [
    ...Array.from({ length: resolved.adults }, (_, i) => i === 0 ? "Titular" : `Adulto ${i + 1}`),
    ...Array.from({ length: resolved.children }, (_, i) => `Niño ${i + 1}`),
    ...Array.from({ length: resolved.babies }, (_, i) => `Bebé ${i + 1}`),
  ];
}
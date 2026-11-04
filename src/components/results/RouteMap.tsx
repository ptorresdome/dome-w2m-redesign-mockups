import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

// Demo route: Cancún airport → Iberostar Selection Paraíso del Mar (approximate, along Hwy 307).
const ROUTE: [number, number][] = [
  [21.0365, -86.8771], [21.0300, -86.8650], [20.9900, -86.8700], [20.9300, -86.8850],
  [20.8600, -86.9000], [20.8000, -86.9300], [20.7600, -86.9600], [20.7480, -86.9680],
];
const START: [number, number] = [21.0365, -86.8771];
const END: [number, number] = [20.7480, -86.9680];

export default function RouteMap() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !ref.current) return;
      map = L.map(ref.current, { scrollWheelZoom: false, attributionControl: true });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "© OpenStreetMap",
      }).addTo(map);
      const line = L.polyline(ROUTE, { color: "#505759", weight: 5, opacity: 0.9 }).addTo(map);
      const dot = (c: string) => ({ radius: 8, color: "#fff", weight: 3, fillColor: c, fillOpacity: 1 });
      L.circleMarker(START, dot("#c4d600")).bindTooltip("Aeropuerto de Cancún").addTo(map);
      L.circleMarker(END, dot("#505759")).bindTooltip("Iberostar Selection Paraíso del Mar").addTo(map);
      map.fitBounds(line.getBounds(), { padding: [24, 24] });
    });
    return () => { cancelled = true; map?.remove(); };
  }, []);
  return <div ref={ref} className="rd-map__canvas" role="img" aria-label="Mapa de la ruta del traslado" />;
}

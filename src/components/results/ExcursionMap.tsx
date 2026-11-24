import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

/** Map with one marker per excursion shown in the results. */
export default function ExcursionMap({ points }: { points: { name: string; coords: [number, number] }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const key = JSON.stringify(points);
  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !ref.current) return;
      map = L.map(ref.current, { scrollWheelZoom: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "© OpenStreetMap" }).addTo(map);
      const dot = { radius: 9, color: "#fff", weight: 3, fillColor: "#c4d600", fillOpacity: 1 };
      points.forEach((p) => L.circleMarker(p.coords, dot).bindTooltip(p.name).addTo(map!));
      if (points.length) map.fitBounds(L.latLngBounds(points.map((p) => p.coords)), { padding: [30, 30], maxZoom: 10 });
      else map.setView([20.9, -87.5], 7);
    });
    return () => { cancelled = true; map?.remove(); };
  }, [key]);
  return <div ref={ref} className="rd-map__canvas" role="img" aria-label="Mapa de las excursiones" />;
}

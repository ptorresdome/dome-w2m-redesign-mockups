import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Star } from "lucide-react";
import type { Excursion } from "@/lib/excursions";

export function DestinationCard({ name, country, img, count }: { name: string; country: string; img: string; count: number }) {
  return (
    <Link className="rd-dcard" to="/excursion-resultados" search={{ dest: name }}>
      <img src={img} alt={name} loading="lazy" />
      <span className="rd-dcard__shade" />
      <span className="rd-dcard__text"><strong>{name}</strong><small>{country} · {count} {count === 1 ? "actividad" : "actividades"}</small></span>
    </Link>
  );
}

export function ActivityCard({ e, price }: { e: Excursion; price: number }) {
  return (
    <Link className="rd-acard" to="/excursion-resultados" search={{ act: e.id }}>
      <img src={e.img} alt={e.title} loading="lazy" />
      <div className="rd-acard__body">
        <span className="rd-acard__dest"><MapPin className="rd-svg" />{e.destination}</span>
        <h3>{e.title}</h3>
        <span className="rd-acard__meta"><Clock className="rd-svg" />{e.duration}</span>
        <span className="rd-acard__meta"><Star className="rd-svg rd-acard__star" />{e.rating.toFixed(1).replace(".", ",")} <small>({e.reviews.toLocaleString("es-ES")} opiniones)</small></span>
        <div className="rd-acard__foot"><span><small>Desde</small><strong>{price} €</strong></span><span className="rd-acard__cta">Ver</span></div>
      </div>
    </Link>
  );
}

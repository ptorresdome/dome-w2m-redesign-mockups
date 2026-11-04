import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, FileText, LockKeyhole, Users } from "lucide-react";
import { BrandButton, BrandCard, InfoRow, SectionTitle } from "@/components/brand";
import { CheckoutMast } from "@/components/booking/CheckoutMast";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { generateLocator, readBookingSubmission, type BookingSubmission } from "@/lib/booking-submission";
import { cartItems, cartTotal, passengerLabels, resolveTransferSearch, validateResultsSearch } from "@/lib/transfer-booking";
import { paxText } from "@/lib/transfer-search";
import { capturedCSS, redesignCSS } from "@/styles/page-styles";

export const Route = createFileRoute("/resumen")({
  validateSearch: validateResultsSearch,
  head: () => ({ meta: [
    { title: "Resumen de la reserva | B2C-W2M Redesign" },
    { name: "description", content: "Tu solicitud de traslado está pendiente de revisión: localizador, servicios, contacto, pasajeros y observaciones." },
    { property: "og:title", content: "Resumen de la reserva | B2C-W2M Redesign" },
    { property: "og:description", content: "Hemos recibido tu solicitud: consulta el localizador y todos los datos de tu reserva." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: BookingSummary,
});

const text = (value?: string) => (value && value.trim() ? value.trim() : "—");

function BookingSummary() {
  const search = Route.useSearch();
  const { vehicle: _v, retVehicle: _rv, leg: _l, ...searchOnly } = search;
  const trip = resolveTransferSearch(searchOnly);
  const items = cartItems(search);
  const total = cartTotal(items);
  const price = (n: number) => (n === 0 ? "Gratis" : `${n} €`);
  const pax = paxText(trip.adults, trip.children, trip.babies);
  // Personal data arrives in memory from the confirmation form; filled in after mount so SSR and hydration match.
  const [submission, setSubmission] = useState<BookingSubmission | null>(null);
  const [locator, setLocator] = useState<string | null>(null);
  useEffect(() => {
    const stored = readBookingSubmission();
    setSubmission(stored);
    setLocator(stored?.locator ?? generateLocator());
  }, []);
  const passengers = submission?.passengers ?? passengerLabels(trip).map(label => ({ label, name: "", surname: "", document: "" }));
  const phone = submission ? [submission.contact.phonePrefix, submission.contact.phone].filter(part => part.trim()).join(" ") : "";

  return (
    <>
      <style>{capturedCSS}</style>
      <style>{redesignCSS}</style>
      <SiteHeader active="transfers" />
      <main className="rd-summary">
        <CheckoutMast step={2} />
        <div className="rd-summary__body">
          {items.length === 0 ? (
            <div className="rd-summary__empty">
              <FileText className="rd-svg" />
              <h2>No hay ninguna solicitud que resumir</h2>
              <p>Selecciona un traslado y completa sus datos para ver aquí el resumen de la reserva.</p>
              <Link to="/" search={{}}><BrandButton>Volver al buscador</BrandButton></Link>
            </div>
          ) : (
            <>
              <BrandCard className="rd-summary__status">
                <div className="rd-summary__status-text">
                  <h1>¡Hemos recibido tu solicitud!</h1>
                  <p>Estamos revisando los datos. Tu reserva está <strong className="rd-summary__pending">Pendiente de revisión</strong>.</p>
                  <p>En breve nos pondremos en contacto contigo para informarte del estado de tu reserva.</p>
                </div>
                <div className="rd-summary__locator">
                  <small>Localizador</small>
                  <code>{locator ?? "—"}</code>
                </div>
              </BrandCard>

              <section aria-label="Resumen de la reserva">
                <BrandCard className="rd-summary__card">
                  <div className="rd-summary__heading">
                    <SectionTitle icon="fa-bus">Resumen de la reserva</SectionTitle>
                    <span className="rd-summary__count">{items.length} {items.length === 1 ? "servicio" : "servicios"}</span>
                  </div>
                  <p className="rd-summary__pax"><Users className="rd-svg" />{pax}</p>
                  {items.map(item => (
                    <article className="rd-summary__item" key={item.key}>
                      <img src={item.vehicle.img} alt={item.vehicle.name} />
                      <div className="rd-summary__item-info">
                        <span className="rd-summary__badge">{item.vehicle.private ? <LockKeyhole className="rd-svg" /> : <Users className="rd-svg" />}{item.vehicle.private ? "Privado" : "Compartido"} · {item.vehicle.capacity} plazas</span>
                        <h3>{item.vehicle.type} · {item.vehicle.name}</h3>
                        <p className="rd-summary__leg"><CalendarDays className="rd-svg" />{item.label} | {item.date}</p>
                        <p className="rd-summary__route"><span>{item.from}</span><ArrowRight className="rd-svg" /><span>{item.to}</span></p>
                        {item.vehicle.note && <p className="rd-summary__note">{item.vehicle.note}</p>}
                        <div className="rd-summary__price"><span>Precio {item.label.toLowerCase()}</span><strong>{price(item.vehicle.price)}</strong></div>
                      </div>
                    </article>
                  ))}
                  <div className="rd-summary__total"><span>Total</span><strong>{price(total)}</strong></div>
                </BrandCard>
              </section>

              <section aria-label="Datos de contacto">
                <BrandCard className="rd-summary__card">
                  <div className="rd-summary__heading"><SectionTitle icon="fa-user">Datos de contacto</SectionTitle></div>
                  <dl className="rd-summary__grid">
                    <InfoRow label="Nombre de la persona de contacto" value={text(submission?.contact.name)} />
                    <InfoRow label="Apellidos" value={text(submission?.contact.surname)} />
                    <InfoRow label="Teléfono" value={text(phone)} />
                    <InfoRow label="Email" value={text(submission?.contact.email)} />
                  </dl>
                </BrandCard>
              </section>

              <section aria-label="Datos de los pasajeros">
                <BrandCard className="rd-summary__card">
                  <div className="rd-summary__heading"><SectionTitle icon="fa-users">Datos de los pasajeros</SectionTitle></div>
                  {passengers.map((passenger, i) => (
                    <div className="rd-summary__passenger" key={passenger.label}>
                      <h3 className={i === 0 ? "rd-summary__passenger-label rd-summary__passenger-label--lead" : "rd-summary__passenger-label"}>{passenger.label}</h3>
                      <dl className="rd-summary__grid rd-summary__grid--pax">
                        <InfoRow label="Nombre" value={text(passenger.name)} />
                        <InfoRow label="Apellidos" value={text(passenger.surname)} />
                        <InfoRow label="DNI / Pasaporte" value={text(passenger.document)} />
                        {i === 0 && <InfoRow label="N.º de reserva del hotel" value={text(passenger.hotelBooking)} />}
                      </dl>
                    </div>
                  ))}
                </BrandCard>
              </section>

              <section aria-label="Datos de la reserva">
                <BrandCard className="rd-summary__card">
                  <div className="rd-summary__heading"><SectionTitle icon="fa-pencil">Datos de la reserva</SectionTitle></div>
                  <dl className="rd-summary__grid">
                    <InfoRow label="Referencia de agencia" value={text(submission?.agencyReference)} />
                  </dl>
                  <div className="rd-summary__observations">
                    <span>Observaciones</span>
                    <p>{text(submission?.observations)}</p>
                  </div>
                </BrandCard>
              </section>

              <p className="rd-summary__disclaimer">Esta pantalla es una propuesta de diseño. No se ha realizado ninguna reserva ni ningún cobro.</p>
              <Link className="rd-summary__home" to="/" search={{}}><ArrowLeft className="rd-svg" />Volver al buscador</Link>
            </>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

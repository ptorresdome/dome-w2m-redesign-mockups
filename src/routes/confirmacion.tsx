import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode, type InputHTMLAttributes } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Copy, FileText, LockKeyhole, PlaneLanding, PlaneTakeoff, Plus, Trash2, Users } from "lucide-react";
import { BrandButton, BrandCard, SectionTitle } from "@/components/brand";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VEHICLES, passengerLabels, resolveTransferSearch, validateBookingSearch } from "@/lib/transfer-booking";
import { paxText } from "@/lib/transfer-search";
import { capturedCSS, redesignCSS } from "@/styles/page-styles";

export const Route = createFileRoute("/confirmacion")({
  validateSearch: validateBookingSearch,
  head: () => ({ meta: [
    { title: "Confirmación del traslado | B2C-W2M Redesign" },
    { name: "description", content: "Revisa tu traslado y completa los datos de contacto, pasajeros, vuelo y reserva." },
    { property: "og:title", content: "Confirma tu traslado | B2C-W2M Redesign" },
    { property: "og:description", content: "Todos los detalles de tu traslado y los datos de tu reserva en un mismo lugar." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Confirmation,
});

function Field({ label, id, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; id: string }) {
  return <label className="rd-confirm__field" htmlFor={id}><span>{label}{props.required ? " *" : ""}</span><input id={id} name={id} {...props} /></label>;
}
function FormSection({ number, title, children, required }: { number: number; title: string; children: ReactNode; required?: boolean }) {
  return <section className="rd-confirm__section" aria-label={title}><div className="rd-confirm__heading"><SectionTitle><span className="rd-confirm__section-number">{number}</span>{title}</SectionTitle>{required && <small>* Campos obligatorios</small>}</div>{children}</section>;
}
function FlightFields({ date, airport, from, to, returning = false }: { date: string; airport: string; from: string; to: string; returning?: boolean }) {
  const prefix = returning ? "departure" : "arrival";
  return <fieldset className="rd-confirm__flight"><legend><strong>{returning ? <PlaneTakeoff className="rd-svg" /> : <PlaneLanding className="rd-svg" />}{returning ? "Regreso" : "Llegada"} · {date}</strong><span>{from} → {to}</span></legend><div className="rd-confirm__fields">
    <Field id={`${prefix}-date`} label="Fecha del vuelo" value={date} readOnly />
    <Field id={`${prefix}-company`} label="Código de compañía" placeholder="Ej. IB" required />
    <Field id={`${prefix}-flight`} label="Número de vuelo" placeholder="Ej. 6403" required />
    <Field id={`${prefix}-origin`} label="Aeropuerto de origen" {...(returning ? { value: airport, readOnly: true } : { placeholder: "Nombre o código del aeropuerto", required: true })} />
    <Field id={`${prefix}-destination`} label="Aeropuerto de destino" {...(returning ? { placeholder: "Nombre o código del aeropuerto", required: true } : { value: airport, readOnly: true })} />
    <Field id={`${prefix}-time`} label={returning ? "Hora de salida del vuelo" : "Hora de llegada del vuelo"} type="time" required />
  </div></fieldset>;
}
function Confirmation() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const trip = resolveTransferSearch(search);
  const vehicle = VEHICLES.find(v => v.id === search.vehicle);
  const labels = passengerLabels(trip);
  const [contact, setContact] = useState({ name: "", surname: "", email: "", phone: "" });
  const [passengers, setPassengers] = useState(() => labels.map(() => ({ name: "", surname: "" })));
  const [removed, setRemoved] = useState(false);
  const [review, setReview] = useState(false);
  const updatePassenger = (index: number, key: "name" | "surname", value: string) => setPassengers(current => current.map((p, i) => i === index ? { ...p, [key]: value } : p));
  const legalBase = "https://incoming-web-b2c-iberostar.w2m.dev1.public.dome-consulting.in";
  const pax = paxText(trip.adults, trip.children, trip.babies);
  return <><style>{capturedCSS}</style><style>{redesignCSS}</style><SiteHeader active="transfers" />
    <main className="rd-confirm"><div className="rd-confirm__mast"><div className="rd-confirm__mast-inner"><div><h1>Carro de compras</h1></div><ol className="rd-confirm__steps" aria-label="Pasos de la reserva"><li aria-current="step"><span>1</span>Completar información</li><li><span>2</span>Procedimiento de pago</li></ol></div></div>
    <div className="rd-confirm__body"><Link className="rd-confirm__back" to="/resultados" search={trip}><ArrowLeft className="rd-svg" />Volver a los resultados</Link>
    {!vehicle || removed ? <div className="rd-confirm__empty"><FileText className="rd-svg" /><h2>No hay servicios en tu carrito</h2><p>Selecciona un traslado para continuar.</p><BrandButton onClick={() => navigate({ to: "/resultados", search: trip })}>Añadir traslado <Plus className="rd-svg" /></BrandButton></div> : <div className="rd-confirm__layout">
    <form className="rd-confirm__form" onSubmit={e => { e.preventDefault(); setReview(true); }}>
      <FormSection number={1} title="Datos de contacto" required><div className="rd-confirm__fields">
        <Field id="contact-name" label="Nombre de la persona de contacto" autoComplete="given-name" required value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} />
        <Field id="contact-surname" label="Apellidos" autoComplete="family-name" required value={contact.surname} onChange={e => setContact({ ...contact, surname: e.target.value })} />
        <Field id="contact-email" label="Email" type="email" autoComplete="email" required value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} />
        <div className="rd-confirm__field"><label htmlFor="contact-phone">Teléfono *</label><div className="rd-confirm__phone"><select aria-label="Prefijo del teléfono" defaultValue="+34"><option value="+34">+34 ES</option><option value="+52">+52 MX</option><option value="+1">+1</option><option value="+44">+44 UK</option><option value="+49">+49 DE</option><option value="+33">+33 FR</option><option value="+39">+39 IT</option></select><input id="contact-phone" name="contact-phone" type="tel" autoComplete="tel-national" required value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} /></div></div>
      </div></FormSection>
      <FormSection number={2} title="Datos de los pasajeros" required><BrandButton className="rd-confirm__copy" onClick={() => setPassengers(current => current.map((p, i) => i === 0 ? { name: contact.name, surname: contact.surname } : p))}><Copy className="rd-svg" />Copiar datos de contacto al titular</BrandButton>
        {labels.map((label, i) => <fieldset key={label} className="rd-confirm__passenger"><legend>{label}</legend><div className="rd-confirm__fields"><Field id={`passenger-${i}-name`} label="Nombre" required={i === 0} value={passengers[i]?.name ?? ""} onChange={e => updatePassenger(i, "name", e.target.value)} /><Field id={`passenger-${i}-surname`} label="Apellidos" required={i === 0} value={passengers[i]?.surname ?? ""} onChange={e => updatePassenger(i, "surname", e.target.value)} /><Field id={`passenger-${i}-document`} label="DNI / Pasaporte" />{i === 0 && <Field id="passenger-booking" label="N.º de reserva del hotel" />}</div></fieldset>)}
      </FormSection>
      <FormSection number={3} title="Datos de vuelo" required><FlightFields date={trip.date} airport={trip.from} from={trip.from} to={trip.to} />{trip.ret && <FlightFields returning date={trip.ret} airport={trip.from} from={trip.to} to={trip.from} />}</FormSection>
      <FormSection number={4} title="Datos de la reserva"><div className="rd-confirm__fields"><Field id="agency-reference" label="Referencia de agencia" /><label className="rd-confirm__field rd-confirm__wide" htmlFor="booking-notes"><span>Observaciones</span><textarea id="booking-notes" name="booking-notes" rows={4} /></label></div></FormSection>
      <section className="rd-confirm__section" aria-label="Confirmar datos"><label className="rd-confirm__terms"><input type="checkbox" required name="terms" /><span>He leído y acepto los <a href={`${legalBase}/generals-conditions`} target="_blank" rel="noreferrer">Términos y Condiciones</a></span></label><div className="rd-confirm__legal"><p>Antes de enviar el formulario, debe leer la información básica sobre protección de datos. <strong>Al pulsar el botón de envío manifiesta haber leído esta información.</strong></p><p><strong>Información básica sobre privacidad:</strong> El responsable del tratamiento es <strong>World 2 Meet, S.L.U.</strong> La finalidad es la gestión de la reserva, cumplimiento de obligaciones legales y mejora de la calidad. Sus datos serán comunicados a los proveedores cuyos servicios son objeto de reserva. Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en nuestra <a href={`${legalBase}/terms-policy`} target="_blank" rel="noreferrer">política de privacidad</a>.</p></div><div className="rd-confirm__submit"><BrandButton type="submit">Confirmar <ArrowRight className="rd-svg" /></BrandButton></div></section>
    </form>
    <aside className="rd-confirm__aside" aria-label="Resumen de servicios"><BrandCard className="rd-confirm__summary"><div className="rd-confirm__heading"><SectionTitle>Resumen de servicios</SectionTitle><BrandButton variant="secondary" aria-label="Eliminar traslado" title="Eliminar traslado" onClick={() => setRemoved(true)}><Trash2 className="rd-svg" /></BrandButton></div><img className="rd-confirm__vehicle" src={vehicle.img} alt={vehicle.name} /><span className="rd-confirm__badge">{vehicle.private ? <LockKeyhole className="rd-svg" /> : <Users className="rd-svg" />}{vehicle.private ? "Privado" : "Compartido"} · {vehicle.capacity} plazas</span><h3>{vehicle.name}</h3><p className="rd-confirm__pax"><Users className="rd-svg" />{pax}</p>
      {[{ label: "Llegada", date: trip.date, from: trip.from, to: trip.to }, ...(trip.ret ? [{ label: "Regreso", date: trip.ret, from: trip.to, to: trip.from }] : [])].map(leg => <div className="rd-confirm__journey" key={leg.label}><p><CalendarDays className="rd-svg" />{leg.label} · {leg.date}</p><div className="rd-confirm__route"><div><small>Origen</small>{leg.from}</div><div><small>Destino</small>{leg.to}</div></div></div>)}
      {vehicle.note && <p className="rd-confirm__note">{vehicle.note}</p>}<div className="rd-confirm__total"><span>Total</span><strong>{vehicle.price === 0 ? "Gratis" : `${vehicle.price} €`}</strong></div></BrandCard><div className="rd-confirm__additional"><BrandButton variant="secondary" onClick={() => navigate({ to: "/resultados", search: trip })}><Plus className="rd-svg" />Añadir traslado</BrandButton><BrandButton variant="secondary" onClick={() => window.location.assign(`${legalBase}/excursion`)}><Plus className="rd-svg" />Añadir excursión</BrandButton></div></aside>
    </div>}</div></main><SiteFooter />
    <Dialog open={review} onOpenChange={setReview}><DialogContent className="rd-confirm__review"><DialogHeader><DialogTitle>Datos completados</DialogTitle><DialogDescription>Revisión del formulario</DialogDescription></DialogHeader><p><strong>{contact.name} {contact.surname}</strong><br />{pax}<br />{trip.from} → {trip.to}<br />Llegada: {trip.date}{trip.ret && <><br />Regreso: {trip.ret}</>}</p><p>Esta pantalla es una propuesta de diseño. No se ha realizado ninguna reserva ni ningún cobro.</p><BrandButton onClick={() => setReview(false)}><Check className="rd-svg" />Volver al formulario</BrandButton></DialogContent></Dialog>
  </>;
}

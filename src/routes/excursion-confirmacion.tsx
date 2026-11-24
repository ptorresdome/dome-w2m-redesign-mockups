import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type InputHTMLAttributes, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Copy, FileText, Trash2, Users } from "lucide-react";
import { BrandButton, BrandCard, SectionTitle } from "@/components/brand";
import { CheckoutMast } from "@/components/booking/CheckoutMast";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { generateLocator } from "@/lib/booking-submission";
import { validateConfirmation } from "@/lib/confirmation-validation";
import { findModality, modalityTotal, validateExcursionCart } from "@/lib/excursions";
import { paxText } from "@/lib/transfer-search";
import { capturedCSS, redesignCSS } from "@/styles/page-styles";

export const Route = createFileRoute("/excursion-confirmacion")({
  validateSearch: validateExcursionCart,
  head: () => ({ meta: [
    { title: "Confirmación de la excursión | B2C-W2M Redesign" },
    { name: "description", content: "Revisa la excursión elegida y completa los datos de contacto y de los pasajeros." },
    { property: "og:title", content: "Confirma tu excursión | B2C-W2M Redesign" },
    { property: "og:description", content: "Tu excursión y los datos de tu reserva en un mismo lugar." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ExcursionConfirmation,
});

const eur = (n: number) => `${n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR`;

function Field({ label, id, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; id: string }) {
  return <label className="rd-confirm__field" htmlFor={id}><span>{label}{props.required ? " *" : ""}</span><input id={id} name={id} {...props} /></label>;
}
function FormSection({ number, title, children, required }: { number: number; title: string; children: ReactNode; required?: boolean }) {
  return <section className="rd-confirm__section" aria-label={title}><div className="rd-confirm__heading"><SectionTitle><span className="rd-confirm__section-number">{number}</span>{title}</SectionTitle>{required && <small>* Campos obligatorios</small>}</div>{children}</section>;
}

function ExcursionConfirmation() {
  const s = Route.useSearch();
  const adults = s.adults ?? 2, children = s.children ?? 0, babies = s.babies ?? 0;
  const found = findModality(s.mod);
  const [removed, setRemoved] = useState(false);
  const [locator, setLocator] = useState<string | null>(null);
  const labels = [...Array.from({ length: adults }, (_, i) => i === 0 ? "Titular" : `Adulto ${i + 1}`), ...Array.from({ length: children }, (_, i) => `Niño ${i + 1}`), ...Array.from({ length: babies }, (_, i) => `Bebé ${i + 1}`)];
  const [contact, setContact] = useState({ name: "", surname: "", email: "", phone: "" });
  const [passengers, setPassengers] = useState(() => labels.map(() => ({ name: "", surname: "" })));
  const upd = (i: number, k: "name" | "surname", v: string) => setPassengers((c) => c.map((p, j) => j === i ? { ...p, [k]: v } : p));
  const legalBase = "https://incoming-web-b2c-iberostar.w2m.dev1.public.dome-consulting.in";
  const back = { adults, children, babies };
  const autoFill = () => {
    setContact((c) => ({ name: c.name || "Juan", surname: c.surname || "García López", email: c.email || "juan.garcia@example.com", phone: c.phone || "600 123 456" }));
    setPassengers((cur) => cur.map((p, i) => i === 0 ? { name: p.name || "Juan", surname: p.surname || "García López" } : p));
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateConfirmation(e.currentTarget)) return;
    setLocator(generateLocator());
    window.scrollTo({ top: 0 });
  };
  const total = found ? modalityTotal(found.modality, adults, children) : 0;
  const details = [s.date && `Día: ${s.date}`, s.pickup && `Punto de encuentro y hora: ${s.pickup.replace(/^Pickup:\s*/, "")}`, s.lang && `Idioma: ${s.lang}`].filter(Boolean).join(" · ");

  return <><style>{capturedCSS}</style><style>{redesignCSS}</style><SiteHeader active="excursions" />
    <main className="rd-confirm"><CheckoutMast step={locator ? 2 : 1} />
    <div className="rd-confirm__body"><Link className="rd-confirm__back" to="/excursion-resultados" search={back}><ArrowLeft className="rd-svg" />Volver a los resultados</Link>
    {locator && found && !removed ? <div className="rd-confirm__empty"><CheckCircle2 className="rd-svg" /><h2>Reserva registrada · Localizador {locator}</h2><p>{found.modality.name} · {details}. Total {eur(total)}. Enviaremos la confirmación a {contact.email}.</p><BrandButton onClick={() => window.location.assign("/")}>Buscar otra excursión <ArrowRight className="rd-svg" /></BrandButton></div>
    : !found || removed ? <div className="rd-confirm__empty"><FileText className="rd-svg" /><h2>No hay servicios en tu carrito</h2><p>Selecciona una excursión para continuar.</p><Link to="/"><BrandButton>Buscar excursiones <ArrowRight className="rd-svg" /></BrandButton></Link></div>
    : <div className="rd-confirm__layout">
      <form className="rd-confirm__form" noValidate onSubmit={submit}>
        <FormSection number={1} title="Datos de contacto" required><div className="rd-confirm__fields">
          <Field id="contact-name" label="Nombre de la persona de contacto" autoComplete="given-name" required value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
          <Field id="contact-surname" label="Apellidos" autoComplete="family-name" required value={contact.surname} onChange={(e) => setContact({ ...contact, surname: e.target.value })} />
          <Field id="contact-email" label="Email" type="email" autoComplete="email" required value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
          <div className="rd-confirm__field"><label htmlFor="contact-phone">Teléfono *</label><div className="rd-confirm__phone"><select name="contact-phone-prefix" aria-label="Prefijo del teléfono" defaultValue="+34"><option value="+34">+34 ES</option><option value="+52">+52 MX</option><option value="+1">+1</option><option value="+44">+44 UK</option><option value="+49">+49 DE</option><option value="+33">+33 FR</option></select><input id="contact-phone" name="contact-phone" type="tel" autoComplete="tel-national" required value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} /></div></div>
        </div></FormSection>
        <FormSection number={2} title="Datos de los pasajeros" required>
          <BrandButton className="rd-confirm__copy" onClick={() => setPassengers((c) => c.map((p, i) => i === 0 ? { name: contact.name, surname: contact.surname } : p))}><Copy className="rd-svg" />Copiar los datos de la persona de contacto para el primer pasajero</BrandButton>
          {labels.map((label, i) => <fieldset key={label} className="rd-confirm__passenger"><legend>{label}</legend><div className="rd-confirm__fields">
            <Field id={`passenger-${i}-name`} label="Nombre" required={i === 0} value={passengers[i]?.name ?? ""} onChange={(e) => upd(i, "name", e.target.value)} />
            <Field id={`passenger-${i}-surname`} label="Apellidos" required={i === 0} value={passengers[i]?.surname ?? ""} onChange={(e) => upd(i, "surname", e.target.value)} />
            <Field id={`passenger-${i}-document`} label="DNI/Pasaporte" />
            {i === 0 && <Field id="passenger-booking" label="N.º reserva" />}
          </div></fieldset>)}
        </FormSection>
        <FormSection number={3} title="Datos de la reserva"><div className="rd-confirm__fields"><Field id="agency-reference" label="Referencia de agencia" /><label className="rd-confirm__field rd-confirm__wide" htmlFor="booking-notes"><span>Observaciones</span><textarea id="booking-notes" name="booking-notes" rows={4} /></label></div></FormSection>
        <section className="rd-confirm__section" aria-label="Confirmar datos"><label className="rd-confirm__terms"><input type="checkbox" required name="terms" onChange={(e) => { if (e.target.checked) autoFill(); }} /><span>He leído y acepto los <a href={`${legalBase}/generals-conditions`} target="_blank" rel="noreferrer">Términos y Condiciones</a></span></label><div className="rd-confirm__legal"><p>Antes de enviar el formulario, debe leer la información básica sobre protección de datos. <strong>Al pulsar el botón de envío manifiesta haber leído esta información.</strong></p><p><strong>Información básica sobre privacidad:</strong> El responsable del tratamiento es <strong>World 2 Meet, S.L.U.</strong> La finalidad es la gestión de la reserva, cumplimiento de obligaciones legales y mejora de la calidad. Sus datos serán comunicados a los proveedores cuyos servicios son objeto de reserva. Puede ejercer sus derechos como se explica en nuestra <a href={`${legalBase}/terms-policy`} target="_blank" rel="noreferrer">política de privacidad</a>.</p></div><div className="rd-confirm__submit"><BrandButton type="submit">Confirmar <ArrowRight className="rd-svg" /></BrandButton></div></section>
      </form>
      <aside className="rd-confirm__aside" aria-label="Resumen de servicios"><BrandCard className="rd-confirm__summary">
        <div className="rd-confirm__heading"><SectionTitle>Le detallamos los servicios que ha seleccionado</SectionTitle></div>
        <div className="rd-confirm__item">
          <div className="rd-confirm__item-head"><img src={found.excursion.img} alt={found.excursion.title} /><div><h3>{found.excursion.title}</h3></div><BrandButton variant="secondary" aria-label="Eliminar excursión" title="Eliminar excursión" onClick={() => setRemoved(true)}><Trash2 className="rd-svg" /></BrandButton></div>
          <p className="rd-confirm__pax"><Users className="rd-svg" />{paxText(adults, children, babies)}</p>
          <div className="rd-confirm__journey"><div className="rd-confirm__subtotal"><span>{found.modality.name}</span><strong>{eur(total)}</strong></div><p>{details}</p></div>
        </div>
        <div className="rd-confirm__subtotal"><span>TOTAL</span><strong>{eur(total)}</strong></div>
        <div className="rd-confirm__total"><span>Total de la reserva</span><strong>{eur(total)}</strong></div>
      </BrandCard></aside>
    </div>}</div></main><SiteFooter />
  </>;
}

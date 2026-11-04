/** Shared checkout masthead: cart title and the two booking steps, with the current one highlighted. */
export function CheckoutMast({ step }: { step: 1 | 2 }) {
  return (
    <div className="rd-confirm__mast">
      <div className="rd-confirm__mast-inner">
        <div><h1>Carro de compras</h1></div>
        <ol className="rd-confirm__steps" aria-label="Pasos de la reserva">
          <li aria-current={step === 1 ? "step" : undefined}><span>1</span>Completar información</li>
          <li aria-current={step === 2 ? "step" : undefined}><span>2</span>Procedimiento de pago</li>
        </ol>
      </div>
    </div>
  );
}

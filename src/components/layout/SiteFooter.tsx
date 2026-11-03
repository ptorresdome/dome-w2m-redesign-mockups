/** Shared site footer with brand gradient and legal links. */
export function SiteFooter() {
  return (
          <footer className={"type2 rd-footer [&]:text-white"}>
            <div className={"\x63ontainer"}>
              <div className="footer-top w-full">
                <div className={"row [&]:flex-wrap"}>
                  <div className={"\x63ol-lg-3 \x63ol-12 logo"}>
                    <div className="logoFooter w-[250px]" />
                  </div>
                  <div className={"\x63ol-lg-9 \x63ol-12"}>
                    <ul className="footer-nav uppercase [@media(max-width:991px)]:w-[68%] [@media(max-width:991px)_and_(min-width:768px)]:justify-center">
                      <li>
                        <a href="/generals-conditions" target="_blank">Condiciones Generales</a>
                      </li>
                      <li>
                        <a href="/cookie-policy" target="_blank">Política de cookies</a>
                      </li>
                      <li>
                        <a href="/legal-advice" target="_blank">Aviso Legal</a>
                      </li>
                      <li>
                        <a href="/terms-policy" target="_blank">Políticas de privacidad</a>
                      </li>
                      <li>
                        <a href="/contact" target="_blank">Contactanos</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={"row copyright [&]:text-white [&]:flex-wrap"}>
                  <div className={"\x63ol-12"}>Copyright 2025 - World2Meet. Todos los derechos reservados</div>
                </div>
              </div>
            </div>
          </footer>
  );
}

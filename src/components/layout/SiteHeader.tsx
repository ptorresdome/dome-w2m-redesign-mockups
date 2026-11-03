/** Shared site header: logo, section tabs and account links. */
export function SiteHeader({ active = "transfers" }: { active?: "excursions" | "transfers" }) {
  return (
    <header className="rd-header">
      <div className="rd-header__inner">
        <a className="rd-logo" href="/" aria-label="W2M DMC – Inicio">
          <img src="/site-assets/1fbaddbcc7e6cf85.png" alt="W2M DMC Destination Travel Partner" />
        </a>
        <nav className="rd-tabs" aria-label="Navegación de la web">
          <a className={active === "excursions" ? "rd-tab is-active" : "rd-tab"} href="/excursion" aria-current={active === "excursions" ? "page" : undefined}>
            <i className="fa fa-ticket" aria-hidden="true" />
            <span>Excursiones</span>
          </a>
          <a className={active === "transfers" ? "rd-tab is-active" : "rd-tab"} href="/" aria-current={active === "transfers" ? "page" : undefined}>
            <i className="fa fa-bus" aria-hidden="true" />
            <span>Traslados</span>
          </a>
        </nav>
        <nav className="rd-account" aria-label="Cuenta">
          <a className="rd-account__link" href="/user-register" aria-label="Regístrese">
            <span className="fa fa-user-plus" aria-hidden="true" />
            <span className="rd-account__txt">Regístrese</span>
          </a>
          <a className="rd-account__link" href="#" id="login-link" aria-label="Mi cuenta">
            <span className="fa fa-users" aria-hidden="true" />
            <span className="rd-account__txt">Mi cuenta</span>
          </a>
          <a className="rd-account__link" href="#" data-bs-target="#modalLanguage" aria-expanded="false" aria-label="Cambiar idioma">
            <span className="fa fa-globe" aria-hidden="true" />
            <span className="rd-account__txt">Cambiar idioma</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

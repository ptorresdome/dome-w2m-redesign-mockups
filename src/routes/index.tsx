import { createFileRoute } from "@tanstack/react-router";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SearchForm } from "@/components/search/SearchForm";
import { capturedCSS, redesignCSS } from "@/styles/page-styles";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "B2C-W2M Redesign" },
    { name: "description", content: "Busca traslados entre aeropuertos, zonas y hoteles con Iberostar Island Transfers." },
    { property: "og:title", content: "Iberostar Island Transfers | Traslados" },
    { property: "og:description", content: "Busca tu traslado entre aeropuertos, zonas y hoteles." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "className": "video", "lang": "es" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <style>{redesignCSS}</style>
      <CookieNotice />
      <div className="modal fade login-agency login-agency-b2c modal-login-agency w-full" id="myModalLogin" aria-hidden="false" aria-labelledby="myModalLogin" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
          <div className="modal-content flex-col pointer-events-auto w-full">
            <div className={"modal-header \x62g-primary text-white items-start! shrink-0 [&]:flex-wrap justify-between"}>
              <h1 id="loginModalHeaderLabel">
                        Por favor inicie sesión o regístrese para obtener el precio final
                      </h1>
              <button className={"btn-close btn-close-white w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" />
            </div>
            <div className="modal-body flex-auto">
              <div id="container-login">
                <form className="form-inline login-form" id="login-form" method="post">
                  <p className="login-title">Por favor, introduce tus datos de acceso.</p>
                  <div className="form-group hide align-middle"><label style={{ display: "none" }}>Agencia</label><input className="form-control" placeholder="Agencia" type="text" id="user" name="agency" /><span className="fa fa-pencil bottom-[10px] right-[7px] [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></div>
                  <div className="form-group align-middle"><label style={{ display: "none" }}>Email</label><input className="form-control" placeholder="Email" type="text" id="username" name="username" /><span className="fa fa-pencil bottom-[10px] right-[7px] [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></div>
                  <div className="form-group password align-middle"><label style={{ display: "none" }}>Contraseña</label><input className="form-control" placeholder="Contraseña" type="password" id="password" name="password" /><a className="input-group-addon bottom-[10px] right-[7px]" id="password-show-icon"><i className="fa fa-eye-slash [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></a></div>
                  <div className="login-options">
                    <p>
                      <a href="/user-register">Regístrese</a>
                    </p>
                    <p>
                      <a href="#" id="pass-recovery-link">¿No recuerdas tu contraseña?</a>
                    </p>
                  </div>
                  <div className="form-group button align-middle w-auto">
                    <button className="form-control btn btn-primary btn-mt-23 select-none align-middle" type="submit">Entrar</button>
                  </div>
                  <div className={"alert alert-info alert-error \x68idden"} role="alert"><span className="fa fa-exclamation-circle [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /> <strong>¡ERROR EN EL LOGIN!</strong><p className="alert-description align-text-bottom">
                      
                          
                          Existe un error en los datos que ha introducido.
                      
                  </p></div>
                  <div className={"alert alert-info \x68idden"} role="alert"><span className="fa fa-exclamation-circle [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /><strong>Introduce tu correo electrónico para recuperar tu contraseña</strong><p className="alert-password-description" /></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade login-agency login-agency-b2c modal-login-agency w-full" id="passwordRecoveryModal" tabIndex={-1} aria-labelledby="passwordRecoveryModalLabel" aria-hidden="true">&gt;
          <div className="modal-dialog modal-fullscreen-md-down pointer-events-none"><div className="modal-content flex-col pointer-events-auto w-full"><div className={"modal-header \x62g-primary text-white items-start! shrink-0 [&]:flex-wrap justify-between"}><h1 id="passwordRecoveryModalLabel">
                          ¿No recuerdas tu contraseña?
                      </h1><button className={"btn-close btn-close-white w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" /></div><div className="modal-body flex-auto"><div id="container-login"><form className="form-inline login-form" id="recovery-form" method="post"><p className="login-title">
                                  Introduce tu correo electrónico para recuperar tu contraseña
                              </p><div className="form-group align-middle"><input className="form-control" type="email" id="recoveryEmail" name="recoveryEmail" placeholder="Email" required /><span className="fa fa-pencil bottom-[10px] right-[7px] [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></div><div className="pass-recovery-options"><p><a data-bs-target="#myModalLogin">
                                          Volver al login
                                      </a></p></div><div className="form-group button align-middle w-auto"><button className="form-control btn btn-primary btn-mt-23 select-none align-middle" type="button" id="sendRecoveryEmailBtn">
                                      Enviar
                                  </button></div><div className={"alert alert-info \x68idden"} id="recoveryMessage" role="alert"><span className="fa fa-exclamation-circle [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /><strong>Introduce tu correo electrónico para recuperar tu contraseña</strong><p className="alert-description align-text-bottom" /></div></form></div></div></div></div></div>
      <div role="main">
        <div>
          <SiteHeader active="transfers" />
          <div className="content">
            <SearchForm />
            <div className="modal fade modal-accommodation w-full" id="modalAccommodation" aria-hidden="true" role="dialog" tabIndex={-1}>
              <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
                <div className="modal-content flex-col pointer-events-auto w-full">
                  <div className={"modal-header items-start! shrink-0 [&]:flex-wrap justify-between"}>
                    <h4 className="modal-title uppercase">Personas</h4>
                    <button className={"btn-close w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" />
                    <p>Especifique la cantidad de adultos, niños, y bebés.</p>
                  </div>
                  <div className="modal-body flex-auto">
                    <div className="form-inline">
                      <div className="persons">
                        <div className={"row [&]:flex-wrap"}>
                          <div className={"\x63ol-md-2 \x63ol-4"}>
                            <label>
                              <strong>Adultos</strong>
                            </label>
                          </div>
                          <div className={"form-group \x63ol-md-2 \x63ol-3 align-middle"}>
                            <div className="bb-custom-select-container bb-customSelect">
                              <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-nB2Me-panel" aria-activedescendant="bb-customSelect-nB2Me-selectedOption" tabIndex={0}>
                                <span>2</span>
                              </span>
                              <select className="form-control" id="adults" tabIndex={-1} defaultValue="2">
                                <option value="1">1</option>
                                <option selected value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                              <div className="bb-custom-select-panel" id="bb-customSelect-nB2Me-panel" role="listbox">
                                <div className="bb-custom-select-option" role="option">1</div>
                                <div className="bb-custom-select-option" role="option" id="bb-customSelect-nB2Me-selectedOption">2</div>
                                <div className="bb-custom-select-option" role="option">3</div>
                                <div className="bb-custom-select-option" role="option">4</div>
                                <div className="bb-custom-select-option" role="option">5</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="persons">
                        <div className={"row [&]:flex-wrap"}>
                          <div className={"\x63ol-md-2 \x63ol-4"}>
                            <label>
                              <strong>Niños</strong>
                            </label>
                          </div>
                          <div className={"form-group \x63ol-md-2 \x63ol-3 align-middle"}>
                            <div className="bb-custom-select-container bb-customSelect">
                              <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-2WP0g-panel" aria-activedescendant="bb-customSelect-2WP0g-selectedOption" tabIndex={0}>
                                <span>0</span>
                              </span>
                              <select className="form-control" id="children" tabIndex={-1} defaultValue="0">
                                <option selected value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                              <div className="bb-custom-select-panel" id="bb-customSelect-2WP0g-panel" role="listbox">
                                <div className="bb-custom-select-option" role="option" id="bb-customSelect-2WP0g-selectedOption">0</div>
                                <div className="bb-custom-select-option" role="option">1</div>
                                <div className="bb-custom-select-option" role="option">2</div>
                                <div className="bb-custom-select-option" role="option">3</div>
                                <div className="bb-custom-select-option" role="option">4</div>
                                <div className="bb-custom-select-option" role="option">5</div>
                              </div>
                            </div>
                          </div>
                          <div className={"\x63ol-12 d-block d-md-none"} style={{ height: "0px" }}> </div>
                          <div className={"\x63ol-md-3 \x63ol-4"}>
                            <label style={{ display: "none" }} htmlFor="age-children">
                              <strong>Edad (Niños):</strong>
                            </label>
                          </div>
                          <div className={"form-group \x63ol-md-5 \x63ol-8 align-middle"} id="age-children" />
                        </div>
                      </div>
                      <div className="persons">
                        <div className={"row [&]:flex-wrap"}>
                          <div className={"\x63ol-md-2 \x63ol-4"}>
                            <label>
                              <strong>Bebés</strong>
                            </label>
                          </div>
                          <div className={"form-group \x63ol-md-2 \x63ol-3 align-middle"}>
                            <div className="bb-custom-select-container bb-customSelect">
                              <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-pNUn2-panel" aria-activedescendant="bb-customSelect-pNUn2-selectedOption" tabIndex={0}>
                                <span>0</span>
                              </span>
                              <select className="form-control" id="babies" tabIndex={-1} defaultValue="0">
                                <option selected value="0">
                                             0
                                          </option>
                                <option value="1">
                                             1
                                          </option>
                                <option value="2">
                                             2
                                          </option>
                                <option value="3">
                                             3
                                          </option>
                                <option value="4">
                                             4
                                          </option>
                                <option value="5">
                                             5
                                          </option>
                              </select>
                              <div className="bb-custom-select-panel" id="bb-customSelect-pNUn2-panel" role="listbox">
                                <div className="bb-custom-select-option" role="option" id="bb-customSelect-pNUn2-selectedOption">0</div>
                                <div className="bb-custom-select-option" role="option">1</div>
                                <div className="bb-custom-select-option" role="option">2</div>
                                <div className="bb-custom-select-option" role="option">3</div>
                                <div className="bb-custom-select-option" role="option">4</div>
                                <div className="bb-custom-select-option" role="option">5</div>
                              </div>
                            </div>
                          </div>
                          <div className={"\x63ol-12 d-block d-md-none"} style={{ height: "0px" }}> </div>
                          <div className={"\x63ol-md-3 \x63ol-4"}>
                            <label style={{ display: "none" }} htmlFor="age-babies">
                              <strong>Edad (Bebés):</strong>
                            </label>
                          </div>
                          <div className={"form-group \x63ol-md-5 \x63ol-7 align-middle"} id="age-babies" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"modal-footer items-center shrink-0 [&]:flex-wrap justify-end"}>
                    <button className="btn btn-default select-none align-middle" id="accommodationBtn" type="button">Aceptar</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade modal-location-transfer w-full" id="modalLocation-pickupLocation" aria-hidden="true" role="dialog" tabIndex={-1}>
              <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
                <div className="modal-content flex-col pointer-events-auto w-full">
                  <div className={"modal-header items-start! shrink-0 [&]:flex-wrap justify-between"}>
                    <h4 className="modal-title uppercase">Origen</h4>
                    <button className={"btn-close w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" />
                    <p>Especifique el punto de orígen de su transfer.</p>
                  </div>
                  <div className="modal-body flex-auto">
                    <div className="form-inline">
                      <div className={"row [&]:flex-wrap"}>
                        <div className={"form-group \x63ol-6 align-middle"}>
                          <label htmlFor="pais">País</label>
                          <div className="bb-custom-select-container bb-customSelect">
                            <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-p3tSw-panel" aria-activedescendant="bb-customSelect-p3tSw-selectedOption" tabIndex={0}>
                              <span>Seleccione uno</span>
                            </span>
                            <select className="form-control" id="country-pickupLocation" tabIndex={-1} defaultValue="defaultOption">
                              <option value="defaultOption">Seleccione uno</option>
                              <option value="JAM">JAMAICA</option>
                              <option value="AL">ALBANIA</option>
                              <option value="55736">MÉXICO</option>
                              <option value="ES">ESPAÑA</option>
                              <option value="55751">REPÚBLICA DOMINICANA</option>
                              <option value="MA">MOROCCO</option>
                            </select>
                            <div className="bb-custom-select-panel" id="bb-customSelect-p3tSw-panel" role="listbox">
                              <div className="bb-custom-select-option" role="option" id="bb-customSelect-p3tSw-selectedOption">Seleccione uno</div>
                              <div className="bb-custom-select-option" role="option">JAMAICA</div>
                              <div className="bb-custom-select-option" role="option">ALBANIA</div>
                              <div className="bb-custom-select-option" role="option">MÉXICO</div>
                              <div className="bb-custom-select-option" role="option">ESPAÑA</div>
                              <div className="bb-custom-select-option" role="option">REPÚBLICA DOMINICANA</div>
                              <div className="bb-custom-select-option" role="option">MOROCCO</div>
                            </div>
                          </div>
                        </div>
                        <div className={"form-group \x63ol-6 align-middle"}>
                          <label htmlFor="destination-pickupLocation" id="bb-customSelect-xJTWB-label">Destino</label>
                          <div className="bb-custom-select-container bb-customSelect">
                            <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-xJTWB-panel" aria-activedescendant="bb-customSelect-xJTWB-selectedOption" aria-labelledby="bb-customSelect-xJTWB-label" tabIndex={0}>
                              <span>Seleccione uno</span>
                            </span>
                            <select className="form-control" id="destination-pickupLocation" tabIndex={-1} defaultValue="defaultOption">
                              <option value="defaultOption">Seleccione uno</option>
                            </select>
                            <div className="bb-custom-select-panel" id="bb-customSelect-xJTWB-panel" role="listbox">
                              <div className="bb-custom-select-option" role="option" id="bb-customSelect-xJTWB-selectedOption">Seleccione uno</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"row [&]:flex-wrap"}>
                        <div className={"radio \x63ol-12"}><label><input id="destinationBase-pickupLocation" name="destinationType-pickupLocation" defaultChecked type="radio" />Aeropuerto, puerto o estación</label><label><input id="destinationHotel-pickupLocation" name="destinationType-pickupLocation" type="radio" />Hotel</label></div>
                      </div>
                      <div className={"row [&]:flex-wrap"}>
                        <div className={"form-group \x63ol-12 align-middle"}>
                          <div className="bb-custom-select-container bb-customSelect">
                            <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-qRHWx-panel" aria-activedescendant="bb-customSelect-qRHWx-selectedOption" tabIndex={0}>
                              <span>Seleccione uno</span>
                            </span>
                            <select className="form-control" id="destinationFinal-pickupLocation" tabIndex={-1} defaultValue="defaultOption">
                              <option value="defaultOption">Seleccione uno</option>
                            </select>
                            <div className="bb-custom-select-panel" id="bb-customSelect-qRHWx-panel" role="listbox">
                              <div className="bb-custom-select-option" role="option" id="bb-customSelect-qRHWx-selectedOption">Seleccione uno</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"modal-footer items-center shrink-0 [&]:flex-wrap justify-end"}>
                    <button className="btn btn-default select-none align-middle" id="locationBtn-pickupLocation" type="button">Aceptar</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade modal-location-transfer w-full" id="modalLocation-returnLocation" aria-hidden="true" role="dialog" tabIndex={-1}>
              <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
                <div className="modal-content flex-col pointer-events-auto w-full">
                  <div className={"modal-header items-start! shrink-0 [&]:flex-wrap justify-between"}>
                    <h4 className="modal-title uppercase">Destino</h4>
                    <button className={"btn-close w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" />
                    <p>Especifique el punto de destino de su transfer.</p>
                  </div>
                  <div className="modal-body flex-auto">
                    <div className="form-inline">
                      <div className={"row [&]:flex-wrap"}>
                        <div className={"form-group \x63ol-6 align-middle"}>
                          <label htmlFor="pais">País</label>
                          <div className="bb-custom-select-container bb-customSelect">
                            <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-DQWu9-panel" aria-activedescendant="bb-customSelect-DQWu9-selectedOption" tabIndex={0}>
                              <span>Seleccione uno</span>
                            </span>
                            <select className="form-control" id="country-returnLocation" tabIndex={-1} defaultValue="defaultOption">
                              <option value="defaultOption">Seleccione uno</option>
                              <option value="JAM">JAMAICA</option>
                              <option value="AL">ALBANIA</option>
                              <option value="55736">MÉXICO</option>
                              <option value="ES">ESPAÑA</option>
                              <option value="55751">REPÚBLICA DOMINICANA</option>
                              <option value="MA">MOROCCO</option>
                            </select>
                            <div className="bb-custom-select-panel" id="bb-customSelect-DQWu9-panel" role="listbox">
                              <div className="bb-custom-select-option" role="option" id="bb-customSelect-DQWu9-selectedOption">Seleccione uno</div>
                              <div className="bb-custom-select-option" role="option">JAMAICA</div>
                              <div className="bb-custom-select-option" role="option">ALBANIA</div>
                              <div className="bb-custom-select-option" role="option">MÉXICO</div>
                              <div className="bb-custom-select-option" role="option">ESPAÑA</div>
                              <div className="bb-custom-select-option" role="option">REPÚBLICA DOMINICANA</div>
                              <div className="bb-custom-select-option" role="option">MOROCCO</div>
                            </div>
                          </div>
                        </div>
                        <div className={"form-group \x63ol-6 align-middle"}>
                          <label htmlFor="destination-returnLocation" id="bb-customSelect-PZJFJ-label">Destino</label>
                          <div className="bb-custom-select-container bb-customSelect">
                            <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-PZJFJ-panel" aria-activedescendant="bb-customSelect-PZJFJ-selectedOption" aria-labelledby="bb-customSelect-PZJFJ-label" tabIndex={0}>
                              <span>Seleccione uno</span>
                            </span>
                            <select className="form-control" id="destination-returnLocation" tabIndex={-1} defaultValue="defaultOption">
                              <option value="defaultOption">Seleccione uno</option>
                            </select>
                            <div className="bb-custom-select-panel" id="bb-customSelect-PZJFJ-panel" role="listbox">
                              <div className="bb-custom-select-option" role="option" id="bb-customSelect-PZJFJ-selectedOption">Seleccione uno</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"row [&]:flex-wrap"}>
                        <div className={"radio \x63ol-12"}><label><input id="destinationBase-returnLocation" name="destinationType-returnLocation" defaultChecked type="radio" />Aeropuerto, puerto o estación</label><label><input id="destinationHotel-returnLocation" name="destinationType-returnLocation" type="radio" />Hotel</label></div>
                      </div>
                      <div className={"row [&]:flex-wrap"}>
                        <div className={"form-group \x63ol-12 align-middle"}>
                          <div className="bb-custom-select-container bb-customSelect">
                            <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-ZCJFu-panel" aria-activedescendant="bb-customSelect-ZCJFu-selectedOption" tabIndex={0}>
                              <span>Seleccione uno</span>
                            </span>
                            <select className="form-control" id="destinationFinal-returnLocation" tabIndex={-1} defaultValue="defaultOption">
                              <option value="defaultOption">Seleccione uno</option>
                            </select>
                            <div className="bb-custom-select-panel" id="bb-customSelect-ZCJFu-panel" role="listbox">
                              <div className="bb-custom-select-option" role="option" id="bb-customSelect-ZCJFu-selectedOption">Seleccione uno</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"modal-footer items-center shrink-0 [&]:flex-wrap justify-end"}>
                    <button className="btn btn-default select-none align-middle" id="locationBtn-returnLocation" type="button">Aceptar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SiteFooter />
        </div>
      </div>
      <div className="datetimepicker datetimepicker-dropdown-bottom-left dropdown-menu text-(--bs-dropdown-color) list-none [direction:ltr]" style={{ left: "756.406px", zIndex: "1065" }}>
        <div className="datetimepicker-minutes" style={{ display: "none" }}>
          <table className={"\x74able-condensed caption-bottom"}>
            <thead>
              <tr>
                <th className="prev" style={{ visibility: "hidden" }}>
                  <span className="fa fa-arrow-left [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
                <th className="switch" colSpan={5}>5 Noviembre 2026</th>
                <th className="next" style={{ visibility: "visible" }}>
                  <span className="fa fa-arrow-right [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7}>
                  <span className="minute disabled">2:00</span>
                  <span className="minute disabled">2:05</span>
                  <span className="minute disabled">2:10</span>
                  <span className="minute disabled">2:15</span>
                  <span className="minute">2:20</span>
                  <span className="minute">2:25</span>
                  <span className="minute">2:30</span>
                  <span className="minute">2:35</span>
                  <span className="minute">2:40</span>
                  <span className="minute">2:45</span>
                  <span className="minute">2:50</span>
                  <span className="minute">2:55</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th className="today" colSpan={7}>Hoy</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="datetimepicker-hours" style={{ display: "none" }}>
          <table className={"\x74able-condensed caption-bottom"}>
            <thead>
              <tr>
                <th className="prev" style={{ visibility: "hidden" }}>
                  <span className="fa fa-arrow-left [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
                <th className="switch" colSpan={5}>5 Noviembre 2026</th>
                <th className="next" style={{ visibility: "visible" }}>
                  <span className="fa fa-arrow-right [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7}>
                  <span className="hour disabled">0:00</span>
                  <span className="hour disabled">1:00</span>
                  <span className="hour active">2:00</span>
                  <span className="hour">3:00</span>
                  <span className="hour">4:00</span>
                  <span className="hour">5:00</span>
                  <span className="hour">6:00</span>
                  <span className="hour">7:00</span>
                  <span className="hour">8:00</span>
                  <span className="hour">9:00</span>
                  <span className="hour">10:00</span>
                  <span className="hour">11:00</span>
                  <span className="hour">12:00</span>
                  <span className="hour">13:00</span>
                  <span className="hour">14:00</span>
                  <span className="hour">15:00</span>
                  <span className="hour">16:00</span>
                  <span className="hour">17:00</span>
                  <span className="hour">18:00</span>
                  <span className="hour">19:00</span>
                  <span className="hour">20:00</span>
                  <span className="hour">21:00</span>
                  <span className="hour">22:00</span>
                  <span className="hour">23:00</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th className="today" colSpan={7}>Hoy</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="datetimepicker-days" style={{ display: "block" }}>
          <table className={"\x74able-condensed caption-bottom"}>
            <thead>
              <tr>
                <th className="prev" style={{ visibility: "hidden" }}>
                  <span className="fa fa-arrow-left [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
                <th className="switch" colSpan={5}>Noviembre 2026</th>
                <th className="next" style={{ visibility: "visible" }}>
                  <span className="fa fa-arrow-right [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
              </tr>
              <tr>
                <th className="dow uppercase">Lu</th>
                <th className="dow uppercase">Ma</th>
                <th className="dow uppercase">Mi</th>
                <th className="dow uppercase">Ju</th>
                <th className="dow uppercase">Vi</th>
                <th className="dow uppercase">Sa</th>
                <th className="dow uppercase">Do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="day old disabled">26</td>
                <td className="day old disabled">27</td>
                <td className="day old disabled">28</td>
                <td className="day old disabled">29</td>
                <td className="day old disabled">30</td>
                <td className="day old disabled">31</td>
                <td className="day disabled">1</td>
              </tr>
              <tr>
                <td className="day disabled">2</td>
                <td className="day today active disabled">3</td>
                <td className="day disabled">4</td>
                <td className="day">5</td>
                <td className="day">6</td>
                <td className="day">7</td>
                <td className="day">8</td>
              </tr>
              <tr>
                <td className="day">9</td>
                <td className="day">10</td>
                <td className="day">11</td>
                <td className="day">12</td>
                <td className="day">13</td>
                <td className="day">14</td>
                <td className="day">15</td>
              </tr>
              <tr>
                <td className="day">16</td>
                <td className="day">17</td>
                <td className="day">18</td>
                <td className="day">19</td>
                <td className="day">20</td>
                <td className="day">21</td>
                <td className="day">22</td>
              </tr>
              <tr>
                <td className="day">23</td>
                <td className="day">24</td>
                <td className="day">25</td>
                <td className="day">26</td>
                <td className="day">27</td>
                <td className="day">28</td>
                <td className="day">29</td>
              </tr>
              <tr>
                <td className="day">30</td>
                <td className="day new">1</td>
                <td className="day new">2</td>
                <td className="day new">3</td>
                <td className="day new">4</td>
                <td className="day new">5</td>
                <td className="day new">6</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th className="today" colSpan={7}>Hoy</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="datetimepicker-months" style={{ display: "none" }}>
          <table className={"\x74able-condensed caption-bottom"}>
            <thead>
              <tr>
                <th className="prev" style={{ visibility: "hidden" }}>
                  <span className="fa fa-arrow-left disabled [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
                <th className="switch" colSpan={5}>2026</th>
                <th className="next" style={{ visibility: "visible" }}>
                  <span className="fa fa-arrow-right disabled [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7}>
                  <span className="month disabled">Ene</span>
                  <span className="month disabled">Feb</span>
                  <span className="month disabled">Mar</span>
                  <span className="month disabled">Abr</span>
                  <span className="month disabled">May</span>
                  <span className="month disabled">Jun</span>
                  <span className="month disabled">Jul</span>
                  <span className="month disabled">Ago</span>
                  <span className="month disabled">Sep</span>
                  <span className="month disabled">Oct</span>
                  <span className="month active">Nov</span>
                  <span className="month">Dic</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th className="today" colSpan={7}>Hoy</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="datetimepicker-years" style={{ display: "none" }}>
          <table className={"\x74able-condensed caption-bottom"}>
            <thead>
              <tr>
                <th className="prev" style={{ visibility: "hidden" }}>
                  <span className="fa fa-arrow-left [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
                <th className="switch" colSpan={5}>2020-2029</th>
                <th className="next" style={{ visibility: "visible" }}>
                  <span className="fa fa-arrow-right [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7}>
                  <span className="year old disabled">2019</span>
                  <span className="year disabled">2020</span>
                  <span className="year disabled">2021</span>
                  <span className="year disabled">2022</span>
                  <span className="year disabled">2023</span>
                  <span className="year disabled">2024</span>
                  <span className="year disabled">2025</span>
                  <span className="year active">2026</span>
                  <span className="year">2027</span>
                  <span className="year">2028</span>
                  <span className="year">2029</span>
                  <span className="year old">2030</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th className="today" colSpan={7}>Hoy</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all top-0" style={{ display: "none" }} id="ui-id-1" tabIndex={0} />
      <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all top-0" style={{ display: "none" }} id="ui-id-2" tabIndex={0} />
      <div className="modal fade w-full" style={{ display: "none" }} id="modalLanguage" aria-hidden="true" role="dialog" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
          <div className="modal-content flex-col pointer-events-auto w-full">
            <div className={"modal-header items-start! shrink-0 [&]:flex-wrap justify-between"}>
              <h4 className="modal-title uppercase">Cambiar Idioma</h4>
              <button className={"btn-close w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" />
            </div>
            <div className="modal-body flex-auto">
              <label className="visually-hidden" style={{ display: "none" }} htmlFor="language" id="bb-customSelect-uQ6dU-label">Seleccionar idioma</label>
              <h2 />
              <label style={{ display: "none" }}>Seleccionar idioma</label>
              <div className="bb-custom-select-container bb-customSelect">
                <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-uQ6dU-panel" aria-activedescendant="bb-customSelect-uQ6dU-selectedOption" aria-labelledby="bb-customSelect-uQ6dU-label" tabIndex={0}>
                  <span>Español</span>
                </span>
                <select className="form-control" id="language" tabIndex={-1} defaultValue="ES">
                  <option value="EN">English</option>
                  <option selected value="ES">Español</option>
                </select>
                <div className="bb-custom-select-panel" id="bb-customSelect-uQ6dU-panel" role="listbox">
                  <div className="bb-custom-select-option" role="option">English</div>
                  <div className="bb-custom-select-option" role="option" id="bb-customSelect-uQ6dU-selectedOption">Español</div>
                </div>
              </div>
            </div>
            <div className={"modal-footer items-center shrink-0 [&]:flex-wrap justify-end"}>
              <button className="btn btn-default select-none align-middle" id="languageBtn" type="button">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal modal-loading w-full" id="myModalLoading" aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
          <div className="modal-content shadow-none! flex-col pointer-events-auto w-full">
            <div className="modal-body flex-auto">
              <div id="circularG">
                <div className="circularG [box-shadow:rgba(0,0,0,0.37)_0px_0px_22px_4px] top-[50px] w-[29px] [animation-delay:0.27s] [animation-direction:normal] [animation-duration:0.72s] [animation-iteration-count:infinite]" id="circularG_1" />
                <div className="circularG [box-shadow:rgba(0,0,0,0.37)_0px_0px_22px_4px] top-[14px] w-[29px] [animation-delay:0.36s] [animation-direction:normal] [animation-duration:0.72s] [animation-iteration-count:infinite]" id="circularG_2" />
                <div className="circularG [box-shadow:rgba(0,0,0,0.37)_0px_0px_22px_4px] top-0 w-[29px] [animation-delay:0.45s] [animation-direction:normal] [animation-duration:0.72s] [animation-iteration-count:infinite]" id="circularG_3" />
                <div className="circularG [box-shadow:rgba(0,0,0,0.37)_0px_0px_22px_4px] right-[14px] top-[14px] w-[29px] [animation-delay:0.54s] [animation-direction:normal] [animation-duration:0.72s] [animation-iteration-count:infinite]" id="circularG_4" />
                <div className="circularG [box-shadow:rgba(0,0,0,0.37)_0px_0px_22px_4px] right-0 top-[50px] w-[29px] [animation-delay:0.63s] [animation-direction:normal] [animation-duration:0.72s] [animation-iteration-count:infinite]" id="circularG_5" />
                <div className="circularG bottom-[14px] [box-shadow:rgba(0,0,0,0.37)_0px_0px_22px_4px] right-[14px] w-[29px] [animation-delay:0.72s] [animation-direction:normal] [animation-duration:0.72s] [animation-iteration-count:infinite]" id="circularG_6" />
                <div className="circularG bottom-0 [box-shadow:rgba(0,0,0,0.37)_0px_0px_22px_4px] w-[29px] [animation-delay:0.81s] [animation-direction:normal] [animation-duration:0.72s] [animation-iteration-count:infinite]" id="circularG_7" />
                <div className="circularG bottom-[14px] [box-shadow:rgba(0,0,0,0.37)_0px_0px_22px_4px] w-[29px] [animation-delay:0.9s] [animation-direction:normal] [animation-duration:0.72s] [animation-iteration-count:infinite]" id="circularG_8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade w-full" id="modalCurrency" aria-hidden="true" role="dialog" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
          <div className="modal-content flex-col pointer-events-auto w-full">
            <div className={"modal-header items-start! shrink-0 [&]:flex-wrap justify-between"}>
              <h4 className="modal-title uppercase">Cambiar moneda</h4>
              <button className={"btn-close w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" />
            </div>
            <div className="modal-body flex-auto">
              <label className="visually-hidden" htmlFor="currency" id="bb-customSelect-2S5m6-label">Seleccione una moneda</label>
              <div className="bb-custom-select-container bb-customSelect">
                <span className="bb-custom-select-opener" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-2S5m6-panel" aria-labelledby="bb-customSelect-2S5m6-label" tabIndex={0}>
                  <span>{"\n   \n   "}</span>
                </span>
                <select className="form-control" id="currency" tabIndex={-1} defaultValue="">{"\n               \n           "}</select>
                <div className="bb-custom-select-panel" id="bb-customSelect-2S5m6-panel" role="listbox" />
              </div>
            </div>
            <div className={"modal-footer items-center shrink-0 [&]:flex-wrap justify-end"}>
              <button className="btn btn-default select-none align-middle" type="button">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade w-full" id="myModalSessionExpired" role="dialog" aria-hidden="false" aria-labelledby="myModalSessionExpired" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
          <div className="modal-content flex-col pointer-events-auto w-full">
            <div className={"modal-header items-start! shrink-0 [&]:flex-wrap justify-between"}>
              <h4 className="modal-title uppercase">¡SU CARRITO HA EXPIRADO!</h4>
            </div>
            <div className="modal-body flex-auto">
                  Tendrá que volver a inicar un nuevo proceso de reserva.<br /><br /><a className="btn btn-primary select-none align-middle" aria-hidden="true" href="/init-cart" id="sessionButton" {...({ type: "button" } as any)}>
                     Iniciar sesión
                  </a></div>
          </div>
        </div>
      </div>
      <div className="modal fade modal-error w-full" id="errorModal" aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
          <div className="modal-content flex-col pointer-events-auto w-full">
            <div className={"modal-header items-start! shrink-0 [&]:flex-wrap justify-between"}>
              <h4 className="modal-title uppercase">Uups!</h4>
              <button className={"btn-close w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" />
            </div>
            <div className="modal-body error-box flex-auto w-full">
              <div className={"\x74able-row"}>
                <div className="image"><span className="visually-hidden">Uups!</span><i className="fa fa-exclamation-circle [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></div>
                <div className="text">
                  <h2>Uups!!</h2>
                  <h3 />
                  <a className="btn btn-default select-none align-middle" href="/home" {...({ type: "button" } as any)}>
                           Volver al inicio
                        </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade modal-error w-full" id="dialogModal" aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen-md-down pointer-events-none">
          <div className="modal-content flex-col pointer-events-auto w-full">
            <div className={"modal-header items-start! shrink-0 [&]:flex-wrap justify-between"}>
              <h4 className="modal-title uppercase">Warning</h4>
              <button className={"btn-close w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" />
            </div>
            <div className="modal-body error-box flex-auto w-full">
              <div className={"\x74able-row"}>
                <div className="image"><span className="visually-hidden">Uups!</span><i className="fa fa-exclamation-circle [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></div>
                <div className="text">
                  <h2 />
                  <h3>¿Esta seguro que quiere continuar?</h3>
                </div>
              </div>
            </div>
            <div className={"modal-footer items-center shrink-0 [&]:flex-wrap justify-end"}><button className="btn btn-accept active select-none align-middle [text-shadow:none]" id="modal-dialog-ok" type="button">
                     Continuar
                  </button><button className="btn btn-default select-none align-middle" id="modal-dialog-ko" type="button">
                     Volver
                  </button></div>
          </div>
        </div>
      </div>
    </>
  );
}


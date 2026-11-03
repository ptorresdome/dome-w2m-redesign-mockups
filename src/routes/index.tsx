import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "World2Meet - Traslados" }] }),
  staticData: { importedDocument: { html: { "className": "video", "lang": "es" }, body: { "className": "didomi-popup-open" } } },
  component: Index,
});

function Index() {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"didomi-host items-stretch self-auto shadow-none break-inside-auto caption-top flex-initial [&]:flex-row flex-nowrap float-none gap-0 isolation-auto tracking-normal mix-blend-normal object-fill order-0 content-stretch justify-start pointer-events-auto resize-none table-auto no-underline indent-0 text-clip normal-case touch-auto delay-0 duration-0 transition-all ease-[ease] select-auto align-baseline [&]:visible will-change-auto break-normal [-webkit-box-reflect:initial] [-webkit-line-clamp:initial] [-webkit-locale:initial] [-webkit-rtl-ordering:initial] [-webkit-tap-highlight-color:rgba(0,0,0,0)] [-webkit-text-combine:initial] [-webkit-text-decorations-in-effect:initial] [-webkit-text-fill-color:initial] [-webkit-text-security:initial] [-webkit-text-stroke:0px_currentcolor] [-webkit-user-drag:initial] [accent-color:initial] [alignment-baseline:initial] [anchor-name:initial] [anchor-scope:initial] [animation-composition:initial] [animation-delay:0s] [animation-direction:normal] [animation-duration:0s] [animation-fill-mode:none] [animation-iteration-count:1] [animation-name:none] [animation-play-state:running] [animation-range:initial] [animation-timeline:initial] [animation-timing-function:ease] [animation-trigger:initial] [app-region:initial] [aspect-ratio:initial] [backdrop-filter:initial] [backface-visibility:visible] [baseline-shift:initial] [baseline-source:initial] [box-decoration-break:slice] [break-after:auto] [break-before:auto] [buffered-rendering:initial] [caret-animation:initial] [caret-color:auto] [caret-shape:initial] [clip:auto] [clip-path:none] [clip-rule:initial] [color:initial] [color-interpolation:initial] [color-interpolation-filters:initial] [color-rendering:initial] [color-scheme:initial] [column-fill:balance] [column-rule:medium] [column-span:none] [columns:auto] [contain:initial] [contain-intrinsic-block-size:initial] [contain-intrinsic-inline-size:initial] [contain-intrinsic-size:initial] [container:initial] [corner-block-end-shape:initial] [corner-block-start-shape:initial] [corner-shape:initial] [counter-increment:none] [counter-reset:none] [counter-set:initial] [cx:initial] [cy:initial] [d:initial] [dominant-baseline:initial] [dynamic-range-limit:initial] [empty-cells:show] [field-sizing:initial] [fill:initial] [fill-opacity:initial] [fill-rule:initial] [filter:none] [flex-line-count:initial] [flood-color:initial] [flood-opacity:initial] [forced-color-adjust:initial] [frame-sizing:initial] [grid:none] [grid-area:auto] [hyphenate-character:initial] [hyphenate-limit-chars:initial] [hyphens:manual] [image-orientation:initial] [image-rendering:auto] [initial-letter:initial] [interactivity:initial] [interest-delay:initial] [interpolate-size:initial] [justify-items:initial] [justify-self:initial] [lighting-color:initial] [line-break:auto] [list-style:outside_none_disc] [marker:initial] [math-depth:initial] [math-shift:initial] [math-style:initial] [object-position:50%_50%] [object-view-box:initial] [offset:initial] [orphans:2] [overlay:initial] [overscroll-behavior:initial] [overscroll-behavior-block:initial] [overscroll-behavior-inline:initial] [page:initial] [page-margin-safety:initial] [page-orientation:initial] [paint-order:initial] [perspective:none] [perspective-origin:50%_50%] [print-color-adjust:initial] [quotes:initial] [r:initial] [reading-flow:initial] [reading-order:initial] [rotate:initial] [row-rule:initial] [ruby-align:space-around] [ruby-overhang:initial] [ruby-position:over] [rule-break:initial] [rule-inset:initial] [rule-overlap:initial] [rule-visibility-items:initial] [rx:initial] [ry:initial] [scale:initial] [scroll-axis-lock:initial] [scroll-initial-target:initial] [scroll-margin:initial] [scroll-margin-block:initial] [scroll-margin-inline:initial] [scroll-marker-group:initial] [scroll-padding:initial] [scroll-padding-block:initial] [scroll-padding-inline:initial] [scroll-snap-align:initial] [scroll-snap-stop:initial] [scroll-snap-type:none] [scroll-target-group:initial] [scroll-timeline:initial] [scrollbar-color:initial] [scrollbar-gutter:initial] [scrollbar-width:initial] [shape-image-threshold:0] [shape-margin:0px] [shape-outside:none] [shape-rendering:initial] [speak:initial] [stop-color:initial] [stop-opacity:initial] [stroke:initial] [stroke-dasharray:initial] [stroke-dashoffset:initial] [stroke-linecap:initial] [stroke-linejoin:initial] [stroke-miterlimit:initial] [stroke-opacity:initial] [stroke-width:initial] [tab-size:8] [text-anchor:initial] [text-autospace:initial] [text-box:initial] [text-combine-upright:none] [text-decoration-skip-ink:initial] [text-emphasis:none_currentcolor] [text-emphasis-position:over_right] [text-fit:initial] [text-justify:auto] [text-orientation:mixed] [text-rendering:optimizelegibility] [text-shadow:none] [text-size-adjust:initial] [text-spacing-trim:initial] [text-underline-offset:initial] [text-underline-position:auto] [timeline-scope:initial] [timeline-trigger:initial] [transition-behavior:initial] [translate:initial] [trigger-scope:initial] [vector-effect:initial] [view-timeline:initial] [view-transition-class:initial] [view-transition-group:initial] [view-transition-name:initial] [view-transition-scope:initial] [widows:2] [window-drag:initial] [word-spacing:normal] [writing-mode:horizontal-tb] [x:initial] [y:initial] [zoom:initial]"} id="didomi-host" lang="en">
        <div className={isMobile ? "notranslate didomi-screen-xsmall didomi-mobile didomi-consent-popup__a2711963-219d-44fc-82d8-17e974c3dab8" : "notranslate didomi-screen-large didomi-consent-popup__a2711963-219d-44fc-82d8-17e974c3dab8"}>
          <div className="didomi-popup-backdrop didomi-notice-popup didomi-popup__backdrop" id="didomi-popup">
            <div className="didomi-exterior-border">
              <div className="didomi-popup-container didomi-popup-notice didomi-popup-notice-optin-type didomi-popup-notice-with-data-processing" role="dialog" aria-modal="true" aria-label="Welcome to W2M Consent Management">
                <div className="didomi-popup-view" style={{ outline: "none" }} tabIndex={-1} role="document">
                  <div className="didomi-popup-notice-text-container">
                    <div className="didomi-popup-notice-text">
                      <p>With your consent, we and <a>our partners</a> use cookies or similar technologies to store, access, and process personal data such as IP addresses or visited pages for the purposes indicated below. More information on these can be found by clicking on the "Configure" button. You can refuse the installation of cookies or withdraw your consent at any time by clicking "Configure" or via our <a href="https://www.w2m.travel/cookies-policy" target="_blank">cookie policy</a>.</p>
                    </div>
                    <div className="didomi-notice-data-processing-container didomi-popup-notice-data-processing-list">
                      <p>
                        <span className="didomi-notice-data-processing-title" role="heading" aria-level={2}>We and our partners process data for the following purposes:</span>
                        <span className="didomi-notice-data-processing-list">
                          <span>Personalised advertising and content, advertising and content measurement, audience research and services development</span>
                          <span>, Store and/or access information on a device</span>
                          <span>, Technical or essential cookies for the provision of services</span>
                        </span>
                      </p>
                    </div>
                    <a className="didomi-notice-view-partners-link" role="button" tabIndex={0}>
                      <span>View our 11 partners</span>
                    </a>
                  </div>
                  <div className="multiple didomi-buttons didomi-popup-notice-buttons" id="buttons">
                    <button className="didomi-components-button didomi-button didomi-learn-more-button didomi-button-standard" style={{ color: "rgb(68, 68, 68)", backgroundColor: "rgb(238, 238, 238)", borderRadius: "0px", borderColor: "rgba(34, 34, 34, 0.2)", borderWidth: "1px", display: "block" }} id="didomi-notice-learn-more-button" aria-label="Configure: Configure your consents">
                      <span>Configure</span>
                    </button>
                    <button className="didomi-components-button didomi-button highlight-button" style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgb(196, 214, 0)", borderRadius: "0px", borderColor: "rgba(196, 214, 0, 0.3)", borderWidth: "1px", display: "block" }} id="didomi-notice-disagree-button" aria-label="Disagree and close: Disagree to our data processing and close">
                      <span>Disagree and close</span>
                    </button>
                    <button className="didomi-components-button didomi-button highlight-button" style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgb(196, 214, 0)", borderRadius: "0px", borderColor: "rgba(196, 214, 0, 0.3)", borderWidth: "1px", display: "block" }} id="didomi-notice-agree-button" aria-label="Agree and close: Agree to our data processing and close">
                      <span>Agree and close</span>
                    </button>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <ImportedHeaderNavegaciNDeLa />
          <div className="content">
            <ImportedSectionBuscarTraslados />
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
          <footer className={"type2 [&]:text-white"}>
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

function ImportedHeaderNavegaciNDeLa() {
  return (
    <header className="header">
      <section className="header-wrapper" id="headerContent">
        <div className={"\x63ontainer"}>
          <nav className="navbar navbar-expand items-center">
            <a className="navbar-brand logo d-none d-md-block" href="/">
              <div className="logoHeader" style={{ background: "url(\"/site-assets/1fbaddbcc7e6cf85.png\") 0% 0% / contain no-repeat" }} />
            </a>
            <div className={"\x63ollapse navbar-collapse items-center grow justify-end! [@media(max-width:767px)]:float-none"} id="navbarCollapse">
              <ul className="navbar-nav">
                <li className={"nav-item [&]:float-left"}>
                  <a className={"nav-link normal-case [&:focus-visible]:[box-shadow:rgba(13,110,253,0.25)_0px_0px_0px_0.25rem]"} href="/user-register">
                    <span className="fa fa-user-plus [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                    <span className="navbar-top-txt">Regístrese</span>
                  </a>
                </li>
                <li className={"nav-item [&]:float-left"}>
                  <a className={"nav-link normal-case [&:focus-visible]:[box-shadow:rgba(13,110,253,0.25)_0px_0px_0px_0.25rem]"} href="#" id="login-link">
                    <span className="fa fa-users [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                    <span className="navbar-top-txt">Mi cuenta</span>
                  </a>
                </li>
                <li className={"nav-item [&]:float-left"}>
                  <a className={"nav-link normal-case [&:focus-visible]:[box-shadow:rgba(13,110,253,0.25)_0px_0px_0px_0.25rem]"} aria-expanded="false" data-bs-target="#modalLanguage" href="#">
                    <span className="fa fa-globe [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                    <span className="navbar-top-txt">Cambiar idioma</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section className={"\x66ill-fixed-navbar"} style={{ height: "0px" }} />
      <section className="navigation-collapse duration-300 ease-linear">
        <h2 className="visually-hidden">Navegación de la web</h2>
        <div className={"\x63ontainer"}>
          <nav className={"navbar navbar-default navbar-expand-md \x6austify-content-center \x6austify-content-sm-between items-center"}>
            <a className="navbar-brand d-md-none" href="/">
              <div className="logoHeader" />
            </a>
            <div className={"nav \x66lex-row \x66lex-sm-column [&]:flex-wrap"}>
              <button className={"navbar-toggler collapsed d-md-none [&:focus]:[box-shadow:0_0_0_var(--bs-navbar-toggler-focus-width)] [&:focus]:no-underline [&:hover]:no-underline"} type="button" data-bs-target="#bs-example-navbar-collapse-1" aria-expanded="false" {...({ "arial-label": "Toggle navigation" } as any)}>
                <span className="navbar-toggler-icon align-middle" />
              </button>
            </div>
            <div className="offcanvas offcanvas-start bottom-0 text-(--bs-offcanvas-color) flex-col max-w-full top-0" id="bs-example-navbar-collapse-1" aria-expanded="false" tabIndex={-1}>
              <div className="offcanvas-header items-center justify-end!">
                <button className={"btn-close btn-close-white w-[1em] [&:focus]:[box-shadow:var(--bs-btn-close-focus-shadow)] [&:hover]:no-underline"} type="button" aria-label="Close" />
              </div>
              <div className="offcanvas-body p-0">
                <ul className={"nav navbar-nav navmain [&]:flex-wrap"}>
                  <li className="nav-item">
                    <a className={"nav-link normal-case [&:focus-visible]:[box-shadow:rgba(13,110,253,0.25)_0px_0px_0px_0.25rem]"} href="/excursion">{"\n                        "}<i className="fa fa-ticket [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /> Excursiones
                        </a>
                  </li>
                  <li className="nav-item dropdown active">
                    <a className={"nav-link active normal-case [&:focus-visible]:[box-shadow:rgba(13,110,253,0.25)_0px_0px_0px_0.25rem]"} href="#">{"\n                                "}<i className="fa fa-bus [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /> Traslados
                                </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
}

function ImportedSectionBuscarTraslados() {
  return (
    <section className="section-slider section-bg-traslados">
      <div className="carousel" id="myCarousel"><ol className="carousel-indicators bottom-0 justify-center right-0"><li data-bs-target="#myCarousel" className="" /><li className="active" data-bs-target="#myCarousel" aria-current="true" /><li data-bs-target="#myCarousel" className="" /><li data-bs-target="#myCarousel" className="" /></ol><div className="carousel-inner w-full"><div className={"carousel-item active carousel-item-start [&]:float-left w-full [backface-visibility:hidden]"}><div className="carousel-bg d-block top-0 w-full! [filter:brightness(75%)]" style={{ background: "url(\"/site-assets/c51f2863e87e79e3.webp\")" }} /></div><div className={"carousel-item carousel-item-next carousel-item-start [&]:float-left w-full [backface-visibility:hidden]"}><div className="carousel-bg d-block top-0 w-full! [filter:brightness(75%)]" style={{ background: "url(\"/site-assets/ce888aa8731e4ed3.webp\")" }} /></div><div className={"carousel-item [&]:float-left w-full [backface-visibility:hidden]"}><div className="carousel-bg d-block top-0 w-full! [filter:brightness(75%)]" style={{ background: "url(\"/site-assets/c1a3a76f809953b5.webp\")" }} /></div><div className={"carousel-item [&]:float-left w-full [backface-visibility:hidden]"}><div className="carousel-bg d-block top-0 w-full! [filter:brightness(75%)]" style={{ background: "url(\"/site-assets/6e96a3cf8c10387f.webp\")" }} /></div></div><button className={"carousel-control-prev items-center bottom-0 justify-center top-0 w-[15%] [&:focus]:no-underline [&:hover]:no-underline"} type="button" data-bs-target="#myCarousel">{"\n\t\t\t    "}<span className="carousel-control-prev-icon" aria-hidden="true" />{"\n\t\t\t    "}<span className="visually-hidden">Previous</span>{"\n\t\t\t"}</button><button className={"carousel-control-next items-center bottom-0 justify-center right-0 top-0 w-[15%] [&:focus]:no-underline [&:hover]:no-underline"} type="button" data-bs-target="#myCarousel">{"\n\t\t\t    "}<span className="carousel-control-next-icon" aria-hidden="true" />{"\n\t\t\t    "}<span className="visually-hidden">Next</span>{"\n\t\t\t"}</button></div>
      <div className="container-searcher transfer-home">
        <form className="form-inline searcher searcher-transfer [@media(max-width:767px)]:w-full [@media(min-width:992px)]:items-end" id="searcher-transfer">
          <div className="searcher-top">
            <h2><span className="fa fa-search [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />
                Buscar Traslados
            </h2>
            <div className={"row [&]:flex-wrap"}>
              <div className={"form-group \x63ol-lg-3 \x63ol-sm-6 \x63ol-12 location-transfer-from align-middle"}><span className="ui-helper-hidden-accessible [clip:rect(0px,0px,0px,0px)]" role="status" aria-live="polite" /><label style={{ display: "none" }}>Origen</label><input className="form-control text-ellipsis" id="pickupLocation" tabIndex={1} type="text" placeholder="Origen" data-hotel="Hoteles" defaultValue="" autoComplete="off" /><i className="fa fa-chevron-down location-dropdown-toggle bottom-[10px] right-[7px] transition-transform duration-200 [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></div>
              <div className={"form-group \x63ol-lg-3 \x63ol-sm-6 \x63ol-12 location-transfer-to align-middle"}><span className="ui-helper-hidden-accessible [clip:rect(0px,0px,0px,0px)]" role="status" aria-live="polite" /><label style={{ display: "none" }}>Destino</label><input className="form-control text-ellipsis" id="returnLocation" tabIndex={3} type="text" placeholder="Destino" data-hotel="Hoteles" defaultValue="" autoComplete="off" /><i className="fa fa-chevron-down location-dropdown-toggle bottom-[10px] right-[7px] transition-transform duration-200 [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></div>
              <div className={"form-group \x63ol-lg-2 \x63ol-6 arrival-date align-middle"}>
                <div className={"input-group date form_date items-stretch [&]:flex-wrap w-full"} id="checkIn-datetimepicker"><label style={{ display: "none" }}>Llegada</label><input className="form-control" id="checkIn-datetimepicker-input" tabIndex={2} type="text" placeholder="Llegada" readOnly defaultValue="" {...({ size: "10" } as any)} /><span className="input-group-addon bottom-[10px] right-[7px]" id="checkIn-datetimepicker-span">{"\n      "}<i className="fa fa-calendar [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />{"\n   "}</span></div>
                <input type="hidden" id="checkInDate" defaultValue="" />
              </div>
              <div className={"form-group \x63ol-lg-2 \x63ol-6 departure-date hide desactivado pointer-events-none align-middle"} id="returnData" data-super="true"><div className={"input-group date form_date items-stretch [&]:flex-wrap w-full"} id="checkOut-datetimepicker"><label style={{ display: "none" }}>Regreso</label><input className="form-control" id="checkOut-datetimepicker-input" tabIndex={4} type="text" placeholder="Regreso" readOnly defaultValue="" disabled {...({ size: "10" } as any)} /><span className="input-group-addon disabled bottom-[10px] right-[7px]" id="checkOut-datetimepicker-span">{"\n        "}<i className="fa fa-calendar [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />{"\n    "}</span></div><span className="input-group-addon bottom-[10px] right-[9px]! top-[-6px]!" id="checkOut-datetimepicker-oneway-span" data-super="true" title="Cambiar a Solo Ida">{"\n        "}<i className="fa fa-close [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" />{"\n    "}</span><input type="hidden" defaultValue="" id="checkOutDate" /></div>
              <div className={"form-group \x63ol-lg-2 \x63ol-6 no-underline align-middle"} id="roundTrip-button">
                <div className="form-control disabled">
                  <div><i className="fa fa-plus-circle [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /><span>Añadir regreso</span></div>
                </div>
              </div>
              <div className={"form-group \x63ol-lg-2 \x63ol-12 passengers align-middle"}><label className="inputValue" style={{ display: "block" }}>Personas</label><input className="form-control" type="text" id="accommodation" tabIndex={12} readOnly placeholder="" /><a className="link-open-modal bottom-[10px] right-[7px]" data-bs-target="#modalAccommodation" href="#"><i className="fa fa-user [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></a></div>
            </div>
          </div>
          <div className="searcher-bottom">
            <div className={"row [&]:flex-wrap justify-center [@media(min-width:992px)]:flex-col"}>
              <div className={"form-group \x63ol-lg-12 \x63ol-12 transferPrivate align-middle"}><input type="checkbox" id="servicetype" name="servicetype" /><label><span>Solo privado</span></label></div>
              <div className={"form-group \x63ol-lg-12 \x63ol-12 align-middle"}>
                <button className="btn btn-default pull-right select-none align-middle [@media(max-width:767px)]:w-full" id="searchBtn" type="button" tabIndex={13}>Buscar <span className="fa fa-search [-moz-osx-font-smoothing:grayscale] [text-rendering:auto]" /></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function subscribeMobile(onChange: () => void) {
  const query = matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

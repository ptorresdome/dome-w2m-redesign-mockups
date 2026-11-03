import { useState, useSyncExternalStore } from "react";

function subscribeMobile(onChange: () => void) {
  const query = matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** Cookie consent notice (imported Didomi markup). Closes on any button. */
export function CookieNotice() {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  const [consentOpen, setConsentOpen] = useState(true);
  if (!consentOpen) return null;
  return (
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
                    <button onClick={() => setConsentOpen(false)} className="didomi-components-button didomi-button didomi-learn-more-button didomi-button-standard" style={{ color: "rgb(68, 68, 68)", backgroundColor: "rgb(238, 238, 238)", borderRadius: "0px", borderColor: "rgba(34, 34, 34, 0.2)", borderWidth: "1px", display: "block" }} id="didomi-notice-learn-more-button" aria-label="Configure: Configure your consents">
                      <span>Configure</span>
                    </button>
                    <button onClick={() => setConsentOpen(false)} className="didomi-components-button didomi-button highlight-button" style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgb(196, 214, 0)", borderRadius: "0px", borderColor: "rgba(196, 214, 0, 0.3)", borderWidth: "1px", display: "block" }} id="didomi-notice-disagree-button" aria-label="Disagree and close: Disagree to our data processing and close">
                      <span>Disagree and close</span>
                    </button>
                    <button onClick={() => setConsentOpen(false)} className="didomi-components-button didomi-button highlight-button" style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgb(196, 214, 0)", borderRadius: "0px", borderColor: "rgba(196, 214, 0, 0.3)", borderWidth: "1px", display: "block" }} id="didomi-notice-agree-button" aria-label="Agree and close: Agree to our data processing and close">
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
  );
}

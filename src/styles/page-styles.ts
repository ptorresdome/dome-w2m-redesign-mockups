// Page CSS injected as <style> tags (after the captured site CSS) so it wins over imported globals.
import captured from "./site.css?raw";
import base from "./redesign/base.css?raw";
import header from "./redesign/header.css?raw";
import search from "./redesign/search.css?raw";
import footer from "./redesign/footer.css?raw";
import brand from "./redesign/brand.css?raw";

export const capturedCSS = captured;
export const redesignCSS = [base, header, search, footer, brand].join("\n");

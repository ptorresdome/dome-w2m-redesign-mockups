<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Pages keep the imported site's CSS (src/styles/site.css) and layer the redesign on top via `src/styles/page-styles.ts`, which concatenates `src/styles/redesign/*.css` (base, header, search, footer, brand) and is injected as <style> after the captured CSS — why: imported global styles would otherwise override the redesign. Brand tokens live in src/styles.css as `--brand-*`. Keep the original form field ids.
- Shared page pieces live in `src/components/layout` (SiteHeader, SiteFooter, CookieNotice), `src/components/search` (SearchForm) and `src/components/brand` (BrandButton, BrandCard, SectionTitle, InfoRow); each page renders them itself, not __root — why: they sit inside page-specific imported wrappers. Reuse these before writing new markup; a formal design system comes once there are 2-3 pages.
- Location selection lives in a shared LocationAutocomplete component; its mobile popup uses Radix Dialog for focus containment and background blocking, while desktop retains the anchored list — why: both search fields must share accessible selection behavior.
- The search form passes its values to /resultados as URL search params (validated in src/lib/transfer-search.ts) — why: results stay shareable and reloadable without a backend.
- SearchForm has hero and sidebar presentations using the same fields and selectors; results initialize it from URL search params and key it by those params — why: edits, reloads and browser navigation retain the submitted search without duplicating behavior.

- Results and confirmation share the illustrative vehicle catalog in src/lib/transfer-booking.ts; selection travels to /confirmacion through validated URL parameters, while personal form data stays in React state — why: preserve the chosen service without storing personal data or simulating a live booking.

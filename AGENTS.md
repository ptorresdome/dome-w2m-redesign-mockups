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

- The Transfers page (src/routes/index.tsx) keeps the imported site's CSS but its header, search form, carousel and footer are redesigned with `rd-*` classes styled in src/styles/redesign.css (loaded after the captured CSS) using brand tokens from src/styles.css — why: the imported global styles would otherwise override the new mobile-first design. Keep the original form field ids.
- Location selection lives in a shared LocationAutocomplete component; its mobile popup uses Radix Dialog for focus containment and background blocking, while desktop retains the anchored list — why: both search fields must share accessible selection behavior.

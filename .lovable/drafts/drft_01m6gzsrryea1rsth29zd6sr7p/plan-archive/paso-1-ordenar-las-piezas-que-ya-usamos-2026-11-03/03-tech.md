## Detalles técnicos
- Crear `src/components/layout/SiteHeader.tsx`, `SiteFooter.tsx` y `CookieNotice.tsx`, y mover `SearchForm.tsx` desde index.tsx, conservando los ids originales y las clases `rd-*`.
- Crear las piezas básicas en `src/components/brand/`: `BrandButton` (variantes primary y secondary), `BrandCard`, `SectionTitle` y `InfoRow`.
- Dividir redesign.css por pieza (header, search, footer, base). Los tokens siguen en src/styles.css, con nombres de rol (`--brand-*`).
- Decidir si la cabecera y el pie van en `__root.tsx` o en un layout compartido, y guardar esa decisión en AGENTS.md.
- Comprobación: capturas antes y después a 390, 834 y 1280 px, que deben ser idénticas, y ejecutar las pruebas existentes.

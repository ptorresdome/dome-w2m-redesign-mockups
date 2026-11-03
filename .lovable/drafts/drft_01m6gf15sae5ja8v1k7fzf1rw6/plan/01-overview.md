# Buscador en escala de grises

Para suavizar el contraste blanco-negro, el buscador pasa a una escala de grises oscuros, basada en el gris corporativo #505759. Los campos dejan de ser blancos.

- **Fondo de la franja/tarjeta:** gris carbón muy oscuro (no negro puro).
- **Campos:** gris oscuro intermedio, un punto más claro que el fondo, con un borde gris sutil.
- **Texto que escribe el usuario:** blanco roto. **Etiquetas** (ORIGEN, LLEGADA…) y **placeholders:** gris claro.
- **Iconos de los campos:** se quedan en verde lima.
- **Al pulsar un campo:** el borde se ilumina en lima, igual que ahora.
- **Botón de intercambiar e interruptor de regreso:** en el mismo gris de los campos.
- **Calendario de la fecha:** el icono nativo se aclara para que se vea sobre el gris.
- **Desplegable de Personas:** se queda blanco, porque flota encima y así se lee mejor.
- **Botón Buscar:** sigue en lima.

## Detalles técnicos
- En src/styles.css, añadir los tokens `--brand-search-bg` (oklch ~0.22), `--brand-search-field` (~0.30), `--brand-search-line` (~0.40), `--brand-search-text` (~0.96) y `--brand-search-muted` (~0.78), con el tono del gris corporativo.
- En redesign.css, sobrescribir dentro de `.rd-search` los estilos de `.rd-field`, `.rd-field__label`, `.rd-field__input`/`__value`, el placeholder, `.rd-swap` y `.rd-switch`. Añadir `color-scheme: dark` a los inputs de fecha y el filtro `invert` al icono del calendario.
- `.rd-pax__panel` se queda tal cual. Comprobarlo con Playwright a 394px y 1280px.

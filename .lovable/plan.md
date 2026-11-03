# "Solo privado" encima del botón Buscar

- Mover la casilla "Solo privado" para que aparezca justo encima del botón Buscar, en móvil y ordenador.
- En ordenador, el botón Buscar ocupará su propia fila bajo la casilla (o la casilla quedará en la misma columna, encima del botón).
- No se añade ni quita ningún campo; la casilla funciona igual.

## Detalles técnicos
- En src/routes/index.tsx, mover el `label.rd-check` (servicetype) dentro de `.rd-search__grid`, antes de `#searchBtn`, envolviendo ambos en un contenedor `rd-submit-col` (columna flex).
- En redesign.css: ajustar margen de `.rd-check` y estilo de `.rd-submit-col` para que en escritorio la casilla quede encima del botón dentro de la última columna.

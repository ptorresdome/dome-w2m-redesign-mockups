## Botón Buscar más estrecho

Ahora mismo, en ordenador y tablet, el botón Buscar ocupa todo el ancho del buscador. La idea es estrecharlo sin cambiar el orden: los campos arriba, «Solo privado» y Buscar abajo.

**Qué verás**
- **Ordenador:** Buscar ocupa solo la última columna, a la derecha y alineado con la columna de pasajeros. «Solo privado» queda justo encima, en esa misma columna. Al tener el mismo ancho que los campos de encima, el conjunto se ve ordenado.
- **Tablet:** el botón tiene un ancho fijo cómodo (unos 240 px) y queda alineado a la derecha, con «Solo privado» encima.
- **Móvil:** el botón sigue ocupando todo el ancho, porque así es más fácil pulsarlo con el dedo.
- Mantiene la misma altura, el mismo color y el mismo texto. No se toca ningún campo ni cómo funciona la búsqueda.

**Detalles técnicos**
- En `src/styles/redesign.css`, a partir de 1024px: `.rd-search__submit { grid-column: 4; }` y `.rd-check` en la columna 4, en una fila propia encima del botón.
- Entre 768 y 1023px: `.rd-submit-col { align-items: flex-end }` y `.rd-search__submit { width: auto; min-width: 240px }`.
- Comprobar con capturas en móvil, tablet y ordenador.

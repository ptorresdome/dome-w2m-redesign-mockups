## Detalles técnicos
- El cambio se hace solo en `@media (min-width:1024px)` de redesign.css. Se mantiene la pila en grid de `.rd-search-section`. `.rd-hero` va a sangre completa con un overlay más fuerte, y `.rd-search` lleva `max-width:760px; margin:auto`.
- `.rd-search__grid` pasa a 6 columnas: `.rd-route` ocupa toda la fila con 2 columnas y el botón de intercambio centrado; `.rd-dates` ocupa 4 columnas y Personas 2; `.rd-submit-col` ocupa toda la fila.
- No hay cambios en el marcado ni en los id de los campos.
- La comprobación se hará con capturas a 1280 y a 1440 px de ancho, y también abriendo el desplegable de Personas.

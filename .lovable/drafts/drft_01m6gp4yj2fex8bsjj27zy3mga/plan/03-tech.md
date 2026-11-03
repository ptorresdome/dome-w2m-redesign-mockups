## Detalles técnicos
- Todo se hace en redesign.css, sin cambios en el marcado ni en los id. A partir de 768 px, `.rd-search-section` usa una pila en grid con `.rd-hero` a sangre completa y un overlay más fuerte, y `.rd-search` queda centrado con `margin:auto`.
- Tablet: `max-width:760px`; la cuadrícula hace que la ruta ocupe toda la fila, las fechas y Personas compartan la fila 2 y `.rd-submit-col` ocupe toda la fila 3.
- Escritorio: `max-width:1180px`; la fila 1 es `.rd-route` con 2 columnas y el botón de intercambio centrado; la fila 2 es `minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(220px,1.3fr)`, con `.rd-submit-col` (casilla encima del botón) en la última columna.
- La comprobación se hará con capturas a 900, 1280 y 1440 px de ancho, abriendo el desplegable de Personas y con un origen largo.

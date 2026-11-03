## Detalles técnicos
- El cambio se hace solo en el bloque `@media (min-width:1024px)` de redesign.css. `.rd-search-section` pasa a ser un grid `minmax(380px,440px) 1fr` con un ancho máximo de 1200 px. Se quita la superposición de la tarjeta sobre la foto y la cuadrícula de una sola línea (`.rd-search__grid` pasa a una columna, con `.rd-route` apilado y `.rd-dates` en dos columnas).
- Se reutiliza el posicionamiento del botón de intercambio del móvil. `.rd-hero` vuelve a tener las esquinas redondeadas y `height:100%`.
- No hay cambios en el marcado ni en los id de los campos.
- La comprobación se hará con capturas a 1280 y a 1440 px de ancho, y también abriendo el desplegable de Personas.

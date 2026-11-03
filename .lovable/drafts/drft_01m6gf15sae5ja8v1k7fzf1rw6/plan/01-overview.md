# Buscador con fondo negro

Inspirado en la web original, la tarjeta del buscador pasa de blanca a negra para darle carácter propio. Ni los campos ni su funcionamiento cambian.

- **Tarjeta del buscador:** fondo negro, con el título "Buscar Traslados" y las etiquetas en blanco.
- **Campos:** siguen blancos, con el texto en gris corporativo, para que se lean bien y contrasten con el fondo.
- **Botón "Buscar Traslados":** se queda en verde lima, que resalta aún más sobre el negro.
- **Interruptor de regreso y botón de intercambiar:** se ajustan para que se vean bien sobre el negro.
- **Móvil:** la franja del buscador de arriba es negra de lado a lado, con la foto debajo.
- **Ordenador:** la tarjeta negra va encima de la foto, con una sombra suave.

## Detalles técnicos
- Añadir un token `--brand-search-bg` (casi negro) en src/styles.css y usarlo en `.rd-search` / `.rd-search-section` dentro de src/styles/redesign.css.
- Pasar a blanco el color de `.rd-search__title`, las etiquetas y el texto del interruptor; los fondos de los inputs se quedan en `--brand-surface`.
- Comprobarlo con Playwright a 394px y 1280px.

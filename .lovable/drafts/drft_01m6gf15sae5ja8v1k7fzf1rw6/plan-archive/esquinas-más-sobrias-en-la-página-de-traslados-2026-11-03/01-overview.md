## Esquinas más sobrias en la página de Traslados

Reducir todas las esquinas redondeadas aproximadamente a la mitad, manteniendo la proporción entre elementos. Colores, fotos, campos y distribución no cambian.

| Elemento | Ahora | Después |
|---|---|---|
| Campos del buscador, desplegables | 16 px | 6 px |
| Tarjeta del buscador y foto del autobús | 20 px | 8 px |
| Botón "Buscar Traslados" y botones de idioma/cuenta | cápsula totalmente redonda | 6 px |
| Botón de intercambiar origen/destino, flechas de la foto | círculo | se mantienen circulares (iconos) |
| Interruptor de regreso y puntos del carrusel | redondos | se mantienen (es su forma natural) |

### Detalles técnicos
- `--brand-radius` pasa de 1rem a 0.375rem en src/styles.css; la tarjeta y la foto (`+4px`) quedan en ~8 px.
- En src/styles/redesign.css, el botón principal y los botones de cabecera cambian `999px` por `var(--brand-radius)`.
- `--radius` de shadcn baja de 0.625rem a 0.375rem por coherencia.

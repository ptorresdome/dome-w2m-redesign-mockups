## Detalles técnicos
- `src/routes/resultados.tsx`: añadir a cada vehículo de ejemplo `price`, `luggage`, `duration`; nuevo marcado de tarjeta (badge, fila de iconos SVG inline, columna de precio, nota).
- `src/styles/redesign/results.css`: nueva rejilla foto / info / precio con el mismo criterio de container query actual (pasa a apilado cuando el botón no cabría); hover con sombra.
- Reutilizar BrandButton y BrandCard; nuevos tokens solo en `src/styles.css` si hacen falta.
- Verificar con Playwright a 390, 834, 1005 y 1280.

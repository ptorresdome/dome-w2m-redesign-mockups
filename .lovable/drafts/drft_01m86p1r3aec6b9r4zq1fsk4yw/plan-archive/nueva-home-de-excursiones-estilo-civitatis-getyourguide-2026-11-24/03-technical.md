## Detalle técnico
- Nuevo `ExcursionQuickSearch` en src/components/search, reutilizando la lógica de LocationAutocomplete: apertura solo con clic, panel en ordenador o Dialog en móvil y tablet, openPanelRegistry y scroll cuando la lista desborda.
- `src/lib/excursions.ts`: `DESTINATIONS`, y para cada actividad los campos destination, duration, rating y fromPrice.
- `src/components/excursions`: DestinationCard y ActivityCard, con SectionTitle.
- `excursion-resultados`: aceptar `dest` sin fechas, usando hoy por defecto, y `act` para destacar una actividad.
- Estilos en `src/styles/redesign/excursions.css`, aplicando la regla de pasar a la vista apilada cuando la rejilla se descuadre.
- Verificación con Playwright a 1280, 1074 y 390 px.

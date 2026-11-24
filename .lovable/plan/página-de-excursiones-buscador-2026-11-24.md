# Página de Excursiones (buscador)

Nueva página `/excursion` con el buscador de excursiones del entorno de desarrollo, con el mismo diseño que el buscador de Transfers.

## Qué se verá
- Cabecera y pie iguales que en Transfers (sin aviso de cookies, que solo va en la home).
- Foto a pantalla completa (el banner del barco del original) con el buscador centrado y semitransparente encima; en móvil el buscador va arriba.
- Título «Buscar Excursiones» y estos campos, igual que el original (sin añadir ni quitar):
  - **Destino / Nombre de excursión**: autocompletar con la misma lista desplegable que Destino en Transfers (zonas y hoteles), abre al hacer clic; popup en móvil y tablet.
  - **Desde** y **Hasta**: el mismo calendario en ventana emergente; «Hasta» no puede ser anterior a «Desde».
  - **Personas**: el mismo selector emergente (máx. 5 por tipo, mínimo 1 adulto). Por defecto **2 adultos**, como en el original.
  - Botón **Buscar**.
- El enlace «Excursiones» del menú lleva a esta página.
- Al pulsar Buscar, de momento no hay página de resultados de excursiones: se queda en la página (solo valida los campos). Los bloques de «Excursiones en barco» del original quedan fuera por ahora.

## Detalles técnicos
- Ruta `src/routes/excursion.tsx` con head() propio; reutiliza SiteHeader, SiteFooter, LocationAutocomplete, DatePicker y el popup de personas (extraído a un componente compartido si hace falta).
- Nuevo `ExcursionSearchForm` en `src/components/search` con las mismas clases rd-* del buscador; estilos extra mínimos en `src/styles/redesign/search.css`.
- Banner descargado a `public/site-assets/`.
- Verificación en vista previa en móvil, tablet (818px) y escritorio.

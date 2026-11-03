## Orden en móvil (antes y después)

```text
ANTES                         DESPUÉS
+----------------------+      +----------------------+
| iconos cuenta        |      | logo        👤  🌐   |  barra fija
| logo           [≡]   |      | [Excursiones][Traslados]
| foto autobús         |      +----------------------+
| (buscador debajo)    |      | BUSCADOR (tarjeta)   |
| Origen               |      |  Origen         ⇅    |
| Destino              |      |  Destino             |
| Llegada | Regreso    |      |  Llegada  | Regreso ○|
| Personas             |      |  Personas   - 2 +    |
| Solo privado         |      |  ☐ Solo privado      |
| [ BUSCAR ]           |      |  [     BUSCAR     ]  |
| pie                  |      +----------------------+
+----------------------+      | foto / carrusel      |
                              | pie verde            |
                              +----------------------+
```

## Detalles técnicos
- El trabajo se hace dentro de la página ya importada. Se conservan los textos, los enlaces y los nombres de los campos del formulario.
- Los colores de marca se guardan como valores reutilizables (verde lima, gris oscuro, blanco) en la hoja de estilos principal, y se aplican con utilidades de Tailwind. Los estilos importados que entren en conflicto se retiran solo en las zonas que se rediseñan.
- El buscador se reordena con CSS: en el móvil va primero y en el ordenador queda superpuesto a la foto.
- La comprobación se hará con capturas a 390 px y a 1280 px: buscador arriba en el móvil, campos que se pueden tocar, que el aviso de cookies y el menú sigan funcionando, y que no haya ningún campo de más ni de menos.

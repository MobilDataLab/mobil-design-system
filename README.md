# Mobil Arquitectos — Design System v3.1

Sistema único de marca para web, presentaciones y documentos. Los tokens se definen una sola vez en `tokens/`; cada capítulo los consume, nunca los copia.

## Estructura

| Carpeta | Contenido |
|---|---|
| `tokens/` | Fuente única: color, tipografía, espaciado, fuentes. `tokens.json` para herramientas, `*.css` para web. |
| `assets/` | Logo hexagonal (`mobil-mark.svg`, `MobilMark.tsx`) y fuentes Swiss721 Condensed. |
| `styles.css` | Entrada CSS raíz: importa todos los tokens. |
| `foundations/` | Reglas comunes a todos los medios: color, tipo, espaciado, logo, motivos. `claude-design.md` = especificación de marca. |
| `web/` | Componentes React (forms, feedback, data), bundle compilado, UI kit Mobil Carga. |
| `presentaciones/` | Layouts de slide: portada, sección, datos, full-bleed. |
| `documentos/` | Plantillas Word/PDF (en preparación). |
| `docs/` | Historial de decisiones. |

## Reglas

1. Un cambio de marca se hace en `tokens/` y se propaga a todos los capítulos.
2. Cada capítulo define solo sus reglas propias de medio (tamaños mínimos, márgenes, formatos).
3. Una sola versión para todo el sistema. Ver `CHANGELOG.md`.

## Uso web

```html
<link rel="stylesheet" href="styles.css">
<script src="web/_ds_bundle.js"></script>
<script>
  const { Button, Card } = window.MobilArquitectosDesignSystem_8d3ff0;
</script>
```

## Fundamentos resumidos

- **Color:** linaje azul único desde `#006BFF`; acento amarillo `#FFF81D` solo para callouts; neutros fríos `#1A1A1A` → gray-50.
- **Tipo:** Swis721 Cn BT (títulos, mayúsculas) + Roboto (cuerpo). Escala modular 1.25.
- **Forma:** `border-radius: 0`. Reglas de 1px y 4px. Sin sombras ni gradientes.

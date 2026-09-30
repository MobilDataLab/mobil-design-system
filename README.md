# Mobil Arquitectos — Design System v3.1

Sistema único de marca para web, presentaciones y documentos. Los tokens se definen una sola vez en `tokens/`; cada capítulo los consume, nunca los copia.

## Estructura

| Carpeta | Contenido |
| --- | --- |
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
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card } = window.MobilArquitectosDesignSystem_8d3ff0;
</script>
```

## Reglas por medio

Cada capítulo hereda `tokens/` y `foundations/` y agrega solo sus reglas de medio.

### Web — `web/`

- Cargar `styles.css` antes del bundle; componentes vía `window.MobilArquitectosDesignSystem_8d3ff0`.
- Componentes: `forms/` (Button, IconButton, Input, Select, Checkbox, Radio, Switch), `feedback/` (Badge, Tag, Callout, Banner), `data/` (Card, KpiTile, StatBar, Tabs).
- Links y texto UI azul en `--blue-strong` (#0256CA); `#006BFF` nunca como texto pequeño sobre blanco.
- Estados: hover = siguiente paso azul; focus = contorno azul; disabled = 40% opacidad. Transiciones \~120ms, sin rebotes.
- Iconos: set propio de trazo 1.5px (`web/ui_kits/mobil-carga/Icons.jsx`); Lucide como complemento. Sin emoji.
- UI kit de referencia: `web/ui_kits/mobil-carga/`.

### Presentaciones — `presentaciones/`

- Layouts: portada, sección, datos, full-bleed. Ver `presentaciones/README.md`.
- Texto nunca menor a 24px a 1920×1080. Máximo 1–2 colores de fondo por presentación.
- Títulos Swis721 Cn en mayúsculas, alineados a la izquierda; display en Light, secciones en Regular.
- Cierre de sección con barra de 4px azul o amarilla.

### Documentos — `documentos/`

- # Capítulo en preparación (carta de honorarios, informes, EETT, memorias). Ver `documentos/README.md`.
- # Texto mínimo 12pt en impresión. Sin fuentes instaladas en Word: Archivo Narrow / Roboto.
- # Colores desde `tokens/tokens.json`; amarillo en impresión = Pantone 3945 C.

# Fundamentos resumidos

- # **Color:** linaje azul único desde `#006BFF`; acento amarillo `#FFF81D` solo para callouts; neutros fríos `#1A1A1A` → gray-50.
- # **Tipo:** Swis721 Cn BT (títulos, mayúsculas) + Roboto (cuerpo). Escala modular 1.25.
- # **Forma:** `border-radius: 0`. Reglas de 1px y 4px. Sin sombras ni gradientes.

# Especificación completa de marca: `foundations/claude-design.md`. Cards de fundamentos en `foundations/*.html`.

# Fuentes

- Repositorio fuente única: https://github.com/MobilDataLab/mobil-design-system (branch `main`). Estado de sincronización en `github.md`.
- Productos de referencia: https://github.com/MobilDataLab/Mobil-carga, https://github.com/MobilDataLab/MOBIL-ORG, https://github.com/MobilDataLab/datalab-suite.

> El bundle `_ds_bundle.js` y `_ds_manifest.json` los genera el compilador en la raíz del proyecto; en el repo viven en `web/`. Los cards web referencian la copia de la raíz.

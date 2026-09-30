# Fonts

Los archivos OTF de Swis721 BT **no se incluyen en el repositorio** por licencia Bitstream/Monotype.

## Archivos requeridos (instalar localmente)

### Condensada (primaria — titulares)
- `Swiss721BT-LightCondensed.otf`
- `Swiss721BT-Condensed2.otf`
- `Swiss721BT-BoldCondensed.otf`
- `Swiss721BT-BlackCondensed.otf`

### Swiss 721 BT completa (TTF) — `swiss721-ttf/`
Familia de escritorio completa (Roman, Bold, Light, Black, Condensed, Extended, con cursivas), tal como llega desde el template PPT. Uso: **solo presentaciones** (títulos en Condensed Bold, subtítulos en Swiss 721 recta). Web/artefactos siguen con Archivo Narrow / Roboto.
Códigos: `SWISS`=Roman, `B`=Bold, `L`=Light, `K`=Black, `I`/`O`=Italic/Oblique; `C`=Condensed, `E`=Extended.

### Recta (secundaria — solo cuerpo)
Arial es system font, no requiere instalación.

## Web (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

## Equivalencias print ↔ web
| Print (OTF) | Web (Google Fonts) |
|---|---|
| Swis721 Cn BT Light | Archivo Narrow 400 |
| Swis721 Cn BT Regular | Archivo Narrow 600 |
| Swis721 Cn BT Bold | Archivo Narrow 700 |
| Swis721 Cn BT Black | Archivo Narrow 700 (máx disponible) |
| Arial Regular | Roboto 400 |
| Arial Bold | Roboto 700 |

## Licencia web
La licencia de escritorio de Swis721 BT **no cubre `@font-face`**. Para productos web, usar exclusivamente Archivo Narrow / Roboto vía Google Fonts.

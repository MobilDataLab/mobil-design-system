# Changelog: Design System v2 → v3

Depuración realizada en junio 2026 mediante revisión punto por punto.

## Decisiones

### Bloque A — Azul
| # | Decisión | Detalle |
|---|---|---|
| A1 | Linaje único de azul | `#023373` eliminado como token independiente; todo deriva de `#006BFF` |
| A2 | Rampa reducida de 9 → 5 pasos | Eliminados: `#0161E9`, `#025BD9`, `#024EBE`, `#2588FF` |
| A3 | `#0377FF` eliminado | Redundante con `#006BFF` (Δ12 puntos) |

### Bloque B — Acentos
| # | Decisión | Detalle |
|---|---|---|
| B1 | Amarillo canónico = `#FFF81D` | `#FDE53C` eliminado. Print: Pantone 3945 C |
| B2 | Rojo eliminado | `#A93030` y `#F42C04` fuera del sistema |
| B3 | Naranja eliminado | `#FBAE40` fuera del sistema |

### Bloque C — Neutros
| # | Decisión | Detalle |
|---|---|---|
| C1 | Rampa fría única | Descartada la rampa cálida del manual PPT |
| C2 | 5 neutros | Consolidados ~14 grises en 5 pasos |
| C3 | Taupe `#C1AE9F` eliminado | Incompatible con dirección DataLab |
| C4 | `#5D554B` (Mobil Dark) retirado | Era seña del manual; reemplazado por gris frío. **Cambio consciente.** |
| C5 | ink = `#1A1A1A` | Suavizado desde negro puro para confort en pantalla |

### Bloque D — Tipografía
| # | Decisión | Detalle |
|---|---|---|
| D1 | Tilt Warp eliminada | Sin respaldo en marca; solo era `.ff-tertiary` en la web |
| D2 | Escala modular 1.25 unificada | Reemplaza escalas px y pt paralelas |
| D3 | 4 pesos oficiales | Light / Regular / Bold / Black |

## Resumen cuantitativo
- **Color:** ~30 tokens → 11 (−63%)
- **Familias:** 3 → 2
- **Escalas:** 2 paralelas → 1 modular

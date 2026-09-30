# Auditoría Template PPT — Fase 1

Fuente: `uploads/Template PPT-84718804.pptx` (versión editada). Solo lectura; no se modificó ningún token.
Alcance: aplica **solo a presentaciones**. Web/artefactos y documentos (doc/xls) no cambian.

## 1. Estructura
- Lienzo: 12 192 000 × 6 858 000 EMU = 13,33 × 7,5 in (16:9). Equivale a **1920 × 1080 px** (1 px = 6350 EMU).
- **47 slides**, **140 layouts** en el master (la gran mayoría sin uso), 37 imágenes.
- Los 47 slides usan 20 layouts distintos. Blanca 1 se usa en 20 slides; el resto, en 1 a 4.
- Slides del template:
  - 1–11: guía de estilo. Tipografía, colores (3–4), íconos (6), elementos de apoyo (7), ejemplos (8), presentación de oficina (9–11).
  - 12–16: ejemplos reales. Proyectos, contacto, oficina, experiencia y laboratorio MATERIA.
  - 17–19: índice de diapositivas tipo.
  - 20–46: las diapositivas tipo, con texto de relleno ("Gregorio Samsa").
  - 47: reglas de uso (Hacer / No hacer).
- El tema de PowerPoint está sin configurar (fuentes Calibri, accent1 `#006BFF`, resto con valores por defecto). El diseño real está aplicado slide a slide, no en el tema. Este es el principal riesgo de robustez del PPT.

## 2. Los 23 tipos de diapositiva (slide 18)
1 Portada · 2 Separador · 3 Sólo texto · 4 Imagen + título · 5 Imagen + cita · 6 Imagen + título + párrafo · 7 Imagen + título + párrafo + destacado · 8 Imagen + párrafo + destacado · 9 Imagen + título + lista · 10 Imagen + lista · 11 Título + párrafo · 12 Título + párrafo + destacado · 13 Título + párrafo + gráfico · 14 Título + lista · 15 Título + gráfico · 16 Título + tabla · 17 Múltiples imágenes · 18 Múltiples imágenes + título · 19 Múltiples imágenes + título + párrafo · 20 Múltiples imágenes + destacado · 21 Grilla equipo · 22 Contacto · 23 Cierre.

Las 12 variantes de "imagen + …" (4–10, 17–20) y "título + …" (11–16) se pueden organizar en **familias** combinando 4 bloques: imagen, título, cuerpo (párrafo / lista / tabla / gráfico) y destacado. Ese modelo de bloques es la base propuesta para el sistema.

## 3. Tipografía (frecuencia de uso en los slides)
| Familia | Usos | Rol |
|---|---|---|
| Arial | 451 | Cuerpo |
| Swis721 Cn BT | 376 | Títulos, etiquetas (Condensed **Bold**) |
| Arial Unicode MS | 166 | Fallback / símbolos |
| Swis721 BT (recta) | 66 | Subtítulos |
| Helvetica | 10 | Residual, a normalizar |

Tamaños más usados (pt, con lienzo de 13,33 in): 8 (273 veces; **muy pequeño para proyección**), 12, 28 (títulos), 9, 10, 16, 44 (portada / títulos grandes), 11, 20, 22, 26, 32.
El tema declara Calibri, así que los estilos no heredan del tema.

## 4. Color
- Azul primario `#006BFF` (54 usos). Es el color dominante.
- Escala de azules en la guía de colores (slide 4, 7 pasos): `#006BFF` `#0377FF` `#0161E9` `#025BD9` `#024EBE` `#2588FF` `#479AFF` `#3192F3`. Hay más valores que pasos, lo que indica **falta de una escala definida**.
- Grises: `#F2F2F2`, `#BFBFBF`, `#7F7F7F`. Negro `#000000`.
- Acentos del tema: rojo `#F21313`, amarillo `#FFDF04`, crema `#F4ECD0`, azul claro `#79B6FF`, `#C8D6E6`, `#EEC4C4`.

Diferencias con el DS actual: amarillo `#FFDF04` (DS: `#FFF81D`), gris claro `#F2F2F2` (DS: `#F5F5F5`), escala de azules de 7 pasos (DS: 5).

## 5. Trazos y "elementos de apoyo" (slide 7)
- Tres grosores definidos en el slide: **6, 24 y 48 px**, con equivalencias 0,1 cm / 0,4 cm / 0,8 cm.
- Contras: hay 16 líneas de 4,5 px y 10 de 6 px repartidas por los slides. Son inconsistentes con los 3 grosores definidos.
- Concepto: "Transformé en líneas", donde los elementos de apoyo se construyen como líneas gruesas.

## 6. Grilla y márgenes (medido en slide 1, px sobre 1920×1080)
- Franja vertical izquierda de 120 px (0,0,120×1080) con el texto "MOBIL ARQUITECTOS".
- Bloques de texto principal desde x ≈ 139–153. Segunda columna en x ≈ 1014–1040 y tercera en x ≈ 1400–1435.
- **Aclaración:** en el análisis previo hablé de un margen de 340 px. La medición actual da 120 px de franja y ≈140 px de inicio de texto. Hay que verificarlo por layout antes de fijar el token; puede corresponder a otro layout (por ejemplo, el de imagen + texto).

## 7. Reglas de contenido (slide 47)
**No hacer:** saturar de texto (privilegiar lo visual), usar muchos efectos, usar listados (preferir íconos con poco texto), sobrecargar con gráficos (usar metáforas visuales), poner más de una idea por diapositiva.
**Sí hacer:** dedicar tiempo a la imagen adecuada, modificar los estándares del template (grilla, tipografía, tamaños e interlineado, colores) solo con criterio, y alinear/ajustar bien los cuadros de texto.

## 8. Problemas detectados en el template
1. Tema de PowerPoint sin configurar; el diseño depende del formato manual.
2. 140 layouts, 120 sin uso ni control. Nombres poco descriptivos ("1e", "1v", "Diseño personalizado 111").
3. Texto de 8 pt (273 usos) bajo el mínimo legible para proyección.
4. Escala de azules sin definir; valores casi idénticos (`#0377FF`, `#0161E9`, `#025BD9`).
5. Trazos fuera de los 3 grosores oficiales.
6. Helvetica y Arial Unicode MS mezclados con Arial.
7. Solo 1 slide de "Sí/No hacer" y sin reglas de proporción o densidad de texto.
8. Falta cubrir estados que los slides HTML ya tienen: Gantt, datos/KPIs, índice, proyectos.

## 9. Comparación con los 16 slides HTML actuales (`presentaciones/`)
| Slide HTML | Equivalente en el template |
|---|---|
| cover / cover-photo | 1 Portada |
| section | 2 Separador |
| text-2col, columns | 3, 11, 12 |
| image-side, image-bottom, fullbleed | 4–10 |
| quote | 5 Imagen + cita |
| text-callout | 12 Título + párrafo + destacado |
| data | 13, 15 (gráfico) |
| projects | 17–20 Múltiples imágenes |
| contact | 22 Contacto |
| closing | 23 Cierre |
| **index, gantt** | **Sin equivalente** en el template |
| — | **Sin equivalente en HTML:** 14 Título + lista, 16 Título + tabla, 21 Grilla equipo |

## 10. Recomendaciones para la Fase 2–4
1. **Capa `tokens/presentation`** separada de web: fuentes (Swis721 Cn Bold títulos, Swiss 721 recta subtítulos, Arial cuerpo), colores del PPT, trazos 6/24/48 y grilla.
2. **Definir la escala de azules** de 7 pasos a partir de `#006BFF`, con nombre y uso. Fijar cuál va en el DS.
3. **Tamaño mínimo de texto** para presentaciones (propuesta: 12 pt ≈ 24 px en 1920, o el valor que definas).
4. **Estructura por bloques** (imagen, título, cuerpo, destacado) con los 23 tipos como combinaciones.
5. **Reconstruir el master del PPT** con nombres claros, tema configurado (fuentes y colores) y solo los layouts necesarios. Entregar un `.potx` limpio junto a la versión HTML.
6. Sumar `index` y `gantt` al catálogo oficial, y agregar HTML para lista, tabla y equipo.
7. Guardar las reglas del slide 47 como guía de contenido en el README de presentaciones.

## Preguntas abiertas
- ¿El margen izquierdo oficial es la franja de 120 px, 340 px o depende del layout?
- ¿Los 8 pt de las notas y etiquetas son intencionales (impresión) o hay que subirlos?
- ¿Qué valores de la escala de azules son oficiales?
- ¿Quieres entregar un `.potx` limpio además del HTML?

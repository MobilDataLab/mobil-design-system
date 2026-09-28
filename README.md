# Presentaciones

Layouts de referencia a 1920×1080. Cada archivo es una lámina; cópialos y reemplaza textos e imágenes. Las fotos van en `<image-slot>`: arrastra la imagen sobre el recuadro.

## Láminas

- `slide-cover.html` — **Portada azul.** Presentaciones institucionales o internas sin foto de proyecto.
- `slide-cover-photo.html` — **Portada con foto.** Concursos, propuestas y entregas donde hay una imagen fuerte del proyecto.
- `slide-index.html` — **Índice.** Después de la portada, en presentaciones de tres capítulos o más.
- `slide-section.html` — **Separador de sección.** Abre cada capítulo; repite el número del índice.
- `slide-quote.html` — **Cita / claim.** Una sola frase que resume la postura; máximo una por presentación.
- `slide-text-2col.html` — **Texto en 2 columnas.** Memorias y explicaciones que necesitan más de un párrafo.
- `slide-text-callout.html` — **Texto + destacado.** Cuando un argumento tiene una conclusión que el mandante debe recordar.
- `slide-columns.html` — **3–4 columnas.** Temas paralelos del mismo peso: talleres, criterios, alternativas.
- `slide-image-side.html` — **Imagen lateral.** Un recinto o detalle que se explica con una foto o render vertical.
- `slide-image-bottom.html` — **Imagen inferior.** Panorámicas, elevaciones y cortes largos.
- `slide-fullbleed.html` — **Foto a sangre · caso.** Presentar un proyecto construido con una sola imagen.
- `slide-data.html` — **Datos / KPI.** Tres o cuatro cifras con un hallazgo en amarillo.
- `slide-projects.html` — **Grilla de proyectos.** Experiencia previa en licitaciones: 2–3 proyectos con ficha técnica.
- `slide-gantt.html` — **Carta Gantt.** Plan de trabajo por etapas; meses en columnas, hitos en amarillo.
- `slide-contact.html` — **Contacto.** Penúltima lámina de propuestas y licitaciones.
- `slide-closing.html` — **Cierre.** Última lámina de toda presentación.

Estilos compartidos: `slide.css` (usa solo tokens de `styles.css`). Placeholders de imagen: `image-slot.js`.

## Reglas del medio

- Texto nunca menor a 24px a 1920×1080.
- Máximo 1–2 colores de fondo por presentación (blanco, azul `#006BFF`, ink).
- Títulos en Swis721 Cn, mayúsculas, alineados a la izquierda (la cita es la única lámina centrada).
- Títulos grandes en Light o Regular; Bold solo en etiquetas pequeñas.
- Texto sobre foto: velo ink 60% sólido, nunca degradado.
- Logo siempre desde `assets/logo/mobil-mark.svg`; no redibujar.
- Cierre de sección con barra de 4px azul o amarilla.
- Sin sombras, degradados ni esquinas redondeadas.

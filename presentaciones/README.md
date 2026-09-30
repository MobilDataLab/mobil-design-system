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
- `slide-list.html` — **Título + lista.** 3–5 ítems numerados; solo si un ícono con poco texto no basta.
- `slide-table.html` — **Título + tabla.** Comparativas con una fila destacada en amarillo.
- `slide-team.html` — **Grilla equipo.** 4–8 personas con foto, nombre y cargo.
- `slide-contact.html` — **Contacto.** Penúltima lámina de propuestas y licitaciones.
- `slide-closing.html` — **Cierre.** Última lámina de toda presentación.

Estilos compartidos: `slide.css` + `../tokens/presentation.css` (solo presentaciones). Placeholders de imagen: `image-slot.js`.

## Reglas del medio (basadas en el Template PPT)

- Lienzo 1920×1080. Franja izquierda de 120px con "MOBIL ARQUITECTOS" vertical; texto desde 144px.
- Títulos: Swis721 Cn **Bold**, mayúsculas, izquierda (la cita es la única centrada). Subtítulos: Swiss 721. Cuerpo: Arial.
- Escala: portada 88px, título 56px, párrafo 24px, notas 20px. Mínimo absoluto 16px (8pt).
- Trazos solo de 6, 24 o 48px. Barra de cierre de 6px.
- Azules: los 5 pasos del design system. Amarillo `#FFDF04` y gris `#F2F2F2` solo en presentaciones.
- Máximo 1–2 colores de fondo por presentación (blanco, azul, ink).
- Una idea por lámina; poco texto; preferir íconos a listas; pocos efectos; no sobrecargar con gráficos.
- Texto sobre foto: velo ink 60% sólido, nunca degradado.
- Logo desde `assets/logo/mobil-mark.svg`; no redibujar.
- Sin sombras, degradados ni esquinas redondeadas.

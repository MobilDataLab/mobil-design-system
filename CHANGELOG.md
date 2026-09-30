# Changelog

## v3.2.0 — 2026-09-30 — Presentaciones (capa PPT)
- Nuevo `tokens/presentation.css`: tipografía (Swis721 Cn Bold títulos, Swiss 721 subtítulos, Arial cuerpo), escala en px (mín. 16px = 8pt), 3 trazos (6/24/48), grilla (franja 120px, margen 144px). Solo presentaciones; no se importa desde `styles.css`.
- Azules: se mantienen los 5 pasos del DS. Amarillo `#FFDF04` y gris `#F2F2F2` del PPT solo en presentaciones.
- Fuentes: Swiss 721 BT (TTF) en `assets/fonts/swiss721-ttf/` y `@font-face` "Swiss 721 BT".
- Nuevo `docs/auditoria-template-ppt.md`.
- Modelo PPT oficial en `assets/template-ppt/Template PPT.pptx` (47 slides, 19 tipos de lámina).
- Slides: 16 reconstruidos sobre el template + `slide-list`, `slide-table`, `slide-team`.
- Índice del design system agrupado por formato: Transversal / Presentaciones / Web y artefactos / Documentos / Tablas.

## v3.1 — septiembre 2026
- Repositorio unificado por capítulos: `foundations/`, `web/`, `presentaciones/`, `documentos/`.
- Tokens CSS separados en `colors.css`, `typography.css`, `spacing.css`, `fonts.css`; `css-variables.css` y `tokens.json` se mantienen por compatibilidad.
- Incorporados componentes web (forms, feedback, data), bundle y UI kit Mobil Carga desde `mobil-design-web`.
- Fuentes Swiss721 Condensed incluidas en `assets/fonts/`.
- Weight calibration: display/H1 en Light (300), H2–H4 en Regular (400), Bold (700) solo en labels pequeños.

## v3.0 — junio 2026
Depuración v2 → v3. Detalle en `docs/changelog-v2-v3.md`.

---
name: mobil-arquitectos-design
description: Use this skill to generate well-branded interfaces and assets for Mobil Arquitectos (Chilean architecture & urban-design firm; DataLab internal tools), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation
- **Brand in one line:** rectilinear, high-contrast, grid-driven, flat. Spanish (Chilean) copy. Professional, technical, no emoji, no decoration.
- **Color:** single blue lineage (`#006BFF` canonical; `#0256CA` for text/links on white). Yellow `#FFF81D` for callouts only (ink text). Cold gray neutrals. No red/orange/green as brand — only semantic states.
- **Type:** Swis721 Cn BT (condensed, UPPERCASE titles) for all headings/labels; Roboto for body only. Modular scale 1.25.
- **Shape:** `border-radius: 0` everywhere. 1px and 4px rules. No shadows, no gradients.
- **Tokens:** link `styles.css`; use the CSS custom properties (`--blue`, `--ink`, `--font-heading`, `--space-4`, …).
- **Components:** load `_ds_bundle.js`, then `const { Button, Card, KpiTile, … } = window.MobilArquitectosDesignSystem_8d3ff0`.
- **Assets:** hexagon mark at `assets/logo/mobil-mark.svg` (recolor via `stroke`); condensed OTFs in `assets/fonts/`.
- **Motifs:** 4px blue foot bar · vertical margin text · full-bleed photo + white title · solid-blue + hexagon outline · key-word-in-blue · yellow callout · visible 12-col grid.

See README.md for the full content, visual, and iconography rules, plus the `ui_kits/mobil-carga` reference product and `slides/` templates.

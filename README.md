# Mobil Arquitectos — Design System v3

A brand & product design system for **Mobil Arquitectos**, a Chilean architecture and urban-design firm (~35 architects) specializing in hospitals, metro infrastructure, mixed-use and social housing. Internal digital tools are built by **DataLab** (Laboratorio de Data). This system applies to web apps (React/Tailwind), internal dashboards, data-visualization tools, and presentation materials.

The design language is **rectilinear, high-contrast and grid-driven — like the buildings the firm designs.** Professional, technical, direct. No decorative flourishes.

---

## Sources

This system was assembled from the firm's own repositories. Reviewers with access can explore them for deeper fidelity:

- **Brand spec & tokens** — `MobilDataLab/mobil-design-system` → https://github.com/MobilDataLab/mobil-design-system
  (`docs/claude-design.md`, `tokens/css-variables.css`, `tokens/tokens.json`, `assets/logo/MobilMark.tsx`, `docs/changelog-v2-v3.md`)
- **Reference product — workload dashboard** — `MobilDataLab/Mobil-carga` → https://github.com/MobilDataLab/Mobil-carga
- **Reference product — org chart** — `MobilDataLab/MOBIL-ORG` → https://github.com/MobilDataLab/MOBIL-ORG
- **Tooling portal** — `MobilDataLab/datalab-suite` → https://github.com/MobilDataLab/datalab-suite

Fonts (`Swiss721BT-*Condensed.otf`) and `mobil-mark.svg` were supplied directly and live in `assets/`.

> **A note on the live products.** Mobil Carga (and siblings) currently ship an *interim "cockpit" direction* (navy `#1B2A4E`, Geist font, rounded corners, subtle shadows) that predates v3. This design system is the **canonical v3 brand** — blue lineage, condensed uppercase headings, zero radius, flat surfaces. The included UI kit deliberately re-expresses a real product's information architecture in v3, to show the target direction.

---

## Content fundamentals — how Mobil writes

- **Language:** Primary copy is **Spanish (Chilean)**. Technical/architectural register.
- **Voice:** Professional, technical, direct. Architectural precision; states facts, not adjectives. No hype, no exclamation marks, no emoji.
- **Person:** Institutional first-person plural for brand ("**Somos Mobil**"), neutral/impersonal for product UI ("Subir Excel", "Sin cambios sin guardar").
- **Casing:** Titles and labels are **UPPERCASE** (condensed). Body and helper text are sentence case. Buttons are uppercase, short and imperative — *Guardar, Exportar, Subir Excel, Entrar.*
- **Numbers:** Tabular, precise, often with explicit units (UF, %, horas). Saturation is a ratio shown to 2 decimals (`0.82`, `1.12`); months are 3-letter uppercase (ENE…DIC).
- **Domain vocabulary:** *saturación, ocupación, carga, taller (TV/TC/TI/TS/TU), seniority (Socio, Asociado, JP, Arquitecto, Practicante), horas facturables, año fiscal.*
- **Tone example (callout):** "Saturación crítica en TV / TC" — a single noun phrase, no decoration.

Avoid: marketing adjectives, emoji, separator dots used decoratively, rounded "friendly" phrasing.

---

## Visual foundations

**Color.** A single **blue lineage** is the entire brand: `--blue #006BFF` is canonical, with `--blue-tint` `--blue-light` `--blue-strong` `--blue-deep` derived from it. One accent, **`--yellow #FFF81D`**, is reserved for callouts/key ideas only (text on yellow is *always* ink, never white). Neutrals are a **cold gray** 5-step ramp (`--ink #1A1A1A` → `--gray-50`) — no warm grays, no beige, no taupe. Red/orange/green are **not** brand colors; they appear only as functional semantic states (error/success/warning). Never set `#006BFF` as small text on white (fails AA) — use `--blue-strong #0256CA` for links and UI text.

**Type.** Two families only. **Swis721 Cn BT** (condensed) for *all* headings, titles and labels — always uppercase for titles; web fallback `Archivo Narrow`. **Roboto** for body text only — never condensed for paragraphs, never the body face for headings. Modular scale, ratio **1.25** (display 76 → caption 10). Line-height: headings 1.15, body 1.5. Body always left-aligned. **Weight calibration (optical compensation): the larger the type, the lighter the weight** — display/H1 set **Light (300)**, section titles (H2/H3/H4) **Regular (400)**; **Bold (700)** is reserved for small UI labels (buttons, badges, tabs, captions). Avoid Black/Bold at large display sizes — it reads too heavy.

**Shape.** `border-radius: 0` **everywhere** — sharp, architectural corners, no exceptions (the radio dot is the only circle, for affordance). Two rule weights: **1px** hairline and **4px** bar.

**Surfaces, depth & effects.** Flat. **No shadows, no gradients, no glassmorphism, no blur.** Elevation, when unavoidable (a transient drawer), is signaled with a single hairline border or a 4px accent edge — never a drop shadow. Cards are white with a 1px `--gray-200` border and optional 4px blue top bar.

**Backgrounds.** Solid color fields (white, `--gray-50`, solid `--blue`, `--blue-deep`, `--ink`) or full-bleed photography with a left-anchored ink scrim and white uppercase title. No textures, no patterns, no decorative illustration.

**Layout.** 12-column grid treated as a *visible structural element* (24px gutter, 48px margin). Left margins often carry vertical letterspaced "MOBIL ARQUITECTOS" text. Sections close with a 4px blue (or yellow) bar at the foot.

**Motion & states.** Restrained. Transitions are short fades/color shifts (~120ms) — no bounces, no spring, no parallax. **Hover:** darken to the next blue step (`--blue` → `--blue-strong`), or fill an outline; ghost elements tint to `--blue-tint`/`--gray-50`. **Focus:** 2px `--blue` inset outline. **Press/active:** color deepening, not scale. Disabled: 40% opacity. Respect `prefers-reduced-motion`.

**Imagery vibe.** Architectural photography — cool, neutral, real. Title overlays are white uppercase condensed, left-aligned, over an ink scrim. No warm filters, no heavy grain.

### Brand motifs (reusable layout patterns)
1. Horizontal **4px blue bar** at the foot of a section/footer.
2. Vertical letterspaced **"MOBIL ARQUITECTOS"** in the left/right margin.
3. **Full-bleed photo** with white uppercase title overlaid, left-aligned.
4. Solid **`#006BFF`** field with the **hexagon mark** in white outline.
5. A **key word set in blue** inside an otherwise ink title ("Somos **Mobil**").
6. **Yellow callout** blocks for a single key insight.
7. The **12-column grid** exposed as visible structure.

---

## Iconography

- **Style:** A small, custom **stroke icon set** — 1.5px stroke, `round` caps/joins, 24×24 viewBox, `currentColor`. Geometric and spare, matching the rectilinear language. This mirrors the real product's hand-built `Icons.tsx` (grid, chart, layers, users, folder, upload, download, gear, filter, sitemap, logout, alert, x, …). The kit's reusable copy lives in `ui_kits/mobil-carga/Icons.jsx`.
- **No icon font, no emoji, no unicode glyphs** as icons. When more coverage is needed, use **Lucide** (https://lucide.dev) — same 24px / round-cap / stroke vocabulary — and keep `stroke-width` at 1.5–2. *(Lucide is the documented stand-in; the firm has no published icon library of its own.)*
- **Logo:** the **hexagon mark** (`assets/logo/mobil-mark.svg`) — a pointy-top regular hexagon with 6 radials, thin stroke (~2.9% of width). Four approved colorways: blue-on-white, white-on-blue, blue-on-dark, ink-mono. Recolor by setting the `stroke` only — never fill it.

---

## Index — what's in this folder

| Path | What |
|---|---|
| `styles.css` | Root entry — `@import`s every token + font file. Consumers link this. |
| `tokens/colors.css` | Blue lineage, yellow, cold neutrals, semantic states + semantic aliases. |
| `tokens/typography.css` | Families, weights, modular scale, line-heights + `.ds-*` helpers. |
| `tokens/spacing.css` | 4px spacing scale, zero-radius, rule weights, 12-col grid. |
| `tokens/fonts.css` | `@font-face` for Swis721 Cn BT + Google Fonts (Archivo Narrow, Roboto). |
| `assets/logo/` | `mobil-mark.svg` hexagon mark. |
| `assets/fonts/` | Swiss721 condensed OTF binaries. |
| `guidelines/*.html` | Foundation specimen cards (Colors, Type, Spacing, Brand). |
| `components/forms/` | `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`. |
| `components/feedback/` | `Badge`, `Tag`, `Callout`, `Banner`. |
| `components/data/` | `Card`, `KpiTile`, `StatBar`, `Tabs`. |
| `ui_kits/mobil-carga/` | Interactive recreation of the Mobil Carga workload dashboard. |
| `slides/*.html` | Sample presentation slides (cover, section, data, full-bleed). |
| `SKILL.md` | Agent-Skill manifest for downloadable use. |

**Components** are consumed via the compiled bundle: `const { Button } = window.MobilArquitectosDesignSystem_8d3ff0`. The Design System tab renders every `@dsCard`-tagged file.

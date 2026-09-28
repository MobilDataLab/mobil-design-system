# Mobil Arquitectos — Design System v3

## Brand voice
Professional, technical, direct. Architectural precision. No decorative flourishes. The design language is rectilinear, high-contrast, and grid-driven — like the buildings we design.

## Color

### Primary — Blue (single lineage)
- `--blue-tint: #E7F3FD` → soft backgrounds, grid tint
- `--blue-light: #479AFF` → hover states, charts
- `--blue: #006BFF` → brand, accents, solid backgrounds ← CANONICAL
- `--blue-strong: #0256CA` → links, text on white (passes AA contrast)
- `--blue-deep: #011D41` → dark backgrounds, max depth

Rule: never use #006BFF as small text on white — it fails AA. Use #0256CA for links and UI text.

### Accent — Yellow
- `--yellow: #FFF81D` → callouts, highlights, key ideas only

Text on yellow: always use --ink (#1A1A1A), never white.

### Neutrals (cold gray, 5 steps)
- `--ink: #1A1A1A` → primary text
- `--gray-700: #555555` → secondary text
- `--gray-400: #A3A3A3` → borders, disabled, captions
- `--gray-200: #DEDEDE` → dividers, soft lines
- `--gray-50: #F5F5F5` → alternate surface
- `--white: #FFFFFF` / `--black: #000000` → absolutes (not scale steps)

No warm grays. No beige. No taupe. Cold neutrals only.

### Colors NOT in the system
No red, no orange, no green as brand colors. If semantic states are needed (error/success), use standard browser conventions but never as brand expression.

## Typography

### Two families only
- **Headings** (all levels): `"Archivo Narrow", "Swis721 Cn BT", "Arial Narrow", sans-serif` — condensed, always uppercase for titles
- **Body text ONLY**: `Roboto, Arial, system-ui, sans-serif` — never use body font for headings, never use condensed for body paragraphs

### Weights (condensed): Light, Regular, Bold, Black
### Weights (body): 400 Regular, 700 Bold

### Modular scale (ratio 1.25)
| Token    | px  | Use                    | Weight       |
|----------|-----|------------------------|--------------|
| display  | 76  | Hero numbers, covers   | Black        |
| h1       | 61  | Main title             | Bold/Black   |
| h2       | 49  | Section title          | Bold         |
| h3       | 39  | Subtitle               | Bold         |
| h4       | 31  | Block title            | Regular/Bold |
| h5       | 25  | Large highlight        | Regular      |
| h6       | 20  | Column title           | Regular      |
| body     | 16  | Body text (Roboto)     | Regular      |
| small    | 13  | Footnotes              | Regular      |
| caption  | 10  | Credits, micro-text    | Regular      |

Line-height: headings 1.15, body 1.5.
Headings always UPPERCASE condensed. Body always left-aligned.

## Shape and layout
- **border-radius: 0** everywhere. No rounded corners. Sharp, architectural.
- **Lines**: thin rule = 1px, thick rule/bar = 4px
- **Grid**: 12 columns
- **No shadows, no gradients, no decorative effects.** Flat surfaces only.

## Brand motifs (use these patterns in layouts)
1. Horizontal blue bar (#006BFF, 4px) at footer/bottom of sections
2. Vertical "MOBIL ARQUITECTOS" letterspaced text in left margin
3. Full-bleed photography with white uppercase title overlaid, left-aligned
4. Solid #006BFF background with hexagon mark in outline (white stroke)
5. Key word in blue within an otherwise black/ink title ("Somos **Mobil**")
6. Yellow #FFF81D callout blocks for key insights
7. 12-column grid as visible structural element

## Logo (hexagon mark)
Pointy-top regular hexagon with 6 radial lines from center to each vertex. Thin stroke (~2.9% of width). Included as mobil-mark.svg. Use as:
- #006BFF on white
- white on #006BFF
- #006BFF on dark (#1A1A1A)
- #1A1A1A monochrome on light

## CSS tokens (copy-paste ready)
```css
:root {
  --blue-tint: #E7F3FD;
  --blue-light: #479AFF;
  --blue: #006BFF;
  --blue-strong: #0256CA;
  --blue-deep: #011D41;
  --yellow: #FFF81D;
  --ink: #1A1A1A;
  --gray-700: #555555;
  --gray-400: #A3A3A3;
  --gray-200: #DEDEDE;
  --gray-50: #F5F5F5;
  --white: #FFFFFF;
  --black: #000000;
  --font-heading: "Archivo Narrow", "Swis721 Cn BT", "Arial Narrow", sans-serif;
  --font-body: Roboto, Arial, system-ui, sans-serif;
  --radius: 0;
}
```

# UI Kit — Mobil Carga (workload / saturation dashboard)

Interactive recreation of **Mobil Carga**, Mobil Arquitectos' internal tool for measuring the *saturación* (workload) of each architect and each taller across the year. Built on the v3 design-system primitives.

Source product: `MobilDataLab/Mobil-carga` (private). Saturation model:
`SATURACIÓN = ocupación × carga`, where ocupación = `horas_asignación / horas_facturables`.

## Run
Open `index.html`. The flow is:
**Login** → **Dashboard** (KPIs + saturation ranking + by-taller bars) → **Saturación** (persona × mes heatmap) → click any row for the **person drill-down drawer**.

## Files
- `index.html` — entry; loads React + the compiled `_ds_bundle.js` + the screens.
- `data.js` — illustrative dataset (talleres TV/TC/TI/TS/TU, 12 personas, saturation matrix, semáforo scale).
- `Icons.jsx` — stroke icon set mirroring the app's hand-built icons.
- `Login.jsx`, `Sidebar.jsx`, `Dashboard.jsx`, `Heatmap.jsx`, `DrillDrawer.jsx`, `App.jsx` — screens & shell.

## Composition
Screens compose the system primitives (`Button`, `Card`, `KpiTile`, `StatBar`, `Tabs`, `Badge`, `Tag`, `Input`) via `window.MobilArquitectosDesignSystem_8d3ff0`. Dashboard-specific layout (rail, heatmap grid, drawer) is bespoke.

## Note on visual direction
The live Mobil Carga app currently ships an interim "cockpit" look (navy `#1B2A4E`, Geist font, rounded corners). This kit deliberately expresses the same information architecture in the **canonical v3 brand** — blue lineage, condensed uppercase headings, zero radius, flat surfaces — to demonstrate the design system applied to a real internal product. The saturation heatmap uses the v3 blue ramp with semantic red for overload (>100%).

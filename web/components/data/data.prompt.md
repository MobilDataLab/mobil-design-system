**Data display** — `Card` (flat container w/ header + optional accent bar), `KpiTile` (big-number metric), `StatBar` (saturation/progress bar, red past critical), `Tabs` (underline tab bar).

```jsx
<Card title="Ranking de saturación" sub="Año fiscal 2026" accent>
  <KpiTile label="Saturación promedio" value="0.82" delta="+0.04" accent="warning" />
  <StatBar label="P. Bravo" value={1.12} critical={1} />
</Card>
<Tabs items={[{id:"proy",label:"Proyectos"},{id:"ocup",label:"Ocupación",badge:5}]} />
```

These are the building blocks of the Mobil Carga dashboard kit. `KpiTile` value is mono tabular-nums; `StatBar`/`KpiTile` use semantic accents for critical states only.

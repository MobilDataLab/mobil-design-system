**Form controls** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, plus `Button` / `IconButton`. All zero-radius, 1px `--gray-200` borders, blue focus ring; labels are uppercase condensed captions.

```jsx
<Input label="Proyecto" placeholder="Hospital Sótero del Río" hint="Código interno" />
<Select label="Taller" options={["TV","TC","TI","TS","TU"]} />
<Checkbox label="Solo proyectos activos" defaultChecked />
<Switch label="Mostrar finalizados" />
```

`Input`/`Select` accept `label`, `hint`, `error`. Checkbox/Switch are blue when on; Radio's dot is the only round element in an otherwise rectilinear system.

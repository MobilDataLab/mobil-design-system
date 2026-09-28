**Feedback** — `Badge` (status/category chip), `Tag` (dismissible filter token), `Callout` (the yellow key-insight motif), `Banner` (full-width system notice).

```jsx
<Badge tone="brand">TV</Badge>
<Tag tone="tint" onRemove={() => clear("taller")}>Taller: TC</Tag>
<Callout label="Hallazgo">Saturación crítica en TV / TC</Callout>
<Banner tone="warning" title="Datos desactualizados">Última carga de horas: hace 9 días.</Banner>
```

Yellow is reserved for `Callout` (and `Badge tone="accent"`) — one key idea at a time. Semantic tones (success/error/warning) are functional only.

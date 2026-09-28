// Dashboard — KPI row, saturation ranking, and saturation-by-taller bars.
// Composes the design-system primitives (KpiTile, Card, StatBar, Badge, Tabs).
window.Dashboard = function Dashboard({ onDrill }) {
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const { KpiTile, Card, StatBar, Badge } = NS;
  const D = window.MC_DATA;

  // Average saturation per taller.
  const byTaller = Object.values(D.TALLERES).map((t) => {
    const ppl = D.PERSONAS.filter((p) => p.taller === t.code);
    const avg = ppl.length ? ppl.reduce((a, p) => a + D.annual(p.ini), 0) / ppl.length : 0;
    return { ...t, avg: +avg.toFixed(2), n: ppl.length };
  }).sort((a, b) => b.avg - a.avg);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 16 }}>
        <KpiTile label="Saturación prom." value={D.avgSat.toFixed(2)} delta="+0.06" accent="warning" hint="ocupación × carga" />
        <KpiTile label="Sobre 100%" value={String(D.overloaded)} unit="personas" accent="error" hint="zona crítica" />
        <KpiTile label="Personas" value={String(D.PERSONAS.length)} hint="activas este año" />
        <KpiTile label="Talleres" value={String(Object.keys(D.TALLERES).length)} accent="brand" hint="TV · TC · TI · TS · TU" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 12 }}>
        <Card title="Ranking de saturación" sub="Año fiscal 2026 · clic para ver detalle" accent>
          <div>
            {D.ranked.map((p, i) => {
              const crit = p.sat > 1.0;
              return (
                <div key={p.ini} onClick={() => onDrill(p.ini)}
                  style={{ display: "grid", gridTemplateColumns: "26px 1fr 120px 56px", alignItems: "center", gap: 12, padding: "9px 0", borderBottom: i < D.ranked.length - 1 ? "1px solid var(--gray-200)" : "none", cursor: "pointer" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--gray-400)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{i + 1}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink)" }}>
                    <b style={{ fontWeight: 700, color: "var(--blue-strong)", marginRight: 8 }}>{p.ini}</b>{p.nombre}
                  </span>
                  <StatBar value={p.sat} critical={1} showValue={false} />
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, textAlign: "right", fontVariantNumeric: "tabular-nums", color: crit ? "var(--state-error)" : "var(--ink)" }}>{p.sat.toFixed(2)}</span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Saturación por taller" sub="Promedio del equipo">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {byTaller.map((t) => (
              <div key={t.code}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <Badge tone="brand">{t.code}</Badge>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink)" }}>{t.name}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gray-400)", marginLeft: "auto" }}>{t.n} pers.</span>
                </div>
                <StatBar value={t.avg} critical={1} format={(v) => v.toFixed(2)} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

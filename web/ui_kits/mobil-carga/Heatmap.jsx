// Heatmap — saturación persona × mes, semáforo color scale. The signature
// data-viz of Mobil Carga, rendered in the v3 blue ramp (+ red overload).
window.Heatmap = function Heatmap({ onDrill }) {
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const { Card } = NS;
  const D = window.MC_DATA;

  const Cell = ({ v }) => {
    const c = D.sem(v);
    return (
      <div style={{ background: c.bg, display: "grid", placeItems: "center", height: 38, fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, fontVariantNumeric: "tabular-nums", color: c.dark ? "#fff" : "var(--ink)" }}>
        {Math.round(v * 100)}
      </div>
    );
  };

  const cols = "200px repeat(12, 1fr) 64px";

  return (
    <Card title="Saturación · persona × mes" sub="% de horas asignadas sobre facturables · año fiscal 2026" accent bodyStyle={{ padding: 0 }}>
      {/* header */}
      <div style={{ display: "grid", gridTemplateColumns: cols, background: "var(--gray-50)", borderBottom: "1px solid var(--gray-200)" }}>
        <div style={{ padding: "10px 14px", fontFamily: "var(--font-heading)", textTransform: "uppercase", fontSize: 10, letterSpacing: "0.08em", color: "var(--gray-700)" }}>Persona</div>
        {D.MESES.map((m) => <div key={m} style={{ padding: "10px 0", textAlign: "center", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 10, color: "var(--blue-deep)" }}>{m}</div>)}
        <div style={{ padding: "10px 0", textAlign: "center", fontFamily: "var(--font-heading)", textTransform: "uppercase", fontSize: 10, letterSpacing: "0.06em", color: "var(--gray-700)" }}>Año</div>
      </div>
      {/* rows */}
      {D.PERSONAS.map((p, i) => {
        const row = D.MATRIX[p.ini];
        const ann = D.annual(p.ini);
        return (
          <div key={p.ini} onClick={() => onDrill(p.ini)}
            style={{ display: "grid", gridTemplateColumns: cols, borderBottom: i < D.PERSONAS.length - 1 ? "1px solid var(--gray-200)" : "none", cursor: "pointer", gap: 0 }}>
            <div style={{ padding: "0 14px", display: "flex", alignItems: "center", gap: 9, borderRight: "1px solid var(--gray-200)" }}>
              <span style={{ width: 26, height: 26, background: "var(--gray-50)", display: "grid", placeItems: "center", font: "700 10px var(--font-body)", color: "var(--blue-strong)", flexShrink: 0 }}>{p.ini}</span>
              <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                <b style={{ fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 500, color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.nombre}</b>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 10.5, color: "var(--gray-400)" }}>{p.rol}</span>
              </span>
            </div>
            {row.map((v, mi) => <div key={mi} style={{ padding: 2 }}><Cell v={v} /></div>)}
            <div style={{ display: "grid", placeItems: "center", borderLeft: "1px solid var(--gray-200)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, fontVariantNumeric: "tabular-nums", color: ann > 1 ? "var(--state-error)" : "var(--ink)" }}>{ann.toFixed(2)}</div>
          </div>
        );
      })}
      {/* legend */}
      <div style={{ display: "flex", gap: 6, padding: "12px 14px", borderTop: "1px solid var(--gray-200)", background: "var(--gray-50)", alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--gray-700)", marginRight: 4 }}>Saturación</span>
        {D.SEM_LEGEND.map((l) => (
          <span key={l.label} style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "2px 7px", background: l.bg, color: l.dark ? "#fff" : "var(--ink)", fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 500 }}>{l.label}</span>
        ))}
      </div>
    </Card>
  );
};

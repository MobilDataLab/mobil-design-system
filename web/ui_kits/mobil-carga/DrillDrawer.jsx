// DrillDrawer — right-side panel with one person's monthly saturation detail.
window.DrillDrawer = function DrillDrawer({ ini, onClose }) {
  if (!ini) return null;
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const { Badge, KpiTile, StatBar } = NS;
  const D = window.MC_DATA;
  const p = D.PERSONAS.find((x) => x.ini === ini);
  const row = D.MATRIX[ini];
  const ann = D.annual(ini);
  const peak = Math.max(...row);
  const peakMonth = D.MESES[row.indexOf(peak)];

  return (
    <>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(1,29,65,0.32)", zIndex: 40 }} />
      <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 420, maxWidth: "90%", background: "var(--white)", borderLeft: "4px solid var(--blue)", zIndex: 41, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid var(--gray-200)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 38, height: 38, background: "var(--blue-deep)", display: "grid", placeItems: "center", font: "700 13px var(--font-body)", color: "#fff" }}>{p.ini}</span>
            <div>
              <div style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontWeight: 700, fontSize: 18, letterSpacing: "0.02em", color: "var(--ink)" }}>{p.nombre}</div>
              <div style={{ display: "flex", gap: 6, marginTop: 4 }}><Badge tone="brand">{p.taller}</Badge><Badge tone="neutral">{p.rol}</Badge></div>
            </div>
          </div>
          <button onClick={onClose} aria-label="Cerrar" style={{ width: 32, height: 32, display: "grid", placeItems: "center", border: "none", background: "transparent", color: "var(--gray-700)", cursor: "pointer" }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
          </button>
        </div>
        <div style={{ flex: 1, overflow: "auto", padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <KpiTile label="Saturación anual" value={ann.toFixed(2)} accent={ann > 1 ? "error" : "warning"} />
            <KpiTile label="Peak" value={peak.toFixed(2)} hint={"en " + peakMonth} accent={peak > 1 ? "error" : "none"} />
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.08em", color: "var(--gray-700)", fontWeight: 700, marginBottom: 12 }}>Detalle mensual</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {row.map((v, mi) => (
                <StatBar key={mi} label={D.MESES[mi]} value={v} critical={1} format={(x) => x.toFixed(2)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

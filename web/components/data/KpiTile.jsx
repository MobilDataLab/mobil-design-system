import React from "react";

/**
 * KpiTile — a single metric tile. Big mono value, uppercase label, optional
 * delta and hint. Optional top accent bar for state emphasis.
 */
export function KpiTile({ label, value, unit, delta, hint, accent = "none", style, ...rest }) {
  const accents = {
    none: "1px solid var(--gray-200)",
    brand: "4px solid var(--blue)",
    error: "4px solid var(--state-error)",
    success: "4px solid var(--state-success)",
    warning: "4px solid var(--state-warning)",
  };
  const deltaColor = delta && delta.trim().startsWith("-") ? "var(--state-error)" : "var(--state-success)";

  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--gray-200)",
        borderTop: accents[accent],
        borderRadius: 0,
        padding: "16px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", color: "var(--gray-700)" }}>
        {label}
      </span>
      <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: 38, lineHeight: 1, color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>
          {value}
        </span>
        {unit && <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--gray-400)" }}>{unit}</span>}
        {delta && <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: deltaColor }}>{delta}</span>}
      </span>
      {hint && <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gray-400)" }}>{hint}</span>}
    </div>
  );
}

import React from "react";

/**
 * StatBar — a labelled horizontal progress/saturation bar. The fill turns red
 * past `critical` (default 1.0 of max). Square ends, flat track.
 */
export function StatBar({ label, value, max = 1, critical = 1, showValue = true, format, style, ...rest }) {
  const ratio = Math.max(0, Math.min(value / max, 1.4));
  const pct = Math.min(ratio, 1) * 100;
  const isCritical = value / max >= critical;
  const display = format ? format(value) : Math.round((value / max) * 100) + "%";

  return (
    <div style={{ fontFamily: "var(--font-body)", ...style }} {...rest}>
      {(label || showValue) && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 }}>
          {label && <span style={{ fontSize: 12, color: "var(--ink)" }}>{label}</span>}
          {showValue && (
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, fontVariantNumeric: "tabular-nums", color: isCritical ? "var(--state-error)" : "var(--ink)" }}>
              {display}
            </span>
          )}
        </div>
      )}
      <div style={{ position: "relative", height: 8, background: "var(--gray-200)", borderRadius: 0, overflow: "hidden" }}>
        <span style={{ position: "absolute", inset: 0, width: pct + "%", background: isCritical ? "var(--state-error)" : "var(--blue)", display: "block" }} />
      </div>
    </div>
  );
}

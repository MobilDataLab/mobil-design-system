import React from "react";

/**
 * Banner — full-width inline notice. tone drives a left accent bar + tint.
 * Used for system messages (info / success / warning / error).
 */
export function Banner({ children, tone = "info", title, onClose, style, ...rest }) {
  const tones = {
    info: { accent: "var(--blue)", tint: "var(--blue-tint)", text: "var(--blue-deep)" },
    success: { accent: "var(--state-success)", tint: "rgba(31,138,91,0.08)", text: "#10532f" },
    warning: { accent: "var(--state-warning)", tint: "rgba(194,141,31,0.10)", text: "#6b4e0f" },
    error: { accent: "var(--state-error)", tint: "rgba(200,65,44,0.07)", text: "#6b2616" },
  };
  const t = tones[tone];
  return (
    <div
      role="status"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        background: t.tint,
        borderLeft: "4px solid " + t.accent,
        padding: "12px 14px",
        fontFamily: "var(--font-body)",
        borderRadius: 0,
        ...style,
      }}
      {...rest}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <div style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontWeight: 700, fontSize: 13, letterSpacing: "0.04em", color: t.text }}>
            {title}
          </div>
        )}
        <div style={{ fontSize: 13, color: "var(--ink)", marginTop: title ? 3 : 0, lineHeight: 1.5 }}>{children}</div>
      </div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Cerrar" style={{ border: "none", background: "transparent", color: "var(--gray-700)", cursor: "pointer", padding: 2, lineHeight: 1 }}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square">
            <line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
      )}
    </div>
  );
}

import React from "react";

/**
 * Card — flat surface container with an optional header (title + actions) and
 * an optional 4px top accent bar (brand motif). Zero-radius, 1px border, no shadow.
 */
export function Card({ title, sub, actions, accent = false, children, bodyStyle, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--gray-200)",
        borderTop: accent ? "4px solid var(--blue)" : "1px solid var(--gray-200)",
        borderRadius: 0,
        ...style,
      }}
      {...rest}
    >
      {(title || actions) && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 18px", borderBottom: "1px solid var(--gray-200)" }}>
          <div style={{ minWidth: 0 }}>
            {title && <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", textTransform: "uppercase", fontWeight: 700, fontSize: 15, letterSpacing: "0.03em", color: "var(--ink)" }}>{title}</h3>}
            {sub && <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--gray-700)", marginTop: 2 }}>{sub}</div>}
          </div>
          {actions && <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>{actions}</div>}
        </div>
      )}
      <div style={{ padding: 18, ...bodyStyle }}>{children}</div>
    </div>
  );
}

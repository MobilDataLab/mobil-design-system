import React from "react";

/**
 * Callout — the yellow key-insight block (brand motif). Optional eyebrow label.
 * Text is always ink on yellow. Use sparingly, for one key idea.
 */
export function Callout({ children, label, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--yellow)",
        color: "var(--ink)",
        padding: "18px 20px",
        borderRadius: 0,
        ...style,
      }}
      {...rest}
    >
      {label && (
        <div style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>
          {label}
        </div>
      )}
      <div style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontWeight: 700, fontSize: 22, lineHeight: 1.15 }}>
        {children}
      </div>
    </div>
  );
}

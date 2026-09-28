import React from "react";

/**
 * Badge — small status/category label. Square, condensed uppercase.
 * tone: neutral | brand | accent | success | error | warning
 */
export function Badge({ children, tone = "neutral", style, ...rest }) {
  const tones = {
    neutral: { background: "var(--gray-50)", color: "var(--gray-700)", border: "1px solid var(--gray-200)" },
    brand: { background: "var(--blue)", color: "var(--white)", border: "1px solid var(--blue)" },
    accent: { background: "var(--yellow)", color: "var(--ink)", border: "1px solid var(--yellow)" },
    success: { background: "transparent", color: "var(--state-success)", border: "1px solid var(--state-success)" },
    error: { background: "transparent", color: "var(--state-error)", border: "1px solid var(--state-error)" },
    warning: { background: "transparent", color: "var(--state-warning)", border: "1px solid var(--state-warning)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        fontSize: 11,
        lineHeight: 1,
        padding: "4px 8px",
        borderRadius: 0,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

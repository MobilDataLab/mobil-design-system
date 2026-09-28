import React from "react";

/** Tag — a dismissible token (e.g. an active filter). Square, with optional ×. */
export function Tag({ children, onRemove, tone = "neutral", style, ...rest }) {
  const tones = {
    neutral: { background: "var(--white)", color: "var(--ink)", border: "1px solid var(--gray-200)" },
    tint: { background: "var(--blue-tint)", color: "var(--blue-strong)", border: "1px solid var(--blue-tint)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--font-body)",
        fontSize: 13,
        lineHeight: 1,
        padding: "5px 8px 5px 10px",
        borderRadius: 0,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Quitar"
          style={{ display: "grid", placeItems: "center", width: 16, height: 16, padding: 0, border: "none", background: "transparent", color: "var(--gray-400)", cursor: "pointer", lineHeight: 1 }}
        >
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square">
            <line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
      )}
    </span>
  );
}

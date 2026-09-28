import React from "react";

/**
 * Input — single-line text field with optional uppercase caption label.
 * Zero-radius, 1px border; focus ring is a 2px blue inset outline.
 */
export function Input({
  label,
  hint,
  error,
  type = "text",
  disabled = false,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--state-error)" : focus ? "var(--blue)" : "var(--gray-200)";

  return (
    <label htmlFor={fieldId} style={{ display: "flex", flexDirection: "column", gap: 5, fontFamily: "var(--font-body)", ...style }}>
      {label && (
        <span style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", color: "var(--gray-700)", fontWeight: 700 }}>
          {label}
        </span>
      )}
      <input
        id={fieldId}
        type={type}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "var(--ink)",
          background: disabled ? "var(--gray-50)" : "var(--white)",
          border: "1px solid " + borderColor,
          outline: focus ? "1px solid var(--blue)" : "none",
          borderRadius: 0,
          padding: "9px 12px",
          width: "100%",
          boxSizing: "border-box",
          cursor: disabled ? "not-allowed" : "text",
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontSize: 11, color: error ? "var(--state-error)" : "var(--gray-400)" }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}

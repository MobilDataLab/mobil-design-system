import React from "react";

/** Select — native dropdown styled to match the system. Zero-radius, 1px border. */
export function Select({ label, hint, options = [], disabled = false, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);

  return (
    <label htmlFor={fieldId} style={{ display: "flex", flexDirection: "column", gap: 5, fontFamily: "var(--font-body)", ...style }}>
      {label && (
        <span style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", color: "var(--gray-700)", fontWeight: 700 }}>
          {label}
        </span>
      )}
      <select
        id={fieldId}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "var(--ink)",
          background: disabled ? "var(--gray-50)" : "var(--white)",
          border: "1px solid " + (focus ? "var(--blue)" : "var(--gray-200)"),
          outline: focus ? "1px solid var(--blue)" : "none",
          borderRadius: 0,
          padding: "9px 12px",
          width: "100%",
          boxSizing: "border-box",
          cursor: disabled ? "not-allowed" : "pointer",
          appearance: "none",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
          paddingRight: 34,
        }}
        {...rest}
      >
        {options.map((o) => {
          const value = typeof o === "string" ? o : o.value;
          const text = typeof o === "string" ? o : o.label;
          return <option key={value} value={value}>{text}</option>;
        })}
      </select>
      {hint && <span style={{ fontSize: 11, color: "var(--gray-400)" }}>{hint}</span>}
    </label>
  );
}

import React from "react";

/** Checkbox — square indicator (zero-radius), blue when checked, with label. */
export function Checkbox({ label, checked, defaultChecked, disabled = false, onChange, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;

  function handle(e) {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }

  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-body)", fontSize: 14, color: disabled ? "var(--gray-400)" : "var(--ink)", cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <span style={{ position: "relative", width: 18, height: 18, flexShrink: 0 }}>
        <input type="checkbox" checked={on} disabled={disabled} onChange={handle} style={{ position: "absolute", opacity: 0, width: 18, height: 18, margin: 0, cursor: "inherit" }} {...rest} />
        <span style={{ display: "block", width: 18, height: 18, boxSizing: "border-box", border: "1px solid " + (on ? "var(--blue)" : "var(--gray-400)"), background: on ? "var(--blue)" : "var(--white)" }}>
          {on && (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--white)" strokeWidth="3" strokeLinecap="square">
              <polyline points="5 12 10 17 19 7" />
            </svg>
          )}
        </span>
      </span>
      {label}
    </label>
  );
}

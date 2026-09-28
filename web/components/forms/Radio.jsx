import React from "react";

/** Radio — single choice within a group. Square-ish dot indicator, blue when on. */
export function Radio({ label, name, value, checked, defaultChecked, disabled = false, onChange, style, ...rest }) {
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
        <input type="radio" name={name} value={value} checked={on} disabled={disabled} onChange={handle} style={{ position: "absolute", opacity: 0, width: 18, height: 18, margin: 0, cursor: "inherit" }} {...rest} />
        <span style={{ display: "grid", placeItems: "center", width: 18, height: 18, boxSizing: "border-box", borderRadius: "50%", border: "1px solid " + (on ? "var(--blue)" : "var(--gray-400)"), background: "var(--white)" }}>
          {on && <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--blue)" }} />}
        </span>
      </span>
      {label}
    </label>
  );
}

import React from "react";

/** Switch — rectilinear toggle (zero-radius track + knob). Blue when on. */
export function Switch({ label, checked, defaultChecked, disabled = false, onChange, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;

  function handle(e) {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }

  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontSize: 14, color: disabled ? "var(--gray-400)" : "var(--ink)", cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <span style={{ position: "relative", width: 40, height: 22, flexShrink: 0 }}>
        <input type="checkbox" checked={on} disabled={disabled} onChange={handle} style={{ position: "absolute", opacity: 0, width: 40, height: 22, margin: 0, cursor: "inherit" }} {...rest} />
        <span style={{ display: "block", width: 40, height: 22, boxSizing: "border-box", border: "1px solid " + (on ? "var(--blue)" : "var(--gray-400)"), background: on ? "var(--blue)" : "var(--white)", transition: "background .14s, border-color .14s" }}>
          <span style={{ position: "absolute", top: 3, left: on ? 21 : 3, width: 16, height: 16, background: on ? "var(--white)" : "var(--gray-400)", transition: "left .14s, background .14s" }} />
        </span>
      </span>
      {label}
    </label>
  );
}

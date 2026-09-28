import React from "react";

/**
 * Tabs — underline tab bar. Controlled (value + onChange) or uncontrolled.
 * items: [{ id, label, badge? }]. Active tab gets an ink underline + bold label.
 */
export function Tabs({ items = [], value, defaultValue, onChange, style, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = isControlled ? value : internal;

  function select(id) {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  }

  return (
    <div style={{ display: "flex", borderBottom: "1px solid var(--gray-200)", ...style }} {...rest}>
      {items.map((it) => {
        const on = it.id === active;
        return (
          <button
            key={it.id}
            type="button"
            onClick={() => select(it.id)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontFamily: "var(--font-heading)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontSize: 14,
              fontWeight: on ? 700 : 400,
              color: on ? "var(--ink)" : "var(--gray-700)",
              background: "transparent",
              border: "none",
              borderBottom: "2px solid " + (on ? "var(--blue)" : "transparent"),
              marginBottom: -1,
              padding: "9px 16px",
              cursor: "pointer",
            }}
          >
            {it.label}
            {it.badge != null && (
              <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, background: on ? "var(--blue)" : "var(--gray-400)", color: "var(--white)", padding: "1px 5px", lineHeight: 1.4 }}>
                {it.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

import React from "react";

/**
 * Button — primary action control for the Mobil Arquitectos system.
 * Rectilinear, zero-radius, condensed uppercase label. Flat (no shadow).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "6px 14px", fontSize: 12 },
    md: { padding: "10px 20px", fontSize: 14 },
    lg: { padding: "14px 28px", fontSize: 17 },
  };

  const variants = {
    primary: { background: "var(--blue)", color: "var(--white)", border: "1px solid var(--blue)" },
    secondary: { background: "var(--white)", color: "var(--ink)", border: "1px solid var(--ink)" },
    ghost: { background: "transparent", color: "var(--blue-strong)", border: "1px solid transparent" },
    inverse: { background: "var(--white)", color: "var(--blue-deep)", border: "1px solid var(--white)" },
    danger: { background: "var(--white)", color: "var(--state-error)", border: "1px solid var(--state-error)" },
  };

  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: "var(--blue-strong)",
    secondary: "var(--ink)",
    ghost: "var(--blue-tint)",
    inverse: "var(--blue-tint)",
    danger: "var(--state-error)",
  };
  const hoverColor = {
    secondary: "var(--white)",
    danger: "var(--white)",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: block ? "flex" : "inline-flex",
        width: block ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        lineHeight: 1,
        borderRadius: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "background .12s, color .12s, border-color .12s",
        ...sizes[size],
        ...variants[variant],
        ...(hover && !disabled
          ? { background: hoverBg[variant], color: hoverColor[variant] || variants[variant].color, borderColor: hoverBg[variant] === "var(--blue-tint)" ? "var(--blue)" : hoverBg[variant] }
          : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

import React from "react";

/**
 * IconButton — square, icon-only action. Pairs with the system's stroke icons.
 * Renders its child (an SVG ~16–18px) centered in a zero-radius hit target.
 */
export function IconButton({
  children,
  variant = "ghost",
  size = "md",
  disabled = false,
  label,
  onClick,
  style,
  ...rest
}) {
  const dim = { sm: 28, md: 36, lg: 44 }[size];
  const [hover, setHover] = React.useState(false);

  const variants = {
    ghost: { background: "transparent", color: "var(--gray-700)", border: "1px solid transparent" },
    outline: { background: "var(--white)", color: "var(--ink)", border: "1px solid var(--gray-200)" },
    solid: { background: "var(--blue)", color: "var(--white)", border: "1px solid var(--blue)" },
  };
  const hoverStyle = {
    ghost: { background: "var(--gray-50)", color: "var(--ink)" },
    outline: { borderColor: "var(--ink)", color: "var(--ink)" },
    solid: { background: "var(--blue-strong)", borderColor: "var(--blue-strong)" },
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dim,
        height: dim,
        display: "grid",
        placeItems: "center",
        borderRadius: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "background .12s, color .12s, border-color .12s",
        ...variants[variant],
        ...(hover && !disabled ? hoverStyle[variant] : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

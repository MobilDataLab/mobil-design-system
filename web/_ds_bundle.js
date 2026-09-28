/* @ds-bundle: {"format":3,"namespace":"MobilArquitectosDesignSystem_8d3ff0","components":[{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"KpiTile","sourcePath":"components/data/KpiTile.jsx"},{"name":"StatBar","sourcePath":"components/data/StatBar.jsx"},{"name":"Tabs","sourcePath":"components/data/Tabs.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/data/Card.jsx":"cf4225d532d3","components/data/KpiTile.jsx":"73d04bfecebf","components/data/StatBar.jsx":"af33d2447bef","components/data/Tabs.jsx":"9f212813cb51","components/feedback/Badge.jsx":"b03fa20063ff","components/feedback/Banner.jsx":"c030d1d7c96c","components/feedback/Callout.jsx":"f3b339d975f0","components/feedback/Tag.jsx":"1308344d4a3c","components/forms/Button.jsx":"7b57a44690ef","components/forms/Checkbox.jsx":"4f24c8ad8e12","components/forms/IconButton.jsx":"f0a0dce8fc5a","components/forms/Input.jsx":"0e4c3275b8f1","components/forms/Radio.jsx":"cd665f94b6b2","components/forms/Select.jsx":"694412e145e0","components/forms/Switch.jsx":"85cbf595ebe2","ui_kits/mobil-carga/App.jsx":"b7ec74b6a6f2","ui_kits/mobil-carga/Dashboard.jsx":"79e334c87f4f","ui_kits/mobil-carga/DrillDrawer.jsx":"6e75beab4882","ui_kits/mobil-carga/Heatmap.jsx":"65afd0bb91eb","ui_kits/mobil-carga/Icons.jsx":"9500594d5f00","ui_kits/mobil-carga/Login.jsx":"2688f3b8566e","ui_kits/mobil-carga/Sidebar.jsx":"7eef4171a398","ui_kits/mobil-carga/data.js":"67ce5fc04373"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MobilArquitectosDesignSystem_8d3ff0 = window.MobilArquitectosDesignSystem_8d3ff0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — flat surface container with an optional header (title + actions) and
 * an optional 4px top accent bar (brand motif). Zero-radius, 1px border, no shadow.
 */
function Card({
  title,
  sub,
  actions,
  accent = false,
  children,
  bodyStyle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--white)",
      border: "1px solid var(--gray-200)",
      borderTop: accent ? "4px solid var(--blue)" : "1px solid var(--gray-200)",
      borderRadius: 0,
      ...style
    }
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "14px 18px",
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "0.03em",
      color: "var(--ink)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--gray-700)",
      marginTop: 2
    }
  }, sub)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KpiTile — a single metric tile. Big mono value, uppercase label, optional
 * delta and hint. Optional top accent bar for state emphasis.
 */
function KpiTile({
  label,
  value,
  unit,
  delta,
  hint,
  accent = "none",
  style,
  ...rest
}) {
  const accents = {
    none: "1px solid var(--gray-200)",
    brand: "4px solid var(--blue)",
    error: "4px solid var(--state-error)",
    success: "4px solid var(--state-success)",
    warning: "4px solid var(--state-warning)"
  };
  const deltaColor = delta && delta.trim().startsWith("-") ? "var(--state-error)" : "var(--state-success)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--white)",
      border: "1px solid var(--gray-200)",
      borderTop: accents[accent],
      borderRadius: 0,
      padding: "16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.08em",
      color: "var(--gray-700)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontSize: 38,
      lineHeight: 1,
      color: "var(--ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--gray-400)"
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 700,
      color: deltaColor
    }
  }, delta)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--gray-400)"
    }
  }, hint));
}
Object.assign(__ds_scope, { KpiTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiTile.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBar — a labelled horizontal progress/saturation bar. The fill turns red
 * past `critical` (default 1.0 of max). Square ends, flat track.
 */
function StatBar({
  label,
  value,
  max = 1,
  critical = 1,
  showValue = true,
  format,
  style,
  ...rest
}) {
  const ratio = Math.max(0, Math.min(value / max, 1.4));
  const pct = Math.min(ratio, 1) * 100;
  const isCritical = value / max >= critical;
  const display = format ? format(value) : Math.round(value / max * 100) + "%";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 5
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink)"
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums",
      color: isCritical ? "var(--state-error)" : "var(--ink)"
    }
  }, display)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      background: "var(--gray-200)",
      borderRadius: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      width: pct + "%",
      background: isCritical ? "var(--state-error)" : "var(--blue)",
      display: "block"
    }
  })));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline tab bar. Controlled (value + onChange) or uncontrolled.
 * items: [{ id, label, badge? }]. Active tab gets an ink underline + bold label.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = isControlled ? value : internal;
  function select(id) {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      borderBottom: "1px solid var(--gray-200)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => select(it.id),
      style: {
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
        cursor: "pointer"
      }
    }, it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 10,
        fontWeight: 700,
        background: on ? "var(--blue)" : "var(--gray-400)",
        color: "var(--white)",
        padding: "1px 5px",
        lineHeight: 1.4
      }
    }, it.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/category label. Square, condensed uppercase.
 * tone: neutral | brand | accent | success | error | warning
 */
function Badge({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--gray-50)",
      color: "var(--gray-700)",
      border: "1px solid var(--gray-200)"
    },
    brand: {
      background: "var(--blue)",
      color: "var(--white)",
      border: "1px solid var(--blue)"
    },
    accent: {
      background: "var(--yellow)",
      color: "var(--ink)",
      border: "1px solid var(--yellow)"
    },
    success: {
      background: "transparent",
      color: "var(--state-success)",
      border: "1px solid var(--state-success)"
    },
    error: {
      background: "transparent",
      color: "var(--state-error)",
      border: "1px solid var(--state-error)"
    },
    warning: {
      background: "transparent",
      color: "var(--state-warning)",
      border: "1px solid var(--state-warning)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Banner — full-width inline notice. tone drives a left accent bar + tint.
 * Used for system messages (info / success / warning / error).
 */
function Banner({
  children,
  tone = "info",
  title,
  onClose,
  style,
  ...rest
}) {
  const tones = {
    info: {
      accent: "var(--blue)",
      tint: "var(--blue-tint)",
      text: "var(--blue-deep)"
    },
    success: {
      accent: "var(--state-success)",
      tint: "rgba(31,138,91,0.08)",
      text: "#10532f"
    },
    warning: {
      accent: "var(--state-warning)",
      tint: "rgba(194,141,31,0.10)",
      text: "#6b4e0f"
    },
    error: {
      accent: "var(--state-error)",
      tint: "rgba(200,65,44,0.07)",
      text: "#6b2616"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      background: t.tint,
      borderLeft: "4px solid " + t.accent,
      padding: "12px 14px",
      fontFamily: "var(--font-body)",
      borderRadius: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.04em",
      color: t.text
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink)",
      marginTop: title ? 3 : 0,
      lineHeight: 1.5
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--gray-700)",
      cursor: "pointer",
      padding: 2,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "15",
    height: "15",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "18",
    x2: "18",
    y2: "6"
  }))));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — the yellow key-insight block (brand motif). Optional eyebrow label.
 * Text is always ink on yellow. Use sparingly, for one key idea.
 */
function Callout({
  children,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--yellow)",
      color: "var(--ink)",
      padding: "18px 20px",
      borderRadius: 0,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.1em",
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1.15
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tag — a dismissible token (e.g. an active filter). Square, with optional ×. */
function Tag({
  children,
  onRemove,
  tone = "neutral",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--white)",
      color: "var(--ink)",
      border: "1px solid var(--gray-200)"
    },
    tint: {
      background: "var(--blue-tint)",
      color: "var(--blue-strong)",
      border: "1px solid var(--blue-tint)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: 1,
      padding: "5px 8px 5px 10px",
      borderRadius: 0,
      ...tones[tone],
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Quitar",
    style: {
      display: "grid",
      placeItems: "center",
      width: 16,
      height: 16,
      padding: 0,
      border: "none",
      background: "transparent",
      color: "var(--gray-400)",
      cursor: "pointer",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "18",
    x2: "18",
    y2: "6"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control for the Mobil Arquitectos system.
 * Rectilinear, zero-radius, condensed uppercase label. Flat (no shadow).
 */
function Button({
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
    sm: {
      padding: "6px 14px",
      fontSize: 12
    },
    md: {
      padding: "10px 20px",
      fontSize: 14
    },
    lg: {
      padding: "14px 28px",
      fontSize: 17
    }
  };
  const variants = {
    primary: {
      background: "var(--blue)",
      color: "var(--white)",
      border: "1px solid var(--blue)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--ink)",
      border: "1px solid var(--ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--blue-strong)",
      border: "1px solid transparent"
    },
    inverse: {
      background: "var(--white)",
      color: "var(--blue-deep)",
      border: "1px solid var(--white)"
    },
    danger: {
      background: "var(--white)",
      color: "var(--state-error)",
      border: "1px solid var(--state-error)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: "var(--blue-strong)",
    secondary: "var(--ink)",
    ghost: "var(--blue-tint)",
    inverse: "var(--blue-tint)",
    danger: "var(--state-error)"
  };
  const hoverColor = {
    secondary: "var(--white)",
    danger: "var(--white)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...(hover && !disabled ? {
        background: hoverBg[variant],
        color: hoverColor[variant] || variants[variant].color,
        borderColor: hoverBg[variant] === "var(--blue-tint)" ? "var(--blue)" : hoverBg[variant]
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — square indicator (zero-radius), blue when checked, with label. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  function handle(e) {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: disabled ? "var(--gray-400)" : "var(--ink)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: handle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 18,
      height: 18,
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 18,
      height: 18,
      boxSizing: "border-box",
      border: "1px solid " + (on ? "var(--blue)" : "var(--gray-400)"),
      background: on ? "var(--blue)" : "var(--white)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "var(--white)",
    strokeWidth: "3",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "5 12 10 17 19 7"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only action. Pairs with the system's stroke icons.
 * Renders its child (an SVG ~16–18px) centered in a zero-radius hit target.
 */
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  disabled = false,
  label,
  onClick,
  style,
  ...rest
}) {
  const dim = {
    sm: 28,
    md: 36,
    lg: 44
  }[size];
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--gray-700)",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--white)",
      color: "var(--ink)",
      border: "1px solid var(--gray-200)"
    },
    solid: {
      background: "var(--blue)",
      color: "var(--white)",
      border: "1px solid var(--blue)"
    }
  };
  const hoverStyle = {
    ghost: {
      background: "var(--gray-50)",
      color: "var(--ink)"
    },
    outline: {
      borderColor: "var(--ink)",
      color: "var(--ink)"
    },
    solid: {
      background: "var(--blue-strong)",
      borderColor: "var(--blue-strong)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field with optional uppercase caption label.
 * Zero-radius, 1px border; focus ring is a 2px blue inset outline.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontSize: 11,
      letterSpacing: "0.06em",
      color: "var(--gray-700)",
      fontWeight: 700
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      cursor: disabled ? "not-allowed" : "text"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: error ? "var(--state-error)" : "var(--gray-400)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio — single choice within a group. Square-ish dot indicator, blue when on. */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  function handle(e) {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: disabled ? "var(--gray-400)" : "var(--ink)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: handle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 18,
      height: 18,
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 18,
      height: 18,
      boxSizing: "border-box",
      borderRadius: "50%",
      border: "1px solid " + (on ? "var(--blue)" : "var(--gray-400)"),
      background: "var(--white)"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--blue)"
    }
  }))), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — native dropdown styled to match the system. Zero-radius, 1px border. */
function Select({
  label,
  hint,
  options = [],
  disabled = false,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontSize: 11,
      letterSpacing: "0.06em",
      color: "var(--gray-700)",
      fontWeight: 700
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 12px center",
      paddingRight: 34
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — rectilinear toggle (zero-radius track + knob). Blue when on. */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  function handle(e) {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: disabled ? "var(--gray-400)" : "var(--ink)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 40,
      height: 22,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: handle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 40,
      height: 22,
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 40,
      height: 22,
      boxSizing: "border-box",
      border: "1px solid " + (on ? "var(--blue)" : "var(--gray-400)"),
      background: on ? "var(--blue)" : "var(--white)",
      transition: "background .14s, border-color .14s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 21 : 3,
      width: 16,
      height: 16,
      background: on ? "var(--white)" : "var(--gray-400)",
      transition: "left .14s, background .14s"
    }
  }))), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobil-carga/App.jsx
try { (() => {
// App — Mobil Carga shell: login gate, sidebar rail, top bar, page routing,
// and the person drill-down drawer.
window.MobilCargaApp = function MobilCargaApp() {
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const {
    Button,
    Tag
  } = NS;
  const [page, setPage] = React.useState("login");
  const [drill, setDrill] = React.useState(null);
  if (page === "login") return /*#__PURE__*/React.createElement(window.Login, {
    onEnter: () => setPage("dashboard")
  });
  const META = {
    dashboard: {
      title: "Dashboard · Directorio",
      crumb: "Vista de saturación · 12 personas · año fiscal 2026"
    },
    saturacion: {
      title: "Saturación",
      crumb: "Heatmap persona × mes"
    },
    personas: {
      title: "Personas",
      crumb: "Catálogo de equipo"
    },
    proyectos: {
      title: "Proyectos",
      crumb: "Portafolio activo"
    },
    organigrama: {
      title: "Organigrama",
      crumb: "Matriz seniority × taller"
    },
    parametros: {
      title: "Parámetros",
      crumb: "Pesos del modelo de carga"
    }
  };
  const meta = META[page] || {
    title: page,
    crumb: ""
  };
  const Placeholder = ({
    name
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--gray-200)",
      background: "var(--white)",
      padding: "48px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--ink)"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--gray-700)",
      maxWidth: 460,
      margin: "10px auto 0",
      lineHeight: 1.5
    }
  }, "Vista presente en la app real de Mobil Carga, fuera del alcance de este UI kit de demostraci\xF3n. Usa ", /*#__PURE__*/React.createElement("b", null, "Dashboard"), " y ", /*#__PURE__*/React.createElement("b", null, "Saturaci\xF3n"), " para ver el sistema aplicado."));
  const Ico = window.Ico;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(window.Sidebar, {
    page: page,
    setPage: p => {
      setPage(p);
      setDrill(null);
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      flexShrink: 0,
      background: "var(--white)",
      borderBottom: "1px solid var(--gray-200)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "0.02em",
      color: "var(--ink)"
    }
  }, meta.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--gray-400)",
      textTransform: "uppercase",
      letterSpacing: "0.05em"
    }
  }, meta.crumb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "tint"
  }, "A\xF1o: 2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Exportar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Subir Excel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 20,
      background: "var(--gray-50)"
    }
  }, page === "dashboard" && /*#__PURE__*/React.createElement(window.Dashboard, {
    onDrill: setDrill
  }), page === "saturacion" && /*#__PURE__*/React.createElement(window.Heatmap, {
    onDrill: setDrill
  }), !["dashboard", "saturacion"].includes(page) && /*#__PURE__*/React.createElement(Placeholder, {
    name: meta.title
  }))), /*#__PURE__*/React.createElement(window.DrillDrawer, {
    ini: drill,
    onClose: () => setDrill(null)
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobil-carga/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobil-carga/Dashboard.jsx
try { (() => {
// Dashboard — KPI row, saturation ranking, and saturation-by-taller bars.
// Composes the design-system primitives (KpiTile, Card, StatBar, Badge, Tabs).
window.Dashboard = function Dashboard({
  onDrill
}) {
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const {
    KpiTile,
    Card,
    StatBar,
    Badge
  } = NS;
  const D = window.MC_DATA;

  // Average saturation per taller.
  const byTaller = Object.values(D.TALLERES).map(t => {
    const ppl = D.PERSONAS.filter(p => p.taller === t.code);
    const avg = ppl.length ? ppl.reduce((a, p) => a + D.annual(p.ini), 0) / ppl.length : 0;
    return {
      ...t,
      avg: +avg.toFixed(2),
      n: ppl.length
    };
  }).sort((a, b) => b.avg - a.avg);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "Saturaci\xF3n prom.",
    value: D.avgSat.toFixed(2),
    delta: "+0.06",
    accent: "warning",
    hint: "ocupaci\xF3n \xD7 carga"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Sobre 100%",
    value: String(D.overloaded),
    unit: "personas",
    accent: "error",
    hint: "zona cr\xEDtica"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Personas",
    value: String(D.PERSONAS.length),
    hint: "activas este a\xF1o"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Talleres",
    value: String(Object.keys(D.TALLERES).length),
    accent: "brand",
    hint: "TV \xB7 TC \xB7 TI \xB7 TS \xB7 TU"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Ranking de saturaci\xF3n",
    sub: "A\xF1o fiscal 2026 \xB7 clic para ver detalle",
    accent: true
  }, /*#__PURE__*/React.createElement("div", null, D.ranked.map((p, i) => {
    const crit = p.sat > 1.0;
    return /*#__PURE__*/React.createElement("div", {
      key: p.ini,
      onClick: () => onDrill(p.ini),
      style: {
        display: "grid",
        gridTemplateColumns: "26px 1fr 120px 56px",
        alignItems: "center",
        gap: 12,
        padding: "9px 0",
        borderBottom: i < D.ranked.length - 1 ? "1px solid var(--gray-200)" : "none",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "var(--gray-400)",
        textAlign: "right",
        fontVariantNumeric: "tabular-nums"
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 13,
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 700,
        color: "var(--blue-strong)",
        marginRight: 8
      }
    }, p.ini), p.nombre), /*#__PURE__*/React.createElement(StatBar, {
      value: p.sat,
      critical: 1,
      showValue: false
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 13,
        textAlign: "right",
        fontVariantNumeric: "tabular-nums",
        color: crit ? "var(--state-error)" : "var(--ink)"
      }
    }, p.sat.toFixed(2)));
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Saturaci\xF3n por taller",
    sub: "Promedio del equipo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, byTaller.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.code
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, t.code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ink)"
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--gray-400)",
      marginLeft: "auto"
    }
  }, t.n, " pers.")), /*#__PURE__*/React.createElement(StatBar, {
    value: t.avg,
    critical: 1,
    format: v => v.toFixed(2)
  })))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobil-carga/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobil-carga/DrillDrawer.jsx
try { (() => {
// DrillDrawer — right-side panel with one person's monthly saturation detail.
window.DrillDrawer = function DrillDrawer({
  ini,
  onClose
}) {
  if (!ini) return null;
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const {
    Badge,
    KpiTile,
    StatBar
  } = NS;
  const D = window.MC_DATA;
  const p = D.PERSONAS.find(x => x.ini === ini);
  const row = D.MATRIX[ini];
  const ann = D.annual(ini);
  const peak = Math.max(...row);
  const peakMonth = D.MESES[row.indexOf(peak)];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(1,29,65,0.32)",
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: 420,
      maxWidth: "90%",
      background: "var(--white)",
      borderLeft: "4px solid var(--blue)",
      zIndex: 41,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 20px",
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      background: "var(--blue-deep)",
      display: "grid",
      placeItems: "center",
      font: "700 13px var(--font-body)",
      color: "#fff"
    }
  }, p.ini), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "0.02em",
      color: "var(--ink)"
    }
  }, p.nombre), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, p.taller), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, p.rol)))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      width: 32,
      height: 32,
      display: "grid",
      placeItems: "center",
      border: "none",
      background: "transparent",
      color: "var(--gray-700)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "18",
    x2: "18",
    y2: "6"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "Saturaci\xF3n anual",
    value: ann.toFixed(2),
    accent: ann > 1 ? "error" : "warning"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Peak",
    value: peak.toFixed(2),
    hint: "en " + peakMonth,
    accent: peak > 1 ? "error" : "none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontSize: 11,
      letterSpacing: "0.08em",
      color: "var(--gray-700)",
      fontWeight: 700,
      marginBottom: 12
    }
  }, "Detalle mensual"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, row.map((v, mi) => /*#__PURE__*/React.createElement(StatBar, {
    key: mi,
    label: D.MESES[mi],
    value: v,
    critical: 1,
    format: x => x.toFixed(2)
  })))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobil-carga/DrillDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobil-carga/Heatmap.jsx
try { (() => {
// Heatmap — saturación persona × mes, semáforo color scale. The signature
// data-viz of Mobil Carga, rendered in the v3 blue ramp (+ red overload).
window.Heatmap = function Heatmap({
  onDrill
}) {
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const {
    Card
  } = NS;
  const D = window.MC_DATA;
  const Cell = ({
    v
  }) => {
    const c = D.sem(v);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: c.bg,
        display: "grid",
        placeItems: "center",
        height: 38,
        fontFamily: "var(--font-body)",
        fontSize: 11,
        fontWeight: 500,
        fontVariantNumeric: "tabular-nums",
        color: c.dark ? "#fff" : "var(--ink)"
      }
    }, Math.round(v * 100));
  };
  const cols = "200px repeat(12, 1fr) 64px";
  return /*#__PURE__*/React.createElement(Card, {
    title: "Saturaci\xF3n \xB7 persona \xD7 mes",
    sub: "% de horas asignadas sobre facturables \xB7 a\xF1o fiscal 2026",
    accent: true,
    bodyStyle: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: cols,
      background: "var(--gray-50)",
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontSize: 10,
      letterSpacing: "0.08em",
      color: "var(--gray-700)"
    }
  }, "Persona"), D.MESES.map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      padding: "10px 0",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 10,
      color: "var(--blue-deep)"
    }
  }, m)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 0",
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontSize: 10,
      letterSpacing: "0.06em",
      color: "var(--gray-700)"
    }
  }, "A\xF1o")), D.PERSONAS.map((p, i) => {
    const row = D.MATRIX[p.ini];
    const ann = D.annual(p.ini);
    return /*#__PURE__*/React.createElement("div", {
      key: p.ini,
      onClick: () => onDrill(p.ini),
      style: {
        display: "grid",
        gridTemplateColumns: cols,
        borderBottom: i < D.PERSONAS.length - 1 ? "1px solid var(--gray-200)" : "none",
        cursor: "pointer",
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 14px",
        display: "flex",
        alignItems: "center",
        gap: 9,
        borderRight: "1px solid var(--gray-200)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        background: "var(--gray-50)",
        display: "grid",
        placeItems: "center",
        font: "700 10px var(--font-body)",
        color: "var(--blue-strong)",
        flexShrink: 0
      }
    }, p.ini), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12.5,
        fontWeight: 500,
        color: "var(--ink)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, p.nombre), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 10.5,
        color: "var(--gray-400)"
      }
    }, p.rol))), row.map((v, mi) => /*#__PURE__*/React.createElement("div", {
      key: mi,
      style: {
        padding: 2
      }
    }, /*#__PURE__*/React.createElement(Cell, {
      v: v
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        placeItems: "center",
        borderLeft: "1px solid var(--gray-200)",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 13,
        fontVariantNumeric: "tabular-nums",
        color: ann > 1 ? "var(--state-error)" : "var(--ink)"
      }
    }, ann.toFixed(2)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "12px 14px",
      borderTop: "1px solid var(--gray-200)",
      background: "var(--gray-50)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      color: "var(--gray-700)",
      marginRight: 4
    }
  }, "Saturaci\xF3n"), D.SEM_LEGEND.map(l => /*#__PURE__*/React.createElement("span", {
    key: l.label,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "2px 7px",
      background: l.bg,
      color: l.dark ? "#fff" : "var(--ink)",
      fontFamily: "var(--font-body)",
      fontSize: 10,
      fontWeight: 500
    }
  }, l.label))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobil-carga/Heatmap.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobil-carga/Icons.jsx
try { (() => {
// Stroke icon set for the Mobil Carga kit — mirrors the app's hand-built
// 1.5px round-cap icons (Icons.tsx). Usage: <Ico name="grid" size={18} />
window.Ico = function Ico({
  name,
  size = 18
}) {
  const s = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const P = {
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7"
    })),
    chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "12",
      width: "4",
      height: "9"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "7",
      width: "4",
      height: "14"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "3",
      width: "4",
      height: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "21",
      x2: "21",
      y2: "21"
    })),
    layers: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3 L21 8 L12 13 L3 8 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12 L12 17 L21 12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 16 L12 21 L21 16"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 20 c0-3 2-6 6-6 s6 3 6 6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "9",
      r: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 20 c0-2 2-4 4.5-4 s2.5 1 2.5 4"
    })),
    folder: /*#__PURE__*/React.createElement("path", {
      d: "M3 6 h6 l2 2 h10 v11 H3z"
    }),
    upload: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 16 V4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 9 L12 4 L17 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 16 V20 H20 V16"
    })),
    download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 4 V16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 11 L12 16 L17 11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 16 V20 H20 V16"
    })),
    gear: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3 v2 M12 19 v2 M3 12 h2 M19 12 h2 M5.6 5.6 l1.4 1.4 M17 17 l1.4 1.4 M5.6 18.4 l1.4-1.4 M17 7 l1.4-1.4"
    })),
    filter: /*#__PURE__*/React.createElement("polygon", {
      points: "3 4 21 4 14 13 14 20 10 20 10 13"
    }),
    sitemap: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "2",
      width: "6",
      height: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "6",
      x2: "12",
      y2: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "10",
      x2: "20",
      y2: "10"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "10",
      width: "6",
      height: "4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "10",
      width: "6",
      height: "4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "16",
      y: "10",
      width: "6",
      height: "4"
    })),
    logout: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M15 4 H6 a2 2 0 0 0-2 2 v12 a2 2 0 0 0 2 2 h9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 8 l4 4 l-4 4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12"
    })),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "18",
      x2: "18",
      y2: "6"
    })),
    alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3 L22 20 H2 z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "10",
      x2: "12",
      y2: "14"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "17",
      r: "0.6",
      fill: "currentColor"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "16",
      x2: "21",
      y2: "21"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", s, P[name] || null);
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobil-carga/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobil-carga/Login.jsx
try { (() => {
// Login — v3 brand recreation of Mobil Carga's auth screen (flat, blue, condensed).
window.Login = function Login({
  onEnter
}) {
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const {
    Button,
    Input
  } = NS;
  const [mode, setMode] = React.useState("signin");
  const Mark = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 840 960",
    width: "40",
    height: "46"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#006BFF",
    strokeWidth: "24",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "30",
    x2: "809.71",
    y2: "255"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "809.71",
    y1: "255",
    x2: "809.71",
    y2: "705"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "809.71",
    y1: "705",
    x2: "420",
    y2: "930"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "930",
    x2: "30.29",
    y2: "705"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "30.29",
    y1: "705",
    x2: "30.29",
    y2: "255"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "30.29",
    y1: "255",
    x2: "420",
    y2: "30"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "420",
    y2: "30"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "809.71",
    y2: "255"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "809.71",
    y2: "705"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "420",
    y2: "930"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "30.29",
    y2: "705"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "30.29",
    y2: "255"
  })));
  const tab = (id, label) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode(id),
    style: {
      flex: 1,
      padding: "9px 0",
      border: "none",
      borderBottom: "2px solid " + (mode === id ? "var(--blue)" : "var(--gray-200)"),
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      fontWeight: mode === id ? 700 : 400,
      fontSize: 13,
      color: mode === id ? "var(--ink)" : "var(--gray-700)"
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "grid",
      placeItems: "center",
      background: "var(--blue-deep)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      maxWidth: "100%",
      background: "var(--white)",
      padding: 36,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: "var(--blue)"
    }
  }), /*#__PURE__*/React.createElement(Mark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 34,
      letterSpacing: "0.02em",
      lineHeight: 1,
      marginTop: 16,
      color: "var(--ink)"
    }
  }, "Mobil \xB7 Carga"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--gray-700)",
      marginTop: 6,
      marginBottom: 22
    }
  }, "Sistema de saturaci\xF3n de talleres"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 20
    }
  }, tab("signin", "Iniciar sesión"), tab("signup", "Registrarse")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onEnter();
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    type: "email",
    placeholder: "tu@mobil.cl",
    defaultValue: "paula.bravo@mobil.cl",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contrase\xF1a",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    defaultValue: "mobil2026",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    block: true
  }, mode === "signin" ? "Entrar" : "Crear cuenta")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--gray-400)",
      marginTop: 18,
      lineHeight: 1.5
    }
  }, "El primer registro queda como ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--gray-700)"
    }
  }, "Desarrollador"), ". Los siguientes ingresan como Colaborador y requieren aprobaci\xF3n.")));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobil-carga/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobil-carga/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Sidebar — narrow icon rail. v3 brand: blue-deep rail, hexagon mark, blue
// active accent. Mirrors Mobil Carga's 60px navigation rail.
window.Sidebar = function Sidebar({
  page,
  setPage
}) {
  const Ico = window.Ico;
  const nav = [{
    id: "dashboard",
    icon: "grid",
    tip: "Dashboard"
  }, {
    id: "saturacion",
    icon: "chart",
    tip: "Saturación"
  }, {
    id: "personas",
    icon: "users",
    tip: "Personas"
  }, {
    id: "proyectos",
    icon: "folder",
    tip: "Proyectos"
  }, {
    id: "organigrama",
    icon: "sitemap",
    tip: "Organigrama"
  }, {
    id: "parametros",
    icon: "gear",
    tip: "Parámetros"
  }];
  const Mark = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 840 960",
    width: "30",
    height: "34"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: "24",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "30",
    x2: "809.71",
    y2: "255"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "809.71",
    y1: "255",
    x2: "809.71",
    y2: "705"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "809.71",
    y1: "705",
    x2: "420",
    y2: "930"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "930",
    x2: "30.29",
    y2: "705"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "30.29",
    y1: "705",
    x2: "30.29",
    y2: "255"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "30.29",
    y1: "255",
    x2: "420",
    y2: "30"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "420",
    y2: "30"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "809.71",
    y2: "255"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "809.71",
    y2: "705"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "420",
    y2: "930"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "30.29",
    y2: "705"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "480",
    x2: "30.29",
    y2: "255"
  })));
  const Item = ({
    id,
    icon,
    tip,
    onClick,
    active
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      title: tip,
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        position: "relative",
        width: 44,
        height: 44,
        display: "grid",
        placeItems: "center",
        border: "none",
        background: active ? "rgba(0,107,255,0.18)" : "transparent",
        color: active ? "#fff" : h ? "#fff" : "rgba(255,255,255,0.55)",
        cursor: "pointer",
        borderRadius: 0,
        transition: "color .12s, background .12s"
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 8,
        bottom: 8,
        width: 3,
        background: "var(--blue)"
      }
    }), /*#__PURE__*/React.createElement(Ico, {
      name: icon,
      size: 20
    }));
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 60,
      background: "var(--blue-deep)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px 0",
      flexShrink: 0,
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Mark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      flex: 1
    }
  }, nav.map(n => /*#__PURE__*/React.createElement(Item, _extends({
    key: n.id
  }, n, {
    active: page === n.id,
    onClick: () => setPage(n.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: "rgba(255,255,255,0.12)",
      display: "grid",
      placeItems: "center",
      color: "#fff",
      font: "700 10px var(--font-body)",
      letterSpacing: "0.5px"
    }
  }, "PB"), /*#__PURE__*/React.createElement(Item, {
    id: "logout",
    icon: "logout",
    tip: "Salir",
    onClick: () => setPage("login"),
    active: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "10px var(--font-body)",
      color: "rgba(255,255,255,0.3)",
      letterSpacing: 1
    }
  }, "v3")));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobil-carga/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobil-carga/data.js
try { (() => {
// Mobil Carga — fake dataset for the UI-kit recreation.
// Faithful to the real domain (talleres TV/TC/TI/TS/TU, seniority codes,
// saturación = ocupación × carga). Numbers are illustrative.

window.MC_DATA = function () {
  const MESES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
  const TALLERES = {
    TV: {
      code: "TV",
      name: "Vivienda"
    },
    TC: {
      code: "TC",
      name: "Comercial"
    },
    TI: {
      code: "TI",
      name: "Infraestructura"
    },
    TS: {
      code: "TS",
      name: "Salud / Hospitales"
    },
    TU: {
      code: "TU",
      name: "Urbano"
    }
  };

  // seniority: S socio · AA asociado · JP jefe proyecto · A arquitecto · P practicante
  const PERSONAS = [{
    ini: "PB",
    nombre: "Paula Bravo",
    sen: "S",
    taller: "TS",
    rol: "Socia"
  }, {
    ini: "SM",
    nombre: "Sergio Marín",
    sen: "S",
    taller: "TI",
    rol: "Socio"
  }, {
    ini: "JM",
    nombre: "Javiera Morales",
    sen: "S",
    taller: "TC",
    rol: "Socia"
  }, {
    ini: "LP",
    nombre: "Luis Pérez",
    sen: "AA",
    taller: "TV",
    rol: "Asociado"
  }, {
    ini: "CR",
    nombre: "Carla Reyes",
    sen: "AA",
    taller: "TS",
    rol: "Asociada"
  }, {
    ini: "DF",
    nombre: "Diego Fuentes",
    sen: "JP",
    taller: "TI",
    rol: "Jefe de Proyecto"
  }, {
    ini: "MA",
    nombre: "Marcela Aguirre",
    sen: "JP",
    taller: "TC",
    rol: "Jefa de Proyecto"
  }, {
    ini: "RT",
    nombre: "Rodrigo Tapia",
    sen: "A",
    taller: "TV",
    rol: "Arquitecto"
  }, {
    ini: "VS",
    nombre: "Valentina Soto",
    sen: "A",
    taller: "TS",
    rol: "Arquitecta"
  }, {
    ini: "NC",
    nombre: "Nicolás Castro",
    sen: "A",
    taller: "TI",
    rol: "Arquitecto"
  }, {
    ini: "FG",
    nombre: "Fernanda Gálvez",
    sen: "A",
    taller: "TU",
    rol: "Arquitecta"
  }, {
    ini: "IM",
    nombre: "Ignacio Muñoz",
    sen: "P",
    taller: "TC",
    rol: "Practicante"
  }];

  // Deterministic pseudo-random saturation matrix (persona × 12 meses), 0–1.4.
  function seeded(i) {
    const x = Math.sin(i * 99.7) * 43758.5453;
    return x - Math.floor(x);
  }
  const MATRIX = {};
  PERSONAS.forEach((p, pi) => {
    const base = 0.55 + seeded(pi + 1) * 0.55; // 0.55–1.10 baseline
    MATRIX[p.ini] = MESES.map((_, mi) => {
      const wave = Math.sin(mi / 11 * Math.PI * 1.3 + pi) * 0.22;
      const noise = (seeded(pi * 13 + mi + 7) - 0.5) * 0.18;
      return Math.max(0.05, Math.min(1.38, +(base + wave + noise).toFixed(2)));
    });
  });
  const annual = ini => {
    const r = MATRIX[ini];
    return +(r.reduce((a, b) => a + b, 0) / r.length).toFixed(2);
  };

  // Semáforo ramp — v3 blue lineage for 0→100%, error red for overload.
  // Returns { bg, dark } where dark=true means use white text.
  function sem(v) {
    if (v < 0.40) return {
      bg: "#E7F3FD",
      dark: false
    };
    if (v < 0.60) return {
      bg: "#B9DBFF",
      dark: false
    };
    if (v < 0.75) return {
      bg: "#6FB0FF",
      dark: false
    };
    if (v < 0.90) return {
      bg: "#2C8BFF",
      dark: true
    };
    if (v < 1.00) return {
      bg: "#006BFF",
      dark: true
    };
    if (v <= 1.15) return {
      bg: "#C8412C",
      dark: true
    };
    return {
      bg: "#8A2E1E",
      dark: true
    };
  }
  const SEM_LEGEND = [{
    label: "< 40%",
    bg: "#E7F3FD",
    dark: false
  }, {
    label: "40–60",
    bg: "#B9DBFF",
    dark: false
  }, {
    label: "60–75",
    bg: "#6FB0FF",
    dark: false
  }, {
    label: "75–90",
    bg: "#2C8BFF",
    dark: true
  }, {
    label: "90–100",
    bg: "#006BFF",
    dark: true
  }, {
    label: "100–115",
    bg: "#C8412C",
    dark: true
  }, {
    label: "> 115%",
    bg: "#8A2E1E",
    dark: true
  }];

  // KPIs for the dashboard header.
  const ranked = [...PERSONAS].map(p => ({
    ...p,
    sat: annual(p.ini)
  })).sort((a, b) => b.sat - a.sat);
  const avgSat = +(ranked.reduce((a, p) => a + p.sat, 0) / ranked.length).toFixed(2);
  const overloaded = ranked.filter(p => p.sat > 1.0).length;
  return {
    MESES,
    TALLERES,
    PERSONAS,
    MATRIX,
    sem,
    SEM_LEGEND,
    annual,
    ranked,
    avgSat,
    overloaded
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobil-carga/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.KpiTile = __ds_scope.KpiTile;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();

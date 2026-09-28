import React from "react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style" | "type"> {
  /** Text label to the right of the box. */
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Square checkbox (zero-radius), blue when checked. */
export function Checkbox(props: CheckboxProps): JSX.Element;

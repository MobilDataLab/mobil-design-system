import React from "react";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style" | "type"> {
  /** Text label to the right of the toggle. */
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Rectilinear on/off toggle. Blue track when on. */
export function Switch(props: SwitchProps): JSX.Element;

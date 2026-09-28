import React from "react";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style" | "type"> {
  /** Text label to the right of the dot. */
  label?: React.ReactNode;
  /** Group name — radios sharing a name are mutually exclusive. */
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Single choice within a group. The only round element in the system. */
export function Radio(props: RadioProps): JSX.Element;

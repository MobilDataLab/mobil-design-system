import React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> {
  /** Uppercase caption label above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the border and message red. */
  error?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Single-line text field with optional label / hint / error. */
export function Input(props: InputProps): JSX.Element;

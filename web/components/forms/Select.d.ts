import React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "style"> {
  /** Uppercase caption label above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Options — strings, or {value,label} objects. */
  options?: (string | SelectOption)[];
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Native dropdown styled to match the system. */
export function Select(props: SelectProps): JSX.Element;

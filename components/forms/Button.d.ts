import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "danger";
  /** Control size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill the container width. @default false */
  block?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary action control — zero-radius, condensed uppercase label, flat.
 * @startingPoint section="Forms" subtitle="Buttons in every variant & size" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;

import React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "ghost" */
  variant?: "ghost" | "outline" | "solid";
  /** Square size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Accessible label (used for aria-label + title). */
  label?: string;
  disabled?: boolean;
  /** An SVG icon (~16–18px). */
  children?: React.ReactNode;
}

/** Square, icon-only action button. */
export function IconButton(props: IconButtonProps): JSX.Element;

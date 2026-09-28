import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "neutral" */
  tone?: "neutral" | "brand" | "accent" | "success" | "error" | "warning";
  children?: React.ReactNode;
}

/** Small square status/category label, condensed uppercase. */
export function Badge(props: BadgeProps): JSX.Element;

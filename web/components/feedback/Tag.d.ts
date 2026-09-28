import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "neutral" */
  tone?: "neutral" | "tint";
  /** When provided, renders a × button that calls this. */
  onRemove?: () => void;
  children?: React.ReactNode;
}

/** Dismissible token, typically an active filter. */
export function Tag(props: TagProps): JSX.Element;

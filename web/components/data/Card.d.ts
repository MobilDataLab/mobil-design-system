import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase header title. */
  title?: string;
  /** Secondary line under the title. */
  sub?: React.ReactNode;
  /** Right-aligned header actions (buttons, segmented control). */
  actions?: React.ReactNode;
  /** Show a 4px blue top accent bar (brand motif). @default false */
  accent?: boolean;
  /** Override padding/layout of the body region. */
  bodyStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Flat surface container with optional header and top accent bar.
 * @startingPoint section="Data" subtitle="Cards, KPI tiles, stat bars & tabs" viewport="700x320"
 */
export function Card(props: CardProps): JSX.Element;

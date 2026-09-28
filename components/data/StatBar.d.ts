import React from "react";

export interface StatBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  /** Label to the left of the value. */
  label?: string;
  /** Current value. */
  value: number;
  /** Maximum value (full bar). @default 1 */
  max?: number;
  /** Ratio of max at/above which the fill turns red. @default 1 */
  critical?: number;
  /** Show the numeric/percent readout. @default true */
  showValue?: boolean;
  /** Custom formatter for the readout. */
  format?: (value: number) => string;
  style?: React.CSSProperties;
}

/** Labelled horizontal saturation/progress bar; red past the critical ratio. */
export function StatBar(props: StatBarProps): JSX.Element;

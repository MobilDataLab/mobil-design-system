import React from "react";

export interface KpiTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase metric label. */
  label: string;
  /** The headline value (string or number). */
  value: React.ReactNode;
  /** Small unit suffix (e.g. "UF", "%"). */
  unit?: string;
  /** Delta string — leading "-" renders red, otherwise green (e.g. "+4.2%"). */
  delta?: string;
  /** Caption under the value. */
  hint?: string;
  /** Top accent bar for emphasis. @default "none" */
  accent?: "none" | "brand" | "error" | "success" | "warning";
}

/** Single-metric tile with a big mono value. */
export function KpiTile(props: KpiTileProps): JSX.Element;

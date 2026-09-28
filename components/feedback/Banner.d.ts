import React from "react";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Notice tone — drives accent bar + tint. @default "info" */
  tone?: "info" | "success" | "warning" | "error";
  /** Optional uppercase title line. */
  title?: string;
  /** When provided, shows a close (×) button. */
  onClose?: () => void;
  children?: React.ReactNode;
}

/** Full-width inline system notice with a 4px left accent bar. */
export function Banner(props: BannerProps): JSX.Element;

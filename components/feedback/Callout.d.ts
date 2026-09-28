import React from "react";

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase eyebrow above the headline. */
  label?: string;
  /** The key idea — rendered as a condensed uppercase headline. */
  children?: React.ReactNode;
}

/** Yellow key-insight block (brand motif). Ink text, used sparingly. */
export function Callout(props: CalloutProps): JSX.Element;

import React from "react";

export interface TabItem {
  id: string;
  label: string;
  /** Optional count badge. */
  badge?: string | number;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "style"> {
  items: TabItem[];
  /** Controlled active id. */
  value?: string;
  /** Initial active id (uncontrolled). */
  defaultValue?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** Underline tab bar with uppercase labels and optional count badges. */
export function Tabs(props: TabsProps): JSX.Element;

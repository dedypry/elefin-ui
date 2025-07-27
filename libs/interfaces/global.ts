import { ReactElement } from "react";

export type IColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "default";
export type IButtonVariant =
  | "text"
  | "contained"
  | "outlined"
  | "tonal"
  | "glow";

export const colorOptions: IColor[] = [
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "default",
];

export interface INavigation {
  header?: string;
  title?: string;
  href?: string;
  icon?: ReactElement;
  children?: INavigation[];
}

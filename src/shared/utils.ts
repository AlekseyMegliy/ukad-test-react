import { LinkProps } from "../types";

export const highlightedLinkStyleIfActive = ({ isActive }: LinkProps) => {
  return isActive ? { textDecoration: "underline" } : undefined;
};

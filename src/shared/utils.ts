type LinkProps = {
  isActive: boolean;
};

export const highlightedLinkStyleIfActive = ({ isActive }: LinkProps) => {
  return isActive ? { textDecoration: "underline" } : undefined;
};

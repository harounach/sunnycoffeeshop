"use client";

import classNames from "classnames";

interface IconButtonProps {
  title?: string;
  color?: "primary" | "danger";
  hasBG?: boolean;
  mini?: boolean;
  onClick?: () => void;
  customClasses?: string;
  children: React.ReactNode;
}

export default function IconButton({
  title,
  color,
  hasBG,
  mini,
  onClick,
  customClasses,
  children,
}: IconButtonProps) {
  const classes = classNames(
    "icon-btn",
    { "icon-btn--primary": color === "primary" },
    { "icon-btn--danger": color === "danger" },
    { "icon-btn--bg": hasBG },
    { "icon-btn--mini": mini },
    customClasses,
  );

  const titleText = title ? title : "";

  return (
    <button
      className={classes}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      title={titleText}
    >
      {children}
    </button>
  );
}

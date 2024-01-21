import Link from "next/link";
import classNames from "classnames";

interface IconButtonProps {
  url?: string;
  color?: "primary" | "danger";
  hasBG?: boolean;
  mini?: boolean;
  onClick?: () => void;
  customClasses?: string;
  children: React.ReactNode;
}

export default function IconButton({
  url,
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

  // If there is a "url" prop we want to the button to be a link
  if (url) {
    return (
      <Link className={classes} href={url}>
        {children}
      </Link>
    );
  }

  // otherwise we just return button element
  return (
    <button
      className={classes}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}

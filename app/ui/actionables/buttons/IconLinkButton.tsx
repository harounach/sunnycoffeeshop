import Link from "next/link";
import classNames from "classnames";

interface IconLinkButtonProps {
  title?: string;
  url: string;
  color?: "primary" | "danger";
  hasBG?: boolean;
  mini?: boolean;
  customClasses?: string;
  children: React.ReactNode;
}

export default function IconLinkButton({
  title,
  url,
  color,
  hasBG,
  mini,
  customClasses,
  children,
}: IconLinkButtonProps) {
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
    <Link className={classes} href={url} title={titleText}>
      {children}
    </Link>
  );
}

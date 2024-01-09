import Link from "next/link";
import classNames from "classnames";

interface SidebarItemProps {
  label: string;
  url: string;
  customeClasses?: string;
  children: React.ReactNode;
}

export default function SidebarItem({
  label,
  url,
  customeClasses,
  children,
}: SidebarItemProps) {
  const classes = classNames("sidebar__link title-base", customeClasses);

  return (
    <Link className={classes} href={url}>
      <span className="sidebar__icon">{children}</span> {label}
    </Link>
  );
}

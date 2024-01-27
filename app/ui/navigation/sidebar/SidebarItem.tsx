"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const classes = classNames(
    "sidebar__link title-base",
    { "sidebar__link--active": url === pathname },
    customeClasses,
  );

  return (
    <Link className={classes} href={url}>
      <span className="sidebar__icon">{children}</span> {label}
    </Link>
  );
}

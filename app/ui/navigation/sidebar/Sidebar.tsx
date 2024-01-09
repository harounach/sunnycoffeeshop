import Link from "next/link";
import classNames from "classnames";

interface SidebarProps {
  customeClasses?: string;
  children: React.ReactNode;
}

export default function Sidebar({ customeClasses, children }: SidebarProps) {
  const classes = classNames("sidebar", customeClasses);

  return (
    <aside className={classes}>
      <div className="sidebar__header">
        <h2 className="sidebar__title title-medium">John Doe</h2>
        <p className="sidebar__desc body-base">Joined on 12 Dec 2022</p>
      </div>
      <ul className="sidebar__list">{children}</ul>
    </aside>
  );
}

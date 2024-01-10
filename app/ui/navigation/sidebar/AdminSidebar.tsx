import classNames from "classnames";

interface AdminSidebarProps {
  customeClasses?: string;
  children: React.ReactNode;
}

export default function AdminSidebar({
  customeClasses,
  children,
}: AdminSidebarProps) {
  const classes = classNames("sidebar", customeClasses);

  return (
    <aside className={classes}>
      <div className="sidebar__header">
        <h2 className="sidebar__title title-medium">John Doe</h2>
        <p className="sidebar__desc body-base">Manage your coffee shop</p>
      </div>
      <ul className="sidebar__list">{children}</ul>
    </aside>
  );
}

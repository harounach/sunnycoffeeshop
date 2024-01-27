import { logout } from "@/app/lib/actions/auth";
import { signOut } from "@/auth";

import classNames from "classnames";

interface SidebarLogoutItemProps {
  label: string;
  customClasses?: string;
  children: React.ReactNode;
}

export default function SidebarLogoutItem({
  label,
  customClasses,
  children,
}: SidebarLogoutItemProps) {
  const classes = classNames("sidebar__logout", customClasses);

  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className={classes}
    >
      <button className="sidebar__link title-base">
        <span className="sidebar__icon">{children}</span> {label}
      </button>
    </form>
  );
}

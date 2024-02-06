import classNames from "classnames";
import SidebarItem from "./SidebarItem";
import {
  BsBasket2Fill,
  BsBoxArrowRight,
  BsCupHotFill,
  BsGrid1X2Fill,
  BsPeopleFill,
} from "react-icons/bs";
import SidebarLogoutItem from "./SidebarLogoutItem";

interface AdminSidebarProps {
  customeClasses?: string;
}

export default function AdminSidebar({ customeClasses }: AdminSidebarProps) {
  const classes = classNames("sidebar", customeClasses);

  return (
    <aside className={classes}>
      <h2 className="sidebar__header title-medium">Admin</h2>

      <ul className="sidebar__list">
        {/* Dashboard */}
        <SidebarItem label="Dashboard" url="/admin">
          <BsGrid1X2Fill />
        </SidebarItem>

        {/* Products */}
        <SidebarItem label="Products" url="/admin/products">
          <BsCupHotFill />
        </SidebarItem>

        {/* Orders */}
        <SidebarItem label="Orders" url="/admin/orders">
          <BsBasket2Fill />
        </SidebarItem>

        {/* Users */}
        <SidebarItem label="Users" url="/admin/users">
          <BsPeopleFill />
        </SidebarItem>

        {/* Logout */}
        <SidebarLogoutItem label="Logout">
          <BsBoxArrowRight />
        </SidebarLogoutItem>
      </ul>
    </aside>
  );
}

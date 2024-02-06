import classNames from "classnames";
import {
  BsBasket2Fill,
  BsBoxArrowRight,
  BsHeartFill,
  BsPersonCircle,
} from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import SidebarLogoutItem from "./SidebarLogoutItem";

interface SidebarProps {
  customeClasses?: string;
}

export default function Sidebar({ customeClasses }: SidebarProps) {
  const classes = classNames("sidebar", customeClasses);

  return (
    <aside className={classes}>
      <h2 className="sidebar__header title-medium">Account</h2>
      <ul className="sidebar__list">
        <SidebarItem label="Profile" url="/account">
          <BsPersonCircle />
        </SidebarItem>
        <SidebarItem label="Order history" url="/account/orders">
          <BsBasket2Fill />
        </SidebarItem>
        <SidebarItem label="Favorites" url="/account/favorite">
          <BsHeartFill />
        </SidebarItem>
        <SidebarLogoutItem label="Logout">
          <BsBoxArrowRight />
        </SidebarLogoutItem>
      </ul>
    </aside>
  );
}

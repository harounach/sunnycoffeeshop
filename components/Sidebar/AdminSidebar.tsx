import React from "react";
import {
  faBarsProgress,
  faRightFromBracket,
  faShoppingBasket,
  faTag,
  faUserGroup,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { BaseProps } from "@/types/BaseProps";
import IconTextButton from "@/components/Button/IconTextButton";
import { deleteUser } from "@/state/userSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { selectUser } from "@/state/userSlice";
import User from "@/types/User";
import { formatFriendyDate } from "@/lib/dateUtils";

interface AdminSidebarProps extends BaseProps {
  dashboard?: boolean;
  products?: boolean;
  orders?: boolean;
  users?: boolean;
  settings?: boolean;
}

const AdminSidebar = ({
  dashboard,
  products,
  orders,
  users,
  settings,
}: AdminSidebarProps) => {
  const activeTabColor = (value?: boolean) => {
    return value ? "primary" : "default";
  };

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser) as User;

  const logOut = () => {
    dispatch(deleteUser());
  };

  return (
    <div className="col-span-3 hidden bg-neutral-100 px-6 py-4 md:block">
      <h2 className="mb-4 text-center text-xl">Admin: {user?.name}</h2>
      <p className="mb-14 text-center text-base text-neutral-500">
        Joined on {user ? formatFriendyDate(user?.createdAt as string) : ""}
      </p>

      <div className="flex justify-center">
        <ul className="inline-flex flex-col gap-4">
          <li>
            <IconTextButton
              label="Dashboard"
              icon={faBarsProgress}
              variant={activeTabColor(dashboard)}
              url="/admin/dashboard"
            />
          </li>
          <li>
            <IconTextButton
              label="Products"
              icon={faShoppingBasket}
              variant={activeTabColor(products)}
              url="/admin/products"
            />
          </li>

          <li>
            <IconTextButton
              label="Orders"
              icon={faTag}
              variant={activeTabColor(orders)}
              url="/admin/orders"
            />
          </li>
          <li>
            <IconTextButton
              label="Users"
              icon={faUserGroup}
              variant={activeTabColor(users)}
              url="/admin/users"
            />
          </li>
          <li>
            <IconTextButton
              label="Settings"
              icon={faGear}
              variant={activeTabColor(settings)}
              url="/admin/settings"
            />
          </li>
          <li>
            <IconTextButton
              label="Logout"
              icon={faRightFromBracket}
              variant="default"
              onClick={logOut}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;

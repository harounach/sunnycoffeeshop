import { BaseProps } from "@/types/BaseProps";
import {
  faHeart,
  faRightFromBracket,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import IconTextButton from "@/components/Button/IconTextButton";
import { deleteUser } from "@/state/userSlice";
import { useAppDispatch } from "@/state/hooks";

interface SidebarProps extends BaseProps {
  profile?: boolean;
  history?: boolean;
  favorite?: boolean;
}

const Sidebar = ({ profile, history, favorite }: SidebarProps) => {
  const activeTabColor = (value?: boolean) => {
    return value ? "primary" : "default";
  };

  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(deleteUser());
  };

  return (
    <div className="col-span-3 bg-neutral-100 px-6 py-4">
      <h2 className="mb-4 text-center text-xl">John Doe</h2>
      <p className="mb-14 text-center text-base text-neutral-500">
        Joined on 12 Dec 2022
      </p>

      <div className="flex justify-center">
        <ul className="inline-flex flex-col gap-4">
          <li>
            <IconTextButton
              label="Profile Settings"
              icon={faUser}
              variant={activeTabColor(profile)}
              url="/account/profile"
            />
          </li>
          <li>
            <IconTextButton
              label="Order history"
              icon={faShoppingBasket}
              variant={activeTabColor(history)}
              url="/account/orders"
            />
          </li>
          <li>
            <IconTextButton
              label="Favorites"
              icon={faHeart}
              variant={activeTabColor(favorite)}
              url="/account/favorite"
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

export default Sidebar;

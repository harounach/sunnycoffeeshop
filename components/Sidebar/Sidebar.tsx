import { BaseProps } from "@/types/BaseProps";
import {
  faHeart,
  faRightFromBracket,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface SidebarProps extends BaseProps {
  profile?: boolean;
  history?: boolean;
  favorite?: boolean;
}

const Sidebar = ({ profile, history, favorite }: SidebarProps) => {
  const activeTabColor = (value?: boolean) => {
    return value ? "text-yellow-700" : "text-neutral-600";
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
            <Link
              className={`flex items-center gap-4 ${activeTabColor(profile)}`}
              href={"/account/profile"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faUser} />{" "}
              <span className="text-base">Profile Settings</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center gap-4 ${activeTabColor(history)}`}
              href={"/account/history"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faShoppingBasket} />{" "}
              <span className="text-base">Order history</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center gap-4 ${activeTabColor(favorite)}`}
              href={"/account/favorite"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faHeart} />{" "}
              <span className="text-base">Favorites</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-4 text-neutral-600"
              href={"/account/profile"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faRightFromBracket} />{" "}
              <span className="text-base">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faRightFromBracket,
  faShoppingBasket,
  faTag,
  faUserGroup,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { BaseProps } from "@/types/BaseProps";

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
    return value ? "text-yellow-700" : "text-neutral-600";
  };

  return (
    <div className="col-span-3 bg-neutral-100 px-6 py-4">
      <h2 className="mb-4 text-center text-xl">Admin: John Doe</h2>
      <p className="mb-14 text-center text-base text-neutral-500">
        Joined on 12 Dec 2022
      </p>

      <div className="flex justify-center">
        <ul className="inline-flex flex-col gap-4">
          <li>
            <Link
              className={`flex items-center gap-4 ${activeTabColor(dashboard)}`}
              href={"/admin/dashboard"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faBarsProgress} />
              <span className="text-base">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center gap-4 ${activeTabColor(products)}`}
              href={"/admin/products"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faShoppingBasket} />
              <span className="text-base">Products</span>
            </Link>
          </li>

          <li>
            <Link
              className={`flex items-center gap-4 ${activeTabColor(orders)}`}
              href={"/admin/orders"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faTag} />{" "}
              <span className="text-base">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center gap-4 ${activeTabColor(users)}`}
              href={"/admin/users"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faUserGroup} />{" "}
              <span className="text-base">Users</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center gap-4 ${activeTabColor(settings)}`}
              href={"/admin/dashboard"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faGear} />
              <span className="text-base">Settings</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-4 text-neutral-600"
              href={"/admin/dashboard"}
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faRightFromBracket} />
              <span className="text-base">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;

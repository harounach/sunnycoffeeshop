import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import { BaseProps } from "@/types/BaseProps";
import Button from "../Button/Button";
import IconButton from "../Button/IconButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface AdminAppbarProps extends BaseProps {}

const AdminAppbar = ({}: AdminAppbarProps) => {
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => {
    setOpen(!open);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white pt-2 pb-2 shadow-sm md:static md:bg-transparent">
      <div className="container mx-auto">
        <div className="flex items-center">
          <Link className="flex items-center gap-4" href={"/admin/dashboard"}>
            <Image src={Logo} width={56} height={56} alt={"Logo"} priority />
            <span className="text-xl font-medium text-yellow-700">Admin</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <IconButton
              variant="primaryIcon"
              size="normal"
              icon={faBars}
              customeClasses="md:hidden"
              title="Menu button"
              onClick={toggleNavigation}
            />
            <ul
              className={`fixed left-0 top-16 z-20 mt-2 flex h-full w-10/12 -translate-x-full flex-col items-center gap-4 overflow-y-auto bg-gray-100 transition-transform md:static md:mt-0 md:h-auto md:w-auto md:translate-x-0 md:flex-row md:items-center md:bg-transparent ${
                open ? "translate-x-0" : ""
              }`}
            >
              <li className="p-4 md:p-0">
                <Link className="text-black hover:text-yellow-700" href={"/"}>
                  Home
                </Link>
              </li>
              <li className="p-4 md:hidden md:p-0">
                <Link
                  className="text-black hover:text-yellow-700"
                  href={"/admin/dashboard"}
                >
                  Dashboard
                </Link>
              </li>
              <li className="p-4 md:hidden md:p-0">
                <Link
                  className="text-black hover:text-yellow-700"
                  href={"/admin/products"}
                >
                  Products
                </Link>
              </li>
              <li className="p-4 md:hidden md:p-0">
                <Link
                  className="text-black hover:text-yellow-700"
                  href={"/admin/orders"}
                >
                  Orders
                </Link>
              </li>
              <li className="p-4 md:hidden md:p-0">
                <Link
                  className="text-black hover:text-yellow-700"
                  href={"/admin/users"}
                >
                  Users
                </Link>
              </li>
              <li className="p-4 md:hidden md:p-0">
                <Link
                  className="text-black hover:text-yellow-700"
                  href={"/admin/settings"}
                >
                  Settings
                </Link>
              </li>
              <li className="p-4 md:p-0">
                <Button
                  variant="primary"
                  url="/account/profile"
                  label="Account"
                />
              </li>
            </ul>
            <div
              id="skrim"
              className={`pointer-events-none fixed left-0 top-16 z-10 mt-2 h-full w-full bg-black opacity-0 transition-opacity md:hidden ${
                open ? "opacity-40" : ""
              }`}
            ></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AdminAppbar;

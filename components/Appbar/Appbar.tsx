import React, { FormEvent, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { faCartPlus, faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../public/images/logo.svg";
import TextField from "../Form/TextField";
import { BaseProps } from "@/types/BaseProps";
import Button from "../Button/Button";
import IconButton from "../Button/IconButton";
import { useAppSelector } from "@/state/hooks";
import { selectTotalCartProducts } from "@/state/cartSlice";
import { useAuthStatus } from "@/hooks/authHook";

interface AppbarProps extends BaseProps {}

const Appbar = ({}: AppbarProps) => {
  const router = useRouter();
  const isLoggedIn = useAuthStatus();
  const [status, setStatus] = useState(false);
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const totalCartProducts = useAppSelector(selectTotalCartProducts);
  const cartBadge = totalCartProducts > 0 ? `${totalCartProducts}` : "";

  useEffect(() => {
    setStatus(isLoggedIn);
  }, [isLoggedIn]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push({ pathname: "/search", query: { q: search } });
  };

  const toggleNavigation = () => {
    setOpen(!open);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white pt-2 pb-2 shadow-sm md:static md:bg-transparent">
      <div className="container mx-auto">
        <div className="flex items-center">
          <Link className="flex items-center gap-4" href={"/"}>
            <Image src={Logo} width={56} height={56} alt={"Logo"} priority />
            <span className="hidden text-xl font-medium text-yellow-700 md:inline">
              Sunny Coffee Shop
            </span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <form onSubmit={handleSearchSubmit}>
              <TextField
                name="q"
                placeholder="Search..."
                type="text"
                value={search}
                onChange={setSearch}
              />
            </form>
            <IconButton
              variant="primaryIcon"
              size="normal"
              icon={faBars}
              customeClasses="md:hidden"
              title="Menu button"
              onClick={toggleNavigation}
            />
            <ul
              className={`fixed left-0 top-16 z-20 mt-2 flex h-full w-10/12 -translate-x-full flex-col items-center gap-4 bg-gray-100 transition-transform md:static md:mt-0 md:h-auto md:w-auto md:translate-x-0 md:flex-row md:items-center md:bg-transparent ${
                open ? "translate-x-0" : ""
              }`}
            >
              <li className="p-4 md:p-0">
                <Link className="text-black hover:text-yellow-700" href={"/"}>
                  Home
                </Link>
              </li>
              <li className="p-4 md:p-0">
                <Link
                  className="text-black hover:text-yellow-700"
                  href={"/products"}
                >
                  Shop
                </Link>
              </li>
              <li className="p-4 md:p-0">
                <IconButton
                  variant="primaryIcon"
                  size="normal"
                  url="/cart"
                  icon={faCartPlus}
                  badge={cartBadge}
                />
              </li>
              <li className="p-4 md:p-0">
                {!status ? (
                  <Button variant="primary" url="/login" label="Login" />
                ) : (
                  <Button
                    variant="primary"
                    url="/account/profile"
                    label="Account"
                  />
                )}
              </li>
              <li className="p-4 md:p-0">
                <Button
                  variant="primary"
                  url="/admin/dashboard"
                  label="Admin"
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

export default Appbar;

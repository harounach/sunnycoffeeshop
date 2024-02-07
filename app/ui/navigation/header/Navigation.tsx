"use client";

import Link from "next/link";
import classNames from "classnames";
import CartButton from "@/app/ui/actionables/buttons/CartButton";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import MenuButton from "./MenuButton";
import { useState } from "react";

interface NavigationProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
  customClasses?: string;
}

export default function Navigation({
  isLoggedIn,
  isAdmin,
  customClasses,
}: NavigationProps) {
  const [open, setOpen] = useState(false);

  const parentClasses = classNames("header__nav", {
    "header__nav--open": open,
  });
  const navClasses = classNames("nav", customClasses);

  const handleOpenMenu = () => {
    console.log("Clicked");
    setOpen(!open);
  };

  return (
    <>
      <div className={parentClasses}>
        <nav className={navClasses}>
          <ul className="nav__primary">
            <li>
              <Link className="nav__link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav__link" href="/products">
                Shop
              </Link>
            </li>
            <li>
              <CartButton />
            </li>

            <AuthButton isLoggedIn={isLoggedIn} />
          </ul>

          {/* Account links: mobile only */}
          {isLoggedIn && <div className="nav__divider"></div>}
          {isLoggedIn && <AccountLinks />}

          {/* Admin links: mobile only */}
          {isLoggedIn && isAdmin && <div className="nav__divider"></div>}
          {isLoggedIn && isAdmin && <AdminLinks />}

          {/* Logout button */}
          {isLoggedIn && <div className="nav__divider"></div>}
          {isLoggedIn && <LogoutButton />}
        </nav>
      </div>
      <div className="header__menu-btn">
        <MenuButton open={open} onOpen={handleOpenMenu} />
      </div>
    </>
  );
}

function AuthButton({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn)
    return (
      <li className="nav__btn">
        <LinkButton url="/account" label="Account" />
      </li>
    );

  return (
    <li>
      <LoginButton />
    </li>
  );
}

function AccountLinks() {
  return (
    <ul className="nav__account">
      <li>
        <span className="nav__label title-medium">Account</span>
      </li>
      <li>
        <Link className="nav__link" href="/account">
          Profile
        </Link>
      </li>
      <li>
        <Link className="nav__link" href="/account/orders">
          Orders
        </Link>
      </li>
      <li>
        <Link className="nav__link" href="/account/favorite">
          Favorite
        </Link>
      </li>
    </ul>
  );
}

function AdminLinks() {
  return (
    <ul className="nav__admin">
      <li>
        <span className="nav__label title-medium">Admin</span>
      </li>
      <li>
        <Link className="nav__link" href="/admin">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="nav__link" href="/admin/products">
          Products
        </Link>
      </li>
      <li>
        <Link className="nav__link" href="/admin/orders">
          Orders
        </Link>
      </li>
      <li>
        <Link className="nav__link" href="/admin/users">
          Users
        </Link>
      </li>
    </ul>
  );
}

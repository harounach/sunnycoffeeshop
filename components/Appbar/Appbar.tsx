import React, { SyntheticEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../public/images/logo.svg";
import TextField from "../Form/TextField";
import { BaseProps } from "@/types/BaseProps";
import Button from "../Button/Button";
import IconButton from "../Button/IconButton";
import { useAppSelector } from "@/state/hooks";
import { selectTotalCartProducts } from "@/state/cartSlice";

interface AppbarProps extends BaseProps {}

const Appbar = ({}: AppbarProps) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const totalCartProducts = useAppSelector(selectTotalCartProducts);
  const cartBadge = totalCartProducts > 0 ? `${totalCartProducts}` : "";

  const handleSearchSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push({ pathname: "/search", query: { q: search } });
  };

  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex items-center">
          <Link className="flex items-center gap-4" href={"/"}>
            <Image src={Logo} width={56} height={56} alt={"Logo"} priority />
            <span className="text-xl font-medium text-yellow-700">
              Sunny Coffee Shop
            </span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <ul className="mr-8 flex gap-5">
              <li>
                <Link className="text-black hover:text-yellow-700" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-black hover:text-yellow-700"
                  href={"/shop"}
                >
                  Shop
                </Link>
              </li>
            </ul>
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
              url="/cart"
              icon={faCartPlus}
              badge={cartBadge}
            />
            <Button variant="primary" url="/register" label="Sign Up" />
            <Button variant="primary" url="/account/profile" label="Account" />
            <Button variant="primary" url="/admin/dashboard" label="Admin" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Appbar;

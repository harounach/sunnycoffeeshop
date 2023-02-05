import React from "react";
import Image from "next/image";
import Link from "next/link";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../public/images/logo.svg";
import TextField from "../Form/TextField";
import { BaseProps } from "@/types/BaseProps";
import Button from "../Button/Button";
import IconButton from "../Button/IconButton";

interface AppbarProps extends BaseProps {}

const Appbar = ({}: AppbarProps) => {
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
            <form>
              <TextField name="search" placeholder="Search..." />
            </form>
            <IconButton
              variant="primaryIcon"
              size="normal"
              url="/cart"
              icon={faCartPlus}
            />
            <Button url="/register" label="Sign Up" />
            <Button url="/account/profile" label="Account" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Appbar;

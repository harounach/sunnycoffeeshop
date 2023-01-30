import React from "react";
import Image from "next/image";
import Link from "next/link";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../public/images/logo.svg";
import IconLinkButton from "../Button/IconLinkButton";
import LinkButton from "../Button/LinkButton";
import TextField from "../Form/TextField";

const Appbar = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex items-center">
          <Link className="flex items-center gap-4" href={"/"}>
            <Image src={Logo} width={56} height={56} alt={"Logo"} priority />
            <span className="text-xl text-yellow-700 font-medium">
              Sunny Coffee Shop
            </span>
          </Link>
          <nav className="flex items-center ml-auto gap-4">
            <ul className="flex gap-5 mr-8">
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
            <IconLinkButton url="/cart" icon={faCartPlus} />
            <LinkButton url="/register" label="Sign Up" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Appbar;

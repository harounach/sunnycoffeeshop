import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import { BaseProps } from "@/types/BaseProps";
import Button from "../Button/Button";

interface AdminAppbarProps extends BaseProps {}

const AdminAppbar = ({}: AdminAppbarProps) => {
  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex items-center">
          <Link className="flex items-center gap-4" href={"/admin/dashboard"}>
            <Image src={Logo} width={56} height={56} alt={"Logo"} priority />
            <span className="text-xl font-medium text-yellow-700">Admin</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <Button variant="primary" url="/register" label="Sign Up" />
            <Button variant="primary" url="/account/profile" label="Account" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AdminAppbar;

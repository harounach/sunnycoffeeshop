import React from "react";
import Link from "next/link";
import { BaseProps } from "@/types/BaseProps";

interface LinkButtonProps extends BaseProps {
  url: string;
  label: string;
}

const LinkButton = ({ url, label }: LinkButtonProps) => {
  return (
    <Link
      className="bg-yellow-700 text-white text-base rounded-md px-4 py-2"
      href={url}
    >
      {label}
    </Link>
  );
};

export default LinkButton;

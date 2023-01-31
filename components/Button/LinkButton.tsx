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
      className="rounded-md bg-yellow-700 px-4 py-2 text-base text-white"
      href={url}
    >
      {label}
    </Link>
  );
};

export default LinkButton;

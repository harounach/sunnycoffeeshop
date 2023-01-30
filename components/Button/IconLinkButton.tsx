import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { BaseProps } from "@/types/BaseProps";

interface IconLinkButton extends BaseProps {
  url: string;
  icon: IconDefinition;
}

const IconLinkButton = ({ url, icon }: IconLinkButton) => {
  return (
    <Link
      className="w-11 h-11 rounded-full flex justify-center items-center text-yellow-700"
      href={url}
    >
      <FontAwesomeIcon className="w-6 h-6" icon={icon} />
    </Link>
  );
};

export default IconLinkButton;

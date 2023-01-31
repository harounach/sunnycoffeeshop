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
      className="flex h-11 w-11 items-center justify-center rounded-full text-yellow-700"
      href={url}
    >
      <FontAwesomeIcon className="h-6 w-6" icon={icon} />
    </Link>
  );
};

export default IconLinkButton;

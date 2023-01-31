import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { BaseProps } from "@/types/BaseProps";

interface SocialButtonProps extends BaseProps {
  url: string;
  icon: IconDefinition;
}

const SocialButton = ({ url, icon }: SocialButtonProps) => {
  return (
    <Link
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-yellow-700 hover:bg-yellow-700 hover:text-white"
      href={url}
    >
      <FontAwesomeIcon className="h-7 w-7" icon={icon} />
    </Link>
  );
};

export default SocialButton;

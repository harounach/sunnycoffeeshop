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
      className="w-12 h-12 bg-white text-yellow-700 hover:bg-yellow-700 hover:text-white flex justify-center items-center rounded-full"
      href={url}
    >
      <FontAwesomeIcon className="w-7 h-7" icon={icon} />
    </Link>
  );
};

export default SocialButton;

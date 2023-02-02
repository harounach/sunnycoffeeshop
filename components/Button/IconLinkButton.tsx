import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { BaseProps } from "@/types/BaseProps";

type Variant = "default" | "primary" | "primaryIcon" | "secondary" | "danger";
type Size = "normal" | "small";

interface IconLinkButton extends BaseProps {
  url: string;
  icon: IconDefinition;
  variant: Variant;
  size: Size;
  onClick?: () => void;
}

const IconLinkButton = ({
  url,
  icon,
  variant,
  size,
  onClick,
}: IconLinkButton) => {
  const variantClasses = {
    default: "bg-gray-200 text-black",
    primary: "bg-yellow-700 text-white",
    primaryIcon: "bg-transparent text-yellow-700",
    secondary: "bg-gray-200 text-black",
    danger: "bg-red-500 text-white",
  };

  const sizeClasses = {
    normal: "h-11 w-11",
    small: "h-9 w-9",
  };

  return (
    <Link
      className={`flex items-center justify-center rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}
      href={url}
    >
      <FontAwesomeIcon className="h-6 w-6" icon={icon} />
    </Link>
  );
};

export default IconLinkButton;

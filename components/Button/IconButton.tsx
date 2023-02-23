import React from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BaseProps } from "@/types/BaseProps";
import Link from "next/link";

type ButtonTypes = "button" | "submit" | "reset";
type Variant =
  | "default"
  | "primary"
  | "primaryIcon"
  | "secondary"
  | "danger"
  | "white";
type Size = "normal" | "small";

interface IconButtonProps extends BaseProps {
  url?: string;
  icon: IconDefinition;
  variant: Variant;
  size: Size;
  type?: ButtonTypes;
  onClick?: () => void;
  disabled?: boolean;
}

const IconButton = ({
  url,
  icon,
  variant,
  size,
  type,
  onClick,
  customeClasses,
}: IconButtonProps) => {
  const variantClasses = {
    default: "bg-gray-200 text-black",
    primary: "bg-yellow-700 text-white",
    primaryIcon: "bg-transparent text-yellow-700",
    secondary: "bg-gray-200 text-black",
    danger: "bg-red-500 text-white",
    white: "bg-white text-black",
  };

  const sizeClasses = {
    normal: "h-11 w-11",
    small: "h-9 w-9",
  };

  // If there is a "url" prop we want to the button to be a link
  if (url) {
    return (
      <Link
        className={`flex items-center justify-center rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${customeClasses}`}
        href={url}
        onClick={onClick}
      >
        <FontAwesomeIcon className="h-6 w-6" icon={icon} />
      </Link>
    );
  }

  // otherwise we just return button element
  return (
    <button
      className={`flex items-center justify-center rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${customeClasses}`}
      type={type}
      onClick={onClick}
    >
      <FontAwesomeIcon className="h-6 w-6" icon={icon} />
    </button>
  );
};

export default IconButton;

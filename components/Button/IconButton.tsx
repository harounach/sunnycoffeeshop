import React from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BaseProps } from "@/types/BaseProps";

type Variant = "default" | "primary" | "primaryIcon" | "secondary" | "danger";
type Size = "normal" | "small";

interface IconButtonProps extends BaseProps {
  icon: IconDefinition;
  variant: Variant;
  size: Size;
  onClick?: () => void;
}

const IconButton = ({ icon, variant, size, onClick }: IconButtonProps) => {
  const variantClasses = {
    default: "bg-gray-200 text-black",
    primary: "bg-yellow-700 text-white",
    primaryIcon: "bg-gray-200 text-black",
    secondary: "bg-gray-200 text-black",
    danger: "bg-red-500 text-white",
  };

  const sizeClasses = {
    normal: "h-11 w-11",
    small: "h-9 w-9",
  };

  return (
    <button
      className={`flex items-center justify-center rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      <FontAwesomeIcon className="h-6 w-6" icon={icon} />
    </button>
  );
};

export default IconButton;

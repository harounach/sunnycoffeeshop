import React from "react";
import Link from "next/link";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseProps } from "@/types/BaseProps";

type ButtonTypes = "button" | "submit" | "reset";
type Variant = "default" | "primary";

interface IconTextButtonProps extends BaseProps {
  label: string;
  url?: string;
  icon: IconDefinition;
  variant: Variant;
  type?: ButtonTypes;
  onClick?: () => void;
  disabled?: boolean;
}

const IconTextButton = ({
  label,
  url,
  icon,
  variant,
  type,
  onClick,
  customeClasses,
}: IconTextButtonProps) => {
  const variantClasses = {
    default: "bg-transparent text-neutral-600",
    primary: "bg-transparent text-yellow-700",
  };

  // If there is a "url" prop we want to the button to be a link
  if (url) {
    return (
      <Link
        className={`flex items-center gap-4 ${variantClasses[variant]} ${customeClasses}`}
        href={url}
        onClick={onClick}
      >
        <FontAwesomeIcon className="h-6 w-6" icon={icon} />{" "}
        <span className="text-base">{label}</span>
      </Link>
    );
  }

  // otherwise we just return button element
  return (
    <button
      className={`flex items-center gap-4 ${variantClasses[variant]} ${customeClasses}`}
      type={type}
      onClick={onClick}
    >
      <FontAwesomeIcon className="h-6 w-6" icon={icon} />{" "}
      <span className="text-base">{label}</span>
    </button>
  );
};

export default IconTextButton;

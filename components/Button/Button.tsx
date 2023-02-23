import React from "react";
import Link from "next/link";
import { BaseProps } from "@/types/BaseProps";

type ButtonTypes = "button" | "submit" | "reset";
type Variant = "default" | "primary" | "secondary" | "danger" | "white";

interface ButtonProps extends BaseProps {
  label: string;
  url?: string;
  variant: Variant;
  type?: ButtonTypes;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  label,
  url,
  variant,
  type,
  onClick,
  customeClasses,
}: ButtonProps) => {
  const variantClasses = {
    default: "bg-gray-200 text-black",
    primary: "bg-yellow-700 text-white",
    secondary: "bg-gray-200 text-black",
    danger: "bg-red-500 text-white",
    white: "bg-white text-black",
  };

  // If there is a "url" prop we want to the button to be a link
  if (url) {
    return (
      <Link
        className={`rounded-md  px-4 py-2 text-center text-base ${variantClasses[variant]} ${customeClasses}`}
        href={url}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }

  // otherwise we just return button element
  return (
    <button
      className={`rounded-md px-4 py-2 text-center text-base ${variantClasses[variant]} ${customeClasses}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

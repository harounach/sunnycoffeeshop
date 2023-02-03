import React from "react";
import Link from "next/link";
import { BaseProps } from "@/types/BaseProps";

type ButtonTypes = "button" | "submit" | "reset";

interface ButtonProps extends BaseProps {
  label: string;
  url?: string;
  type?: ButtonTypes;
  onClick?: () => void;
}

const Button = ({ label, url, type, onClick, customeClasses }: ButtonProps) => {
  // If there is a "url" prop we want to the button to be a link
  if (url) {
    return (
      <Link
        className={`rounded-md bg-yellow-700 px-4 py-2 text-center text-base text-white ${customeClasses}`}
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
      className={`rounded-md bg-yellow-700 px-4 py-2 text-center text-base text-white ${customeClasses}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

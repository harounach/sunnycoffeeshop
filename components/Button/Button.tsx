import { BaseProps } from "@/types/BaseProps";
import React from "react";

interface ButtonProps extends BaseProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="rounded-md bg-yellow-700 px-4 py-2 text-base text-white">
      {label}
    </button>
  );
};

export default Button;

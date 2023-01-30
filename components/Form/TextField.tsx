import { BaseProps } from "@/types/BaseProps";
import React from "react";

interface TextFieldProps extends BaseProps {
  placeholder?: string;
  name: string;
}

const TextField = ({ placeholder, name }: TextFieldProps) => {
  return (
    <input
      className="h-10 border-2 border-yellow-700 pl-4 rounded-md"
      type="text"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default TextField;

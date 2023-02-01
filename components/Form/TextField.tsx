import { BaseProps } from "@/types/BaseProps";
import React from "react";

interface TextFieldProps extends BaseProps {
  placeholder?: string;
  name: string;
  id?: string;
}

const TextField = ({ placeholder, name, id }: TextFieldProps) => {
  return (
    <input
      className="h-10 rounded-md border-2 border-yellow-700 pl-4"
      id={id}
      type="text"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default TextField;

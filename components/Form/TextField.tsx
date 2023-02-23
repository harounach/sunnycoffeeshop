import { BaseProps } from "@/types/BaseProps";
import React from "react";

interface TextFieldProps extends BaseProps {
  placeholder?: string;
  name: string;
  id?: string;
  value?: string;
  type: string;
  onChange: (text: string) => void;
}

const TextField = ({
  placeholder,
  name,
  id,
  type,
  value,
  onChange,
}: TextFieldProps) => {
  return (
    <input
      className="h-10 rounded-md border-2 border-yellow-700 pl-4"
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextField;

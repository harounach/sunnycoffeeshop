import { BaseProps } from "@/types/BaseProps";
import React from "react";

interface ErrorBoxProps extends BaseProps {
  message: string;
}

const ErrorBox = ({ message, customeClasses }: ErrorBoxProps) => {
  return (
    <div className={`bg-red-100 p-4 text-red-600 ${customeClasses}`}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBox;

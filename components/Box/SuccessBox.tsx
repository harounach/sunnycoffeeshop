import { BaseProps } from "@/types/BaseProps";
import React from "react";

interface SuccessBoxProps extends BaseProps {
  message: string;
}

const SuccessBox = ({ message, customeClasses }: SuccessBoxProps) => {
  return (
    <div className={`bg-green-200 p-4 text-green-700 ${customeClasses}`}>
      <p>{message}</p>
    </div>
  );
};

export default SuccessBox;

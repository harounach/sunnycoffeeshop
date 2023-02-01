import { BaseProps } from "@/types/BaseProps";
import React from "react";

interface ChipGroupProps extends BaseProps {}

const ChipGroup = ({ children }: ChipGroupProps) => {
  return <div className="flex justify-start gap-4">{children}</div>;
};

export default ChipGroup;

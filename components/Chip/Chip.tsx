import { BaseProps } from "@/types/BaseProps";
import React from "react";

type ChipVariant = "primary" | "secondary" | "default";

interface ChipProps extends BaseProps {
  label: string;
  variant: ChipVariant;
  onSelected?: () => void;
}

const Chip = ({ label, variant, onSelected }: ChipProps) => {
  const classes = {
    default: "",
  };
  return (
    <button className="flex h-9 items-center justify-center rounded-full bg-gray-200 px-4 py-3 text-base">
      {label}
    </button>
  );
};

export default Chip;

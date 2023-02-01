import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BaseProps } from "@/types/BaseProps";
import ICoffee from "@/types/ICoffee";

interface CoffeeCardProps extends BaseProps {
  coffeeItem: ICoffee;
}

const CoffeeCard = ({ coffeeItem }: CoffeeCardProps) => {
  return (
    <Link className="flex flex-col items-center gap-4" href={"#"}>
      <Image
        src={coffeeItem.image}
        width={320}
        height={240}
        alt={coffeeItem.title}
        className="rounded"
      />
      <h3 className="text-center text-xl">{coffeeItem.title}</h3>
      <h4 className="text-center text-lg text-yellow-700">{`$${coffeeItem.price}`}</h4>
    </Link>
  );
};

export default CoffeeCard;

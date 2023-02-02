import React from "react";

import {
  faMinus,
  faPlus,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { BaseProps } from "@/types/BaseProps";
import ICoffee from "@/types/ICoffee";
import Image from "next/image";
import IconButton from "../Button/IconButton";

interface PlaceOrderCardProps extends BaseProps {
  cartItem: ICoffee;
}

const PlaceOrderCard = ({ cartItem }: PlaceOrderCardProps) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div>
        <Image
          src={cartItem.image}
          width={200}
          height={200}
          alt={cartItem.title}
        />
      </div>
      <div className="col-span-3 flex items-center justify-between">
        <h3 className="text-xl">{cartItem.title}</h3>
        <h4 className="text-lg">(2)</h4>
        <h4 className="text-lg">{cartItem.price}</h4>
      </div>
    </div>
  );
};

export default PlaceOrderCard;

import Image from "next/image";
import IconButton from "../Button/IconButton";

import { BaseProps } from "@/types/BaseProps";
import ICoffee from "@/types/ICoffee";
import React from "react";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

interface FavoriteCardProps extends BaseProps {
  coffeeItem: ICoffee;
}

const FavoriteCard = ({ coffeeItem }: FavoriteCardProps) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div>
        <Image
          src={coffeeItem.image}
          width={200}
          height={200}
          alt={coffeeItem.title}
        />
      </div>
      <div className="col-span-3 flex items-center justify-between">
        <h3 className="text-xl">{coffeeItem.title}</h3>
        <h4 className="text-lg">{`$${coffeeItem.price}`}</h4>
        <div className="flex items-center gap-4">
          <IconButton icon={faHeart} size="normal" variant="primaryIcon" />
          <IconButton icon={faCartPlus} size="normal" variant="primaryIcon" />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;

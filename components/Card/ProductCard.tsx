import React from "react";

import { BaseProps } from "@/types/BaseProps";
import ICoffee from "@/types/ICoffee";
import Image from "next/image";
import IconButton from "../Button/IconButton";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

interface ProductCardProps extends BaseProps {
  coffeeItem: ICoffee;
}

const ProductCard = ({ coffeeItem }: ProductCardProps) => {
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
          <IconButton icon={faTrash} variant="primaryIcon" size="normal" />
          <IconButton
            icon={faPen}
            variant="primaryIcon"
            size="normal"
            url="/admin/editproduct"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

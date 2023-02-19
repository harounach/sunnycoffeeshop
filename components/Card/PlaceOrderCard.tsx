import React from "react";

import { BaseProps } from "@/types/BaseProps";
import Image from "next/image";
import Product from "@/types/Product";

interface PlaceOrderCardProps extends BaseProps {
  cartProduct: Product;
}

const PlaceOrderCard = ({ cartProduct }: PlaceOrderCardProps) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div>
        <Image
          src={cartProduct.image}
          width={200}
          height={200}
          alt={cartProduct.title}
        />
      </div>
      <div className="col-span-3 flex items-center justify-between">
        <h3 className="text-xl">{cartProduct.title}</h3>
        <h4 className="text-lg">(2)</h4>
        <h4 className="text-lg">{`$${cartProduct.price}`}</h4>
      </div>
    </div>
  );
};

export default PlaceOrderCard;

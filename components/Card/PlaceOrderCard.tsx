import React from "react";

import { BaseProps } from "@/types/BaseProps";
import Image from "next/image";
import { useAppSelector } from "@/state/hooks";
import { selectCartProductById } from "@/state/cartSlice";

interface PlaceOrderCardProps extends BaseProps {
  cartProductId: string;
}

const PlaceOrderCard = ({ cartProductId }: PlaceOrderCardProps) => {
  const cartProduct = useAppSelector((state) =>
    selectCartProductById(state, cartProductId)
  );

  if (!cartProduct) {
    return null;
  }

  const totalPrice = cartProduct.price * cartProduct.qty;

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
        <h4 className="text-lg">({cartProduct.qty})</h4>
        <h4 className="text-lg">{`$${totalPrice}`}</h4>
      </div>
    </div>
  );
};

export default PlaceOrderCard;

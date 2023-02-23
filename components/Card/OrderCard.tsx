import React from "react";

import { BaseProps } from "@/types/BaseProps";
import OrderItem from "@/types/OrderItem";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import {
  selectCartProductById,
} from "@/state/cartSlice";

interface OrderCardProps extends BaseProps {
  orderItem: OrderItem;
}

const OrderCard = ({ orderItem }: OrderCardProps) => {

  return (
    <div className="grid grid-cols-4 gap-6">
      <div>
        <Image
          src={orderItem.image}
          width={200}
          height={200}
          alt={orderItem.title}
        />
      </div>
      <div className="col-span-3 flex items-center justify-between">
        <h3 className="text-xl">{orderItem.title}</h3>
        <h4 className="text-lg">({orderItem.qty})</h4>
        <h4 className="text-lg">{`$${orderItem.price}`}</h4>
      </div>
    </div>
  );
};

export default OrderCard;

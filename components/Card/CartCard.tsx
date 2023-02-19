import React from "react";

import {
  faMinus,
  faPlus,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch } from "@/state/hooks";
import {
  cartQuantityPlus,
  cartQuantityMinus,
  cartDeleted,
} from "@/state/cartSlice";

import { BaseProps } from "@/types/BaseProps";
import Image from "next/image";
import IconButton from "../Button/IconButton";
import CartProduct from "@/types/CartProduct";

interface CartCardProps extends BaseProps {
  cartItem: CartProduct;
}

const CartCard = ({ cartItem }: CartCardProps) => {
  const dispatch = useAppDispatch();

  const onCartQtyPlus = () => {
    dispatch(cartQuantityPlus(cartItem._id));
  };
  const onCartQtyMinus = () => {
    dispatch(cartQuantityMinus(cartItem._id));
  };

  const onCartDeleted = () => {
    dispatch(cartDeleted(cartItem._id));
  };

  return (
    <div className="grid grid-cols-4 gap-6 border-2 border-gray-200 p-3">
      <div>
        <Image
          src={cartItem.image}
          width={200}
          height={200}
          alt={cartItem.title}
        />
      </div>
      <div className="col-span-3 flex flex-col justify-between">
        <div className="flex justify-between">
          <h3 className="text-xl">{cartItem.title}</h3>
          <h4 className="text-lg">{`$${cartItem.price}`}</h4>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <IconButton
              size="small"
              variant="default"
              icon={faMinus}
              onClick={onCartQtyMinus}
            />
            <span>{cartItem.qty}</span>
            <IconButton
              size="small"
              variant="default"
              icon={faPlus}
              onClick={onCartQtyPlus}
            />
          </div>

          <div className="flex gap-4">
            <IconButton size="normal" variant="primary" icon={faHeart} />
            <IconButton
              size="normal"
              variant="danger"
              icon={faXmark}
              onClick={onCartDeleted}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

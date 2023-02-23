import React from "react";

import {
  faMinus,
  faPlus,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch, useAppSelector } from "@/state/hooks";
import {
  cartQuantityPlus,
  cartQuantityMinus,
  cartDeleted,
  selectCartProductById,
} from "@/state/cartSlice";

import { BaseProps } from "@/types/BaseProps";
import Image from "next/image";
import IconButton from "../Button/IconButton";
import CartProduct from "@/types/CartProduct";

interface CartCardProps extends BaseProps {
  cartProductId: string;
}

const CartCard = ({ cartProductId }: CartCardProps) => {
  const cartProduct = useAppSelector((state) =>
    selectCartProductById(state, cartProductId)
  );
  const dispatch = useAppDispatch();

  if (!cartProduct) {
    return null;
  }

  const totalPrice = cartProduct.price * cartProduct.qty;

  const onCartQtyPlus = () => {
    dispatch(cartQuantityPlus(cartProduct._id));
  };
  const onCartQtyMinus = () => {
    dispatch(cartQuantityMinus(cartProduct._id));
  };

  const onCartDeleted = () => {
    dispatch(cartDeleted(cartProduct._id));
  };

  return (
    <div className="grid grid-cols-4 gap-6 border-2 border-gray-200 p-3">
      <div>
        <Image
          src={cartProduct.image}
          width={200}
          height={200}
          alt={cartProduct.title}
        />
      </div>
      <div className="col-span-3 flex flex-col justify-between">
        <div className="flex justify-between">
          <h3 className="text-xl">{cartProduct.title}</h3>
          <h4 className="text-lg">{`$${totalPrice}`}</h4>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <IconButton
              size="small"
              variant="default"
              icon={faMinus}
              onClick={onCartQtyMinus}
            />
            <span>{cartProduct.qty}</span>
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

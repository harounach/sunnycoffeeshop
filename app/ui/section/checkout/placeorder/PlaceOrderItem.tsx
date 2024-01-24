import Image from "next/image";
import classNames from "classnames";
import type { OrderItem } from "@/app/lib/definitions";

interface PlaceOrderItemProps {
  cartItem: OrderItem;
  customClasses?: string;
}

export default function PlaceOrderItem({
  cartItem,
  customClasses,
}: PlaceOrderItemProps) {
  const classes = classNames("order-item-card", customClasses);

  return (
    <div className={classes}>
      <Image
        src={cartItem.product.image}
        width={100}
        height={100}
        alt={cartItem.product.title}
        className="order-item-card__img"
      />
      <div className="order-item-card__content">
        <span className="order-item-card__title title-base">
          {cartItem.product.title}
        </span>
        <span className="order-item-card__price title-base">{`$${
          cartItem.product.price * cartItem.qty
        }`}</span>
        <span className="order-item-card__qty body-base">({cartItem.qty})</span>
      </div>
    </div>
  );
}

import Image from "next/image";
import classNames from "classnames";
import type { OrderItem } from "@/app/lib/definitions";

interface OrderItemCardProps {
  orderItem: OrderItem;
  customClasses?: string;
}

export default function OrderItemCard({
  orderItem,
  customClasses,
}: OrderItemCardProps) {
  const classes = classNames("order-item-card", customClasses);

  return (
    <div className={classes}>
      <Image
        src={orderItem.image}
        width={100}
        height={100}
        alt={orderItem.title}
        className="order-item-card__img"
      />
      <div className="order-item-card__content">
        <span className="order-item-card__title title-base">
          {orderItem.title}
        </span>
        <span className="order-item-card__qty body-base">
          ({orderItem.qty})
        </span>
        <span className="order-item-card__price title-base">{`$${orderItem.price}`}</span>
      </div>
    </div>
  );
}

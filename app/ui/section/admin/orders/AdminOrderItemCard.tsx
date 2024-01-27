import Image from "next/image";
import classNames from "classnames";
import { OrderItem } from "@/app/lib/definitions";

interface AdminOrderItemCardProps {
  orderItem: OrderItem;
  customClasses?: string;
}

export default function AdminOrderItemCard({
  orderItem,
  customClasses,
}: AdminOrderItemCardProps) {
  const classes = classNames("order-item-card", customClasses);

  return (
    <div className={classes}>
      <Image
        src={orderItem.product.image}
        width={100}
        height={100}
        alt={orderItem.product.title}
        className="order-item-card__img"
      />
      <div className="order-item-card__content">
        <span className="order-item-card__title title-base">
          {orderItem.product.title}
        </span>
        <span className="order-item-card__price title-base">{`$${
          orderItem.product.price * orderItem.qty
        }`}</span>
        <span className="order-item-card__qty body-base">
          ({orderItem.qty})
        </span>
      </div>
    </div>
  );
}

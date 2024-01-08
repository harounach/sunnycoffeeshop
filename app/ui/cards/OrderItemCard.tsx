import Image from "next/image";
import classNames from "classnames";
import type { Product } from "@/app/lib/definitions";

interface OrderItemCardProps {
  product: Product;
  customClasses?: string;
}

export default function OrderItemCard({
  product,
  customClasses,
}: OrderItemCardProps) {
  const classes = classNames("order-item-card", customClasses);

  return (
    <div className={classes}>
      <Image
        src={product.image}
        width={100}
        height={100}
        alt={product.title}
        className="order-item-card__img"
      />
      <div className="order-item-card__content">
        <span className="order-item-card__title title-base">
          {product.title}
        </span>
        <span className="order-item-card__qty body-base">(2)</span>
        <span className="order-item-card__price title-base">{`$${product.price}`}</span>
      </div>
    </div>
  );
}

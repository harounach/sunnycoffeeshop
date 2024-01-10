import Image from "next/image";
import classNames from "classnames";
import { BsDash, BsPlus, BsHeart, BsCartX } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import type { Product } from "@/app/lib/definitions";

interface CartCardProps {
  product: Product;
  customClasses?: string;
}

export default function CartCard({ product, customClasses }: CartCardProps) {
  const classes = classNames("cart-card", customClasses);

  return (
    <div className={classes}>
      <Image
        src={product.image}
        width={152}
        height={152}
        alt={product.title}
        className="cart-card__img"
      />
      <div className="cart-card__content">
        <div className="cart-card__header">
          <h3 className="cart-card__title title-base">{product.title}</h3>
          <h3 className="cart-card__price title-base">{`$${product.price}`}</h3>
        </div>
        <div className="cart-card__footer">
          <div className="cart-card__actions">
            <IconButton hasBG customClasses="cart-card__down">
              <BsDash />
            </IconButton>
            <span className="cart-card__qty body-base">(1)</span>
            <IconButton hasBG customClasses="cart-card__up">
              <BsPlus />
            </IconButton>
          </div>
          <div className="cart-card__actions">
            <IconButton hasBG customClasses="cart-card__favorite">
              <BsHeart />
            </IconButton>
            <IconButton hasBG color="danger" customClasses="cart-card__remove">
              <BsCartX />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

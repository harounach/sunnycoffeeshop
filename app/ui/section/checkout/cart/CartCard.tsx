import Image from "next/image";
import classNames from "classnames";
import { BsDash, BsPlus, BsHeart, BsCartX } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import type { OrderItem, Product } from "@/app/lib/definitions";
import { useCartStore } from "../../../../lib/store/cart";

interface CartCardProps {
  item: OrderItem;
  customClasses?: string;
}

export default function CartCard({ item, customClasses }: CartCardProps) {
  const classes = classNames("cart-card", customClasses);

  const { removeFromCart, incrementQty, decrementQty } = useCartStore();

  return (
    <div className={classes}>
      <Image
        src={item.product.image}
        width={152}
        height={152}
        alt={item.product.title}
        className="cart-card__img"
      />
      <div className="cart-card__content">
        <div className="cart-card__header">
          <h3 className="cart-card__title title-base">{item.product.title}</h3>
          <h3 className="cart-card__price title-base">{`$${
            item.product.price * item.qty
          }`}</h3>
        </div>
        <div className="cart-card__footer">
          <div className="cart-card__actions">
            <IconButton
              hasBG
              customClasses="cart-card__down"
              onClick={() => decrementQty(item.product._id)}
            >
              <BsDash />
            </IconButton>
            <span className="cart-card__qty body-base">(`${item.qty}`)</span>
            <IconButton
              hasBG
              customClasses="cart-card__up"
              onClick={() => incrementQty(item.product._id)}
            >
              <BsPlus />
            </IconButton>
          </div>
          <div className="cart-card__actions">
            <IconButton hasBG customClasses="cart-card__favorite">
              <BsHeart />
            </IconButton>
            <IconButton
              hasBG
              color="danger"
              customClasses="cart-card__remove"
              onClick={() => removeFromCart(item.product._id)}
            >
              <BsCartX />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

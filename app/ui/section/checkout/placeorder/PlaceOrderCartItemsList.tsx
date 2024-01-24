import classNames from "classnames";
import { BsPencilFill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import PlaceOrderItem from "./PlaceOrderItem";
import type { OrderItem } from "@/app/lib/definitions";

interface PlaceOrderItemsCardProps {
  cartItems: Array<OrderItem>;
  customClasses?: string;
}

export default function PlaceOrderItemsCard({
  cartItems,
  customClasses,
}: PlaceOrderItemsCardProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Items</h3>
        <IconButton
          url="/cart"
          color="primary"
          hasBG
          customClasses="content-card__btn"
        >
          <BsPencilFill />
        </IconButton>
      </div>
      <div className="content-card__content">
        {cartItems.map((item) => {
          return <PlaceOrderItem key={item.product._id} cartItem={item} />;
        })}
      </div>
    </div>
  );
}

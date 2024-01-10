import classNames from "classnames";
import { BsPencilFill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import OrderItemCard from "@/app/ui/cards/OrderItemCard";
import type { OrderItem } from "@/app/lib/definitions";

interface PlaceOrderItemsCardProps {
  orderItems: Array<OrderItem>;
  customClasses?: string;
}

export default function PlaceOrderItemsCard({
  orderItems,
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
        {orderItems.map((orderItem) => {
          return <OrderItemCard key={orderItem._id} orderItem={orderItem} />;
        })}
      </div>
    </div>
  );
}

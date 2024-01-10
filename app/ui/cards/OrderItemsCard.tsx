import classNames from "classnames";
import OrderItemCard from "@/app/ui/cards/OrderItemCard";
import type { OrderItem } from "@/app/lib/definitions";

interface OrderItemsCardProps {
  orderItems: Array<OrderItem>;
  customClasses?: string;
}

export default function OrderItemsCard({
  orderItems,
  customClasses,
}: OrderItemsCardProps) {
  const classes = classNames("order-card", customClasses);

  return (
    <div className={classes}>
      <div className="order-card__header">
        <h3 className="title-medium">Items</h3>
      </div>
      <div className="order-card__content">
        {orderItems.map((orderItem) => {
          return <OrderItemCard key={orderItem._id} orderItem={orderItem} />;
        })}
      </div>
    </div>
  );
}

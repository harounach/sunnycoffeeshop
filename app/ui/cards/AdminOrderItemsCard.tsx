import classNames from "classnames";
import OrderItemCard from "@/app/ui/cards/OrderItemCard";
import type { OrderItem } from "@/app/lib/definitions";

interface AdminOrderItemsCardProps {
  orderItems: Array<OrderItem>;
  customClasses?: string;
}

export default function AdminOrderItemsCard({
  orderItems,
  customClasses,
}: AdminOrderItemsCardProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Items</h3>
      </div>
      <div className="content-card__content">
        {orderItems.map((orderItem) => {
          return <OrderItemCard key={orderItem._id} orderItem={orderItem} />;
        })}
      </div>
    </div>
  );
}

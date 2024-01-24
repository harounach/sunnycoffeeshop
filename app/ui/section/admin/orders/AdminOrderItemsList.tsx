import classNames from "classnames";
import AdminOrderItemCard from "./AdminOrderItemCard";
import type { OrderItem } from "@/app/lib/definitions";

interface AdminOrderItemsListProps {
  orderItems: Array<OrderItem>;
  customClasses?: string;
}

export default function AdminOrderItemsList({
  orderItems,
  customClasses,
}: AdminOrderItemsListProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Items</h3>
      </div>
      <div className="content-card__content">
        {orderItems.map((orderItem) => {
          return (
            <AdminOrderItemCard
              key={orderItem.product._id}
              orderItem={orderItem}
            />
          );
        })}
      </div>
    </div>
  );
}

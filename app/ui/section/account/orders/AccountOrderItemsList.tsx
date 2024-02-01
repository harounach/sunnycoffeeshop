import classNames from "classnames";
import AccountOrderItemCard from "./AccountOrderItemCard";
import { OrderItem } from "@/app/lib/definitions";

interface AccountOrderItemsListProps {
  orderItems: Array<OrderItem>;
  customClasses?: string;
}

export default function AccountOrderItemsList({
  orderItems,
  customClasses,
}: AccountOrderItemsListProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Items</h3>
      </div>
      <div className="content-card__content">
        {orderItems.map((orderItem) => {
          return (
            <AccountOrderItemCard
              key={orderItem.product._id}
              orderItem={orderItem}
            />
          );
        })}
      </div>
    </div>
  );
}

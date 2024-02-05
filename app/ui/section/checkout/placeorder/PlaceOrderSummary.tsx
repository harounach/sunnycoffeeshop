"use client";

import classNames from "classnames";
import CreateOrderButton from "./CreateOrderButton";
import { getSummary } from "@/app/lib/utils/summary";
import { useCartStore } from "@/app/lib/store/cart";
// import { cartItemsData as items } from "@/app/lib/placeholder-data";

interface PlaceOrderSummaryProps {
  userId: string;
  customClasses?: string;
}

export default async function PlaceOrderSummary({
  userId,
  customClasses,
}: PlaceOrderSummaryProps) {
  const classes = classNames("summary", customClasses);

  const { shipping, payment, items } = useCartStore();
  const summary = getSummary(items);

  return (
    <div className={classes}>
      <h2 className="summary__header title-medium">Summary</h2>
      <div className="summary__content">
        <div className="summary__row">
          <span className="summary__key body-base">Items</span>
          <span className="summary__value body-base">{summary.count}</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-base">Subtotal</span>
          <span className="summary__value body-base">${summary.subtotal}</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-base">Shipping</span>
          <span className="summary__value body-base">Free</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-base">Tax</span>
          <span className="summary__value body-base">${summary.tax}</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-large large">Total</span>
          <span className="summary__value body-large large">
            ${summary.total}
          </span>
        </div>

        <CreateOrderButton
          userId={userId}
          shipping={shipping}
          payment={payment}
          items={items}
        />
      </div>
    </div>
  );
}

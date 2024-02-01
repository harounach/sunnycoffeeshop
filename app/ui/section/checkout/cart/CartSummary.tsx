"use client";

import classNames from "classnames";
import { useCartStore } from "@/app/lib/store/cart";
import { getSummary } from "@/app/lib/utils/summary";
import { cartItemsData as items } from "@/app/lib/placeholder-data";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";

interface CartSummaryProps {
  customClasses?: string;
}

export default function CartSummary({ customClasses }: CartSummaryProps) {
  const classes = classNames("summary", customClasses);

  // TODO: remember to use real data
  // const items = useCartStore((state) => state.items);
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
        <LinkButton
          url="/checkout/shipping"
          label="Proceed to Checkout"
          customClasses="summary__btn"
        />
      </div>
    </div>
  );
}

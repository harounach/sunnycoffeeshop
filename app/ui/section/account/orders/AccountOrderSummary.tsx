import classNames from "classnames";
import { getSummary } from "@/app/lib/utils/summary";
import { Order } from "@/app/lib/definitions";

interface AccountOrderSummaryProps {
  order: Order;
  customClasses?: string;
}

export default function AccountOrderSummary({
  order,
  customClasses,
}: AccountOrderSummaryProps) {
  const classes = classNames("summary", customClasses);

  const summary = getSummary(order.items);

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
          <span className="summary__value body-base">${summary.shipping}</span>
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
      </div>
    </div>
  );
}

import classNames from "classnames";
import { Summary } from "@/app/lib/definitions";

interface PlaceOrderSummaryProps {
  summary: Summary;
  customClasses?: string;
}

export default function PlaceOrderSummary({
  summary,
  customClasses,
}: PlaceOrderSummaryProps) {
  const classes = classNames("summary", customClasses);

  const handleSubmit = async () => {
    // Create order
  };

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

        {/* TODO: Create order */}
        <form onSubmit={handleSubmit}>
          <button className="btn summary__btn">Place Order Now</button>
        </form>
      </div>
    </div>
  );
}

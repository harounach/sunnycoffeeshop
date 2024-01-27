import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";
import { Summary } from "@/app/lib/definitions";

interface CartSummaryProps {
  summary: Summary;
  customClasses?: string;
}

export default function CartSummary({
  summary,
  customClasses,
}: CartSummaryProps) {
  const classes = classNames("summary", customClasses);

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
        <Button
          url="/checkout/shipping"
          label="Proceed to Checkout"
          customClasses="summary__btn"
        />
      </div>
    </div>
  );
}

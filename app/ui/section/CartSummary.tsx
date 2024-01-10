import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";

interface CartSummaryProps {
  customClasses?: string;
}

export default function CartSummary({ customClasses }: CartSummaryProps) {
  const classes = classNames("summary", customClasses);

  return (
    <div className={classes}>
      <h2 className="summary__header title-medium">Summary</h2>
      <div className="summary__content">
        <div className="summary__row">
          <span className="summary__key body-base">Subtotal</span>
          <span className="summary__value body-base">$36</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-base">Shipping</span>
          <span className="summary__value body-base">Free</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-base">Tax</span>
          <span className="summary__value body-base">$10</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-large large">Total</span>
          <span className="summary__value body-large large">$46</span>
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
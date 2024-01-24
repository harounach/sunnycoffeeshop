import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";

interface PaymentFormProps {
  customClasses?: string;
}

export default function PaymentForm({ customClasses }: PaymentFormProps) {
  const classes = classNames("form", customClasses);

  return (
    <form className={classes}>
      <div className="radio-group">
        {/* PayPal */}
        <div className="radio">
          <input
            className="radio__btn"
            type="radio"
            name="payment_method"
            value="paypal"
            id="paypal"
          />
          <label className="radio__label body-base" htmlFor="paypal">
            PayPal
          </label>
        </div>

        {/* Credit Card */}
        <div className="radio">
          <input
            className="radio__btn"
            type="radio"
            name="payment_method"
            value="credit_card"
            id="credit_card"
          />
          <label className="radio__label body-base" htmlFor="credit_card">
            Credit Card
          </label>
        </div>

        {/* In Person */}
        <div className="radio">
          <input
            className="radio__btn"
            type="radio"
            name="payment_method"
            value="in_person"
            id="in_person"
          />
          <label className="radio__label body-base" htmlFor="in_person">
            In Person
          </label>
        </div>
      </div>
      <Button url="/checkout/placeorder" label="Continue to Place Order" />
    </form>
  );
}

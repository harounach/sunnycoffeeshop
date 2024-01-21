import classNames from "classnames";
import Radio from "@/app/ui/inputs/Radio";
import Button from "@/app/ui/actionables/buttons/Button";

interface PaymentFormProps {
  customClasses?: string;
}

export default function PaymentForm({ customClasses }: PaymentFormProps) {
  const classes = classNames("form", customClasses);

  return (
    <form className={classes}>
      <div className="radio-group">
        <Radio
          name="payment_method"
          value="paypal"
          label="PayPal"
          id="paypal"
        />
        <Radio
          name="payment_method"
          value="credit_card"
          label="Credit Card"
          id="credit_card"
        />
        <Radio
          name="payment_method"
          value="in_person"
          label="In Person"
          id="in_person"
        />
      </div>
      <Button url="/checkout/placeorder" label="Continue to Place Order" />
    </form>
  );
}

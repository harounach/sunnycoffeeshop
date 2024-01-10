import classNames from "classnames";
import { BsPencilFill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { Payment } from "@/app/lib/definitions";

interface PlaceOrderPaymentCardProps {
  payment: Payment;
  customClasses?: string;
}

export default function PlaceOrderPaymentCard({
  payment,
  customClasses,
}: PlaceOrderPaymentCardProps) {
  const classes = classNames("order-card", customClasses);

  return (
    <div className={classes}>
      <div className="order-card__header">
        <h3 className="title-medium">Payment</h3>
        <IconButton
          url="/checkout/payment"
          color="primary"
          hasBG
          customClasses="order-card__btn"
        >
          <BsPencilFill />
        </IconButton>
      </div>
      <div className="order-card__content">
        <div className="order-card__row">
          <span className="order-card__key title-base">Payment method:</span>
          <span className="order-card__value body-base">
            {payment.paymentMethod}
          </span>
        </div>
      </div>
    </div>
  );
}

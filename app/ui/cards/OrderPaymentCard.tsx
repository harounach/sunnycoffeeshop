import classNames from "classnames";
import { Payment } from "@/app/lib/definitions";

interface OrderPaymentCardProps {
  payment: Payment;
  customClasses?: string;
}

export default function OrderPaymentCard({
  payment,
  customClasses,
}: OrderPaymentCardProps) {
  const classes = classNames("order-card", customClasses);

  return (
    <div className={classes}>
      <div className="order-card__header">
        <h3 className="title-medium">Payment</h3>
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

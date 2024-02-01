import classNames from "classnames";
import { Order } from "@/app/lib/definitions";

interface AccountOrderPaymentCardProps {
  order: Order;
  customClasses?: string;
}

export default function AccountOrderPaymentCard({
  order,
  customClasses,
}: AccountOrderPaymentCardProps) {
  const classes = classNames("content-card", customClasses);

  const payment = order.payment;

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Payment</h3>
      </div>
      <div className="content-card__content">
        <div className="content-card__row">
          <span className="content-card__key title-base">Payment method:</span>
          <span className="content-card__value body-base">
            {payment.paymentMethod}
          </span>
        </div>
      </div>
    </div>
  );
}

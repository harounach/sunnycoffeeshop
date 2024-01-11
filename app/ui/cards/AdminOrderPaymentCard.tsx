import classNames from "classnames";
import { Payment } from "@/app/lib/definitions";

interface AdminOrderPaymentCardProps {
  payment: Payment;
  customClasses?: string;
}

export default function AdminOrderPaymentCard({
  payment,
  customClasses,
}: AdminOrderPaymentCardProps) {
  const classes = classNames("content-card", customClasses);

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

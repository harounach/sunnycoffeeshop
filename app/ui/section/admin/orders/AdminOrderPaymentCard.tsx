import Badge from "@/app/ui/misc/Badge";
import { Order } from "@/app/lib/definitions";

interface AdminOrderPaymentCardProps {
  order: Order;
}

export default function AdminOrderPaymentCard({
  order,
}: AdminOrderPaymentCardProps) {
  const payment = order.payment;

  const paymentBadge = order.isPaid ? (
    <Badge label="Paid" color="green" />
  ) : (
    <Badge label="Not Paid" color="red" />
  );

  return (
    <div className="content-card">
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
        <div className="content-card__row">
          <span className="content-card__key title-base">Status:</span>
          <span className="content-card__value body-base">
            {paymentBadge}
          </span>
        </div>
      </div>
    </div>
  );
}

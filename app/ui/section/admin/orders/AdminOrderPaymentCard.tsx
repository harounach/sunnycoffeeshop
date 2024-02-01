import { Order } from "@/app/lib/definitions";

interface AdminOrderPaymentCardProps {
  order: Order;
}

export default function AdminOrderPaymentCard({
  order,
}: AdminOrderPaymentCardProps) {
  const payment = order.payment;

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
      </div>
    </div>
  );
}

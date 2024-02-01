import PayButton from "./PayButton";
import DeliverButton from "./DeliverButton";
import { getSummary } from "@/app/lib/utils/summary";
import { Order } from "@/app/lib/definitions";

export default function AdminOrderSummary({ order }: { order: Order }) {
  const summary = getSummary(order.items);

  return (
    <div className="summary">
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
        <PayButton orderId={order._id} />
        <DeliverButton orderId={order._id} />
      </div>
    </div>
  );
}

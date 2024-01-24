import OrderPaymentCard from "@/app/ui/section/account/orders/OrderPaymentCard";
import OrderShippingCard from "@/app/ui/section/account/orders/OrderShippingCard";
import OrderItemsList from "@/app/ui/section/account/orders/OrderItemsList";
import OrderSummary from "@/app/ui/section/account/orders/OrderSummary";
import { ordersData } from "@/app/lib/placeholder-data";
import { getSummary } from "@/app/lib/utils/summary";

export default function Page({ params }: { params: { id: string } }) {
  const order = ordersData.find((order) => order._id === params.id);
  const summary = getSummary(order!.items);

  return (
    <section className="account-order-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Order</h1>
          <p className="desc body-base">Review order ({order!._id})</p>

          <div className="account-order-page__content">
            <OrderSummary
              summary={summary}
              customClasses="account-order-page__summary"
            />
            <OrderShippingCard shipping={order!.shipping} />
            <OrderPaymentCard payment={order!.payment} />
            <OrderItemsList orderItems={order!.items} />
          </div>
        </div>
      </section>
    </section>
  );
}

import OrderPaymentCard from "@/app/ui/cards/OrderPaymentCard";
import OrderShippingCard from "@/app/ui/cards/OrderShippingCard";
import OrderItemsCard from "@/app/ui/cards/OrderItemsCard";
import OrderSummary from "@/app/ui/section/OrderSummary";
import { ordersData } from "@/app/lib/placeholder-data";

export default function Page({ params }: { params: { id: string } }) {
  const order = ordersData.find((product) => product._id === params.id);

  return (
    <section className="account-order-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Order</h1>
          <p className="desc body-base">Review your order ({order!._id})</p>

          <div className="account-order-page__content">
            <div className="account-order-page__info">
              <OrderShippingCard shipping={order!.shipping} />
              <OrderPaymentCard payment={order!.payment} />
              <OrderItemsCard orderItems={order!.orderItems} />
            </div>
            <OrderSummary customClasses="account-order-page__summary" />
          </div>
        </div>
      </section>
    </section>
  );
}

import AdminOrderPaymentCard from "./AdminOrderPaymentCard";
import AdminOrderShippingCard from "./AdminOrderShippingCard";
import AdminOrderItemsList from "./AdminOrderItemsList";
import AdminOrderSummary from "./AdminOrderSummary";
import { ordersData } from "@/app/lib/placeholder-data";

export default function Page({ params }: { params: { id: string } }) {
  const order = ordersData.find((order) => order._id === params.id);

  return (
    <section className="admin-order-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Order</h1>
          <p className="desc body-base">Review order ({order!._id})</p>
          <div className="admin-order-page__content">
            <AdminOrderSummary />
            <AdminOrderShippingCard shipping={order!.shipping} />
            <AdminOrderPaymentCard payment={order!.payment} />
            <AdminOrderItemsList orderItems={order!.orderItems} />
          </div>
        </div>
      </section>
    </section>
  );
}

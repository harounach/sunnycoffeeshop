import AdminOrderPaymentCard from "@/app/ui/cards/AdminOrderPaymentCard";
import AdminOrderShippingCard from "@/app/ui/cards/AdminOrderShippingCard";
import AdminOrderItemsCard from "@/app/ui/cards/AdminOrderItemsCard";
import AdminOrderSummary from "@/app/ui/section/AdminOrderSummary";
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
            <AdminOrderItemsCard orderItems={order!.orderItems} />
          </div>
        </div>
      </section>
    </section>
  );
}

import AdminOrderSummary from "@/app/ui/section/admin/orders/AdminOrderSummary";
import AdminOrderShippingCard from "@/app/ui/section/admin/orders/AdminOrderShippingCard";
import AdminOrderPaymentCard from "@/app/ui/section/admin/orders/AdminOrderPaymentCard";
import AdminOrderItemsList from "@/app/ui/section/admin/orders/AdminOrderItemsList";
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
            <AdminOrderSummary order={order!} />
            <AdminOrderShippingCard order={order!} />
            <AdminOrderPaymentCard order={order!} />
            <AdminOrderItemsList orderItems={order!.items} />
          </div>
        </div>
      </section>
    </section>
  );
}

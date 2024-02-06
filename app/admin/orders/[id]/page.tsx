import AdminOrderSummary from "@/app/ui/section/admin/orders/AdminOrderSummary";
import AdminOrderShippingCard from "@/app/ui/section/admin/orders/AdminOrderShippingCard";
import AdminOrderPaymentCard from "@/app/ui/section/admin/orders/AdminOrderPaymentCard";
import AdminOrderItemsList from "@/app/ui/section/admin/orders/AdminOrderItemsList";
import { fetchSingleOrder } from "@/app/lib/database/order/order.query";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const order = await fetchSingleOrder(params.id);

  if (!order) {
    notFound();
  }

  return (
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Order</h1>
          <p className="desc body-base">Review order ({order._id})</p>
          <div className="admin-page__order-stack">
            <div className="admin-page__order-summary">
              <AdminOrderSummary order={order} />
            </div>
            <div className="admin-page__order-cards">
              <AdminOrderShippingCard order={order} />
              <AdminOrderPaymentCard order={order} />
              <AdminOrderItemsList orderItems={order.items} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

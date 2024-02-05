import AccountOrderSummary from "@/app/ui/section/account/orders/AccountOrderSummary";
import AccountOrderShippingCard from "@/app/ui/section/account/orders/AccountOrderShippingCard";
import AccountOrderPaymentCard from "@/app/ui/section/account/orders/AccountOrderPaymentCard";
import AccountOrderItemsList from "@/app/ui/section/account/orders/AccountOrderItemsList";
import { fetchSingleOrder } from "@/app/lib/database/order/order.query";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const order = await fetchSingleOrder(params.id);

  if (!order) {
    notFound();
  }

  return (
    <section className="account-order-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Order</h1>
          <p className="desc body-base">
            Review order ({order._id.toString()})
          </p>

          <div className="account-order-page__content">
            <AccountOrderSummary
              order={order}
              customClasses="account-order-page__summary"
            />
            <AccountOrderShippingCard order={order} />
            <AccountOrderPaymentCard order={order} />
            <AccountOrderItemsList orderItems={order.items} />
          </div>
        </div>
      </section>
    </section>
  );
}

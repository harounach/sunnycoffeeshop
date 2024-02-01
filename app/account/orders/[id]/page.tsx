import AccountOrderSummary from "@/app/ui/section/account/orders/AccountOrderSummary";
import AccountOrderShippingCard from "@/app/ui/section/account/orders/AccountOrderShippingCard";
import AccountOrderPaymentCard from "@/app/ui/section/account/orders/AccountOrderPaymentCard";
import AccountOrderItemsList from "@/app/ui/section/account/orders/AccountOrderItemsList";
import { ordersData } from "@/app/lib/placeholder-data";

export default function Page({ params }: { params: { id: string } }) {
  const order = ordersData.find((order) => order._id === params.id);

  // TODO: remember to use real data

  return (
    <section className="account-order-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Order</h1>
          <p className="desc body-base">Review order ({order!._id})</p>

          <div className="account-order-page__content">
            <AccountOrderSummary
              order={order!}
              customClasses="account-order-page__summary"
            />
            <AccountOrderShippingCard order={order!} />
            <AccountOrderPaymentCard order={order!} />
            <AccountOrderItemsList orderItems={order!.items} />
          </div>
        </div>
      </section>
    </section>
  );
}

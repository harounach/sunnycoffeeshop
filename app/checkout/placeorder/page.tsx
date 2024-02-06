import PlaceOrderShippingCard from "@/app/ui/section/checkout/placeorder/PlaceOrderShippingCard";
import PlaceOrderPaymentCard from "@/app/ui/section/checkout/placeorder/PlaceOrderPaymentCard";
import PlaceOrderCartItemsList from "@/app/ui/section/checkout/placeorder/PlaceOrderCartItemsList";
import PlaceOrderSummary from "@/app/ui/section/checkout/placeorder/PlaceOrderSummary";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  const userId = session?.user ? session?.user._id : "";

  return (
    <main className="page" id="content">
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Place Order</h1>
          <p className="desc body-base">
            Review your info before placing your order
          </p>
          <div className="page__cards-wrapper">
            <div className="page__placeorder-info">
              {/* Shipping */}
              <PlaceOrderShippingCard />

              {/* Payment */}
              <PlaceOrderPaymentCard />

              {/* Items */}
              <PlaceOrderCartItemsList />
            </div>
            {/* Summary */}
            <PlaceOrderSummary
              userId={userId}
              customClasses="page__summary"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

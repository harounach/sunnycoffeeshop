import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import PlaceOrderShippingCard from "./PlaceOrderShippingCard";
import PlaceOrderPaymentCard from "./PlaceOrderPaymentCard";
import PlaceOrderItemsCard from "./PlaceOrderItemsCard";
import PlaceOrderSummary from "./PlaceOrderSummary";
import { ordersData } from "@/app/lib/placeholder-data";

export default function Page() {
  const order = ordersData[0];
  return (
    <div>
      <Header />
      <main className="placeorder-page" id="content">
        <section className="placeorder-page__sect section section--page">
          <div className="container">
            <h1 className="title title-large">Place Order</h1>
            <p className="desc body-base">
              Review your info before placing your order
            </p>
            <div className="placeorder-page__content">
              <div className="placeorder-page__info">
                {/* Shipping */}
                <PlaceOrderShippingCard shipping={order.shipping} />

                {/* Payment */}
                <PlaceOrderPaymentCard payment={order.payment} />

                {/* Items */}
                <PlaceOrderItemsCard orderItems={order.orderItems} />
              </div>
              {/* Summary */}
              <PlaceOrderSummary customClasses="placeorder-page__summary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

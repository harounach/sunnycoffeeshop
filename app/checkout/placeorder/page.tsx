import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import PlaceOrderShippingCard from "@/app/ui/cards/PlaceOrderShippingCard";
import PlaceOrderPaymentCard from "@/app/ui/cards/PlaceOrderPaymentCard";
import PlaceOrderItemsCard from "@/app/ui/cards/PlaceOrderItemsCard";
import PlaceOrderSummary from "@/app/ui/section/PlaceOrderSummary";

export default function Page() {
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
                <PlaceOrderShippingCard />

                {/* Payment */}
                <PlaceOrderPaymentCard />

                {/* Items */}
                <PlaceOrderItemsCard />
              </div>

              {/* Summary */}
              <PlaceOrderSummary />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import PlaceOrderShippingCard from "@/app/ui/section/checkout/placeorder/PlaceOrderShippingCard";
import PlaceOrderPaymentCard from "@/app/ui/section/checkout/placeorder/PlaceOrderPaymentCard";
import PlaceOrderCartItemsList from "@/app/ui/section/checkout/placeorder/PlaceOrderCartItemsList";
import PlaceOrderSummary from "@/app/ui/section/checkout/placeorder/PlaceOrderSummary";

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
                <PlaceOrderCartItemsList />
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

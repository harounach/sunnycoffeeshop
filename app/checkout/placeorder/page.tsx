import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import PlaceOrderShippingCard from "@/app/ui/section/checkout/placeorder/PlaceOrderShippingCard";
import PlaceOrderPaymentCard from "@/app/ui/section/checkout/placeorder/PlaceOrderPaymentCard";
import PlaceOrderCartItemsList from "@/app/ui/section/checkout/placeorder/PlaceOrderCartItemsList";
import PlaceOrderSummary from "@/app/ui/section/checkout/placeorder/PlaceOrderSummary";
import {
  cartItemsData as items,
  shippingData as shipping,
  paymentData as payment,
} from "@/app/lib/placeholder-data";
import { useCartStore } from "@/app/lib/store/cart";
import { getSummary } from "@/app/lib/utils/summary";

export default function Page() {
  // const { shipping, payment, items } = useCartStore();

  const summary = getSummary(items);

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
                <PlaceOrderShippingCard shipping={shipping} />

                {/* Payment */}
                <PlaceOrderPaymentCard payment={payment} />

                {/* Items */}
                <PlaceOrderCartItemsList cartItems={items} />
              </div>
              {/* Summary */}
              <PlaceOrderSummary
                summary={summary}
                customClasses="placeorder-page__summary"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

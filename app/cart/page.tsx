import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import CartCard from "@/app/ui/section/checkout/cart/CartCard";
import CartSummary from "@/app/ui/section/checkout/cart/CartSummary";
import { useCartStore } from "@/app/lib/store/cart";
import { cartItemsData as items } from "@/app/lib/placeholder-data";
import { getSummary } from "@/app/lib/utils/summary";

export default function Page() {
  // const items = useCartStore((state) => state.items);

  const summary = getSummary(items);

  return (
    <div>
      <Header />
      <main className="cart-page" id="content">
        <section className="cart-page__cart section section--page">
          <div className="container">
            <h2 className="title title-medium">Cart items</h2>
            <p className="desc body-base">
              Customize your cart before checkout
            </p>
            <div className="cart-page__content">
              <div className="cart-page__items">
                {items.map((orderItem) => {
                  return (
                    <CartCard key={orderItem.product._id} item={orderItem} />
                  );
                })}
              </div>
              <CartSummary
                summary={summary}
                customClasses="cart-page__summary"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

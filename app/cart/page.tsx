import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import CartCard from "./CartCard";
import CartSummary from "./CartSummary";
import { useCartStore } from "../lib/store/cart";

export default function Page() {
  const items = useCartStore((state) => state.items);

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
                {items.map((cartProduct) => {
                  return (
                    <CartCard
                      key={cartProduct.product._id}
                      item={cartProduct}
                    />
                  );
                })}
              </div>
              <CartSummary customClasses="cart-page__summary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import CartCard from "@/app/ui/cards/CartCard";
import CartSummary from "@/app/ui/section/CartSummary";
import { cartProducts } from "@/app/lib/placeholder-data";

export default function Page() {
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
                {cartProducts.map((product) => {
                  return <CartCard key={product._id} product={product} />;
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

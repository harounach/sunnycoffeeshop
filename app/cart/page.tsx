import CartSummary from "@/app/ui/section/checkout/cart/CartSummary";
import CartItems from "@/app/ui/section/checkout/cart/CartItems";

export default function CartPage() {
  return (
    <main className="page" id="content">
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h2 className="title title-medium">Cart items</h2>
          <p className="desc body-base">Customize your cart before checkout</p>
          <div className="page__cards-wrapper">
              <CartItems customClasses="page__cart-items" />
            <CartSummary customClasses="page__summary" />
          </div>
        </div>
      </section>
    </main>
  );
}

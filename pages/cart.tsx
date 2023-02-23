import Button from "@/components/Button/Button";
import CartCard from "@/components/Card/CartCard";
import Layout from "@/components/Layout/Layout";
import EmptyCart from "@/components/Box/EmptyCart";
import { calculateSubtotal } from "@/lib/cartUtils";
import { selectCartProductIds, selectCartProducts } from "@/state/cartSlice";

import { useAppSelector } from "@/state/hooks";

export default function Cart() {
  const cartProductsIds = useAppSelector(selectCartProductIds);
  const cartProducts = useAppSelector(selectCartProducts)

  const subtotal = calculateSubtotal(cartProducts);
  const shipping = 0;
  const tax = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping + tax;

  return (
    <Layout>
      <section className="container mx-auto mt-6">
        <h1 className="mb-4 text-center text-2xl">Cart items</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Customize your cart before checkout
        </p>
        <div className="mb-6 grid grid-cols-5 gap-6">
          {/* Cart items */}
          <div className="col-span-3 flex flex-col gap-4">
            {cartProductsIds.length === 0 && <EmptyCart />}
            {cartProductsIds.map((cartProductId) => {
              return (
                <CartCard
                  cartProductId={cartProductId as string}
                  key={cartProductId}
                />
              );
            })}
          </div>

          {/* Cart summary */}
          <div className="col-span-2">
            <div className="flex flex-col items-stretch gap-4 border-2 border-gray-200 px-12 py-4">
              <h2 className="text-center text-2xl">Summary</h2>
              <div className="flex justify-between">
                <h3 className="text-gray-500">Subtotal</h3>
                <h3>{`$${subtotal}`}</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-500">Shipping</h3>
                <h3>Free</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-500">Tax</h3>
                <h3>{`$${tax}`}</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-lg text-gray-500">Total</h3>
                <h3 className="text-lg font-semibold">{`$${total}`}</h3>
              </div>
              <Button
                variant="primary"
                url="/ship"
                label="Proceed to Checkout"
                customeClasses="text-center"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

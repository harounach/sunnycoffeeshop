import Button from "@/components/Button/Button";
import CartCard from "@/components/CartCard/CartCard";
import Layout from "@/components/Layout/Layout";

import { coffeeCartData } from "@/lib/data";

export default function Cart() {
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
            {coffeeCartData.map((cartItem) => {
              return <CartCard cartItem={cartItem} key={cartItem.id} />;
            })}
          </div>

          {/* Cart summary */}
          <div className="col-span-2">
            <div className="flex flex-col items-stretch gap-4 border-2 border-gray-200 px-12 py-4">
              <h2 className="text-center text-2xl">Summary</h2>
              <div className="flex justify-between">
                <h3 className="text-gray-500">Subtotal</h3>
                <h3>$36</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-500">Shipping</h3>
                <h3>Free</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-500">Tax</h3>
                <h3>$10</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-lg text-gray-500">Total</h3>
                <h3 className="text-lg font-semibold">$46</h3>
              </div>
              <Button
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

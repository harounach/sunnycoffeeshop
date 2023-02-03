import Button from "@/components/Button/Button";
import IconButton from "@/components/Button/IconButton";
import PlaceOrderCard from "@/components/CartCard/PlaceOrderCard";
import Layout from "@/components/Layout/Layout";
import { coffeeCartData } from "@/lib/data";

import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function PlaceOrder() {
  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Place Order</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Review your info before placing your order
        </p>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7 flex flex-col gap-4">
            {/* Shipping info */}
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">Shipping</h2>
                <IconButton
                  variant="primary"
                  size="normal"
                  url="/ship"
                  icon={faPen}
                />
              </div>
              <div className="flex gap-4">
                <span className="font-medium">Name:</span>
                <span>John Doe</span>
              </div>
              <div className="flex gap-4">
                <span className="font-medium">Email:</span>
                <span>johndoe@email.com</span>
              </div>
              <div className="flex gap-4">
                <span className="font-medium">Address:</span>

                <div className="flex flex-col gap-2">
                  <span>4200 Martin Luther King Boulevard</span>
                  <span>Houston, TX, United States</span>
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">Payment</h2>
                <IconButton
                  variant="primary"
                  size="normal"
                  url="/payment"
                  icon={faPen}
                />
              </div>
              <div className="flex gap-4">
                <span className="font-medium">Payment method:</span>
                <span>PayPal</span>
              </div>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">Items</h2>
                <IconButton
                  variant="primary"
                  size="normal"
                  url="/cart"
                  icon={faPen}
                />
              </div>
              <div className="flex flex-col gap-4">
                {coffeeCartData.map((cartItem) => {
                  return (
                    <PlaceOrderCard cartItem={cartItem} key={cartItem.id} />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-5">
            {/* Summary */}
            <div className="flex flex-col items-stretch gap-4 border-2 border-gray-200 px-12 py-4">
              <h2 className="text-center text-2xl">Summary</h2>
              <div className="flex justify-between">
                <h3 className="text-gray-500">Items</h3>
                <h3>2</h3>
              </div>
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
                url="#"
                label="Place Order Now"
                customeClasses="text-center"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

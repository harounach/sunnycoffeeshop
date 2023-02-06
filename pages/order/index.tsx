import Button from "@/components/Button/Button";
import PlaceOrderCard from "@/components/Card/PlaceOrderCard";
import Layout from "@/components/Layout/Layout";
import { coffeeCartData } from "@/lib/data";

import SuccessBox from "@/components/Box/SuccessBox";
import ErrorBox from "@/components/Box/ErrorBox";

export default function Order() {
  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Order</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Review your order
        </p>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7 flex flex-col gap-4">
            {/* Order */}
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="flex">
                <h2 className="text-xl font-medium">Order</h2>
              </div>
              <div className="flex gap-4">
                <span className="font-medium">ID:</span>
                <span>Gbdajzd514Pln012JnxgvgfjJNdPlkQunb51dd</span>
              </div>
            </div>
            {/* Shipping info */}
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="flex">
                <h2 className="text-xl font-medium">Shipping</h2>
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
              {/* Messages */}
              <div>
                <SuccessBox message="Delivered at: 12 Dec 2022" />
                <ErrorBox message="Not Delivered" />
              </div>
            </div>

            {/* Payment method */}
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="flex">
                <h2 className="text-xl font-medium">Payment</h2>
              </div>
              <div className="flex gap-4">
                <span className="font-medium">Payment method:</span>
                <span>PayPal</span>
              </div>
              {/* Messages */}
              <div>
                <SuccessBox message="Paid at: 12 Dec 2022" />
                <ErrorBox message="Not Paid" />
              </div>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="flex">
                <h2 className="text-xl font-medium">Items</h2>
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
                variant="primary"
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

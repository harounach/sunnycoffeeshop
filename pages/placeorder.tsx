import axios from "axios";
import Button from "@/components/Button/Button";
import IconButton from "@/components/Button/IconButton";
import PlaceOrderCard from "@/components/Card/PlaceOrderCard";
import Layout from "@/components/Layout/Layout";
import {
  selectCartProductIds,
  selectCartProducts,
  selectShippingInfo,
  selectPaymentInfo,
} from "@/state/cartSlice";
import { useAppSelector } from "@/state/hooks";
import { calculateSubtotal } from "@/lib/cartUtils";

import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function PlaceOrder() {
  const cartProducts = useAppSelector(selectCartProducts);
  const cartProductIds = useAppSelector(selectCartProductIds);
  const shippingInfo = useAppSelector(selectShippingInfo);
  const paymentInfo = useAppSelector(selectPaymentInfo);
  const user = "user_id";

  const subtotal = calculateSubtotal(cartProducts);
  const shipping = 0;
  const tax = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping + tax;

  const orderItems = cartProducts.map((cartProduct) => {
    return {
      title: cartProduct.title,
      qty: cartProduct.qty,
      image: cartProduct.image,
      price: cartProduct.price * cartProduct.qty,
      product: cartProduct._id,
    };
  });

  const handleCreateOrder = async () => {
    try {
      const data = {
        shippingInfo,
        paymentInfo,
        orderItems,
        user,
      };

      const response = await axios({
        method: "POST",
        url: "http://localhost:4000/api/orders",
        data,
        validateStatus: () => true,
      });

      const result = response.data;
      const { error, message } = result;
      // Email: haroun@hwiren.com

      console.log(result);
    } catch (err) {
      console.log("Error.................");
      console.log(err);
    }
  };

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
                <span>{shippingInfo.name}</span>
              </div>
              <div className="flex gap-4">
                <span className="font-medium">Email:</span>
                <span>{shippingInfo.email}</span>
              </div>
              <div className="flex gap-4">
                <span className="font-medium">Address:</span>

                <div className="flex flex-col gap-2">
                  {/*4200 Martin Luther King Boulevard*/}
                  <span>{`${shippingInfo.postalCode} ${shippingInfo.street}`}</span>
                  {/*Houston, TX, United States*/}
                  <span>{`${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country}`}</span>
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
                <span>{paymentInfo.paymentMethod}</span>
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
                {cartProductIds.map((cartProductId) => {
                  return (
                    <PlaceOrderCard
                      cartProductId={cartProductId as string}
                      key={cartProductId}
                    />
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
                <h3>{cartProducts.length}</h3>
              </div>
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

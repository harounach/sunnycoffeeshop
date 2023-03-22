import Button from "@/components/Button/Button";
import OrderCard from "@/components/Card/OrderCard";
import Layout from "@/components/Layout/Layout";
import SuccessBox from "@/components/Box/SuccessBox";
import ErrorBox from "@/components/Box/ErrorBox";
import { formatFriendyDate } from "@/lib/dateUtils";
import { getPaymentMethodText } from "@/lib/textUtils";
import {
  payWithStripe,
  paypalCreateOrder,
  paypalOnApprove,
  paypalOnError,
  paypalOnCancel,
} from "@/lib/paymentUtils";
import { saveOrderSession, payOrder } from "@/lib/orderUtils";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { OrderResponseBody } from "@paypal/paypal-js";
import { useAuthNavigate } from "@/hooks/authHook";
import { useAppSelector } from "@/state/hooks";
import { selectUser } from "@/state/userSlice";
import User from "@/types/User";
import { useSingleOrder } from "@/hooks/orderHook";
import Order from "@/types/Order";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function SingleOrder() {
  // Check if user is logged in
  useAuthNavigate();

  // Call orders api
  const { result, loading } = useSingleOrder();

  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Order</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Review your order
        </p>
        <div className="mb-4 flex items-center justify-end">
          <Button label="Your Orders" variant="primary" url="/account/orders" />
        </div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <SingleOrderContent order={result?.data as Order} />
        )}
      </section>
    </Layout>
  );
}

interface SingleOrderContentProps {
  order: Order;
}

function SingleOrderContent({ order }: SingleOrderContentProps) {
  const { shipping: shippingInfo, payment: paymentInfo, orderItems } = order;
  // Get the logged in user
  const user = useAppSelector(selectUser) as User;

  const router = useRouter();

  const showPayPalButton =
    paymentInfo.paymentMethod === "paypal" && order.isPaid;

  const showCreditCardButton =
    paymentInfo.paymentMethod === "credit_card" && order.isPaid;

  // Stripe payment
  const onOrderPaidWithCreditCard = async () => {
    try {
      const {
        url,
        sessionId,
        error: checkoutError,
      } = await payWithStripe(user, order);

      console.log("Order session: " + sessionId);

      if (sessionId) {
        await saveOrderSession(user, order, sessionId);
      }

      if (url) {
        router.push(url as string);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Paypal createOrder listener
  const createOrderListener = () => {};

  // Paypal onApprove listener
  const onApproveListener = async (details: OrderResponseBody) => {
    const markOrderAsPaid = async () => {
      try {
        const { error, message } = await payOrder(user, order._id);
        if (!error) {
          router.replace(`/account/orders/${order._id}`);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const payerName = details.payer.name?.given_name;
    console.log("Transaction completed! " + payerName);
    // Now mark order as paid
    await markOrderAsPaid();
  };

  // Paypal onError listener
  const onErrorListener = () => {};

  // Paypal onCancel listener
  const onCancelListener = () => {};

  useEffect(() => {
    const markOrderAsPaid = async () => {
      try {
        const { error, message } = await payOrder(user, order._id);
        if (!error) {
          router.replace(`/account/orders/${order._id}`);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const checkCreditCardPayment = async () => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
      console.log("Is paid with credit card: " + order.isPaid);
      if (query.get("success") && !order.isPaid && order.payment.sessionId) {
        console.log("Order placed! You will receive an email confirmation.");
        console.log("Session Id: " + order.payment.sessionId);
        // Now mark order as paid

        await markOrderAsPaid();
      }

      if (query.get("canceled")) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you’re ready."
        );
      }
    };

    checkCreditCardPayment();
  }, [order, router, user]);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-7 flex flex-col gap-4">
        {/* Order */}
        <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
          <div className="flex">
            <h2 className="text-xl font-medium">Order</h2>
          </div>
          <div className="flex gap-4">
            <span className="font-medium">ID:</span>
            <span>{order._id}</span>
          </div>
        </div>
        {/* Shipping info */}
        <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
          <div className="flex">
            <h2 className="text-xl font-medium">Shipping</h2>
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
              <span>{`${shippingInfo.postalCode} ${shippingInfo.street}`}</span>
              <span>{`${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country}`}</span>
            </div>
          </div>
          {/* Messages */}
          <div>
            {order.isDelivered ? (
              <SuccessBox
                message={`Delivered at: ${formatFriendyDate(
                  order.deliveredAt
                )}`}
              />
            ) : (
              <ErrorBox message="Not Delivered" />
            )}
          </div>
        </div>

        {/* Payment method */}
        <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
          <div className="flex">
            <h2 className="text-xl font-medium">Payment</h2>
          </div>
          <div className="flex gap-4">
            <span className="font-medium">Payment method:</span>
            <span>{getPaymentMethodText(paymentInfo.paymentMethod)}</span>
          </div>
          {/* Messages */}
          <div>
            {order.isPaid ? (
              <SuccessBox
                message={`Paid at: ${formatFriendyDate(order.paidAt)}`}
              />
            ) : (
              <ErrorBox message="Not Paid" />
            )}
          </div>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
          <div className="flex">
            <h2 className="text-xl font-medium">Items</h2>
          </div>
          <div className="flex flex-col gap-4">
            {orderItems.map((orderItem) => {
              return <OrderCard orderItem={orderItem} key={orderItem._id} />;
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
            <h3>{orderItems.length}</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-gray-500">Subtotal</h3>
            <h3>{`$${order.itemsPrice}`}</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-gray-500">Shipping</h3>
            <h3>Free</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-gray-500">Tax</h3>
            <h3>{`$${order.taxPrice}`}</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-lg text-gray-500">Total</h3>
            <h3 className="text-lg font-semibold">{`$${order.totalPrice}`}</h3>
          </div>
          {showPayPalButton && (
            <PayPalButtons
              // fundingSource={FUNDING.PAYPAL}
              createOrder={paypalCreateOrder(order)}
              onApprove={paypalOnApprove(onApproveListener)}
              onError={paypalOnError(onErrorListener)}
              onCancel={paypalOnCancel(onCancelListener)}
            />
          )}
          {showCreditCardButton && (
            <Button
              variant="primary"
              label="Pay with Credit Card"
              customeClasses="text-center"
              type="button"
              onClick={onOrderPaidWithCreditCard}
            />
          )}
        </div>
      </div>
    </div>
  );
}

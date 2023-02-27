import Button from "@/components/Button/Button";
import OrderCard from "@/components/Card/OrderCard";
import AdminLayout from "@/components/Layout/AdminLayout";
import SuccessBox from "@/components/Box/SuccessBox";
import ErrorBox from "@/components/Box/ErrorBox";
import {
  DeleteOrderApiResult,
  DeliverOrderApiResult,
  GetSingleOrderApiResult,
  PayOrderApiResult,
} from "@/types/OrdersApiResults";
import { GetServerSideProps } from "next";
import axios from "axios";
import { ORDERS_API_URL } from "@/lib/urlUtils";
import { formatFriendyDate } from "@/lib/dateUtils";
import { getPaymentMethodText } from "@/lib/textUtils";
import { useRouter } from "next/router";

interface OrderProps {
  orderApiResult: GetSingleOrderApiResult;
}

export default function Order({ orderApiResult }: OrderProps) {
  const router = useRouter();
  const { data: order, message, error } = orderApiResult;

  if (!order) {
    return null;
  }

  const { shipping: shippingInfo, payment: paymentInfo, orderItems } = order;

  // Mark order as delivered
  const onOrderDelivered = async () => {
    const DELIVER_ORDER_API_URL = `${ORDERS_API_URL}/${order._id}/deliver`;
    try {
      const response = await axios<DeliverOrderApiResult>({
        method: "PATCH",
        url: DELIVER_ORDER_API_URL,
        validateStatus: () => true,
      });

      const result = response.data;
      const { message, error } = result;
      if (!error) {
        router.push(`/admin/orders/${order._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Mark order as paid
  const onOrderPaid = async () => {
    const PAY_ORDER_API_URL = `${ORDERS_API_URL}/${order._id}/pay`;
    try {
      const response = await axios<PayOrderApiResult>({
        method: "PATCH",
        url: PAY_ORDER_API_URL,
        validateStatus: () => true,
      });

      const result = response.data;
      const { error, message } = result;
      if (!error) {
        router.push(`/admin/orders/${order._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Delete order from database
  const onOrderDeleted = async () => {
    const DELETE_ORDER_API_URL = `${ORDERS_API_URL}/${order._id}`;
    try {
      const response = await axios<DeleteOrderApiResult>({
        method: "DELETE",
        url: DELETE_ORDER_API_URL,
        validateStatus: () => true,
      });

      const result = response.data;
      const { error, message, data } = result;
      if (!error) {
        router.push("/admin/orders");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Order</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Review your order
        </p>
        <div className="mb-4 flex items-center justify-end">
          <Button label="All Orders" variant="primary" url="/admin/orders" />
        </div>
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
                  return (
                    <OrderCard orderItem={orderItem} key={orderItem._id} />
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
              {!order.isDelivered && (
                <Button
                  variant="primary"
                  label="Deliver Order"
                  customeClasses="text-center"
                  type="button"
                  onClick={onOrderDelivered}
                />
              )}
              {!order.isPaid && (
                <Button
                  variant="primary"
                  label="Mark As Paid"
                  customeClasses="text-center"
                  type="button"
                  onClick={onOrderPaid}
                />
              )}

              <Button
                variant="danger"
                label="Delete Order"
                customeClasses="text-center"
                type="button"
                onClick={onOrderDeleted}
              />
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps<OrderProps> = async (
  context
) => {
  const id = context.params?.id as string;

  const GET_SINGLE_ORDER_URL = `${ORDERS_API_URL}/${id}`;
  const response = await fetch(GET_SINGLE_ORDER_URL);
  const result = await response.json();

  return {
    props: {
      orderApiResult: result,
    },
  };
};

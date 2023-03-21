import Button from "@/components/Button/Button";
import OrderCard from "@/components/Card/OrderCard";
import AdminLayout from "@/components/Layout/AdminLayout";
import SuccessBox from "@/components/Box/SuccessBox";
import ErrorBox from "@/components/Box/ErrorBox";
import { deleteOrder, deliverOrder, payOrder } from "@/lib/orderUtils";
import { formatFriendyDate } from "@/lib/dateUtils";
import { getPaymentMethodText } from "@/lib/textUtils";
import { useRouter } from "next/router";
import { useAuthNavigate } from "@/hooks/authHook";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";
import { useSingleOrder } from "@/hooks/orderHook";
import { PaymentMethod } from "@/types/PaymentInfo";

export default function Order() {
  const router = useRouter();

  // Check if user is logged in
  useAuthNavigate();

  // Get logged in user
  const user = useAppSelector(selectUser) as User;

  // Call orders api
  const { result, loading } = useSingleOrder();

  // Mark order as delivered
  const onOrderDelivered = async () => {
    try {
      const { message, error } = await deliverOrder(
        user,
        result?.data?._id as string
      );
      if (!error) {
        router.push(`/admin/orders/${result?.data?._id as string}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Mark order as paid (for in-person payment)
  const onOrderPaid = async () => {
    try {
      const { error, message } = await payOrder(
        user,
        result?.data?._id as string
      );
      if (!error) {
        router.push(`/admin/orders/${result?.data?._id as string}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Delete order from database
  const onOrderDeleted = async () => {
    try {
      const { error, message, data } = await deleteOrder(
        user,
        result?.data?._id as string
      );
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

        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7 flex flex-col gap-4">
              {/* Order */}
              <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
                <div className="flex">
                  <h2 className="text-xl font-medium">Order</h2>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">ID:</span>
                  <span>{result?.data?._id}</span>
                </div>
              </div>
              {/* Shipping info */}
              <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
                <div className="flex">
                  <h2 className="text-xl font-medium">Shipping</h2>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">Name:</span>
                  <span>{result?.data?.shipping.name}</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">Email:</span>
                  <span>{result?.data?.shipping.email}</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">Address:</span>

                  <div className="flex flex-col gap-2">
                    <span>{`${result?.data?.shipping.postalCode} ${result?.data?.shipping.street}`}</span>
                    <span>{`${result?.data?.shipping.city}, ${result?.data?.shipping.state}, ${result?.data?.shipping.country}`}</span>
                  </div>
                </div>
                {/* Messages */}
                <div>
                  {result?.data?.isDelivered ? (
                    <SuccessBox
                      message={`Delivered at: ${formatFriendyDate(
                        result?.data.deliveredAt
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
                  <span>
                    {getPaymentMethodText(
                      result?.data?.payment.paymentMethod as PaymentMethod
                    )}
                  </span>
                </div>
                {/* Messages */}
                <div>
                  {result?.data?.isPaid ? (
                    <SuccessBox
                      message={`Paid at: ${formatFriendyDate(
                        result?.data.paidAt
                      )}`}
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
                  {result?.data?.orderItems.map((orderItem) => {
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
                  <h3>{result?.data?.orderItems.length}</h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-gray-500">Subtotal</h3>
                  <h3>{`$${result?.data?.itemsPrice}`}</h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-gray-500">Shipping</h3>
                  <h3>Free</h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-gray-500">Tax</h3>
                  <h3>{`$${result?.data?.taxPrice}`}</h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-lg text-gray-500">Total</h3>
                  <h3 className="text-lg font-semibold">{`$${result?.data?.totalPrice}`}</h3>
                </div>
                {!result?.data?.isDelivered && (
                  <Button
                    variant="primary"
                    label="Deliver Order"
                    customeClasses="text-center"
                    type="button"
                    onClick={onOrderDelivered}
                  />
                )}
                {!result?.data?.isPaid && (
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
        )}
      </section>
    </AdminLayout>
  );
}

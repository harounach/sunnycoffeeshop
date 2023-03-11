import React from "react";
import IconButton from "@/components/Button/IconButton";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Order from "@/types/Order";
import { formatFriendyDate } from "@/lib/dateUtils";
import { getPaymentMethodText, truncateText } from "@/lib/textUtils";

interface OrderHistoryRowProps {
  order: Order;
}

const OrderHistoryRow = ({ order }: OrderHistoryRowProps) => {
  const paidText = order.isPaid ? formatFriendyDate(order.paidAt) : "Not Paid";
  const deliverText = order.isDelivered
    ? formatFriendyDate(order.deliveredAt)
    : "Not Delivered";

  const redtext = (value: boolean) => (!value ? "text-red-500" : "");

  return (
    <tr>
      <td className="border-2 border-gray-200 px-4">{truncateText(order._id)}</td>
      <td className="border-2 border-gray-200 px-4">
        {formatFriendyDate(order.createdAt)}
      </td>
      <td className="border-2 border-gray-200 px-4">{`$${order.totalPrice}`}</td>
      <td className="border-2 border-gray-200 px-4">{getPaymentMethodText(order.payment.paymentMethod)}</td>
      <td className={`border-2 border-gray-200 px-4 ${redtext(order.isPaid)}`}>
        {paidText}
      </td>
      <td
        className={`border-2 border-gray-200 px-4 ${redtext(
          order.isDelivered
        )}`}
      >
        {deliverText}
      </td>
      <td className="border-2 border-gray-200 px-4">
        <div className="flex items-center justify-center">
          <IconButton
            icon={faEye}
            variant="primaryIcon"
            size="normal"
            url={`/account/orders/${order._id}`}
          />
        </div>
      </td>
    </tr>
  );
};

export default OrderHistoryRow;

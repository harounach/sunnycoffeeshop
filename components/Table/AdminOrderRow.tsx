import React from "react";
import IconButton from "@/components/Button/IconButton";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import Order from "@/types/Order";
import axios from "axios";
import { ORDERS_API_URL } from "@/lib/urlUtils";
import { formatFriendyDate } from "@/lib/dateUtils";

interface AdminOrderRowProps {
  order: Order;
}

const AdminOrderRow = ({ order }: AdminOrderRowProps) => {
  const paidText = order.isPaid ? formatFriendyDate(order.paidAt) : "Not Paid";
  const deliverText = order.isDelivered
    ? formatFriendyDate(order.deliveredAt)
    : "Not Delivered";

  const redtext = (value: boolean) => (!value ? "text-red-500" : "");

  // Delete order from database
  const handleDeleteOrder = async () => {
    const DELETE_ORDER_API_URL = `${ORDERS_API_URL}/${order._id}`;
    const response = await axios({
      method: "DELETE",
      url: DELETE_ORDER_API_URL,
      validateStatus: () => true,
    });

    const result = response.data;
    const { error, message } = result;
  };

  return (
    <tr>
      <td className="border-2 border-gray-200 px-4">{order._id}</td>
      <td className="border-2 border-gray-200 px-4">
        {formatFriendyDate(order.createdAt)}
      </td>
      <td className="border-2 border-gray-200 px-4">{`$${order.totalPrice}`}</td>
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
            url={`/admin/orders/${order._id}`}
          />
          <IconButton
            icon={faTrash}
            variant="primaryIcon"
            size="normal"
            onClick={handleDeleteOrder}
          />
        </div>
      </td>
    </tr>
  );
};

export default AdminOrderRow;

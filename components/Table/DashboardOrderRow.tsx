import React from "react";
import IconButton from "@/components/Button/IconButton";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Order from "@/types/Order";

interface DashboardOrderRowProps {
  order: Order;
}

const DashboardOrderRow = ({ order }: DashboardOrderRowProps) => {
  return (
    <tr>
      <td className="border-2 border-gray-200 px-4">{order._id}</td>
      <td className="border-2 border-gray-200 px-4">12 Dec 2022</td>
      <td className="border-2 border-gray-200 px-4">{`$${order.totalPrice}`}</td>
      <td className="border-2 border-gray-200 px-4">12 Dec 2022</td>
      <td className="border-2 border-gray-200 px-4">12 Dec 2022</td>
      <td className="border-2 border-gray-200 px-4">
        <div className="flex items-center justify-center">
          <IconButton
            icon={faEye}
            variant="primaryIcon"
            size="normal"
            url={`/orders/${order._id}`}
          />
        </div>
      </td>
    </tr>
  );
};

export default DashboardOrderRow;

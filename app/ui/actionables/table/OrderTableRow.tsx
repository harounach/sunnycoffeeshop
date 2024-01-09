import { BsEye } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import type { Order } from "@/app/lib/definitions";

interface OrderTableRowProps {
  order: Order;
  customClasses?: string;
}

export default function OrderTableRow({
  order,
  customClasses,
}: OrderTableRowProps) {
  return (
    <tr className={customClasses}>
      <td>{order._id}</td>
      <td>{order.createdAt}</td>
      <td className="number">{`$${order.totalPrice}`}</td>
      <td className="hide">{order.paidAt}</td>
      <td className="hide">{order.deliveredAt}</td>
      <td>
        <IconButton url={`/account/orders/${order._id}`} hasBG>
          <BsEye />
        </IconButton>
      </td>
    </tr>
  );
}

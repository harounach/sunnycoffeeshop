import classNames from "classnames";
import { BsEye, BsTrash3Fill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import type { Order } from "@/app/lib/definitions";

interface AdminOrderTableRowProps {
  order: Order;
  customClasses?: string;
}

export default function AdminOrderTableRow({
  order,
  customClasses,
}: AdminOrderTableRowProps) {
  const classes = classNames("table__row", customClasses);

  return (
    <tr className={classes}>
      <td className="table__data">{order._id}</td>
      <td className="table__data">{order.createdAt}</td>
      <td className="table__data table__data--number">{`$${order.totalPrice}`}</td>
      <td className="table__data table__data--hide">{order.paidAt}</td>
      <td className="table__data table__data--hide">{order.deliveredAt}</td>
      <td className="table__data">
        <div className="table__actions">
          <IconButton hasBG>
            <BsTrash3Fill />
          </IconButton>
          <IconButton url={`/admin/orders/${order._id}`} hasBG>
            <BsEye />
          </IconButton>
        </div>
      </td>
    </tr>
  );
}

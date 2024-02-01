import classNames from "classnames";
import { BsEye, BsTrash3Fill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import AdminDeleteOrderButton from "@/app/ui/section/admin/orders/AdminDeleteOrderButton";
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
          <AdminDeleteOrderButton id={order._id} />
          <ViewButton id={order._id} />
        </div>
      </td>
    </tr>
  );
}

function ViewButton({ id }: { id: string }) {
  return (
    <IconLinkButton url={`/admin/orders/${id}`} hasBG>
      <BsEye />
    </IconLinkButton>
  );
}

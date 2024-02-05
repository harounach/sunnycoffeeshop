import classNames from "classnames";
import { BsEye } from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import AdminDeleteOrderButton from "@/app/ui/section/admin/orders/AdminDeleteOrderButton";
import Badge from "@/app/ui/misc/Badge";
import { formatFriendyDate } from "@/app/lib/utils/dateUtils";
import { truncateText } from "@/app/lib/utils/textUtils";
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

  const paymentBadge = order.isPaid ? (
    <Badge label="Paid" color="green" />
  ) : (
    <Badge label="Not Paid" color="red" />
  );

  const deliveryBadge = order.isDelivered ? (
    <Badge label="Delivered" color="green" />
  ) : (
    <Badge label="Not Delivered" color="red" />
  );

  console.log(order._id)

  return (
    <tr className={classes}>
      <td className="table__data">{truncateText(order._id)}</td>
      <td className="table__data">{formatFriendyDate(order.createdAt)}</td>
      <td className="table__data table__data--number">{`$${order.totalPrice}`}</td>
      <td className="table__data table__data--hide">{paymentBadge}</td>
      <td className="table__data table__data--hide">{deliveryBadge}</td>
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
    <IconLinkButton url={`/admin/orders/${id}`} hasBG title="View Order">
      <BsEye />
    </IconLinkButton>
  );
}

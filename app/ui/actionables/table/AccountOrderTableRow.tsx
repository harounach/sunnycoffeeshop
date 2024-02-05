import classNames from "classnames";
import { BsEye } from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import Badge from "@/app/ui/misc/Badge";
import { formatFriendyDate } from "@/app/lib/utils/dateUtils";
import { truncateText } from "@/app/lib/utils/textUtils";
import type { Order } from "@/app/lib/definitions";

interface AccountOrderTableRowProps {
  order: Order;
  customClasses?: string;
}

export default function AccountOrderTableRow({
  order,
  customClasses,
}: AccountOrderTableRowProps) {
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

  return (
    <tr className={classes}>
      <td className="table__data">{truncateText(order._id)}</td>
      <td className="table__data">{formatFriendyDate(order.createdAt)}</td>
      <td className="table__data table__data--number">{`$${order.totalPrice}`}</td>
      <td className="table__data table__data--hide">{paymentBadge}</td>
      <td className="table__data table__data--hide">{deliveryBadge}</td>
      <td className="table__data">
        <div className="table__actions">
          <IconLinkButton url={`/account/orders/${order._id}`} hasBG>
            <BsEye />
          </IconLinkButton>
        </div>
      </td>
    </tr>
  );
}

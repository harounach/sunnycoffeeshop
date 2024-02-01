import classNames from "classnames";
import { BsEye } from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import type { Order } from "@/app/lib/definitions";

interface OrderTableRowProps {
  order: Order;
  customClasses?: string;
}

export default function OrderTableRow({
  order,
  customClasses,
}: OrderTableRowProps) {
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
          <IconLinkButton url={`/account/orders/${order._id}`} hasBG>
            <BsEye />
          </IconLinkButton>
        </div>
      </td>
    </tr>
  );
}

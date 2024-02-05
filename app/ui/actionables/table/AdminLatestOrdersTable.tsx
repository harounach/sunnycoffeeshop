import classNames from "classnames";
import AdminOrderTableRow from "@/app/ui/section/admin/orders/AdminOrderTableRow";
import { fetchLatestOrders } from "@/app/lib/database/order/order.query";

interface AdminLatestOrdersTableProps {
  customClasses?: string;
}

export default async function AdminLatestOrdersTable({
  customClasses,
}: AdminLatestOrdersTableProps) {
  const classes = classNames("table-wrapper", customClasses);

  const orders = await fetchLatestOrders();

  const orderRows = orders.map((order) => {
    return <AdminOrderTableRow key={order._id.toString()} order={order} />;
  });

  return (
    <div className={classes}>
      <table className="table">
        <thead>
          <tr className="table__row title-base">
            <th className="table__header">ID</th>
            <th className="table__header">Date</th>
            <th className="table__header">Total</th>
            <th className="table__header table__header--hide">Paid</th>
            <th className="table__header table__header--hide">Delivered</th>
            <th className="table__header table__header--right">Actions</th>
          </tr>
        </thead>
        <tbody className="table__body body-base">{orderRows}</tbody>
      </table>
    </div>
  );
}

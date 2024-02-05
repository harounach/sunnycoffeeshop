import classNames from "classnames";
import TablePagination from "@/app/ui/actionables/table/TablePagination";
import AdminOrderTableRow from "@/app/ui/section/admin/orders/AdminOrderTableRow";
import { fetchPagedOrders } from "@/app/lib/database/order/order.query";

interface AdminOrderTableProps {
  currentPage: number;
  customClasses?: string;
}

export default async function AdminOrderTable({
  currentPage,
  customClasses,
}: AdminOrderTableProps) {
  const classes = classNames("table-wrapper", customClasses);

  const { orders, totalPages } = await fetchPagedOrders(currentPage);

  const orderRows = orders.map((order) => {
    return <AdminOrderTableRow key={order._id} order={order} />;
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
      <TablePagination totalPages={totalPages} customClasses="table__pager" />
    </div>
  );
}

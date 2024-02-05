import classNames from "classnames";
import TablePagination from "@/app/ui/actionables/table/TablePagination";
import AccountOrderTableRow from "./AccountOrderTableRow";
import { fetchPagedUserOrders } from "@/app/lib/database/order/order.query";

interface AccountOrderTableProps {
  userId: string;
  currentPage: number;
  customClasses?: string;
}

export default async function AccountOrderTable({
  userId,
  currentPage,
  customClasses,
}: AccountOrderTableProps) {
  const classes = classNames("table-wrapper", customClasses);

  const { orders, totalPages } = await fetchPagedUserOrders(
    userId,
    currentPage,
  );

  const orderRows = orders.map((order) => {
    return <AccountOrderTableRow key={order._id.toString()} order={order} />;
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

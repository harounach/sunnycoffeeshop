import classNames from "classnames";
import TablePagination from "@/app/ui/actionables/table/TablePagination";

interface OrderTableProps {
  customClasses?: string;
  children: React.ReactNode;
}

export default function OrderTable({
  customClasses,
  children,
}: OrderTableProps) {
  const classes = classNames("table-wrapper", customClasses);

  return (
    <div className={classes}>
      <table className="table">
        <thead className="table__header">
          <tr className="title-base">
            <th>ID</th>
            <th>Date</th>
            <th>Total</th>
            <th className="hide">Paid</th>
            <th className="hide">Delivered</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table__body body-base">{children}</tbody>
      </table>
      <TablePagination customClasses="table__pager" />
    </div>
  );
}

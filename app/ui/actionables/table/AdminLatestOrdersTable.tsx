import classNames from "classnames";

interface AdminLatestOrdersTableProps {
  customClasses?: string;
  children: React.ReactNode;
}

export default function AdminLatestOrdersTable({
  customClasses,
  children,
}: AdminLatestOrdersTableProps) {
  const classes = classNames("table-wrapper", customClasses);

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
        <tbody className="table__body body-base">{children}</tbody>
      </table>
    </div>
  );
}

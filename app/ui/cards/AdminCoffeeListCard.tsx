import classNames from "classnames";
import AdminCoffeeCard from "@/app/ui/cards/AdminCoffeeCard";
import Button from "@/app/ui/actionables/buttons/Button";
import TablePagination from "@/app/ui/actionables/table/TablePagination";
import type { Product } from "@/app/lib/definitions";

interface AdminCoffeeListCardProps {
  products: Array<Product>;
  customClasses?: string;
}

export default function AdminCoffeeListCard({
  products,
  customClasses,
}: AdminCoffeeListCardProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Items</h3>
        <Button
          label="Add Product"
          url="/admin/products/create"
          customClasses="content-card__btn"
        />
      </div>
      <div className="content-card__content">
        {products.map((product) => {
          return <AdminCoffeeCard key={product._id} product={product} />;
        })}
      </div>
      <div className="content-card__pager">
        <TablePagination />
      </div>
    </div>
  );
}

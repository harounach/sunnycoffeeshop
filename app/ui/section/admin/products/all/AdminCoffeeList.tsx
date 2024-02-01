import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import AdminCoffeeCard from "./AdminCoffeeCard";
import TablePagination from "@/app/ui/actionables/table/TablePagination";
import { Product } from "@/app/lib/definitions";

export default function AdminCoffeeList({
  products,
}: {
  products: Array<Product>;
}) {
  return (
    <div className="content-card">
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Items</h3>
        <LinkButton
          label="Create Product"
          url="/admin/products/create"
          customClasses="content-card__btn"
        />
      </div>
      <div className="content-card__content">
        {products.map((product) => {
          product._id = product._id.toString();
          return <AdminCoffeeCard key={product._id} product={product} />;
        })}
      </div>
      <div className="content-card__pager">
        <TablePagination />
      </div>
    </div>
  );
}

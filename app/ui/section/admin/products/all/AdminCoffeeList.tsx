import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import AdminCoffeeCard from "./AdminCoffeeCard";
import TablePagination from "@/app/ui/actionables/table/TablePagination";
import {
  fetchFilteredProducts,
  fetchProductsPages,
} from "@/app/lib/database/product/product.query";
import Searchbar from "@/app/ui/inputs/Searchbar";

export default async function AdminCoffeeList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchFilteredProducts(query, currentPage);
  const totalPages = await fetchProductsPages(query);
  return (
    <div className="content-card">
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Coffee</h3>
        <LinkButton
          label="Create Product"
          url="/admin/products/create"
          customClasses="content-card__btn"
        />
      </div>

      <Searchbar customClasses="content-card__search" />

      <div className="content-card__content">
        {products.map((product) => {
          product._id = product._id.toString();
          return <AdminCoffeeCard key={product._id.toString()} product={product} />;
        })}
      </div>
      <div className="content-card__pager">
        <TablePagination totalPages={totalPages} />
      </div>
    </div>
  );
}

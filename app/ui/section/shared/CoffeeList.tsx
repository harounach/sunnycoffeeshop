import classNames from "classnames";
import CoffeeCard from "./CoffeeCard";
import { fetchFilteredProducts } from "@/app/lib/database/product/product.query";

interface CoffeeListProps {
  query: string;
  currentPage: number;
  customClasses?: string;
}

export default async function CoffeeList({
  query,
  currentPage,
  customClasses,
}: CoffeeListProps) {
  const classes = classNames("coffee-list", customClasses);

  const products = await fetchFilteredProducts(query, currentPage);

  return (
    <div className={classes}>
      {products.map((product) => {
        return <CoffeeCard key={product._id} product={product} />;
      })}
    </div>
  );
}

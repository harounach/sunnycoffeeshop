import classNames from "classnames";
import CoffeeCard from "./CoffeeCard";
import { fetchFeaturedProducts } from "@/app/lib/database/product/product.query";
// import { products } from "@/app/lib/placeholder-data";
// const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

interface FeaturedCoffeeListProps {
  customClasses?: string;
}

export default async function FeaturedCoffeeList({
  customClasses,
}: FeaturedCoffeeListProps) {
  const featuredProducts = await fetchFeaturedProducts();

  const classes = classNames("coffee-list", customClasses);

  return (
    <div className={classes}>
      {featuredProducts.map((product) => {
        return <CoffeeCard key={product._id} product={product} />;
      })}
    </div>
  );
}

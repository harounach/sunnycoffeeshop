import classNames from "classnames";
import FavoriteCoffeeCard from "@/app/ui/cards/FavoriteCoffeeCard";
import type { Product } from "@/app/lib/definitions";

interface FavoriteCoffeeListCardProps {
  favoriteProducts: Array<Product>;
  customClasses?: string;
}

export default function FavoriteCoffeeListCard({
  favoriteProducts,
  customClasses,
}: FavoriteCoffeeListCardProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Items</h3>
      </div>
      <div className="content-card__content">
        {favoriteProducts.map((product) => {
          return <FavoriteCoffeeCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}

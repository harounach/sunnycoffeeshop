import Image from "next/image";
import classNames from "classnames";
import { BsCartPlus, BsHeart } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { Product } from "@/app/lib/definitions";
import { favoriteProducts } from "@/app/lib/placeholder-data";

export default function Page() {
  return (
    <section className="account-favorite-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Favorites</h1>
          <p className="desc body-base">Checkout your favorite coffee</p>
          <div className="account-favorite-page__content">
            <FavoriteCoffeeList favoriteProducts={favoriteProducts} />
          </div>
        </div>
      </section>
    </section>
  );
}

// FavoriteCoffeeList
interface FavoriteCoffeeListProps {
  favoriteProducts: Array<Product>;
  customClasses?: string;
}

function FavoriteCoffeeList({
  favoriteProducts,
  customClasses,
}: FavoriteCoffeeListProps) {
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

// FavoriteCoffeeCard
interface FavoriteCoffeeCardProps {
  product: Product;
  customClasses?: string;
}

function FavoriteCoffeeCard({
  product,
  customClasses,
}: FavoriteCoffeeCardProps) {
  const classes = classNames("favorite-coffee-card", customClasses);

  return (
    <div className={classes}>
      <Image
        src={product.image}
        width={152}
        height={152}
        alt={product.title}
        className="favorite-coffee-card__img"
      />
      <div className="favorite-coffee-card__content">
        <div className="favorite-coffee-card__header">
          <span className="favorite-coffee-card__title title-base">
            {product.title}
          </span>
          <span className="favorite-coffee-card__price title-base">{`$${product.price}`}</span>
        </div>
        <div className="favorite-coffee-card__footer">
          <IconButton hasBG customClasses="favorite-coffee-card__favorite">
            <BsHeart />
          </IconButton>
          <IconButton hasBG customClasses="favorite-coffee-card__remove">
            <BsCartPlus />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

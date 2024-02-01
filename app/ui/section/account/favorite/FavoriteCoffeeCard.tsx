import Image from "next/image";
import classNames from "classnames";
import { BsCartPlus, BsHeart } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { Product } from "@/app/lib/definitions";

interface FavoriteCoffeeCardProps {
  product: Product;
  customClasses?: string;
}

export default function FavoriteCoffeeCard({
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

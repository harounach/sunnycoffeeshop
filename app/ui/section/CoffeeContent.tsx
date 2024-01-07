import Image from "next/image";
import classNames from "classnames";
import { BsHeart, BsHeartFill, BsCartPlus, BsCartDash } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import Rating from "@/app/ui/section/Rating";
import type { Product } from "@/app/lib/definitions";

interface CoffeeContentProps {
  product: Product;
  customClasses?: string;
}

export default function CoffeeContent({
  product,
  customClasses,
}: CoffeeContentProps) {
  const classes = classNames("coffee-content", customClasses);
  return (
    <div className={classes}>
      <Image
        src={product.image}
        width={420}
        height={360}
        alt={product.title}
        className="coffee-content__img"
      />
      <div className="coffee-content__content">
        <div className="coffee-content__header">
          <h2 className="coffee-content__title title-medium">
            {product.title}
          </h2>
          <h2 className="coffee-content__price title-medium">
            {`$${product.price}`}
          </h2>
        </div>
        <Rating value={4.5} customClasses="coffee-content__rating" />
        <p className="coffee-content__desc body-base">{product.desc}</p>
        <div className="coffee-content__actions">
          <IconButton color="primary" hasBG customClasses="coffee-content__btn">
            <BsHeart />
          </IconButton>
          <IconButton color="primary" hasBG customClasses="coffee-content__btn">
            <BsCartPlus />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/app/lib/definitions";
import classNames from "classnames";

interface CoffeeCardProps {
  product: Product;
  customClasses?: string;
}

export default function CoffeeCard({
  product,
  customClasses,
}: CoffeeCardProps) {
  const classes = classNames("coffee-card", customClasses);

  return (
    <Link
      className={classes}
      title={product.title}
      href={`/products/${product._id.toString()}`}
    >
      <Image
        src={product.image}
        width={242}
        height={189}
        alt={product.title}
        className="coffee-card__img"
      />
      <div className="coffee-card__content">
        <span className="coffee-card__title title-base">{product.title}</span>
        <span className="coffee-card__price title-base">{`$${product.price}`}</span>
      </div>
    </Link>
  );
}

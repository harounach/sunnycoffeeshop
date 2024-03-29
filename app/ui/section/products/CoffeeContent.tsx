import Image from "next/image";
import Rating from "@/app/ui/misc/Rating";
import CoffeeActions from "./CoffeeActions";
import type { Product } from "@/app/lib/definitions";

export default function CoffeeContent({ product }: { product: Product }) {
  return (
    <div className="coffee-content">
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
        {product.numReviews > 0 && (
          <div className="coffee-content__rating">
            <Rating value={product.rating} />
            <span className="coffee-content__count body-base">
              ({product.numReviews})
            </span>
          </div>
        )}

        <p className="coffee-content__desc body-base">{product.desc}</p>
        <CoffeeActions product={product} />
      </div>
    </div>
  );
}

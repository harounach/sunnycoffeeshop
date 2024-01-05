import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/app/lib/definitions";

interface CoffeeCardProps {
  product: Product;
  customClasses?: string;
}

export default function CoffeeCard({
  product,
  customClasses,
}: CoffeeCardProps) {
  return (
    <Link
      className="coffee-card"
      title={product.title}
      href={`/products/${product._id}`}
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

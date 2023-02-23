import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BaseProps } from "@/types/BaseProps";
import Product from "@/types/Product";

interface HomeCardProps extends BaseProps {
  product: Product;
}

const HomeCard = ({ product }: HomeCardProps) => {

  return (
    <Link className="flex flex-col items-center gap-4" href={`/products/${product._id}`}>
      <Image
        src={product.image}
        width={320}
        height={240}
        alt={product.title}
        className="rounded"
      />
      <h3 className="text-center text-xl">{product.title}</h3>
      <h4 className="text-center text-lg text-yellow-700">{`$${product.price}`}</h4>
    </Link>
  );
};

export default HomeCard;

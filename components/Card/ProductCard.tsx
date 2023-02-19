import React from "react";

import { BaseProps } from "@/types/BaseProps";
import Image from "next/image";
import IconButton from "../Button/IconButton";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Product from "@/types/Product";

interface ProductCardProps extends BaseProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div>
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
        />
      </div>
      <div className="col-span-3 flex items-center justify-between">
        <h3 className="text-xl">{product.title}</h3>

        <h4 className="text-lg">{`$${product.price}`}</h4>
        <div className="flex items-center gap-4">
          <IconButton icon={faTrash} variant="primaryIcon" size="normal" />
          <IconButton
            icon={faPen}
            variant="primaryIcon"
            size="normal"
            url="/admin/editproduct"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

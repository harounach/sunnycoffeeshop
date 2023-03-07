import Image from "next/image";
import IconButton from "../Button/IconButton";
import { BaseProps } from "@/types/BaseProps";
import React from "react";
import { faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import Product from "@/types/Product";

interface FavoriteCardProps extends BaseProps {
  product: Product;
  onFavoriteProductDeleted: () => void;
}

const FavoriteCard = ({
  product,
  onFavoriteProductDeleted,
}: FavoriteCardProps) => {
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
          <IconButton
            icon={faTrash}
            size="normal"
            variant="primaryIcon"
            onClick={onFavoriteProductDeleted}
          />
          <IconButton
            icon={faEye}
            size="normal"
            variant="primaryIcon"
            url={`/products/${product._id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;

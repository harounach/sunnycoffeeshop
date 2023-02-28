import React from "react";

import { BaseProps } from "@/types/BaseProps";
import Image from "next/image";
import IconButton from "../Button/IconButton";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Product from "@/types/Product";
import axios from "axios";
import { PRODUCTS_API_URL } from "@/lib/urlUtils";

interface ProductCardProps extends BaseProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Delete product from database
  const onProductDeleted = async () => {
    const DELETE_PRODUCT_API_URL = `${PRODUCTS_API_URL}/${product._id}`;
    const response = await axios({
      method: "DELETE",
      url: DELETE_PRODUCT_API_URL,
      validateStatus: () => true,
    });

    const result = response.data;
    const { error, message, data } = result;
  };

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
            variant="primaryIcon"
            size="normal"
            onClick={onProductDeleted}
          />
          <IconButton
            icon={faPen}
            variant="primaryIcon"
            size="normal"
            url={`/admin/products/edit/${product._id}`}
          />
          <IconButton
            icon={faEye}
            variant="primaryIcon"
            size="normal"
            url={`/admin/products/${product._id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

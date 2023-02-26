import Image from "next/image";
import IconButton from "../Button/IconButton";
import { BaseProps } from "@/types/BaseProps";
import React from "react";
import { faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Product from "@/types/Product";
import axios from "axios";
import { USERS_API_URL, USER_ID } from "@/lib/urlUtils";

interface FavoriteCardProps extends BaseProps {
  product: Product;
}

const FavoriteCard = ({ product }: FavoriteCardProps) => {
  const onFavoriteProductDeleted = async () => {
    const API_URL = `${USERS_API_URL}/${USER_ID}/products/${product._id}`;
    try {
      const response = await axios({
        method: "PATCH",
        url: API_URL,
        validateStatus: () => true,
      });

      const result = response.data;
      console.log(result);
    } catch (err) {
      console.log("Error.................");
      console.log(err);
    }
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
            size="normal"
            variant="primaryIcon"
            onClick={onFavoriteProductDeleted}
          />
          <IconButton icon={faCartPlus} size="normal" variant="primaryIcon" />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;

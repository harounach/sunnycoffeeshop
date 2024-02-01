"use client";

import { BsHeart, BsCartPlus, BsCartX } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { useCartStore } from "@/app/lib/store/cart";
import { isInCart } from "@/app/lib/utils/cartUtils";
import type { Product } from "@/app/lib/definitions";

export default function CoffeeActions({ product }: { product: Product }) {
  const { items } = useCartStore();
  const productInCart = isInCart(product, items);

  return (
    <div className="coffee-content__actions">
      <FavoriteButton />

      {productInCart ? (
        <RemoveFromCartButton id={product._id} />
      ) : (
        <AddToCartButton product={product} />
      )}
    </div>
  );
}

function FavoriteButton() {
  return (
    <IconButton color="primary" hasBG customClasses="coffee-content__btn">
      <BsHeart />
    </IconButton>
  );
}

function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCartStore();

  return (
    <IconButton
      color="primary"
      hasBG
      customClasses="coffee-content__btn"
      onClick={() => addToCart(product)}
    >
      <BsCartPlus />
    </IconButton>
  );
}

function RemoveFromCartButton({ id }: { id: string }) {
  const { removeFromCart } = useCartStore();

  return (
    <IconButton
      color="danger"
      hasBG
      customClasses="coffee-content__btn"
      onClick={() => removeFromCart(id)}
    >
      <BsCartX />
    </IconButton>
  );
}

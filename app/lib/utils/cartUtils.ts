import type { Product, OrderItem } from "@/app/lib/definitions";

export function isInCart(product: Product, items: Array<OrderItem>) {
  const productInCart = items.find((item) => item.product._id === product._id);

  if (productInCart) return true;

  return false;
}

import type { OrderItem } from "@/app/lib/definitions";

export function isInCart(productId: string, items: Array<OrderItem>) {
  const productInCart = items.find((item) => item.product._id === productId);

  if (productInCart) return true;

  return false;
}

import { OrderItem, Summary } from "../definitions";

export const getSummary = (items: Array<OrderItem>): Summary => {
  const subtotal = items.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0);

  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

  return {
    count: items.length,
    subtotal,
    shipping,
    tax,
    total,
  };
};

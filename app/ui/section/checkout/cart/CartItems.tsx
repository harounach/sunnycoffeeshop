"use client";

import CartCard from "./CartCard";
import { useCartStore } from "@/app/lib/store/cart";
// import { cartItemsData as items } from "@/app/lib/placeholder-data";

interface CartItemsProps {
  customClasses?: string;
}

export default function CartItems({ customClasses }: CartItemsProps) {
  const items = useCartStore((state) => state.items);

  return (
    <div className={customClasses}>
      {items.map((orderItem) => {
        return <CartCard key={orderItem.product._id} item={orderItem} />;
      })}
    </div>
  );
}

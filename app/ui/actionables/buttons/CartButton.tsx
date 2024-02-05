"use client";
import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import { useCartStore } from "@/app/lib/store/cart";

interface CartButtonProps {
  customClasses?: string;
}

export default function CartButton({ customClasses }: CartButtonProps) {
  const { items } = useCartStore();

  return (
    <div className="cart-btn">
      <Link className="icon-btn cart-btn__btn" href="/cart">
        <BsFillCartFill />
      </Link>

      {items.length > 0 && (
        <span className="cart-btn__value">{items.length}</span>
      )}
    </div>
  );
}

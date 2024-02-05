"use client";

import Button from "@/app/ui/actionables/buttons/Button";
import { OrderItem, Payment, Shipping } from "@/app/lib/definitions";
import { createOrderAction } from "@/app/lib/actions/order.action";
import { useFormState } from "react-dom";

interface CreateOrderButtonProps {
  userId: string;
  shipping: Shipping;
  payment: Payment;
  items: Array<OrderItem>;
}

export default function CreateOrderButton({
  userId,
  shipping,
  payment,
  items,
}: CreateOrderButtonProps) {
  const initialState = { message: "" };
  const createOrder = createOrderAction.bind(
    null,
    userId,
    shipping,
    payment,
    items,
  );
  const [state, dispatch] = useFormState(createOrder, initialState);

  return (
    <form action={dispatch}>
      <Button
        type="submit"
        label="Place Order Now"
        customClasses="summary__btn"
      />
    </form>
  );
}

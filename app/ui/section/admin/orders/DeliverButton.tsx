"use client";

import { useFormState } from "react-dom";
import Button from "@/app/ui/actionables/buttons/Button";
import { markOrderAsDeliveredAction } from "@/app/lib/actions/order.action";

export default function DeliverButton({ orderId }: { orderId: string }) {
  const initialState = { message: "" };
  const markOrderAsDelivered = markOrderAsDeliveredAction.bind(null, orderId);
  const [state, dispatch] = useFormState(markOrderAsDelivered, initialState);

  return (
    <form action={dispatch}>
      <Button
        type="submit"
        label="Mark As Delivered"
        customClasses="summary__btn"
      />
    </form>
  );
}

"use client";

import { useFormState } from "react-dom";
import Button from "@/app/ui/actionables/buttons/Button";
// import { markOrderAsPaidAction } from "@/app/lib/actions/order.action";

export default function PayButton({ orderId }: { orderId: string }) {
  // const initialState = { message: "" };
  // const markOrderAsPaid = markOrderAsPaidAction.bind(null, orderId);
  // const [state, dispatch] = useFormState(markOrderAsPaid, initialState);

  // action={dispatch}
  return (
    <form>
      <Button type="submit" label="Mark As Paid" customClasses="summary__btn" />
    </form>
  );
}

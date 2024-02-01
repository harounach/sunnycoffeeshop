"use client";

import { useFormState } from "react-dom";
import Button from "@/app/ui/actionables/buttons/Button";
// import { deleteProductReviewsAction } from "@/app/lib/actions/review.action";

export default function DeleteReviewsButton({
  productId,
}: {
  productId: string;
}) {
  // const initialState = { message: "", errors: {} };
  // const deleteAllReviews = deleteProductReviewsAction.bind(null, productId);
  // const [state, dispatch] = useFormState(deleteAllReviews, initialState);

  // action={dispatch}
  return (
    <form>
      <Button label="Delete All" variant="danger" />
    </form>
  );
}

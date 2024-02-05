"use client";

import { useFormState } from "react-dom";
import { BsTrash } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { deleteReviewAction } from "@/app/lib/actions/review.action";

interface DeleteSingleReviewButtonProps {
  reviewId: string;
}

export default function DeleteSingleReviewButton({
  reviewId,
}: DeleteSingleReviewButtonProps) {
  const initialState = { message: "", errors: {} };
  const deleteReview = deleteReviewAction.bind(null, reviewId);
  const [state, dispatch] = useFormState(deleteReview, initialState);

  return (
    <form action={dispatch}>
      <IconButton hasBG color="danger" title="Delete Review">
        <BsTrash />
      </IconButton>
    </form>
  );
}

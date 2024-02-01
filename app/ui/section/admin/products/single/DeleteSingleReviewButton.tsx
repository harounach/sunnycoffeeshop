"use client";

// import { useFormState } from "react-dom";
import { BsTrash } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
// import { deleteReviewAction } from "@/app/lib/actions/review.action";

export default function DeleteSingleReviewButton({ id }: { id: string }) {
  // const initialState = { message: "", errors: {} };
  // const deleteReview = deleteReviewAction.bind(null, id);
  // const [state, dispatch] = useFormState(deleteReview, initialState);

  // action={dispatch}

  return (
    <form>
      <IconButton hasBG color="danger" title="Delete Review">
        <BsTrash />
      </IconButton>
    </form>
  );
}

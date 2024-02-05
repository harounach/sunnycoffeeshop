"use client";

import { useFormState } from "react-dom";
import TextArea from "@/app/ui/inputs/TextArea";
import Button from "@/app/ui/actionables/buttons/Button";
import { createReviewAction } from "@/app/lib/actions/review.action";

interface ReviewFormProps {
  name: string;
  email: string;
  productId: string;
}

export default function ReviewForm({
  name,
  email,
  productId,
}: ReviewFormProps) {
  const initialState = { message: "", errors: {} };
  const createReview = createReviewAction.bind(null, name, email, productId);
  const [state, dispatch] = useFormState(createReview, initialState);

  return (
    <form className="write-review__form" action={dispatch}>
      <div className="select write-review__rating">
        <label className="select__label label" htmlFor="rating">
          Rating
        </label>
        <select name="rating" id="rating" className="select__select body-base">
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Not bad</option>
          <option value="2">2 - Not good</option>
          <option value="1">1 - Bad</option>
        </select>
      </div>
      <TextArea
        name="comment"
        id="comment"
        label="Comment"
        placeholder="Comment"
        error={state?.errors?.comment?.join(", ")}
      />
      <Button label="Submit" type="submit" customClasses="write-review__btn" />
      {state.message && (
        <p className="form__error body-base">{state.message}</p>
      )}
    </form>
  );
}

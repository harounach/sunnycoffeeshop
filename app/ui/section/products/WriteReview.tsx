import Button from "@/app/ui/actionables/buttons/Button";
import Link from "next/link";

interface WriteReviewProps {
  productId: string;
  userId: string;
}

export default function WriteReview({ productId, userId }: WriteReviewProps) {
  return (
    <div className="write-review">
      <h2 className="write-review__header title-medium">Write a Review</h2>
      <div className="write-review__content">
        <h3 className="write-review__notice body-base">
          Please{" "}
          <Link className="write-review__login-btn" href="/login">
            Login
          </Link>{" "}
          to write a review
        </h3>
        <form className="write-review__form">
          <div className="select write-review__rating">
            <label className="select__label label" htmlFor="rating">
              Rating
            </label>
            <select
              name="rating"
              id="rating"
              className="select__select body-base"
            >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Not bad</option>
              <option value="2">2 - Not good</option>
              <option value="1">1 - Bad</option>
            </select>
          </div>

          <div className="text-area write-review__comment">
            <label className="label text-area__label" htmlFor="comment">
              Comment
            </label>
            <textarea
              className="text-area__area"
              name="comment"
              id="comment"
              cols={30}
              rows={5}
              placeholder="Comment"
            ></textarea>
            <p className="text-area__error body-base"></p>
          </div>
          <Button
            label="Submit"
            type="submit"
            customClasses="write-review__btn"
          />
        </form>
      </div>
    </div>
  );
}

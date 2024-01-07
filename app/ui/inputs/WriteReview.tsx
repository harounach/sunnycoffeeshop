import Link from "next/link";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "@/app/ui/actionables/buttons/Button";

export default function WriteReview() {
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
          <Select
            id="rating"
            name="rating"
            label="Rating"
            customClasses="write-review__rating"
          >
            <option value="excellet">5 - Excellent</option>
            <option value="good">4 - Good</option>
          </Select>
          <TextArea
            name="comment"
            label="Comment"
            id="comment"
            placeholder="Write comment"
            customClasses="write-review__comment"
          />
          <Button
            type="submit"
            label="Submit"
            customClasses="write-review__btn"
          />
        </form>
      </div>
    </div>
  );
}

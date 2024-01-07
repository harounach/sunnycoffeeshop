import classNames from "classnames";
import Review from "./Review";
import Rating from "@/app/ui/section/Rating";
import { reviews } from "@/app/lib/placeholder-data";

export default function ReviewList() {
  return (
    <div className="reviews">
      <h2 className="reviews__header title-medium">Reviews</h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          return (
            <li key={review._id}>
              <Review review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import classNames from "classnames";
import Rating from "@/app/ui/section/Rating";
import type { Review as ReviewType } from "@/app/lib/definitions";

interface ReviewProps {
  review: ReviewType;
  customClasses?: string;
}

export default function Review({ review, customClasses }: ReviewProps) {
  const classes = classNames("review", customClasses);
  return (
    <div className="review">
      <h4 className="review__name title-base">{review.user_name}</h4>
      <Rating value={review.rating} customClasses="review__rating" />
      <p className="review__date body-base">{review.date}</p>
      <p className="review__comment body-base">{review.comment}</p>
    </div>
  );
}

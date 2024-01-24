import classNames from "classnames";
import Rating from "@/app/ui/misc/Rating";
import type { Review as ReviewType } from "@/app/lib/definitions";

interface ReviewProps {
  review: ReviewType;
  customClasses?: string;
}

export default function Review({ review, customClasses }: ReviewProps) {
  const classes = classNames("review", customClasses);
  return (
    <div className={classes}>
      <h4 className="review__name title-base">{review.user.name}</h4>
      <div className="review__rating">
        <Rating value={review.rating} customClasses="" />
        <span>32</span>
      </div>
      <p className="review__date body-base">{review.createdAt}</p>
      <p className="review__comment body-base">{review.comment}</p>
    </div>
  );
}

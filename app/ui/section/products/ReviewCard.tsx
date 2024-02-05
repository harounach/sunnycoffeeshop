import classNames from "classnames";
import Rating from "@/app/ui/misc/Rating";
import { formatFriendyDate } from "@/app/lib/utils/dateUtils";
import type { Review } from "@/app/lib/definitions";

interface ReviewCardProps {
  review: Review;
  customClasses?: string;
}

export default function ReviewCard({ review, customClasses }: ReviewCardProps) {
  const classes = classNames("review", customClasses);
  return (
    <div className={classes}>
      <h4 className="review__name title-base">{review.name}</h4>
      <div className="review__rating">
        <Rating value={review.rating} />
      </div>
      <p className="review__date body-base">
        {formatFriendyDate(review.createdAt)}
      </p>
      <p className="review__comment body-base">{review.comment}</p>
    </div>
  );
}

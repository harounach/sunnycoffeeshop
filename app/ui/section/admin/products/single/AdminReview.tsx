import type { Review } from "@/app/lib/definitions";
import Rating from "@/app/ui/misc/Rating";
import DeleteSingleReviewButton from "./DeleteSingleReviewButton";
import { formatFriendyDate } from "@/app/lib/utils/dateUtils";

export default function AdminReview({ review }: { review: Review }) {
  return (
    <div className="review">
      <h4 className="review__name title-base">{review.name}</h4>
      <div className="review__rating">
        <Rating value={review.rating} />
      </div>
      <p className="review__date body-base">
        {formatFriendyDate(review.createdAt)}
      </p>
      <p className="review__comment body-base">{review.comment}</p>
      <div className="review__actions">
        <DeleteSingleReviewButton reviewId={review._id.toString()} />
      </div>
    </div>
  );
}

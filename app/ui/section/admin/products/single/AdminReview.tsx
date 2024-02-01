import type { Review as ReviewType } from "@/app/lib/definitions";
import Rating from "@/app/ui/misc/Rating";
import DeleteSingleReviewButton from "./DeleteSingleReviewButton";

export default function AdminReview({ review }: { review: ReviewType }) {
  return (
    <div className="review">
      <h4 className="review__name title-base">{review.user.name}</h4>
      <div className="review__rating">
        <Rating value={review.rating} />
      </div>
      <p className="review__date body-base">{review.createdAt}</p>
      <p className="review__comment body-base">{review.comment}</p>
      <div className="review__actions">
        <DeleteSingleReviewButton id={review._id} />
      </div>
    </div>
  );
}

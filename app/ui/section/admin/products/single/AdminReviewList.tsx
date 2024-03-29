// import { reviews } from "@/app/lib/placeholder-data";
import DeleteReviewsButton from "./DeleteReviewsButton";
import AdminReview from "./AdminReview";
import { fetchProductReviews } from "@/app/lib/database/review/review.query";

export default async function AdminReviewList({
  productId,
}: {
  productId: string;
}) {
  const reviews = await fetchProductReviews(productId);

  return (
    <div className="reviews">
      <h2 className="reviews__header title-medium">Reviews</h2>
      <div className="reviews__actions">
        <DeleteReviewsButton productId={productId} />
      </div>
      <ul className="reviews__list">
        {reviews.map((review) => {
          return (
            <li key={review._id}>
              <AdminReview review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

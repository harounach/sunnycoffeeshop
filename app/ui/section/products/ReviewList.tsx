import ReviewCard from "./ReviewCard";
import { fetchProductReviews } from "@/app/lib/database/review/review.query";
// import { reviews } from "@/app/lib/placeholder-data";

interface ReviewListProps {
  productId: string;
}

export default async function ReviewList({ productId }: ReviewListProps) {
  const reviews = await fetchProductReviews(productId);

  const reviewsContent = reviews.map((review) => {
    return (
      <li key={review._id.toString()}>
        <ReviewCard review={review} />
      </li>
    );
  });

  return (
    <div className="reviews">
      <h2 className="reviews__header title-medium">Reviews</h2>
      <ul className="reviews__list">
        {reviews.length > 0 ? reviewsContent : <EmpyReview />}
      </ul>
    </div>
  );
}

function EmpyReview() {
  return (
    <div>
      <p className="body-base">No reviews</p>
    </div>
  );
}

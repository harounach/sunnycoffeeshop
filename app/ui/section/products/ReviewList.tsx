import Review from "./Review";
// import { fetchProductReviews } from "@/app/lib/database/review/review.query";
import { reviews } from "@/app/lib/placeholder-data";

interface ReviewListProps {
  productId: string;
}

export default async function ReviewList({ productId }: ReviewListProps) {
  // const reviews = await fetchProductReviews(productId);

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

import ReviewForm from "./ReviewForm";
import LoginAlert from "./LoginAlert";

interface WriteReviewProps {
  name: string;
  email: string;
  productId: string;
}

export default function WriteReview({
  name,
  email,
  productId,
}: WriteReviewProps) {
  const content = email ? (
    <ReviewForm name={name} email={email} productId={productId} />
  ) : (
    <LoginAlert productId={productId} />
  );

  return (
    <div className="write-review">
      <h2 className="write-review__header title-medium">Write a Review</h2>
      <div className="write-review__content">{content}</div>
    </div>
  );
}

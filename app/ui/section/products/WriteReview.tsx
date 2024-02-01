import Link from "next/link";
import ReviewForm from "./ReviewForm";

interface WriteReviewProps {
  productId: string;
  userId: string;
}

export default function WriteReview({ productId, userId }: WriteReviewProps) {
  const content = userId ? (
    <ReviewForm productId={productId} userId={userId} />
  ) : (
    <LoginAlert />
  );

  return (
    <div className="write-review">
      <h2 className="write-review__header title-medium">Write a Review</h2>
      <div className="write-review__content">{content}</div>
    </div>
  );
}

function LoginAlert() {
  return (
    <h3 className="write-review__notice body-base">
      Please{" "}
      <Link className="write-review__login-btn" href="/login">
        Login
      </Link>{" "}
      to write a review
    </h3>
  );
}

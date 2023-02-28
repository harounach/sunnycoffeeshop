import { BaseProps } from "@/types/BaseProps";
import React from "react";

import Rating from "../Rating/Rating";
import Review from "@/types/Review";
import { formatFriendyDate } from "@/lib/dateUtils";

interface ReviewCardProps extends BaseProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="border-2 border-gray-200 p-4">
      <h3 className="text-lg">{review.name}</h3>
      <Rating value={5} />
      <h4 className="mb-4 text-base text-neutral-500">
        {formatFriendyDate(review.createdAt)}
      </h4>
      <p className="text-neutral-500">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;

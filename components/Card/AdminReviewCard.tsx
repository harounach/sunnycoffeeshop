import { BaseProps } from "@/types/BaseProps";
import React from "react";

import Rating from "../Rating/Rating";
import Review from "@/types/Review";
import { formatFriendyDate } from "@/lib/dateUtils";
import IconButton from "../Button/IconButton";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface AdminReviewCardProps extends BaseProps {
  review: Review;
  onReviewDeleted: (reviewId: string) => void;
}

const AdminReviewCard = ({ review, onReviewDeleted }: AdminReviewCardProps) => {
  return (
    <div className="border-2 border-gray-200 p-4">
      <div className="flex justify-between">
        <h3 className="text-lg">{review.name}</h3>
        <IconButton
          icon={faTrash}
          variant="primaryIcon"
          size="normal"
          onClick={() => onReviewDeleted(review._id)}
        />
      </div>
      <Rating value={5} />
      <h4 className="mb-4 text-base text-neutral-500">
        {formatFriendyDate(review.createdAt)}
      </h4>
      <p className="text-neutral-500">{review.comment}</p>
    </div>
  );
};

export default AdminReviewCard;

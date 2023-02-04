import { BaseProps } from "@/types/BaseProps";
import React from "react";

import Rating from "../Rating/Rating";

interface ReviewCardProps extends BaseProps {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

const ReviewCard = ({ name, rating, date, comment }: ReviewCardProps) => {
  return (
    <div className="border-2 border-gray-200 p-4">
      <h3 className="text-lg">{name}</h3>
      <Rating value={rating} />
      <h4 className="mb-4 text-base text-neutral-500">{date}</h4>
      <p className="text-neutral-500">{comment}</p>
    </div>
  );
};

export default ReviewCard;

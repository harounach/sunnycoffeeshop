import { UserInfo } from "@/state/userSlice";
import { BaseProps } from "@/types/BaseProps";
import React, { SyntheticEvent, useState } from "react";
import Button from "../Button/Button";

interface ReviewFormProps extends BaseProps {
  user: UserInfo;
  createReview: (name: string, rating: number, comment: string) => void;
}

const ReviewForm = ({ user, createReview }: ReviewFormProps) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const canCreateReview =
    Boolean(user.name) && Boolean(rating) && Boolean(comment);

  const handleSubmitReview = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (canCreateReview) {
      await createReview(user.name as string, rating, comment);
      // Reset review form
      setRating(5);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div className="mb-4">
        <label htmlFor="rating" className="mb-2 block text-lg">
          Rating
        </label>
        <select
          name="rating"
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          defaultValue={5}
        >
          <option value="1">1. One</option>
          <option value="2">2. Two</option>
          <option value="3">3. Three</option>
          <option value="4">4. Four</option>
          <option value="5">5. Five</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="mb-2 block text-lg">
          Comment
        </label>
        <textarea
          className="w-full border-2 border-yellow-700 px-4 py-2"
          name="comment"
          id="comment"
          rows={3}
          placeholder="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <Button variant="primary" label="Submit Review" type="submit" />
    </form>
  );
};

export default ReviewForm;

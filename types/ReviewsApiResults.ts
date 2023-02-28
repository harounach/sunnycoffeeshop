import Review from "./Review";

export interface CreateReviewApiResult {
  message?: string;
  data?: Review;
  error?: string;
}

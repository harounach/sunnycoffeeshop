import Review from "./Review";

export interface CreateReviewApiResult {
  message?: string;
  data?: Review;
  error?: string;
}

export interface DeleteReviewApiResult {
  message?: string;
  data?: Review;
  error?: string;
}

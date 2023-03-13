import { GetProductReviewsApiResult } from "@/types/ProductsApiResults";
import {
  CreateReviewApiResult,
  DeleteReviewApiResult,
} from "@/types/ReviewsApiResults";
import axios from "axios";
import { PRODUCTS_API_URL, REVIEWS_API_URL } from "./urlUtils";
import User from '@/types/User';

export const getReviews = async (productId: string) => {
  const GET_PRODUCT_REVIEWS_URL = `${PRODUCTS_API_URL}/${productId}/reviews`;
  const response = await axios<GetProductReviewsApiResult>({
    method: "GET",
    url: GET_PRODUCT_REVIEWS_URL,
    validateStatus: () => true,
  });

  return response.data;
};

export const createReview = async (
  user: User,
  name: string,
  rating: number,
  comment: string,
  productId: string
) => {
  const data = {
    name,
    rating,
    comment,
    productId,
  };

  const response = await axios<CreateReviewApiResult>({
    method: "POST",
    url: REVIEWS_API_URL,
    data,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });
  return response.data;
};

export const deleteReview = async (user: User, reviewId: string) => {
  const DELETE_REVIEW_API_URL = `${REVIEWS_API_URL}/${reviewId}`;
  const response = await axios<DeleteReviewApiResult>({
    method: "DELETE",
    url: DELETE_REVIEW_API_URL,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

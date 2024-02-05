"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  createReview,
  deleteReview,
  deleteProductReviews,
} from "@/app/lib/database/review/review.mutation";

const CreateReviewFormSchema = z.object({
  rating: z.coerce
    .number()
    .gt(0, { message: "Please enter a rating greater than 0." }),

  comment: z
    .string({
      invalid_type_error: "Please type a comment.",
    })
    .min(3, { message: "Comment must be 3 or more characters long" }),
});

export type State = {
  errors?: {
    rating?: string[];
    comment?: string[];
  };
  message?: string | null;
};

export async function createReviewAction(
  name: string,
  email: string,
  productId: string,
  prevState: State,
  formData: FormData,
) {
  // Validate form fields using Zod
  const validatedFields = CreateReviewFormSchema.safeParse({
    rating: formData.get("rating"),
    comment: formData.get("comment"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Review.",
    };
  }

  const { rating, comment } = validatedFields.data;

  try {
    // Create review in database
    await createReview(name, email, productId, Number(rating), comment);
  } catch (err) {
    return {
      message: "Database Error: Failed to Create Review.",
    };
  }

  revalidatePath(`/products/${productId}`);

  return {
    message: "",
  };
}

export async function deleteReviewAction(
  reviewId: string,
  prevState: State,
  formData: FormData,
) {
  try {
    // Delete review from database
    await deleteReview(reviewId);
  } catch (err) {
    return {
      message: "Database Error: Failed to Delete Review.",
    };
  }

  return {
    message: "Review deleted successfuly",
  };
}

export async function deleteProductReviewsAction(
  productId: string,
  prevState: State,
  formData: FormData,
) {
  try {
    // Delete product reviews from database
    await deleteProductReviews(productId);
  } catch (err) {
    return {
      message: "Database Error: Failed to Delete Product Reviews.",
    };
  }

  return {
    message: "Reviews deleted successfuly",
  };
}

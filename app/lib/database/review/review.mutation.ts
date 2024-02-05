import { revalidatePath } from "next/cache";
import { HydratedDocument } from "mongoose";
import { ProductModel, ReviewModel } from "@/app/lib/database/models";
import { Product, Review } from "@/app/lib/definitions";

export async function createReview(
  name: string,
  email: string,
  productId: string,
  rating: number,
  comment: string,
) {
  try {
    const review = await ReviewModel.findOne<HydratedDocument<Review>>({
      email: email,
      product: productId,
    });

    // User already left review for this product
    if (review) {
      return;
    }

    // Otherwise, create and save the review
    const newReview: HydratedDocument<Review> = new ReviewModel({
      name,
      email,
      rating,
      comment,
      product: productId,
    });

    await newReview.save();

    // Update product rating and numReviews;
    const productToReview = await ProductModel.findById(productId);
    const allReviews = await ReviewModel.find().lean().exec();
    const numReviews = allReviews.length;
    const ratingSum = allReviews.reduce((acc, review) => {
      return acc + review.rating;
    }, 0);
    let productRating = 0;
    if (numReviews > 0) {
      productRating = ratingSum / numReviews;
    }

    if (productToReview) {
      productToReview.rating = productRating;
      productToReview.numReviews = numReviews;
      await productToReview.save();
    }

    // Update cache
    revalidatePath(`/products/${productId}`);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteReview(reviewId: string) {
  try {
    // Find the review with this id
    const reviewToDelete = await ReviewModel.findById(reviewId).exec();
    const allReviews = await ReviewModel.find({ _id: { $ne: reviewId } })
      .lean()
      .exec();
    const numReviews = allReviews.length;
    const ratingSum = allReviews.reduce((acc, review) => {
      return acc + review.rating;
    }, 0);
    let rating = 0;
    if (numReviews > 0) {
      rating = ratingSum / numReviews;
    }
    const productId = reviewToDelete.product;

    // Find the reviewed  and update rating and numReviews
    const productReviewed =
      await ProductModel.findById<HydratedDocument<Product>>(productId).exec();

    if (productReviewed && reviewToDelete) {
      productReviewed.rating = rating;
      productReviewed.numReviews = numReviews;

      // Commit opertations
      await reviewToDelete.deleteOne();
      await productReviewed.save();
      revalidatePath(`/admin/products/${productId}`);
    }
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProductReviews(productId: string) {
  try {
    await ReviewModel.deleteMany({ product: productId });

    // Reset product rating
    const productToDeleteReviews =
      await ProductModel.findById(productId).exec();
    if (productToDeleteReviews) {
      productToDeleteReviews.rating = 0;
      productToDeleteReviews.numReviews = 0;
      productToDeleteReviews.save();

      // Revalidate cache
      revalidatePath(`/admin/products/${productId}`);
    }
  } catch (err) {
    console.error(err);
  }
}

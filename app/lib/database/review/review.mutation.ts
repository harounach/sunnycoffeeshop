import { revalidatePath } from "next/cache";
import { HydratedDocument } from "mongoose";
import { ProductModel, ReviewModel } from "@/app/lib/database/models";
import { Product, Review } from "@/app/lib/definitions";

export async function createReview(
  userId: string,
  productId: string,
  rating: number,
  comment: string,
) {
  try {
    const review = await ReviewModel.findOne({
      user: userId,
      product: productId,
    });

    // User already left review for this product
    if (review) {
      return;
    }

    // Otherwise, create and save the review
    const newReview: HydratedDocument<Review> = new ReviewModel({
      user: userId,
      rating,
      comment,
      product: productId,
    });

    await newReview.save();

    // Update product rating and numReviews;
    const productToReview = await ProductModel.findById(productId);
    const prevRating = productToReview.rating;
    const prevNumReview = productToReview.numReview;

    productToReview.rating = (prevRating + rating) / (prevNumReview + 1);
    productToReview.numReview = prevNumReview + 1;
    await productToReview.save();

    // Update cache
    revalidatePath(`/products/${productId}`);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteReview(id: string) {
  try {
    // Find the review with this id
    const reviewToDelete = await ReviewModel.findById(id).exec();

    // Find the reviewed  and update rating and numReviews
    const productReviewed = await ProductModel.findById<
      HydratedDocument<Product>
    >(reviewToDelete.product).exec();

    if (productReviewed) {
      const prevRating = productReviewed.rating;
      const prevNumReview = productReviewed.numReviews;

      productReviewed.rating =
        (prevRating - reviewToDelete.rating) / (prevNumReview - 1);
      productReviewed.numReviews = prevNumReview - 1;

      // Commit opertations
      await reviewToDelete.deleteOne();
      await productReviewed.save();
    }
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProductReviews(productId: string) {
  try {
    await ReviewModel.deleteMany({ product: productId });
  } catch (err) {
    console.error(err);
  }
}

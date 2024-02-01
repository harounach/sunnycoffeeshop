import dbConnect from "@/app/lib/database/dbConnect";
import { ReviewModel } from "@/app/lib/database/models";
import { Review } from "@/app/lib/definitions";

export async function fetchProductReviews(productId: string) {
  try {
    await dbConnect();
    const reviews = await ReviewModel.find({ product: productId })
      .populate("user", "name")
      .lean()
      .exec();

    return reviews as Review[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch reviews.");
  }
}

export async function fetchAllReviews() {
  try {
    await dbConnect();
    const reviews = await ReviewModel.find().populate("user", "name").lean();
    return reviews as Review[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch reviews.");
  }
}

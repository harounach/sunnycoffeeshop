import dbConnect from "@/app/lib/database/dbConnect";
import { ReviewModel } from "@/app/lib/database/models";
import { Review } from "@/app/lib/definitions";

export async function fetchProductReviews(productId: string) {
  try {
    await dbConnect();
    const rawReviews = (await ReviewModel.find({ product: productId })
      .lean()
      .exec()) as Review[];

    const reviews = rawReviews.map((review) => {
      return {
        ...review,
        _id: review._id.toString(),
        createdAt: review.createdAt.toString(),
      };
    });

    return reviews as Review[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch reviews.");
  }
}

// export async function fetchAllReviews() {
//   try {
//     await dbConnect();
//     const reviews = await ReviewModel.find().lean().exec();
//     return reviews as Review[];
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch reviews.");
//   }
// }

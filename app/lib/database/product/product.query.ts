import dbConnect from "@/app/lib/database/dbConnect";
import { UserModel, ProductModel } from "@/app/lib/database/models";
import { Product } from "@/app/lib/definitions";

/*
 * Fetch all products
 */
export async function fetchProducts() {
  try {
    await dbConnect();
    const products = await ProductModel.find({}).lean();
    return products as Product[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch products.");
  }
}

/*
 * Fetch featured products
 */
export async function fetchFeaturedProducts() {
  try {
    await dbConnect();
    const featuredProducts = await ProductModel.find({}).limit(4).lean();
    return featuredProducts as Product[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch featured products.");
  }
}

/*
 * Fetch single product
 */
export async function fetchSingleProduct(id: string) {
  try {
    await dbConnect();
    const singleProduct = await ProductModel.findById(id).lean();

    return singleProduct as Product;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error(`Failed to fetch product with id: ${id}`);
  }
}

import dbConnect from "@/app/lib/database/dbConnect";
import { ProductModel } from "@/app/lib/database/models";
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
    const featuredProducts = await ProductModel.find({ isFeatured: true })
      .limit(4)
      .lean();
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
    const singleProduct = (await ProductModel.findById(id).lean()) as Product;

    if (!singleProduct) {
      return null;
    }

    const product = {
      ...singleProduct,
      _id: singleProduct._id.toString(),
    };

    return product as Product;
  } catch (err) {
    console.error("Database Error:", err);
  }
}

// Number of items per page
const LIMIT = 8;

/*
 * Fetch filtered products
 */
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
) {
  try {
    await dbConnect();
    const searchFilter = query
      ? {
          title: {
            $regex: query,
            $options: "i",
          },
        }
      : {};

    const products = await ProductModel.find(searchFilter)
      .sort({ createdAt: 1 })
      .limit(LIMIT * 1)
      .skip((currentPage - 1) * LIMIT)
      .lean()
      .exec();

    return products as Product[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch filtered products.");
  }
}

/**
 * Fetch product pages
 * */
export async function fetchProductsPages(query: string) {
  try {
    await dbConnect();
    const searchFilter = query
      ? {
          title: {
            $regex: query,
            $options: "i",
          },
        }
      : {};

    const count = await ProductModel.countDocuments(searchFilter);
    const totalPages = Math.ceil(count / LIMIT);

    return totalPages as number;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch total number of products pages.");
  }
}

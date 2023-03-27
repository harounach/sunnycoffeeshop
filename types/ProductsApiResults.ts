import Product from "./Product";
import Review from "./Review";

export interface GetProductsApiResult {
  message: string;
  pages: number;
  page: number;
  data: Array<Product>;
  count: number;
}

export interface GetFeaturedProductsApiResult {
  message: string;
  data: Array<Product>;
}

export interface GetSingleProductApiResult {
  message?: string;
  data?: Product;
  error?: string;
}

export interface CreateProductApiResult {
  message?: string;
  error?: string;
  data?: Product;
}

export interface UpdateProductApiResult {
  message?: string;
  error?: string;
}

export interface DeleteProductApiResult {
  message?: string;
  error?: string;
  data?: Product;
}

export interface SearchProductsApiResult {
  message: string;
  pages: number;
  page: number;
  data: Array<Product>;
  count: number;
}

export interface GetProductReviewsApiResult {
  message?: string;
  data?: Array<Review>;
  error?: string;
  count?: number;
  rating?: number;
}

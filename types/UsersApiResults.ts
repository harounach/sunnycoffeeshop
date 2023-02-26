import Product from "./Product";
import User from "./User";

export interface GetUsersApiResult {
  message: string;
  pages: number;
  page: number;
  data: Array<User>;
  count: number;
}

export interface GetUsersFavoriteProductsApiResult {
  message?: string;
  data?: Array<Product>;
  error?: string;
}

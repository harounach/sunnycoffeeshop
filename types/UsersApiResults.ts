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

export interface AddUserFavoriteProductApiResult {
  message?: string;
  error?: string;
}

export interface DeleteUserFavoriteProductApiResult {
  message?: string;
  error?: string;
}

export interface LoginUserApiResult {
  message?: string;
  error?: string;
  data?: User;
}

export interface RegisterUserApiResult {
  message?: string;
  error?: string;
  data?: User;
}

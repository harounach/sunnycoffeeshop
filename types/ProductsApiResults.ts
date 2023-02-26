import Product from "./Product";

export interface GetProductsApiResult {
  message: string;
  pages: number;
  page: number;
  data: Array<Product>;
  count: number;
}

export interface GetSingleProductApiResult {
  message?: string;
  data?: Product;
  error?: string;
}

export interface UpdateProductApiResult {
  message?: string;
  error?: string;
}

export interface SearchProductsApiResult {
  message: string;
  pages: number;
  page: number;
  data: Array<Product>;
  count: number;
}

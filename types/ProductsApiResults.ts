import Product from "./Product";

export interface GetProductsApiResult {
  message: string;
  pages: number;
  page: number;
  data: Array<Product>;
}

export interface GetSingleProductApiResult {
  message?: string;
  data?: Product;
  error?: string;
}

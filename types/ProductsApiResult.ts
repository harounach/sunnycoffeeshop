import Product from "./Product";

export default interface ProductsApiResult {
  error?: string;
  message?: string;
  data?: Array<Product>;
}

import Order from "./Order";

export interface GetOrdersApiResult {
  message: string;
  pages: number;
  page: number;
  data: Array<Order>;
}

export interface GetSingleOrderApiResult {
  message?: string;
  data?: Order;
  error?: string;
}
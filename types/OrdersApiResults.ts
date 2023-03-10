import Order from "./Order";

export interface GetOrdersApiResult {
  message: string;
  pages: number;
  page: number;
  data: Array<Order>;
  count: number;
}

export interface GetSingleOrderApiResult {
  message?: string;
  data?: Order;
  error?: string;
}

export interface CreateOrderApiResult {
  message?: string;
  data?: Order;
  error?: string;
}

export interface DeleteOrderApiResult {
  message?: string;
  data?: Order;
  error?: string;
}

export interface PayOrderApiResult {
  message?: string;
  error?: string;
}

export interface DeliverOrderApiResult {
  message?: string;
  error?: string;
}

export interface SaveOrderSessionApiResult {
  message?: string;
  error?: string;
}

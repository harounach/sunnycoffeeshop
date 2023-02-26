// API Base URLs
export const BASE_URL = "http://localhost:4000";
export const PRODUCTS_API_URL = `${BASE_URL}/api/products`;
export const ORDERS_API_URL = `${BASE_URL}/api/orders`;
export const USERS_API_URL = `${BASE_URL}/api/users`;
export const USER_ID = "63e6cee75a6af69a0549b751";

export const getPaginationURL = (
  baseURL: string,
  page: number,
  perpage: number,
  order: number
) => {
  const searchParams = new URLSearchParams("");

  if (page) {
    searchParams.append("page", String(page));
  }

  if (perpage) {
    searchParams.append("perpage", String(perpage));
  }

  if (order) {
    searchParams.append("order", String(order));
  }

  const URL = `${baseURL}?${searchParams.toString()}`;

  return URL;
};

import Query from "@/types/Query";

// API Base URLs
export const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export const FRONTEND_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL as string;
export const PRODUCTS_API_URL = `${BACKEND_BASE_URL}/api/products`;
export const REVIEWS_API_URL = `${BACKEND_BASE_URL}/api/reviews`;
export const ORDERS_API_URL = `${BACKEND_BASE_URL}/api/orders`;
export const USERS_API_URL = `${BACKEND_BASE_URL}/api/users`;
export const SUMMARY_API_URL = `${BACKEND_BASE_URL}/api/summary`;
export const PAYMENT_API_URL = `${BACKEND_BASE_URL}/api/payments`;

export const getPaginationURL = (baseURL: string, query: Query) => {
  const searchParams = new URLSearchParams("");

  const queryKeys = Object.keys(query) as Array<keyof Query>;

  queryKeys.forEach((param) => {
    const value = query[param];
    if (value != undefined) {
      searchParams.append(param, value as string);
    }
  });

  const URL = `${baseURL}?${searchParams.toString()}`;

  return URL;
};

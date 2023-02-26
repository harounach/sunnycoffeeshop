import Query from "@/types/Query";

// API Base URLs
export const BASE_URL = "http://localhost:4000";
export const PRODUCTS_API_URL = `${BASE_URL}/api/products`;
export const ORDERS_API_URL = `${BASE_URL}/api/orders`;
export const USERS_API_URL = `${BASE_URL}/api/users`;
export const USER_ID = "63e6cee75a6af69a0549b751";

export const getPaginationURL = (baseURL: string, query: Query) => {
  const searchParams = new URLSearchParams("");

  const queryKeys = Object.keys(query) as Array<keyof Query>;

  queryKeys.forEach((param) => {
    searchParams.append(param, query[param] as string);
  });

  const URL = `${baseURL}?${searchParams.toString()}`;

  return URL;
};

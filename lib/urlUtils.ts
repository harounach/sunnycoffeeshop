export const PRODUCTS_API_URL = "http://localhost:4000/api/products";
export const ORDERS_API_URL = "http://localhost:4000/api/orders";

export const getProductsURL = (page, perpage, order) => {
	const searchParams = new URLSearchParams("");

  if(page) {
    searchParams.append("page", Number(page));
  }

  if(perpage) {
    searchParams.append("perpage", Number(perpage));
  }

  if(order) {
    searchParams.append("order", Number(order));
  }

  const GET_PRODUCTS_URL = `${PRODUCTS_API_URL}?${searchParams.toString()}`;

  return GET_PRODUCTS_URL;
}

export const getOrdersURL = (page, perpage, order) => {
  const searchParams = new URLSearchParams("");
  if(page) {
    searchParams.append("page", Number(page));
  }

  if(perpage) {
    searchParams.append("perpage", Number(perpage));
  }

  if(order) {
    searchParams.append("order", Number(order));
  }
  const GET_ORDERS_URL = `${ORDERS_API_URL}?${searchParams.toString()}`;

  return GET_ORDERS_URL;  
} 

export const getPaginationURL = (page, perpage, order) => {
	const searchParams = new URLSearchParams("");

  if(page) {
    searchParams.append("page", Number(page));
  }

  if(perpage) {
    searchParams.append("perpage", Number(perpage));
  }

  if(order) {
    searchParams.append("order", Number(order));
  }

  const GET_PRODUCTS_URL = `/shop?${searchParams.toString()}`;

  return GET_PRODUCTS_URL;
}

export const getOrderPaginationURL = (page, perpage, order) => {
  const searchParams = new URLSearchParams("");

  if(page) {
    searchParams.append("page", Number(page));
  }

  if(perpage) {
    searchParams.append("perpage", Number(perpage));
  }

  if(order) {
    searchParams.append("order", Number(order));
  }

  const GET_ORDERS_URL = `/admin/orders?${searchParams.toString()}`;

  return GET_ORDERS_URL;
}
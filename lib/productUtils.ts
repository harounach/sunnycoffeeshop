import axios from "axios";
import {
  GetProductsApiResult,
  SearchProductsApiResult,
  GetSingleProductApiResult,
  DeleteProductApiResult,
  CreateProductApiResult,
} from "@/types/ProductsApiResults";
import { PRODUCTS_API_URL } from "./urlUtils";

export const getProducts = async (url: string) => {
  const response = await axios<GetProductsApiResult>({
    method: "GET",
    url,
    validateStatus: () => true,
  });

  return response.data;
};

export const getSearchProducts = async (url: string) => {
  const response = await axios<SearchProductsApiResult>({
    method: "GET",
    url,
    validateStatus: () => true,
  });

  return response.data;
};

export const getSingleProduct = async (productId: string) => {
  const GET_SINGLE_PRODUCT_URL = `${PRODUCTS_API_URL}/${productId}`;
  const response = await axios<GetSingleProductApiResult>({
    method: "GET",
    url: GET_SINGLE_PRODUCT_URL,
    validateStatus: () => true,
  });

  return response.data;
};

export const createProduct = async (
  title: string,
  description: string,
  price: number,
  image: string,
  slug: string
) => {
  const data = {
    title,
    description,
    price,
    image,
    slug,
  };
  const response = await axios<CreateProductApiResult>({
    method: "POST",
    url: PRODUCTS_API_URL,
    data,
    validateStatus: () => true,
  });

  return response.data;
};

export const updateProduct = async (
  productId: string,
  title: string,
  description: string,
  price: number,
  image: string,
  slug: string
) => {
  const data = {
    title,
    description,
    price,
    image,
    slug,
  };

  const UPDATE_PRODUCT_API_URL = `${PRODUCTS_API_URL}/${productId}`;
  const response = await axios({
    method: "PUT",
    url: UPDATE_PRODUCT_API_URL,
    data,
    validateStatus: () => true,
  });

  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const DELETE_PRODUCT_API_URL = `${PRODUCTS_API_URL}/${productId}`;
  const response = await axios<DeleteProductApiResult>({
    method: "DELETE",
    url: DELETE_PRODUCT_API_URL,
    validateStatus: () => true,
  });

  return response.data;
};

import axios from "axios";
import {
  GetProductsApiResult,
  SearchProductsApiResult,
  GetSingleProductApiResult,
  DeleteProductApiResult,
  CreateProductApiResult,
  GetFeaturedProductsApiResult
} from "@/types/ProductsApiResults";
import { PRODUCTS_API_URL } from "./urlUtils";
import User from '@/types/User';

export const getProducts = async (url: string) => {
  const response = await axios<GetProductsApiResult>({
    method: "GET",
    url,
    validateStatus: () => true,
  });

  return response.data;
};

export const getFeaturedProducts = async () => {
  const GET_FEATURED_PRODUCTS_API_URL = `${PRODUCTS_API_URL}/all/featured`;
  const response = await axios<GetFeaturedProductsApiResult>({
    method: "GET",
    url: GET_FEATURED_PRODUCTS_API_URL,
    validateStatus: () => true,
  });

  return response.data;
}

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
  user: User,
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
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const updateProduct = async (
  user: User,
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
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const deleteProduct = async (user: User, productId: string) => {
  const DELETE_PRODUCT_API_URL = `${PRODUCTS_API_URL}/${productId}`;
  const response = await axios<DeleteProductApiResult>({
    method: "DELETE",
    url: DELETE_PRODUCT_API_URL,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

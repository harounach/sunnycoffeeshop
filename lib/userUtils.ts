import axios from "axios";
import { USERS_API_URL } from "./urlUtils";
import {
  AddUserFavoriteProductApiResult,
  DeleteUserFavoriteProductApiResult,
  GetUsersApiResult,
  LoginUserApiResult,
  RegisterUserApiResult,
} from "@/types/UsersApiResults";
import Product from "@/types/Product";
import { GetUsersFavoriteProductsApiResult } from "@/types/UsersApiResults";

export const getUsers = async (url: string) => {
  const response = await axios<GetUsersApiResult>({
    method: "GET",
    url,
    validateStatus: () => true,
  });

  return response.data;
};

export const getUserFavoriteProducts = async (url: string) => {
  const response = await axios<GetUsersFavoriteProductsApiResult>({
    method: "GET",
    url,
    validateStatus: () => true,
  });

  return response.data;
};

export const addUserFavoriteProduct = async (
  userId: string,
  productId: string
) => {
  const ADD_USER_FAVORITE_PRODUCT_API_URL = `${USERS_API_URL}/${userId}/products/${productId}`;

  const response = await axios<AddUserFavoriteProductApiResult>({
    method: "PATCH",
    url: ADD_USER_FAVORITE_PRODUCT_API_URL,
    validateStatus: () => true,
  });

  return response.data;
};

export const deleteUserFavoriteProduct = async (
  userId: string,
  productId: string
) => {
  const DELETE_USER_FAVORITE_PRODUCT_API_URL = `${USERS_API_URL}/${userId}/products/${productId}`;

  const response = await axios<DeleteUserFavoriteProductApiResult>({
    method: "DELETE",
    url: DELETE_USER_FAVORITE_PRODUCT_API_URL,
    validateStatus: () => true,
  });

  return response.data;
};

export const isProductInFavorite = (userId: string, product: Product) => {
  if (!product.favoritedBy) {
    return false;
  }
  return product.favoritedBy.includes(userId);
};

export const loginUser = async (email: string, password: string) => {
  const LOGIN_USER_API_URL = `${USERS_API_URL}/login`;

  const data = {
    email,
    password,
  };

  const response = await axios<LoginUserApiResult>({
    method: "POST",
    url: LOGIN_USER_API_URL,
    data,
    validateStatus: () => true,
  });

  return response.data;
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const REGISTER_USER_API_URL = `${USERS_API_URL}/register`;

  const data = {
    name,
    email,
    password,
  };

  const response = await axios<RegisterUserApiResult>({
    method: "POST",
    url: REGISTER_USER_API_URL,
    data,
    validateStatus: () => true,
  });

  return response.data;
};

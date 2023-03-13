import axios from "axios";
import { USERS_API_URL } from "./urlUtils";
import {
  AddUserFavoriteProductApiResult,
  DeleteUserFavoriteProductApiResult,
  GetUsersApiResult,
  LoginUserApiResult,
  RegisterUserApiResult,
  UpdateUserApiResult,
} from "@/types/UsersApiResults";
import Product from "@/types/Product";
import { GetUsersFavoriteProductsApiResult } from "@/types/UsersApiResults";
import User from "@/types/User";

export const getUsers = async (user: User, url: string) => {
  const response = await axios<GetUsersApiResult>({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const getUserFavoriteProducts = async (user: User, url: string) => {
  const response = await axios<GetUsersFavoriteProductsApiResult>({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const addUserFavoriteProduct = async (
  user: User,
  productId: string
) => {
  const ADD_USER_FAVORITE_PRODUCT_API_URL = `${USERS_API_URL}/${user._id}/products/${productId}`;

  const response = await axios<AddUserFavoriteProductApiResult>({
    method: "PATCH",
    url: ADD_USER_FAVORITE_PRODUCT_API_URL,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const deleteUserFavoriteProduct = async (
  user: User,
  productId: string
) => {
  const DELETE_USER_FAVORITE_PRODUCT_API_URL = `${USERS_API_URL}/${user._id}/products/${productId}`;

  const response = await axios<DeleteUserFavoriteProductApiResult>({
    method: "DELETE",
    url: DELETE_USER_FAVORITE_PRODUCT_API_URL,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
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

export const updateUserName = async (user: User, name: string) => {
  const UPDATE_USER_NAME_API_URL = `${USERS_API_URL}/${user._id}/updatename`;

  const data = {
    name,
  };

  const response = await axios<UpdateUserApiResult>({
    method: "PATCH",
    url: UPDATE_USER_NAME_API_URL,
    data,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const updateUserEmail = async (user: User, email: string) => {
  const UPDATE_USER_EMAIL_API_URL = `${USERS_API_URL}/${user._id}/updateemail`;

  const data = {
    email,
  };

  const response = await axios<UpdateUserApiResult>({
    method: "PATCH",
    url: UPDATE_USER_EMAIL_API_URL,
    data,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const updateUserPassword = async (
  user: User,
  oldPassword: string,
  newPassword: string
) => {
  const UPDATE_USER_PASSWORD_API_URL = `${USERS_API_URL}/${user._id}/updatepassword`;

  const data = {
    oldPassword,
    newPassword,
  };

  const response = await axios<UpdateUserApiResult>({
    method: "PATCH",
    url: UPDATE_USER_PASSWORD_API_URL,
    data,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

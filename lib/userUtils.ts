import axios from "axios";
import { USERS_API_URL } from "./urlUtils";
import { AddUserFavoriteProductApiResult, DeleteUserFavoriteProductApiResult } from "@/types/UsersApiResults";
import Product from "@/types/Product";

export const addUserFavoriteProduct = async (userId: string, productId: string) => {
	const ADD_USER_FAVORITE_PRODUCT_API_URL = `${USERS_API_URL}/${userId}/products/${productId}`;

	const response = await axios<AddUserFavoriteProductApiResult>({
    method: "PATCH",
    url: ADD_USER_FAVORITE_PRODUCT_API_URL,
    validateStatus: () => true,
  });

  return response.data;
}

export const deleteUserFavoriteProduct = async (userId: string, productId: string) => {
	const DELETE_USER_FAVORITE_PRODUCT_API_URL = `${USERS_API_URL}/${userId}/products/${productId}`;

	const response = await axios<DeleteUserFavoriteProductApiResult>({
    method: "DELETE",
    url: DELETE_USER_FAVORITE_PRODUCT_API_URL,
    validateStatus: () => true,
  });

  return response.data;
}

export const isProductInFavorite = (userId: string, product: Product) => {
	if(!product.favoritedBy) {
		return false;
	}
	return product.favoritedBy.includes(userId);
}
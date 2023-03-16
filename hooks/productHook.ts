import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getPaginationURL, PRODUCTS_API_URL, USERS_API_URL } from "@/lib/urlUtils";
import { getProducts, getSingleProduct } from "@/lib/productUtils";
import { getUserFavoriteProducts } from "@/lib/userUtils";
import {
  GetProductsApiResult,
  GetSingleProductApiResult,
} from "@/types/ProductsApiResults";
import { GetUsersFavoriteProductsApiResult } from "@/types/UsersApiResults";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";

export const useProducts = () => {
  const router = useRouter();
  const [result, setResult] = useState<GetProductsApiResult | null>(null);
  const [loading, setLoading] = useState(true);

  const getProductsResult = async () => {
    const { page, perpage, order } = router.query;
    const GET_PRODUCTS_URL = getPaginationURL(PRODUCTS_API_URL, {
      page: page as string,
      perpage: perpage as string,
      order: order as string,
    });
    const productsResult = await getProducts(GET_PRODUCTS_URL);
    setResult(productsResult);
    setLoading(false);
  };

  useEffect(() => {
    getProductsResult();
  }, [router.query]);

  return { result, loading };
};

export const useFavoriteProducts = () => {
  const router = useRouter();
  const [result, setResult] =
    useState<GetUsersFavoriteProductsApiResult | null>(null);
  const [loading, setLoading] = useState(true);
  const user = useAppSelector(selectUser) as User;

  const getFavoriteProductsResult = async () => {
    if (user) {
      const GET_USER_ORDERS_API_URL = `${USERS_API_URL}/${user._id}/products`;
      const productsResult = await getUserFavoriteProducts(
        user,
        GET_USER_ORDERS_API_URL
      );
      setResult(productsResult);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFavoriteProductsResult();
  }, [router.query]);

  return { result, loading };
};

export const useSingleProduct = () => {
  const router = useRouter();
  const [result, setResult] = useState<GetSingleProductApiResult | null>(null);
  const [loading, setLoading] = useState(true);

  const getSingleProductResult = async () => {
    const { id } = router.query;
    const productResult = await getSingleProduct(id as string);
    setResult(productResult);
    setLoading(false);
  };

  useEffect(() => {
    getSingleProductResult();
  }, [router.query]);

  return { result, loading };
};

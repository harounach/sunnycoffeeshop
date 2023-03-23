import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  getPaginationURL,
  ORDERS_API_URL,
  USERS_API_URL,
} from "@/lib/urlUtils";
import { getOrders, getSingleOrder, getUserOrders } from "@/lib/orderUtils";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";
import {
  GetOrdersApiResult,
  GetSingleOrderApiResult,
  GetUserOrdersApiResult,
} from "@/types/OrdersApiResults";

export const useOrders = (limit?: number) => {
  const router = useRouter();
  const [result, setResult] = useState<GetOrdersApiResult | null>(null);
  const [loading, setLoading] = useState(true);
  const user = useAppSelector(selectUser) as User;

  useEffect(() => {
    const getOrdersResult = async () => {
      const { page, perpage, order } = router.query;
      const orderLimit = limit ? limit : perpage;
      const GET_ORDERS_URL = getPaginationURL(ORDERS_API_URL, {
        page: page as string,
        perpage: orderLimit as string,
        order: order as string,
      });
      const ordersResult = await getOrders(user, GET_ORDERS_URL);
      setResult(ordersResult);
      setLoading(false);
    };

    getOrdersResult();
  }, [router.query, user, limit]);

  return { result, loading };
};

export const useUserOrders = () => {
  const router = useRouter();
  const [result, setResult] = useState<GetUserOrdersApiResult | null>(null);
  const [loading, setLoading] = useState(true);
  const user = useAppSelector(selectUser) as User;

  useEffect(() => {
    const getUserOrdersResult = async () => {
      const { page, perpage, order } = router.query;
      const GET_USER_ORDERS_API_URL = `${USERS_API_URL}/${user._id}/orders`;
      const GET_USER_ORDERS_URL = getPaginationURL(GET_USER_ORDERS_API_URL, {
        page: page as string,
        perpage: perpage as string,
        order: order as string,
      });
      const userordersResult = await getUserOrders(user, GET_USER_ORDERS_URL);
      setResult(userordersResult);
      setLoading(false);
    };

    getUserOrdersResult();
  }, [router.query, user]);

  return { result, loading };
};

export const useSingleOrder = () => {
  const router = useRouter();
  const [result, setResult] = useState<GetSingleOrderApiResult | null>(null);
  const [loading, setLoading] = useState(true);
  const user = useAppSelector(selectUser) as User;

  useEffect(() => {
    const getSingleOrderResult = async () => {
      const { id } = router.query;
      if (id) {
        const orderResult = await getSingleOrder(user, id as string);
        setLoading(false);
        setResult(orderResult);
      }
    };

    getSingleOrderResult();
  }, [router.query, user]);

  return { result, loading };
};

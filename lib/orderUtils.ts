import Order from "@/types/Order";
import {
  SaveOrderSessionApiResult,
  GetOrdersApiResult,
  GetSingleOrderApiResult,
  CreateOrderApiResult,
  DeliverOrderApiResult,
  PayOrderApiResult,
  DeleteOrderApiResult,
  GetUserOrdersApiResult,
} from "@/types/OrdersApiResults";
import axios from "axios";
import { ORDERS_API_URL } from "./urlUtils";
import ShippingInfo from "@/types/ShippingInfo";
import PaymentInfo from "@/types/PaymentInfo";
import OrderItem from "@/types/OrderItem";
import User from "@/types/User";

export const saveOrderSession = async (
  user: User,
  order: Order,
  sessionId: string
) => {
  const SAVE_ORDER_SESSION_API_URL = `${ORDERS_API_URL}/${order._id}/session`;
  const data = {
    sessionId,
  };

  const response = await axios<SaveOrderSessionApiResult>({
    method: "PATCH",
    url: SAVE_ORDER_SESSION_API_URL,
    data,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const getOrders = async (user: User, url: string) => {
  const response = await axios<GetOrdersApiResult>({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const getUserOrders = async (user: User, url: string) => {
  const response = await axios<GetUserOrdersApiResult>({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const getSingleOrder = async (user: User, id: string) => {
  const GET_SINGLE_ORDER_URL = `${ORDERS_API_URL}/${id}`;

  const response = await axios<GetSingleOrderApiResult>({
    method: "GET",
    url: GET_SINGLE_ORDER_URL,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const createOrder = async (
  user: User,
  shippingInfo: ShippingInfo,
  paymentInfo: PaymentInfo,
  orderItems: Array<OrderItem>
) => {
  const data = {
    shippingInfo,
    paymentInfo,
    orderItems,
    user: user._id,
  };

  const response = await axios<CreateOrderApiResult>({
    method: "POST",
    url: ORDERS_API_URL,
    data,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const deliverOrder = async (user: User, orderId: string) => {
  const DELIVER_ORDER_API_URL = `${ORDERS_API_URL}/${orderId}/deliver`;
  const response = await axios<DeliverOrderApiResult>({
    method: "PATCH",
    url: DELIVER_ORDER_API_URL,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const payOrder = async (user: User, orderId: string) => {
  const PAY_ORDER_API_URL = `${ORDERS_API_URL}/${orderId}/pay`;
  const response = await axios<PayOrderApiResult>({
    method: "PATCH",
    url: PAY_ORDER_API_URL,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const deleteOrder = async (user: User, orderId: string) => {
  const DELETE_ORDER_API_URL = `${ORDERS_API_URL}/${orderId}`;
  const response = await axios<DeleteOrderApiResult>({
    method: "DELETE",
    url: DELETE_ORDER_API_URL,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

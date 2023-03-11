import Order from "@/types/Order";
import {
  SaveOrderSessionApiResult,
  GetOrdersApiResult,
  GetSingleOrderApiResult,
  CreateOrderApiResult,
  DeliverOrderApiResult,
  PayOrderApiResult,
  DeleteOrderApiResult,
} from "@/types/OrdersApiResults";
import axios from "axios";
import { ORDERS_API_URL } from "./urlUtils";
import ShippingInfo from "@/types/ShippingInfo";
import PaymentInfo from "@/types/PaymentInfo";
import OrderItem from "@/types/OrderItem";

export const saveOrderSession = async (order: Order, sessionId: string) => {
  const SAVE_ORDER_SESSION_API_URL = `${ORDERS_API_URL}/${order._id}/session`;
  const data = {
    sessionId,
  };

  const response = await axios<SaveOrderSessionApiResult>({
    method: "PATCH",
    url: SAVE_ORDER_SESSION_API_URL,
    data,
    validateStatus: () => true,
  });

  return response.data;
};

export const getOrders = async (url: string) => {
  const response = await axios<GetOrdersApiResult>({
    method: "GET",
    url,
    validateStatus: () => true,
  });

  return response.data;
};

export const getSingleOrder = async (id: string) => {
  const GET_SINGLE_ORDER_URL = `${ORDERS_API_URL}/${id}`;

  const response = await axios<GetSingleOrderApiResult>({
    method: "GET",
    url: GET_SINGLE_ORDER_URL,
    validateStatus: () => true,
  });

  return response.data;
};

export const createOrder = async (
  shippingInfo: ShippingInfo,
  paymentInfo: PaymentInfo,
  orderItems: Array<OrderItem>,
  user: string
) => {
  const data = {
    shippingInfo,
    paymentInfo,
    orderItems,
    user,
  };

  const response = await axios<CreateOrderApiResult>({
    method: "POST",
    url: ORDERS_API_URL,
    data,
    validateStatus: () => true,
  });

  return response.data;
};

export const deliverOrder = async (orderId: string) => {
  const DELIVER_ORDER_API_URL = `${ORDERS_API_URL}/${orderId}/deliver`;
  const response = await axios<DeliverOrderApiResult>({
    method: "PATCH",
    url: DELIVER_ORDER_API_URL,
    validateStatus: () => true,
  });

  return response.data;
};

export const payOrder = async (orderId: string) => {
  const PAY_ORDER_API_URL = `${ORDERS_API_URL}/${orderId}/pay`;
  const response = await axios<PayOrderApiResult>({
    method: "PATCH",
    url: PAY_ORDER_API_URL,
    validateStatus: () => true,
  });

  return response.data;
};

export const deleteOrder = async (orderId: string) => {
  const DELETE_ORDER_API_URL = `${ORDERS_API_URL}/${orderId}`;
  const response = await axios<DeleteOrderApiResult>({
    method: "DELETE",
    url: DELETE_ORDER_API_URL,
    validateStatus: () => true,
  });

  return response.data;
};

import Order from "@/types/Order";
import { SaveOrderSessionApiResult } from "@/types/OrdersApiResults";
import axios from "axios";
import { ORDERS_API_URL } from "./urlUtils";

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

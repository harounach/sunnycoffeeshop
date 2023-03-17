import Order from "@/types/Order";
import { CreateStripeCheckoutSessionApiResult } from "@/types/PaymentsApiResults";
import axios from "axios";
import { PAYMENT_API_URL, FRONTEND_BASE_URL } from "./urlUtils";
import {
  CreateOrderActions,
  CreateOrderData,
  CreateOrderRequestBody,
  OnApproveActions,
  OnApproveData,
  OnCancelledActions,
  OrderResponseBody,
  PurchaseUnit,
} from "@paypal/paypal-js";
import User from "@/types/User";

export const payWithStripe = async (user: User, order: Order) => {
  const PAY_WITH_STRIPE_API_URL = `${PAYMENT_API_URL}/stripe`;
  const REDIRECT_URL = `${FRONTEND_BASE_URL}/account/orders/${order._id}`;
  const data = {
    orderId: order._id,
    redirectUrl: REDIRECT_URL,
  };

  const response = await axios<CreateStripeCheckoutSessionApiResult>({
    method: "POST",
    url: PAY_WITH_STRIPE_API_URL,
    data,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};

export const payWithPaypal = async (order: Order) => {};

export const payInPerson = async (order: Order) => {};

// Paypal createOrder
export const paypalCreateOrder = (order: Order) => {
  return async (data: CreateOrderData, actions: CreateOrderActions) => {
    const purchaseUnits: Array<PurchaseUnit> = [
      {
        amount: {
          value: String(order.totalPrice),
        },
      },
    ];

    const createOrderPayload: CreateOrderRequestBody = {
      purchase_units: purchaseUnits,
    };
    const paypalOrder = await actions.order.create(createOrderPayload);
    return paypalOrder;
  };
};

// Paypal onApprove
export const paypalOnApprove = (
  listener?: (details: OrderResponseBody) => void
) => {
  return async (data: OnApproveData, actions: OnApproveActions) => {
    const captureOrderHandler = async (details: OrderResponseBody) => {
      if (listener) {
        await listener(details);
      }
    };

    return actions.order?.capture().then(captureOrderHandler);
  };
};

// Paypal onError
export const paypalOnError = (listener?: () => void) => {
  return async (err: Record<string, unknown>) => {
    console.log("Haroun something went wrong!");
    console.log(err.message);
  };
};

// Paypal onCancel
export const paypalOnCancel = (listener?: () => void) => {
  return async (data: Record<string, unknown>, actions: OnCancelledActions) => {
    console.log("PayPal order cancelled!");
  };
};

"use server";

import {
  createOrder,
  deleteOrder,
  markOrderAsPaid,
  markOrderAsDelivered,
} from "@/app/lib/database/order/order.mutation";
import { OrderItem, Payment, Shipping } from "@/app/lib/definitions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  message?: string | null;
};

export async function createOrderAction(
  userId: string,
  shipping: Shipping,
  payment: Payment,
  items: Array<OrderItem>,
  prevState: State,
  formDate: FormData,
) {
  try {
    // Create order in database
    await createOrder(userId, shipping, payment, items);
  } catch (err) {
    return {
      message: "Database Error: Failed to Create Order.",
    };
  }

  redirect("/account/orders");
}

export async function deleteOrderAction(
  orderId: string,
  prevState: State,
  formDate: FormData,
) {
  try {
    // Delete order from database
    await deleteOrder(orderId);
  } catch (err) {
    return {
      message: "Database Error: Failed to Delete Order.",
    };
  }

  // Revalidate the cache for the admin products page and redirect the user.
  revalidatePath("/admin/orders");

  return {
    message: "Order deleted.",
  };
}

export async function markOrderAsPaidAction(
  orderId: string,
  prevState: State,
  formDate: FormData,
) {
  try {
    // Mark order as paid
    await markOrderAsPaid(orderId);
  } catch (err) {
    return {
      message: "Database Error: Failed to Mark Order as Paid.",
    };
  }

  revalidatePath(`/admin/orders/${orderId}`);
  return {
    message: "Order Paid.",
  };
}

export async function markOrderAsDeliveredAction(
  orderId: string,
  prevState: State,
  formDate: FormData,
) {
  try {
    // Mark order as delivered
    await markOrderAsDelivered(orderId);
  } catch (err) {
    return {
      message: "Database Error: Failed to Mark Order as Delivered.",
    };
  }

  revalidatePath(`/admin/orders/${orderId}`);

  return {
    message: "Order Delivered.",
  };
}

import { Order } from "../../definitions";
import dbConnect from "../dbConnect";
import { OrderModel } from "../models";

/*
 * Fetch all orders
 */
export async function fetchOrders() {
  try {
    await dbConnect();
    const orders = await OrderModel.find({}).lean();
    return orders as Order[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch orders.");
  }
}

/*
 * Fetch single order
 */
export async function fetchSingleOrder(id: string) {
  try {
    await dbConnect();
    const singleOrder = await OrderModel.findById(id).lean();

    return singleOrder as Order;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error(`Failed to fetch order with id: ${id}`);
  }
}

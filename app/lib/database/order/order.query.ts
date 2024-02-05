import { Order, Review } from "@/app/lib/definitions";
import dbConnect from "@/app/lib/database/dbConnect";
import { OrderModel } from "@/app/lib/database/models";
import { HydratedDocument } from "mongoose";

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
    const rawOrder = (await OrderModel.findById<HydratedDocument<Order>>(id)
      .populate("items.product")
      .lean()
      .exec()) as Order | null;
    if (!rawOrder) {
      return null;
    }

    const singleOrder = {
      ...rawOrder,
      _id: rawOrder._id.toString() as string,
    };

    return singleOrder as Order;
  } catch (err) {
    console.error("Database Error:", err);
  }
}

// Number of items per page
const LIMIT = 8;

export async function fetchPagedOrders(currentPage: number) {
  try {
    await dbConnect();
    const rawOrders = (await OrderModel.find()
      .sort({ createdAt: 1 })
      .limit(LIMIT * 1)
      .skip((currentPage - 1) * LIMIT)
      .lean()
      .exec()) as Array<Order>;

    const orders = rawOrders.map((order) => {
      return {
        ...order,
        _id: order._id.toString(),
      };
    });

    const count = await OrderModel.countDocuments();
    const totalPages = Math.ceil(count / LIMIT);

    const result = {
      orders,
      totalPages,
    };

    return result as { orders: Array<Order>; totalPages: number };
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch orders");
  }
}

export async function fetchPagedUserOrders(
  userId: string,
  currentPage: number,
) {
  try {
    await dbConnect();
    const rawOrders = (await OrderModel.find({ user: userId })
      .sort({ createdAt: 1 })
      .limit(LIMIT * 1)
      .skip((currentPage - 1) * LIMIT)
      .lean()
      .exec()) as Array<Order>;

    const orders = rawOrders.map((order) => {
      return {
        ...order,
        _id: order._id.toString(),
      };
    });

    const count = await OrderModel.countDocuments();
    const totalPages = Math.ceil(count / LIMIT);

    const result = {
      orders,
      totalPages,
    };

    return result as { orders: Array<Order>; totalPages: number };
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch orders");
  }
}

export async function fetchLatestOrders() {
  try {
    await dbConnect();
    const orders = await OrderModel.find()
      .sort({ createdAt: 1 })
      .limit(8)
      .lean()
      .exec();

    return orders as Order[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch orders");
  }
}

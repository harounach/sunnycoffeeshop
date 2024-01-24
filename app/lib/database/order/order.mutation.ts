import { OrderModel } from "@/app/lib/database/models";
import { OrderItem, Payment, Shipping } from "../../definitions";

export async function createOrder(
  user: string,
  shipping: Shipping,
  payment: Payment,
  items: Array<OrderItem>,
) {
  const itemsPrice = items.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0);

  const shippingPrice = 0;
  const taxPrice = 0;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  try {
    const newOrder = new OrderModel({
      user,
      items,
      shipping,
      payment,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    await newOrder.save();
  } catch (err) {
    console.error(err);
  }
}

export async function deleteOrder(id: string) {
  try {
    const orderToDelete = await OrderModel.findById(id).exec();
    await orderToDelete.deleteOne();
  } catch (err) {
    console.error(err);
  }
}

export async function markOrderAsPaid(id: string) {
  try {
    const orderToPay = await OrderModel.findById(id).exec();
    orderToPay.isPaid = true;
    orderToPay.paidAt = new Date();
    await orderToPay.save();
  } catch (err) {
    console.error(err);
  }
}

export async function markOrderAsDelivered(id: string) {
  try {
    const orderToDeliver = await OrderModel.findById(id).exec();
    orderToDeliver.isDelivered = true;
    orderToDeliver.deliveredAt = new Date();
    await orderToDeliver.save();
  } catch (err) {
    console.error(err);
  }
}

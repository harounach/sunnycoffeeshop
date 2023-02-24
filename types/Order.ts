import OrderItem from "./OrderItem";
import ShippingInfo from "./ShippingInfo";
import PaymentInfo from "./PaymentInfo";

export default interface Order {
  _id: string;
  user: string;
  orderItems: Array<OrderItem>;
  shipping: ShippingInfo;
  payment: PaymentInfo;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
  createdAt: string;
}

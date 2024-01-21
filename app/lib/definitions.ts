export type Product = {
  _id: string;
  title: string;
  desc: string;
  price: number;
  image: string;
  slug: string;
};

export type CartProduct = {
  product: Product;
  qty: number;
};

export type Review = {
  _id: string;
  user_name: string;
  rating: number;
  date: string;
  comment: string;
};

export type Shipping = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type Payment = {
  paymentMethod: string;
};

export type OrderItem = {
  _id: string;
  title: string;
  image: string;
  price: number;
  qty: number;
  product_id: string;
};

export type Order = {
  _id: string;
  user: string;
  orderItems: Array<OrderItem>;
  shipping: Shipping;
  payment: Payment;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
};

export type SummarySaleEntry = {
  label: string;
  totalSales: number;
};

export type TopProductEntry = {
  title: string;
  totalSales: number;
};

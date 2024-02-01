export type User = {
  _id: string;
  name: string;
  email: string;
  passwordHash?: string;
  role: string;
  createdAt: string;
};

export type Product = {
  _id: string;
  title: string;
  desc: string;
  price: number;
  image: string;
  slug: string;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
};

export type Review = {
  _id: string;
  user: User;
  rating: number;
  comment: string;
  product: Product;
  createdAt: string;
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
  product: Product;
  qty: number;
};

export type Order = {
  _id: string;
  user: User;
  items: Array<OrderItem>;
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
  createdAt: string;
};

export type SummarySaleEntry = {
  label: string;
  totalSales: number;
};

export type TopProductEntry = {
  title: string;
  totalSales: number;
};

export type Summary = {
  count: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
};

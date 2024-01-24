import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, Shipping, Payment, OrderItem } from "@/app/lib/definitions";

type State = {
  items: Array<OrderItem>;
  payment: Payment;
  shipping: Shipping;
};

type Actions = {
  saveShipping: (shipping: Shipping) => void;
  savePayment: (payment: Payment) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  incrementQty: (id: string) => void;
  decrementQty: (id: string) => void;
};

const initialState: State = {
  items: [],
  payment: { paymentMethod: "PayPal" },
  shipping: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
};

export const useCartStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  saveShipping: (shipping: Shipping) => {
    set({ shipping: shipping });
  },
  savePayment: (payment: Payment) => {
    set({ payment: payment });
  },

  addToCart: (product: Product) => {
    const orderItem: OrderItem = {
      product: product,
      qty: 1,
    };
    set({ items: [...get().items, orderItem] });
  },

  removeFromCart: (id: string) => {
    set({
      items: get().items.filter((orderItem) => {
        return orderItem.product._id !== id;
      }),
    });
  },

  incrementQty: (id: string) => {
    set({
      items: get().items.map((orderItem) => {
        if (orderItem.product._id !== id) {
          return orderItem;
        }

        return {
          ...orderItem,
          qty: orderItem.qty + 1,
        };
      }),
    });
  },

  decrementQty: (id: string) => {
    set({
      items: get().items.map((orderItem) => {
        // We don't allow qty to be below "1"
        if (orderItem.qty < 2) {
          return orderItem;
        }

        if (orderItem.product._id !== id) {
          return orderItem;
        }

        return {
          ...orderItem,
          qty: orderItem.qty - 1,
        };
      }),
    });
  },
}));

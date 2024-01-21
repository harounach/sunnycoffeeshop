import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, Shipping, Payment, CartProduct } from "@/app/lib/definitions";

type State = {
  items: CartProduct[];
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
    const cartProduct: CartProduct = {
      product: product,
      qty: 1,
    };
    set({ items: [...get().items, cartProduct] });
  },

  removeFromCart: (id: string) => {
    set({
      items: get().items.filter((cartItem) => {
        return cartItem.product._id !== id;
      }),
    });
  },

  incrementQty: (id: string) => {
    set({
      items: get().items.map((item) => {
        if (item.product._id !== id) {
          return item;
        }

        return {
          ...item,
          qty: item.qty + 1,
        };
      }),
    });
  },

  decrementQty: (id: string) => {
    set({
      items: get().items.map((item) => {
        // We don't allow qty to be below "1"
        if (item.qty < 2) {
          return item;
        }

        if (item.product._id !== id) {
          return item;
        }

        return {
          ...item,
          qty: item.qty - 1,
        };
      }),
    });
  },
}));

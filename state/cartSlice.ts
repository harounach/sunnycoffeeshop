import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Status } from "@/types/Status";
import ShippingInfo from "@/types/ShippingInfo";
import PaymentInfo from "@/types/PaymentInfo";
import CartProduct from "@/types/CartProduct";
import { RootState } from "./store";

type CartInitialState = {
  status: Status;
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
};

const cartAdapter = createEntityAdapter<CartProduct>({
  selectId: (cartProduct) => cartProduct._id,
});

const initialShippingInfo: ShippingInfo = {
  name: "",
  email: "",
  street: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

const initialPaymentInfo: PaymentInfo = {
  paymentMethod: "paypal",
};

const initialState = cartAdapter.getInitialState<CartInitialState>({
  status: "idle",
  shippingInfo: initialShippingInfo,
  paymentInfo: initialPaymentInfo,
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAdded: (state, action: PayloadAction<CartProduct>) => {
      cartAdapter.addOne(state, action.payload);
    },
    cartDeleted: (state, action: PayloadAction<string>) => {
      cartAdapter.removeOne(state, action.payload);
    },
    cartQuantityPlus: (state, action: PayloadAction<string>) => {
      const product = state.entities[action.payload];
      if (product) {
        product.qty++;
      }
    },
    cartQuantityMinus: (state, action: PayloadAction<string>) => {
      const product = state.entities[action.payload];
      if (product && product.qty > 1) {
        product.qty--;
      }
    },
    saveShippingInfo: (state, action: PayloadAction<ShippingInfo>) => {
      state.shippingInfo = action.payload;
    },
    savePaymentInfo: (state, action: PayloadAction<PaymentInfo>) => {
      state.paymentInfo = action.payload;
    },
    resetCart: (state, action) => {
      cartAdapter.removeAll(state);
      state.shippingInfo = initialShippingInfo;
      state.paymentInfo = initialPaymentInfo;
    },
  },
});

// Action creators
export const {
  cartAdded,
  cartDeleted,
  cartQuantityPlus,
  cartQuantityMinus,
  saveShippingInfo,
  savePaymentInfo,
  resetCart,
} = cartSlice.actions;

// Selectors
export const {
  selectAll: selectCartProducts,
  selectById: selectCartProductById,
  selectIds: selectCartProductIds,
  selectTotal: selectTotalCartProducts,
} = cartAdapter.getSelectors<RootState>((state) => state.cart);

export const selectShippingInfo = (state: RootState) => state.cart.shippingInfo;
export const selectPaymentInfo = (state: RootState) => state.cart.paymentInfo;

// Cart reducer
export default cartSlice.reducer;

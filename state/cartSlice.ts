import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Status } from "@/types/Status";
import CartProduct from "@/types/CartProduct";

type CartInitialState = {
  status: Status;
};

const cartAdapter = createEntityAdapter<CartProduct>({
  selectId: (cartProduct) => cartProduct._id,
});
const initialState = cartAdapter.getInitialState<CartInitialState>({
  status: "idle",
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
  },
});

// Action creators
export const { cartAdded, cartDeleted, cartQuantityPlus, cartQuantityMinus } =
  cartSlice.actions;

// Selectors
export const {
  selectAll: selectCartProducts,
  selectById: selectCartProductById,
  selectIds: selectCartProductIds,
  selectTotal: selectTotalCartProducts,
} = cartAdapter.getSelectors();

// Cart reducer
export default cartSlice.reducer;

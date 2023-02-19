import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import Product from "@/types/Product";

const productAdapter = createEntityAdapter<Product>();
const initialState = productAdapter.getInitialState({
  status: "idle",
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    cartAdded: (state, action: PayloadAction<Product>) => {
      productAdapter.addOne(state, action.payload);
    },
    cartDeleted: (state, action: PayloadAction<string>) => {
      productAdapter.removeOne(state, action.payload);
    },
    cartQuantityPlus: (state, action: PayloadAction<string>) => {},
    cartQuantityMinus: (state, action: PayloadAction<string>) => {},
  },
});

// Action creators
export const { cartAdded, cartDeleted, cartQuantityPlus, cartQuantityMinus } =
  productSlice.actions;

// Selectors
export const { selectAll: selectProducts, selectById: selectProductById } =
  productAdapter.getSelectors();

// Product reducer
export default productSlice.reducer;

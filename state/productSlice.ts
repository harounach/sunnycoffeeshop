import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  AsyncThunkPayloadCreator,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import Product from "@/types/Product";
import { Status } from "@/types/Status";
import { RootState } from "./store";
import axios from "axios";
import { GetProductsQuery } from "@/types/ProductsApiConfig";

type ProductInitialState = {
  status: Status;
};

const API_URL = "http://localhost:4000";

const productAdapter = createEntityAdapter<Product>();
const initialState = productAdapter.getInitialState<ProductInitialState>({
  status: "idle",
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ search, page, perpage, order }: GetProductsQuery) => {
    // call the products api and return the result

    const result = await axios.get(`${API_URL}/products`);
    return result.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    deleteProducts: (state, action) => {
      productAdapter.removeAll(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // Now add products to the store
        state.status = "idle";
      });
  },
});

// Action creators
export const {} = productSlice.actions;

// Selectors
export const {
  selectAll: selectProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productAdapter.getSelectors<RootState>((state) => state.products);

// Product reducer
export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { Status } from "@/types/Status";
import { RootState } from "./store";

export type UserInfo = {
  _id?: string;
  name?: string;
  email?: string;
  createdAt?: string;
  accessToken?: string;
};

type UserInitialState = {
  status: Status;
  user: UserInfo;
};

const initialState: UserInitialState = {
  status: "idle",
  user: {},
};

export const loadUser = createAsyncThunk("user/loadUser", async () => {
  // load user from cookies
  const userInfo = Cookies.get("userInfo");
  return JSON.parse(userInfo as string);
});

export const saveUser = createAsyncThunk(
  "user/saveUser",
  async (userData: UserInfo) => {
    // save user in cookies
    Cookies.set("userInfo", JSON.stringify(userData));
    return userData;
  }
);

export const deleteUser = createAsyncThunk("user/deleteUser", async () => {
  // Delete user in cookies
  Cookies.remove("userInfo");
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.user = {};
      });
  },
});

// Selectors
export const selectUser = (state: RootState) => state.user.user;

// Cart reducer
export default userSlice.reducer;

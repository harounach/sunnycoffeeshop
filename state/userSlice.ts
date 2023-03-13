import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { Status } from "@/types/Status";
import { RootState } from "./store";
import User from "@/types/User";

type UserInitialState = {
  status: Status;
  user?: User;
};

const initialState: UserInitialState = {
  status: "idle",
  user: undefined,
};

export const loadUser = createAsyncThunk("user/loadUser", async () => {
  // load user from cookies
  const userInfo = Cookies.get("userInfo");
  return JSON.parse(userInfo as string);
});

export const saveUser = createAsyncThunk(
  "user/saveUser",
  async (user: User) => {
    // save user in cookies
    Cookies.set("userInfo", JSON.stringify(user));
    return user;
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
        state.user = undefined;
      });
  },
});

// Selectors
export const selectUser = (state: RootState) => state.user.user;

// Cart reducer
export default userSlice.reducer;

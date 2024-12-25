import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

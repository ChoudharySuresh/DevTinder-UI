import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import feedReducer from "./Feed/feedSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
});

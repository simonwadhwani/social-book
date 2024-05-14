import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postReducer from "./postSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer
  },
});

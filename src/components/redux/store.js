import { configureStore } from "@reduxjs/toolkit";
import sabkaReducer from "./sabkaSlice";

export const store = configureStore({
  reducer: {
    sabka: sabkaReducer,
  },
});

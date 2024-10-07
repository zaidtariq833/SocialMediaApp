// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: loginReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
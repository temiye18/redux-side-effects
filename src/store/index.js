import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";
import postReducer from "./post-slice";
import fetchReducer from "./fetch-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    post: postReducer,
    fetch: fetchReducer,
  },
});

export default store;

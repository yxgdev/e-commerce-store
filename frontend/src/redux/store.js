import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartRedux";

// create Store

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

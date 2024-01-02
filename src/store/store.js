// store.js
import { configureStore } from "@reduxjs/toolkit";
import reducerFunctions from "./reducerFunctions";
import { apiSlice } from "../lib/services/api";
import { setupListeners } from "@reduxjs/toolkit/query/react";
// const persistedState = localStorage.getItem("reduxState")
//   ? JSON.parse(localStorage.getItem("reduxState"))
//   : {};

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: reducerFunctions,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // preloadedState: persistedState,
  devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);
// store.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });

export default store;

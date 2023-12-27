// store.js
import { configureStore } from "@reduxjs/toolkit";
import reducerFunctions from "./reducerFunctions";
// import logger from "redux-logger";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: { counter: reducerFunctions },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState: persistedState,
  devTools: process.env.NODE_ENV !== "production",
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;

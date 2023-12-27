// store.js
import { configureStore } from "@reduxjs/toolkit";
import reducerFunctions from "./reducerFunctions";

const store = configureStore({
  reducer: {
    storeFunctions: reducerFunctions,
    devTools: process.env.NODE_ENV !== "production",
  },
});

export default store;

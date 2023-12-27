// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  countVal: 16,
};

const reducerFunctions = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    setCountVal: (state, { payload }) => {
      state.countVal = payload;
    },
  },
});

export const { setCountVal } = reducerFunctions.actions;
export const counter = (state) => state.counter;

export default reducerFunctions.reducer;

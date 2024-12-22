import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type CounterType = {
  count: number;
};
const initialState: CounterType = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByValue: (state, action: PayloadAction<{ value: number }>) => {
      state.count += action.payload.value;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;

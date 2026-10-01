import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // Toolkit khud isko handle karta hai
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Actions export karo components ke liye
export const { increment, decrement } = counterSlice.actions;

// Reducer export karo store ke liye
export default counterSlice.reducer;
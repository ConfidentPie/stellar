import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderNumber: null,
  },
  reducers: {
    saveOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
});

export const { saveOrderNumber } = orderSlice.actions;
export default orderSlice.reducer;
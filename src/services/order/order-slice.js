import {createSlice} from '@reduxjs/toolkit';
import { createOrder } from './actions';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderNumber: null,
  },
  reducers: {
    clearOrder(state) {
      state.order = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.order = action.payload
    })
  }
});

export const {clearOrder} = orderSlice.actions;
export default orderSlice.reducer;
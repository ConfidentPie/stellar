import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendOrder } from '../../utils/burger-api';

export const createOrder = createAsyncThunk(
    "order/create",
    async (ingredientIds) => sendOrder(ingredientIds)
)
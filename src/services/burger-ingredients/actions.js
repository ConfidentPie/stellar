import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredients } from '../../utils/burger-api';

export const loadIngredients = createAsyncThunk(
    "burger-ingredients/loadIngredients",
    async () => getIngredients()
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredients } from '../../utils/burger-api';

export const loadingIngredients = createAsyncThunk(
    "burger-ingredients/loadIngredients",
    async () => getIngredients()
);
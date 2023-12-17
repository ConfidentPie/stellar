import { createSlice } from '@reduxjs/toolkit';
import { loadIngredients } from './actions';

export const burgerIngredientsSlice = createSlice({
    name: 'burgerIngredients',
    initialState: {
        ingredients: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadIngredients.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadIngredients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(loadIngredients.fulfilled, (state, action) => {
                state.loading = false;
                state.ingredients = action.payload.data;
            })
    }
})

export default burgerIngredientsSlice.reducer;
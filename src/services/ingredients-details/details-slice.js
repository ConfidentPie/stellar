import { createSlice } from '@reduxjs/toolkit';

export const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        ingredientDetails: [],
    },
    reducers: {
        getIngredientDetails: (state, action) => {
            state.ingredientDetails = action.payload;
        },
    },
});

export const { getIngredientDetails } = detailsSlice.actions;
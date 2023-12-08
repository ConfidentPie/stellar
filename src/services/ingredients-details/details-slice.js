import { createSlice } from '@reduxjs/toolkit';

export const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        ingredientDetails: null,
    },
    reducers: {
        setIngredientDetails: (state, action) => {
            state.ingredientDetails = action.payload;
        },
    },
});

export const { setIngredientDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
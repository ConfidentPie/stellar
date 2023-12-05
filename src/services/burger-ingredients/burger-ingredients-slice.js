import { createSlice } from '@reduxjs/toolkit';

export const burgerIngredientsSlice = createSlice({
    name: 'burgerIngredients',
    initialState: {
        ingredients: [],
    },
    reducers: {
        setIngredients: (state, action) => {
            state.ingredients = action.payload;
        }
    }
})

export const { setIngredients } = burgerIngredientsSlice.actions;
export default burgerIngredientsSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const burgerConstructorSlice = createSlice({
    name: 'burgerConstructor',
    initialState: {
        bun: null,
        ingredients: [],
    },
    reducers: {
        setBun: (state, action) => {
            state.bun = action.payload;
        },
        setIngredients: (state, action) => {
            state.ingredients = action.payload;
        },
    },
});

export const { setBun, setIngredients } = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
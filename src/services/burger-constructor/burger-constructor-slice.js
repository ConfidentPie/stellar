import { createSlice } from '@reduxjs/toolkit';

export const burgerConstructorSlice = createSlice({
    name: 'burgerConstructor',
    initialState: {
        bunTop: null,
        bunBottom: null,
        ingredients: [],
    },
    reducers: {
        setBunTop: (state, action) => {
            state.bunTop = action.payload;
        },
        setBunBottom: (state, action) => {
            state.bunBottom = action.payload;
        },
        setIngredients: (state, action) => {
            state.ingredients = action.payload;
        },
    },
});

export const { setBunTop, setBunBottom, setIngredients } = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const burgerSlice = createSlice({
    name: 'burger',
    initialState: {
        bunTop: null,
        bunBottom: null,
        ingredients: [],
    },
    reducers: {
        setBun: (state, action) => {
            state[action.payload.position] = action.payload;
        },
        setIngredients: (state, action) => {
            state.ingredients = action.payload;
        },
    },
});

export const { setBun, setIngredients } = burgerSlice.actions;
export default burgerSlice.reducer;
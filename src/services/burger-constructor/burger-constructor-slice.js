import { createSlice } from '@reduxjs/toolkit';

const BurgerSlice = createSlice({
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

export const { setBun, setIngredients } = BurgerSlice.actions;
export default BurgerSlice.reducer;
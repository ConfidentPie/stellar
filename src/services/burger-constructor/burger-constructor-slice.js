import { createSlice } from '@reduxjs/toolkit';

export const burgerConstructorSlice = createSlice({
    name: 'burgerConstructor',
    initialState: {
        chosenBun: null,
        chosenIngredients: [],
    },
    reducers: {
        setBun: (state, action) => {
            state.chosenBun = action.payload;
        },
        setIngredients: (state, action) => {
            state.chosenIngredients = action.payload;
        },
    },
});

export const { setBun, setIngredients } = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
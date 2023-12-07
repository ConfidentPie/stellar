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
        addIngredient: (state, action) => {
            state.draggedIngredients.push(action.payload);
          },
          removeIngredient: (state, action) => {
            state.draggedIngredients = state.draggedIngredients.filter(i => i.id !== action.payload._id);
          },
    },
});

export const { setBun, setIngredients, addIngredient, removeIngredient } = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
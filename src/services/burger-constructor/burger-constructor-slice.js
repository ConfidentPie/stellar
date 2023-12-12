import {createSlice, nanoid} from '@reduxjs/toolkit';

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
        clearBurger: (state) => {
            state.chosenBun = null;
            state.chosenIngredients = [];
        },
        addIngredient: {
            reducer: (state, action) => {
                state.chosenIngredients.push(action.payload);
            },
            prepare: (ingredient) => {
                const key = nanoid();
                return {payload: {...ingredient, key}};
            }
        },
        removeIngredient: (state, action) => {
            state.chosenIngredients = state.chosenIngredients.filter(i => i.key !== action.payload);
        },
        sortIngredients: (state, action) => {
            const {dragIndex, hoverIndex} = action.payload;
            const dragIngredient = state.chosenIngredients[dragIndex];
            state.chosenIngredients.splice(dragIndex, 1);
            state.chosenIngredients.splice(hoverIndex, 0, dragIngredient);
        }
    },
})
    ;

export const {setBun, clearBurger, addIngredient, removeIngredient, sortIngredients} = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
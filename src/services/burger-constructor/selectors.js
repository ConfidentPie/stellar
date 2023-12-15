import { createSelector } from '@reduxjs/toolkit';

export const selectBun = (state) => state.burger.chosenBun
export const selectIngredients = (state) => state.burger.chosenIngredients;

export const counters = createSelector(
    store => ({
        ingredients: store.burgerIngredients.ingredients,
        bun: store.burger.chosenBun,
        constructorIngredients: store.burger.chosenIngredients
    }),
    ({ingredients, bun, constructorIngredients}) => {

    }
)
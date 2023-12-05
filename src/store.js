import { configureStore } from '@reduxjs/toolkit';
import BurgerReducer from './services/burger-constructor/burger-constructor-slice';
import BurgerIngredientsReducer from './services/burger-ingredients/burger-ingredients-slice';

const store = configureStore({
    reducer: {
        burger: BurgerReducer,
        burgerIngredients: BurgerIngredientsReducer,

    },
});

export default store;

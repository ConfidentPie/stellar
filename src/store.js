import { configureStore } from '@reduxjs/toolkit';
import BurgerConstructorReducer from './services/burger-constructor/burger-constructor-slice';
import BurgerIngredientsReducer from './services/burger-ingredients/burger-ingredients-slice';
import OrderReducer from './services/order/order-slice'


const store = configureStore({
    reducer: {
        burger: BurgerConstructorReducer,
        burgerIngredients: BurgerIngredientsReducer,
        order: OrderReducer,
    },
});

export default store;

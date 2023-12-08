import { configureStore } from '@reduxjs/toolkit';
import BurgerConstructorReducer from './burger-constructor/burger-constructor-slice';
import BurgerIngredientsReducer from './burger-ingredients/burger-ingredients-slice';
import OrderReducer from './order/order-slice';
import IngredientDetailsReducer from './ingredients-details/details-slice';


const store = configureStore({
    reducer: {
        burger: BurgerConstructorReducer,
        burgerIngredients: BurgerIngredientsReducer,
        order: OrderReducer,
        selectedIngredient: IngredientDetailsReducer,
    },
});

export default store;

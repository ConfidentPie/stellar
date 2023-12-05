import { configureStore } from '@reduxjs/toolkit';
import BurgerReducer from './services/burger-constructor/burger-constructor-slice';

const store = configureStore({
    reducer: {
        burger: BurgerReducer,
    },
});

export default store;

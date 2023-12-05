import { checkResponse } from './check-response';

const BURGER_API_URL = 'https://norma.nomoreparties.space/api';


export const getIngredients = async () => {
    const res = await fetch(`${BURGER_API_URL}/ingredients`);
    return checkResponse(res);
};

export const sendOrder = async (ingredientIds) => {
    const res = await postMessage(`${BURGER_API_URL}/orders`, {
        ingredients: ingredientIds,
      })
    return checkResponse(res);
}
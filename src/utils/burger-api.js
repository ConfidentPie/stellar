import { checkResponse } from './check-response';

const BURGER_API_URL = 'https://norma.nomoreparties.space/api';

export const getIngredients = async () => {
    const res = await fetch(`${BURGER_API_URL}/ingredients`);
    return checkResponse(res);
};

export const sendOrder = async (ingredientIds) => {
    const res = await fetch(`${BURGER_API_URL}/orders`, {
        method: 'POST',
        body: JSON.stringify({
            ingredients: ingredientIds,
          })
    })
    console.log(res)
    return checkResponse(res);
}
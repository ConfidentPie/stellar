import { checkResponse } from './check-response';

export const BURGER_API_URL = 'https://norma.nomoreparties.space/api';

export const getIngredients = async () => {
    const res = await fetch(`${BURGER_API_URL}/ingredients`);
    return checkResponse(res);
};

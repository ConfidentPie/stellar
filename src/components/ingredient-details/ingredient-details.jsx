import React from 'react';
import { ingredientsType } from '../../utils/prop-types';
import ingredientDetails from './ingredient-details.module.css';

function IngredientDetails({ ingredient }) {
    const { name, image_large, fat, carbohydrates, calories, proteins} = ingredient;
    return (
        <div className={`pl-10 pr-10 pb-15 pt-10 ${ingredientDetails.container}`}>
            <div className={ingredientDetails.header}>
                <h2 className='text text_type_main-large'>Детали ингредиента</h2>
            </div>
            <img className='pb-4' src={image_large} alt="{name}"/>
            <div className={ingredientDetails.info}>
                <p className={`${ingredientDetails.name} text text_type_main-medium`}>{name}</p>
                <ul className={ingredientDetails.values__container}>
                    <li className={`${ingredientDetails.value} text text_type_main-default text_color_inactive`}>
                        <p className='text'>Калории, ккал</p>
                        {calories}
                    </li>
                    <li className={` ${ingredientDetails.value} text text_type_main-default text_color_inactive`}>
                        <p className='text'>Белки, г</p>
                        {fat}
                    </li>
                    <li className={`${ingredientDetails.value} text text_type_main-default text_color_inactive`}>
                        <p className='text'>Жиры, г</p>
                        {proteins}
                    </li>
                    <li className={`${ingredientDetails.value} text text_type_main-default text_color_inactive`}>
                        <p className='text'>Углеводы, г</p>
                        {carbohydrates}
                    </li>
                </ul>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    ingredient: ingredientsType.isRequired,
  };

export default IngredientDetails;

import React from 'react';
import { ingredientType } from '../../utils/prop-types';
import ingredientDetailsStyles from './ingredient-details.module.css';

function IngredientDetails({ ingredient }) {
    const { name, image_large, fat, carbohydrates, calories, proteins} = ingredient;
    return (
        <div className={`pl-10 pr-10 pb-15 pt-10 ${ingredientDetailsStyles.container}`}>
            <div className={ingredientDetailsStyles.header}>
                <h2 className='text text_type_main-large'>Детали ингредиента</h2>
            </div>
            <img className='pb-4' src={image_large} alt={name}/>
            <div className={ingredientDetailsStyles.info}>
                <p className={`${ingredientDetailsStyles.name} text text_type_main-medium`}>{name}</p>
                <ul className={ingredientDetailsStyles.values__container}>
                    <li className={`${ingredientDetailsStyles.value} text text_type_main-default text_color_inactive`}>
                        <p className='text'>Калории, ккал</p>
                        {calories}
                    </li>
                    <li className={` ${ingredientDetailsStyles.value} text text_type_main-default text_color_inactive`}>
                        <p className='text'>Белки, г</p>
                        {fat}
                    </li>
                    <li className={`${ingredientDetailsStyles.value} text text_type_main-default text_color_inactive`}>
                        <p className='text'>Жиры, г</p>
                        {proteins}
                    </li>
                    <li className={`${ingredientDetailsStyles.value} text text_type_main-default text_color_inactive`}>
                        <p className='text'>Углеводы, г</p>
                        {carbohydrates}
                    </li>
                </ul>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    ingredient: ingredientType.isRequired,
  };

export default IngredientDetails;

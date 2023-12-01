import React from 'react';
import ingredientCard from './ingredient-card.module.css';
import { ingredientType } from '../../utils/prop-types';
import PropTypes from 'prop-types';

import {
  CurrencyIcon,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = ({ ingredient, onCardClick }) => {
  const { name, image, price } = ingredient;

  const handleClick = () => {
    onCardClick(ingredient);
  };

  return (
    <div className={ingredientCard.card} onClick={handleClick}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className='pl-4 pr-4' src={image} alt={name} />
      <span className={`${ingredientCard.price} pb-1 pt-1`}>
        <p className='text text_type_digits-default mr-2 mt-1 mb-1'>
          {`${price}`}
        </p>
        <CurrencyIcon type='primary'/>
      </span>
      <p className={`${ingredientCard.name} text text_type_main-default`}>{name}</p>
    </div>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default IngredientCard;

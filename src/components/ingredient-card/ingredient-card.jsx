import React, { useMemo } from 'react';
import ingredientCard from './ingredient-card.module.css';
import { ingredientType } from '../../utils/prop-types';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import {
  CurrencyIcon,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = ({ ingredient, onCardClick, bun, ingredients, item }) => {
  const { name, image, price } = ingredient;

  const [{opacity}, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 :1
    })
  });

  const handleClick = () => {
    onCardClick(ingredient);
  };

  function useCounter(bun, ingredients, item) {
    const count = useMemo(
      () =>
        bun && bun._id === item._id
          ? 2
          : ingredients && item && [...ingredients].filter((elem) => elem._id === item?._id).length,

      [bun, ingredients, item],
    );
    return count;
  }

  const count = useCounter(bun, ingredients, item);

  return (
    <div className={ingredientCard.card} onClick={handleClick} ref={dragRef} style={{opacity}}>
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
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

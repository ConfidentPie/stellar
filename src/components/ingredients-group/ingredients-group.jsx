import React from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import ingredientsGroup from './ingredients-group.module.css'
import PropTypes from 'prop-types';
import { ingredientArrayType } from '../../utils/prop-types';


const IngredientsGroup = ({ title, ingredients, onCardClick }) => {

    return (
      <div className='mb-10'>
        <h2 className={`${ingredientsGroup.title} mb-6`}>{title}</h2>
        <ul className={ingredientsGroup.list}>
          {ingredients.map(ingredient => (
            <li key={ingredient._id}>
              <IngredientCard ingredient={ingredient} onCardClick={onCardClick}/>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  IngredientsGroup.propTypes = {
    ingredients: ingredientArrayType,
    onCardClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

export default IngredientsGroup;
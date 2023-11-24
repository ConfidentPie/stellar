import React from 'react';
import ingredientsList from './ingredients-list.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';

const IngredientsGroup = ({ title, ingredients, onCardClick }) => {

  return (
    <div className='mb-10'>
      <h2 className={`${ingredientsList.title} mb-6`}>{title}</h2>
      <ul className={ingredientsList.list}>
        {ingredients.map(ingredient => (
          <li key={ingredient._id}>
            <IngredientCard ingredient={ingredient} onCardClick={onCardClick}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

const IngredientList = ({ ingredients, onCardClick }) => {
    const groupedIngredients = ingredients.reduce((acc, ingredient) => {
      const { type } = ingredient;
      acc[type] = [...(acc[type] || []), ingredient];
      return acc;
    }, {});

    return (
      <>
        <IngredientsGroup title="Булки" ingredients={groupedIngredients.bun || []} onCardClick={onCardClick}/>
        <IngredientsGroup title="Соусы" ingredients={groupedIngredients.sauce || []} onCardClick={onCardClick}/>
        <IngredientsGroup title="Ингредиенты" ingredients={groupedIngredients.main || []} onCardClick={onCardClick}/>
      </>
    );
  };

export default IngredientList;
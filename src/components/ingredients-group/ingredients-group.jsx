import React, { useMemo } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import ingredientsGroupStyles from './ingredients-group.module.css'
import PropTypes from 'prop-types';
import { ingredientArrayType } from '../../utils/prop-types';
import { useSelector } from 'react-redux';
import { selectBun, selectIngredients } from '../../services/burger-constructor/selectors';

const IngredientsGroup = ({ title, ingredients, onCardClick }) => {

  const bun  = useSelector(selectBun);
  const constructorIngredients = useSelector(selectIngredients);

  const counters = useMemo(() => {
    const type = ingredients[0].type;

    if (type === "bun") {
        const acc = {};
        ingredients.forEach(ingredient => acc[ingredient._id] = ingredient._id == bun?._id ? 2 : 0);
        return acc;
    }

    const items = constructorIngredients.filter(ingredient => ingredient.type === type);

    return items.reduce((acc, ingredient) => {
        acc[ingredient._id] = (acc[ingredient._id] || 0) + 1;
        return acc;
    }, {})
}, [bun, constructorIngredients]);

    return (
      <>
      <h2 className={`${ingredientsGroupStyles.title} mb-6`}>{title}</h2>
      <ul className={`${ingredientsGroupStyles.list} mb-10`}>
        {ingredients.map(ingredient => (
          <li key={ingredient._id}>
            <IngredientCard ingredient={ingredient} onCardClick={onCardClick} count={counters[ingredient._id]}/>
          </li>
        ))}
      </ul>
    </>
    );
  };

  IngredientsGroup.propTypes = {
    ingredients: ingredientArrayType,
    onCardClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

export default IngredientsGroup;
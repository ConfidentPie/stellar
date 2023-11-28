import React from 'react';
import { itemType } from '../../utils/prop-types';
import burgersIngredient from './burger-ingredient.module.css';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerIngredient = ({item}) => {
  return (
    <>
      <DragIcon />
      <div className={`${burgersIngredient.item} ml-2`}>
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
        />
      </div>
    </>
  );
};

burgersIngredient.propTypes = {
  item: itemType,
};

export default BurgerIngredient;

import React from 'react';
import burgersIngredient from './burger-ingredient.module.css';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerElements = ({item}) => {
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

export default BurgerElements;

import React from 'react';
import burgersElement from './burgers-element.module.css';
import {
  ConstructorElement,
  DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import data from "../../utils/data"



const BurgerElements = () => {
  const choosenIngridients = data;

  return (
    <>
     {choosenIngridients.map(({ name, price, _id, image_mobile, type }) => {
        if (type === "sauce" || type === "main") {
          return (
            <li className={burgersElement.item} key={_id}>
              <DragIcon />
              <ConstructorElement
                type={type}
                text={name}
                price={price}
                thumbnail={image_mobile}
              />
            </li>
          );
        }
        return null;
      })}
    </>
  );
};

export default BurgerElements;

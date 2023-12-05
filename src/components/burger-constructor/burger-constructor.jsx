import React, { useState, useMemo, useEffect } from 'react';
import { ingredientArrayType } from '../../utils/prop-types';
import burgerConstructor from './burger-constructor.module.css';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

import { useSelector, useDispatch } from 'react-redux';
import { setBunTop, setBunBottom, setIngredients } from '../../services/burger-constructor/burger-constructor-slice';
import { selectBunTop, selectBunBottom, selectIngredients } from '../../services/burger-constructor/selectors';

function BurgerConstructor() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  // const bunTop = useSelector(selectBunTop);
  // const bunBottom = useSelector(selectBunBottom);
  // const ingredients = useSelector(selectIngredients);


  const handleOrderClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // const { bun, ingredients: nonBunIngredients } = useMemo(() => {
  //   return {
  //     bun: ingredients.find((item) => item.type === 'bun'),
  //     ingredients: ingredients.filter((item) => item.type !== 'bun'),
  //   };
  // }, [ingredients]);

  // useEffect(() => {
  //   const ingredientsPrice = nonBunIngredients.reduce((acc, item) => acc + item.price, 0);
  //   const total = bun ? bun.price * 2 + ingredientsPrice : ingredientsPrice;
  //   setTotalPrice(total);
  // }, [bun, nonBunIngredients]);

  return (
    <>
      <section className={`${burgerConstructor.container} pt-25 pl-4 pr-4`}>
      {/* <div className={`${burgerConstructor.top} mb-4 mr-4`}>
      {bunTop && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bunTop.name} (верх)`}
              price={bunTop.price}
              thumbnail={bunTop.image}
            />
          )}
        </div>
        <ul className={`${burgerConstructor.list} custom-scroll`}>
          {nonBunIngredients.map((item, index) => (
            <li className={`${burgerConstructor.item} mb-4 mr-2`} key={index}>
             <BurgerIngredient key={index} item={item} />
            </li>
          ))}
        </ul>
        <div className={`${burgerConstructor.botom} mt-4 mr-4`}>
        {bunBottom && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bunBottom.name} (низ)`}
              price={bunBottom.price}
              thumbnail={bunBottom.image}
            />
          )}
        </div> */}
        <div className={`${burgerConstructor.total} mt-10`}>
          <p className='text text_type_digits-medium mr-10'>
          {totalPrice} <CurrencyIcon type='primary' />
          </p>
          <Button
            htmlType='button'
            type='primary'
            size='medium'
            onClick={handleOrderClick}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  ingredients: ingredientArrayType,
};

export default BurgerConstructor;

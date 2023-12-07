import React, { useState, useMemo, useEffect} from 'react';
import { ingredientArrayType } from '../../utils/prop-types';
import burgerConstructor from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDrop } from 'react-dnd';
import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

import { useSelector, useDispatch } from 'react-redux';
import { setBun, addIngredient } from '../../services/burger-constructor/burger-constructor-slice';
import { selectBun, selectIngredients } from '../../services/burger-constructor/selectors';
import { saveOrderNumber } from '../../services/order/order-slice';
import { sendOrder } from '../../utils/burger-api';

function BurgerConstructor() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const bun = useSelector(selectBun);
  const ingredients = useSelector(selectIngredients);

  const createOrder = async () => {
    try {
      const ingredientIds = ingredients.map((ingredient) => ingredient._id);
      const orderData = await sendOrder([ingredientIds]);
      dispatch(saveOrderNumber(orderData.order.number));
      openModal();
    } catch (error) {
      console.log(error, 'handle');
    }
  };

  const openModal = () => {
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

  useEffect(() => {
    const ingredientsPrice = ingredients.reduce(
      (acc, item) => acc + item.price,
      0
    );
    const total = bun ? bun.price * 2 + ingredientsPrice : ingredientsPrice;
    setTotalPrice(total);
  }, [bun, ingredients]);

     const [, drop] = useDrop(() => ({
      accept: 'ingredient',
      drop(ingredient) {ingredient = {...ingredient}},
    }))

  return (
    <>
      <section className={`${burgerConstructor.container} pt-25 pl-4 pr-4`} >
        <ul className={`${burgerConstructor.list} custom-scroll`} ref={drop}>
        <div className={`${burgerConstructor.top} mb-4 mr-4`} >
          Добавьте свою булочку сюда
          {bun && (
            <ConstructorElement
              type='top'
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
          Добавьте понравившиеся ингредиенты
            <li className={`${burgerConstructor.item} mb-4 mr-2`}>
          {ingredients.map((item, index) => (
              <BurgerIngredient key={index} item={item} />
              ))}
            </li>
          <div className={`${burgerConstructor.bottom} mt-4 mr-4`}>
          Добавьте свою булочку сюда
          {bun && (
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
        </ul>
        <div className={`${burgerConstructor.total} mt-10`} >
          <p className='text text_type_digits-medium mr-10'>
            {totalPrice} <CurrencyIcon type='primary' />
          </p>
          <Button
            htmlType='button'
            type='primary'
            size='medium'
            onClick={createOrder}
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

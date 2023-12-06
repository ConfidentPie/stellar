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
// import { setBun, renderIngredients } from '../../services/burger-constructor/burger-constructor-slice';
import { selectBun, selectIngredients } from '../../services/burger-constructor/selectors';
import { saveOrderNumber } from '../../services/order/order-slice';
import { sendOrder } from '../../utils/burger-api';

function BurgerConstructor() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const bun = useSelector(selectBun);
  const ingredients = useSelector(selectIngredients);

    const handleOrderButtonClick = async () => {
      try {
        // const ingredientIds = ingredients.map((ingredient) => ingredient._id);
        const orderData = await sendOrder(['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093c', "643d69a5c3f7b9001cfa0941" ]);
        dispatch(saveOrderNumber(orderData.order.number));
        openModal();

      } catch (error) {
        console.log(error, 'handle')
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
    const ingredientsPrice = ingredients.reduce((acc, item) => acc + item.price, 0);
    const total = bun ? bun.price * 2 + ingredientsPrice : ingredientsPrice;
    setTotalPrice(total);
  }, [bun, ingredients]);

  return (
    <>
      <section className={`${burgerConstructor.container} pt-25 pl-4 pr-4`}>
      <div className={`${burgerConstructor.top} mb-4 mr-4`}>
      {bun && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
        <ul className={`${burgerConstructor.list} custom-scroll`}>
          {ingredients.map((item, index) => (
            <li className={`${burgerConstructor.item} mb-4 mr-2`} key={index}>
             <BurgerIngredient key={index} item={item} />
            </li>
          ))}
        </ul>
        <div className={`${burgerConstructor.bottom} mt-4 mr-4`}>
        {bun && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
        <div className={`${burgerConstructor.total} mt-10`}>
          <p className='text text_type_digits-medium mr-10'>
          {totalPrice} <CurrencyIcon type='primary' />
          </p>
          <Button
            htmlType='button'
            type='primary'
            size='medium'
            onClick={handleOrderButtonClick}
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

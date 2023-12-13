import React, { useState, useMemo, useEffect } from 'react';
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
import {
  setBun,
  addIngredient,
  clearBurger,
  sortIngredients,
} from '../../services/burger-constructor/burger-constructor-slice';
import {
  selectBun,
  selectIngredients,
} from '../../services/burger-constructor/selectors';
import { createOrder } from '../../services/order/actions';
import { selectOrder } from '../../services/order/selectors';
import { clearOrder } from '../../services/order/order-slice';

function BurgerConstructor() {
  const order = useSelector(selectOrder);
  const bun = useSelector(selectBun);
  const ingredients = useSelector(selectIngredients);
  const dispatch = useDispatch();

  const handleCreateOrder = () => {
    const ingredientIds = ingredients.map((ingredient) => ingredient._id);
    dispatch(createOrder(ingredientIds));
  };

  const closeModal = () => {
    dispatch(clearOrder());
    dispatch(clearBurger());
  };

  const totalPrice = useMemo(() => {
    let price = ingredients.reduce((acc, el) => acc + el.price, 0);
    if (bun) {
      price += 2 * bun.price;
    }
    return price;
  }, [bun, ingredients]);

  const [, drop] = useDrop(() => ({
    accept: 'ingredient',
    drop(ingredient) {
      if (ingredient.type !== 'bun') {
        dispatch(addIngredient(ingredient));
      } else {
        dispatch(setBun(ingredient));
      }
    },
  }));

  const setIngredientsOrder = (dragIndex, hoverIndex) => {
    dispatch(sortIngredients(dragIndex, hoverIndex));
  };

  return (
    <>
      <section
        className={`${burgerConstructor.container} pt-25 pl-4 pr-4`}
        ref={drop}
      >
        <div className={`${burgerConstructor.top} ml-9`}>
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
        <ul
          className={`${burgerConstructor.item} mr-2 custom-scroll`}
          style={{ background: ingredients.length !== 0 ? 'transperent' : '' }}
        >
          {ingredients.length === 0 ? 'Перетащите ингредиент сюда' : null}
          {ingredients.map((item, index) => (
            <BurgerIngredient
              key={item.key}
              item={item}
              index={index}
              sortIngredients={setIngredientsOrder}
            />
          ))}
        </ul>
        <div className={`${burgerConstructor.bottom} ml-9`}>
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

        <div className={`${burgerConstructor.total} mt-10`}>
          <p className='text text_type_digits-medium mr-10'>
            {totalPrice} <CurrencyIcon type='primary' />
          </p>
          <Button
            htmlType='button'
            type='primary'
            size='medium'
            onClick={handleCreateOrder}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
      {order && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

export default BurgerConstructor;

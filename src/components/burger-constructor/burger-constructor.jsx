import React, { useState, useMemo } from 'react';
import { ingredientsArrayType } from '../../utils/prop-types';
import burgerConstructor from './burger-constructor.module.css';
// import BurgerTop from '../burger-elements/burger-top';
// import BurgerBottom from '../burger-elements/burger-bottom';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';


function BurgerConstructor({ingredients}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { bun, ingredients: nonBunIngredients } = useMemo(() => {
    return {
      bun: ingredients.find((item) => item.type === 'bun'),
      ingredients: ingredients.filter((item) => item.type !== 'bun'),
    };
  }, [ingredients]);


  return (
    <>
      <section className={`${burgerConstructor.container} pt-25 pl-4 pr-4`}>
      <div className={`${burgerConstructor.element} mb-4 mr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={burgerConstructor.list}>
          {nonBunIngredients.map((item, index) => (
            <li className={`${burgerConstructor.item} mb-4 mr-2`} key={index}>
             <BurgerIngredient key={index} item={item} />
            </li>
          ))}
        </ul>
        <div className={`${burgerConstructor.element} mt-4 mr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className={`${burgerConstructor.total} mt-10`}>
          <p className='text text_type_digits-medium mr-10'>
            610 <CurrencyIcon type='primary' />
          </p>
          <Button
            htmlType='button'
            type='primary'
            size='medium'
            onClick={openModal}
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
  ingredients: ingredientsArrayType,
};

export default BurgerConstructor;

import React, { useState } from 'react';
import { ingredientsArrayType } from '../../utils/prop-types';
import burgerConstructor from './burger-constructor.module.css';
import BurgerTop from '../burger-elements/burger-top';
import BurgerBottom from '../burger-elements/burger-bottom';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerElements from '../burger-elements/burger-elements';


function BurgerConstructor({ingredients}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <section className={`${burgerConstructor.container} pt-25 pl-4 pr-4`}>
        <BurgerTop />
        <ul className={`${burgerConstructor.list} custom-scroll`}>
          <BurgerElements />
        </ul>
        <BurgerBottom />
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

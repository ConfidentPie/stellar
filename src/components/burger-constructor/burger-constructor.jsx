import React, { useState } from 'react';
import burgerConstructor from './burger-constructor.module.css';
import BurgerTop from '../burger-elements/burger-top';
import BurgerBottom from '../burger-elements/burger-bottom';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerElements from '../burger-elements/burger-elements';

BurgerConstructor.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
};

function BurgerConstructor() {
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
          <OrderDetails onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default BurgerConstructor;

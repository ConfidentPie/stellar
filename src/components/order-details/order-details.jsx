import React from 'react';
import orderDetails from './order-details.module.css';
import doneImage from '../../images/done.png';


function OrderDetails () {
    return (
        <div className={`${orderDetails.wrapper} pt-30 pb-30 pl-25 pr-25`}>
          <p className={`${orderDetails.title} text text_type_digits-large mb-8`}>03456</p>
          <p className='text text_type_main-default mb-15'>Идентификатор заказа</p>
          <div className={orderDetails.icon}>
            <img src={doneImage} alt='done sign.'/>
          </div>
          <p className='text text_type_main-medium mt-15 mb-2'>Ваш заказ начали готовить</p>
          <p className='text text_type_main-default text_color_inactive'>
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      );
}

export default OrderDetails;
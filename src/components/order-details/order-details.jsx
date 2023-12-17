import React from 'react';
import orderDetailsStyles from './order-details.module.css';
import doneImage from '../../images/done.png';
import { useSelector } from 'react-redux';
import { selectOrder } from '../../services/order/selectors';


function OrderDetails () {
  const order = useSelector(selectOrder);

    return (
        <div className={`${orderDetailsStyles.wrapper} pt-30 pb-30 pl-25 pr-25`}>
          <p className={`${orderDetailsStyles.title} text text_type_digits-large mb-8`}>{order.order.number}</p>
          <p className='text text_type_main-default mb-15'>Идентификатор заказа</p>
          <div className={orderDetailsStyles.icon}>
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
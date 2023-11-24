import React from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import burgersElement from './burgers-element.module.css'


const BurgerTop = () => {
    return (
        <div className={burgersElement.top}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
        />
        </div>
    )
}

export default BurgerTop;
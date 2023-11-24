import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function Tabs() {
  const [current, setCurrent] = React.useState('buns')
  return (
    <div style={{ display: 'flex', marginBottom: '40px' }}>
      <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="main" active={current === 'main'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

export default Tabs;

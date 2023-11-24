import React from 'react';
import tabsStyle from './tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function Tabs() {
  const [current, setCurrent] = React.useState('buns')
  return (
    <div className={tabsStyle.container}>
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

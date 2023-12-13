import React from 'react';
import tabsStyle from './tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function Tabs({ currentTab, onTabClick }) {
  return (
    <div className={tabsStyle.container}>
      <Tab value="buns" active={currentTab === 'buns'} onClick={() => onTabClick('buns')}>
        Булки
      </Tab>
      <Tab value="sauce" active={currentTab === 'sauce'} onClick={() => onTabClick('sauce')}>
        Соусы
      </Tab>
      <Tab value="main" active={currentTab === 'main'} onClick={() => onTabClick('main')}>
        Начинки
      </Tab>
    </div>
  );
}

export default Tabs;
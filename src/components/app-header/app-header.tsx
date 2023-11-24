import React from 'react';

import appHeader from './app-header.module.css';
import {
    BurgerIcon,
    ListIcon,
    Logo,
    ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';


function Header() {
    return (
      <header className={`${appHeader.header} pb-4 pt-4 mt-10`}>
        <section className={appHeader.container}>
          <nav className={appHeader.nav}>
              <ul className={appHeader.list}>
                  <li className={appHeader.item}>
                      <a className={`${appHeader.link} text text_type_main-small pt-4 pb-4 pl-5 pr-5`} href='/'>
                      <BurgerIcon type='primary'/>
                      <span className='pl-2 '>Конструктор</span>
                      </a>
                  </li>
                  <li className={appHeader.item}>
                      <a className={`${appHeader.link} text text_type_main-small  pt-4 pb-4 pl-5 pr-5`} href='/'>
                      <ListIcon type='primary'/>
                      <span className='pl-2'>Лента заказов</span>
                      </a>
                  </li>
              </ul>
          </nav>
          <Logo />
          <nav className={appHeader.user}>
              <a className={`${appHeader.link} text text_type_main-small  pt-4 pb-4 pl-5 pr-5`} href='/'>
                <ProfileIcon type='primary'/>
                <span className='pl-2'>Личный кабинет</span>
              </a>
          </nav>
        </section>
  </header>
    );
}

export default Header;
import React from 'react';

import appHeaderStyles from './app-header.module.css';
import {
    BurgerIcon,
    ListIcon,
    Logo,
    ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';


function Header() {
    return (
      <header className={`${appHeaderStyles.header} pb-4 pt-4 mt-10`}>
        <section className={appHeaderStyles.container}>
          <nav className={appHeaderStyles.nav}>
              <ul className={appHeaderStyles.list}>
                  <li className={appHeaderStyles.item}>
                      <a className={`${appHeaderStyles.link} text text_type_main-small pt-4 pb-4 pl-5 pr-5`} href='/'>
                      <BurgerIcon type='primary'/>
                      <span className='pl-2 '>Конструктор</span>
                      </a>
                  </li>
                  <li className={appHeaderStyles.item}>
                      <a className={`${appHeaderStyles.link} ${appHeaderStyles.active}  text text_type_main-small  pt-4 pb-4 pl-5 pr-5`} href='/'>
                      <ListIcon type='secondary'/>
                      <span className='pl-2'>Лента заказов</span>
                      </a>
                  </li>
              </ul>
          </nav>
          <Logo />
          <nav className={appHeaderStyles.user}>
              <a className={`${appHeaderStyles.link}  ${appHeaderStyles.active} text text_type_main-small  pt-4 pb-4 pl-5 pr-5`} href='/'>
                <ProfileIcon type='secondary'/>
                <span className='pl-2'>Личный кабинет</span>
              </a>
          </nav>
        </section>
  </header>
    );
}

export default Header;
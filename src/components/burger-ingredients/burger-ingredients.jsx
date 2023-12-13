// В компоненте BurgerIngredients

import React, { useState, useMemo, useEffect, useRef } from 'react';
import burgerIngredients from './burger-ingredients.module.css';
import IngredientsGroup from '../ingredients-group/ingredients-group';
import Tabs from '../tabs/tabs';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredients } from '../../services/burger-ingredients/selectors';

function BurgerIngredients() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [choosenIngredient, setChoosenIngredient] = useState(null);
  const [currentTab, setCurrentTab] = useState('buns');

  const ingredients = useSelector(selectIngredients);
  const dispatch = useDispatch();

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const groupedIngredients = useMemo(() => {
    return ingredients.reduce((acc, ingredient) => {
      const { type } = ingredient;
      acc[type] = [...(acc[type] || []), ingredient];
      return acc;
    }, {});
  }, [ingredients]);

  const handleOpenModal = (ingredient) => {
    setChoosenIngredient(ingredient);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleTabClick = (tabValue) => {
    setCurrentTab(tabValue);
    scrollToSection(tabValue);
  };

  const scrollToSection = (section) => {
    switch (section) {
      case 'buns':
        bunRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'sauce':
        sauceRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'main':
        mainRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bunRect = bunRef.current.getBoundingClientRect();
      const sauceRect = sauceRef.current.getBoundingClientRect();
      const mainRect = mainRef.current.getBoundingClientRect();

      if (
        bunRect.top <= window.innerHeight / 2 &&
        bunRect.bottom >= window.innerHeight / 2
      ) {
        setCurrentTab('buns');
      } else if (
        sauceRect.top <= window.innerHeight / 2 &&
        sauceRect.bottom >= window.innerHeight / 2
      ) {
        setCurrentTab('sauce');
      } else if (
        mainRect.top <= window.innerHeight / 2 &&
        mainRect.bottom >= window.innerHeight / 2
      ) {
        setCurrentTab('main');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className={burgerIngredients.container}>
        <h2 className='text text_type_main-large pt-10 mb-5 pl-5'>
          Соберите бургер
        </h2>
        <Tabs currentTab={currentTab} onTabClick={handleTabClick} />
        <div className={`${burgerIngredients.list} custom-scroll`}>
          <div className={burgerIngredients.group} ref={bunRef}>
            <IngredientsGroup
              title='Булки'
              ingredients={groupedIngredients.bun || []}
              onCardClick={handleOpenModal}
            />
          </div>
          <div className={burgerIngredients.group} ref={sauceRef}>
            <IngredientsGroup
              title='Соусы'
              ingredients={groupedIngredients.sauce || []}
              onCardClick={handleOpenModal}
            />
          </div>
          <div className={burgerIngredients.group} ref={mainRef}>
            <IngredientsGroup
              title='Ингредиенты'
              ingredients={groupedIngredients.main || []}
              onCardClick={handleOpenModal}
            />
          </div>
        </div>
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <IngredientDetails ingredient={choosenIngredient} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;

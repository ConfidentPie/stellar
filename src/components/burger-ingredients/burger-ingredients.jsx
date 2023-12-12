import React, { useState, useMemo } from 'react';

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

  const ingredients = useSelector(selectIngredients);

  // const dispatch = useDispatch();

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

  return (
    <>
      <section className={burgerIngredients.container}>
        <h2 className='text text_type_main-large pt-10 mb-5 pl-5'>
          Соберите бургер
        </h2>
        <Tabs />
        <div className={`${burgerIngredients.list} custom-scroll`}>
          <IngredientsGroup
            title="Булки"
            ingredients={groupedIngredients.bun || []}
            onCardClick={handleOpenModal}
          />
          <IngredientsGroup
            title="Соусы"
            ingredients={groupedIngredients.sauce || []}
            onCardClick={handleOpenModal}
          />
          <IngredientsGroup
            title="Ингредиенты"
            ingredients={groupedIngredients.main || []}
            onCardClick={handleOpenModal}
          />
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

import React, { useState } from 'react';
import burgerIngredients from './burger-ingredients.module.css';
import Tabs from '../tabs/tabs';
import IngredientList from '../ingredients-list/ingredients-list';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

BurgerIngredients.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
};

function BurgerIngredients(props) {
  const { ingredients } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [choosenIngredient, setChoosenIngredient] = useState(null);


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleIngredientClick = (ingredient) => {
    setChoosenIngredient(ingredient);
    handleOpenModal();
  };

  return (
    <>
    <section className={burgerIngredients.container}>
      <h2 className='text text_type_main-large pt-10 mb-5 pl-5'>
        Соберите бургер
      </h2>
      <Tabs />
      <div className={`${burgerIngredients.list} custom-scroll`}>
          <IngredientList ingredients={ingredients} onCardClick={handleIngredientClick} />
      </div>
    </section>
    {isModalOpen && (
        <Modal onClose={closeModal}>
          <IngredientDetails ingredient={choosenIngredient}/>
        </Modal>
      )}
    </>
  );
}


export default BurgerIngredients;

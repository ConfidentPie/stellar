import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import burgerIngredients from './burger-ingredients.module.css';
import IngredientsGroup from '../ingredients-group/ingredients-group';
import Tabs from '../tabs/tabs';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredients } from '../../services/burger-ingredients/selectors';
// import { useInView } from 'react-intersection-observer';

const useTopId = () => {
  const listRef = useRef();
  const items = useRef({});
  const [topId, setTopId] = useState('');

  const itemsRef = useCallback(
    (el) => {
      if (el) items.current[el.id] = el;
    },
    [items]
  );

  const onScroll = useCallback(() => {
    const listTop = listRef.current.getBoundingClientRect().top;
    let id = '';
    let minDiff = Number.MAX_VALUE;
    for (let item in items.current) {
      const diff = Math.abs(
        items.current[item].getBoundingClientRect().top - listTop
      );
      if (diff >= 0 && minDiff > diff) {
        minDiff = diff;
        id = items.current[item].id;
      }
    }
    if (id && id !== topId) setTopId(id);
  }, [topId]);

  return { listRef, itemsRef, onScroll, topId };
};

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

  // const [bunRef, inViewBuns] = useInView({
  //   threshold: 0,
  // });

  // const [sauceRef, inViewSauce] = useInView({
  //   threshold: 0,
  // });

  // const [mainRef, inViewMain] = useInView({
  //   threshold: 0,
  // });

  // useEffect(() => {
  //   if (inViewBuns) {
  //     setCurrentTab('buns');
  //   } else if (inViewSauce) {
  //     setCurrentTab('sauce');
  //   } else if (inViewMain) {
  //     setCurrentTab('main');
  //   }
  // }, [inViewBuns, inViewSauce, inViewMain]);

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

  const { listRef, itemsRef, onScroll, topId } = useTopId();
  useEffect(() => {
    if (topId) setCurrentTab(topId);
  }, [topId]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <section className={burgerIngredients.container}>
        <h2 className='text text_type_main-large pt-10 mb-5 pl-5'>
          Соберите бургер
        </h2>
        <Tabs currentTab={currentTab} onTabClick={handleTabClick} />
        <div
          className={`${burgerIngredients.list} custom-scroll`}
          ref={listRef}
          onScroll={handleScroll}
        >
          <div className={burgerIngredients.group} id='buns' ref={bunRef}>
            <IngredientsGroup
              title='Булки'
              ingredients={groupedIngredients.bun || []}
              onCardClick={handleOpenModal}
            />
          </div>
          <div className={burgerIngredients.group} id='sauce' ref={sauceRef}>
            <IngredientsGroup
              title='Соусы'
              ingredients={groupedIngredients.sauce || []}
              onCardClick={handleOpenModal}
            />
          </div>
          <div className={burgerIngredients.group} id='main' ref={mainRef}>
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

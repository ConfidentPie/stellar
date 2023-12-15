import React, { useEffect } from 'react';
import Header from '../app-header/app-header';
import appStyles from './app.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { loadIngredients } from '../../services/burger-ingredients/actions';
import { burgerIngredients } from '../../services/burger-ingredients/selectors';

function App() {
  const {loading, error, ingredients} = useSelector(burgerIngredients);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadIngredients());
    }, [dispatch]);

  return (
    <div className={appStyles.app}>
      <Header />
      <main className={appStyles.main}>
      {loading ? (
          <p>Магия...</p>
        ) : error ? (
          <p>Не удалось загрузить ингредиенты: {error}</p>
        ) : ingredients.length > 0 ? (
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
        ) : (<p>Не удалось получить ингредиенты</p>)}
      </main>
    </div>
  );
}

export default App;

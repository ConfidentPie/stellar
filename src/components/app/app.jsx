import React, { useState, useEffect } from 'react';
import Header from '../app-header/app-header';
import './app.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../utils/burger-api';
import { setIngredients } from '../../services/burger-ingredients/burger-ingredients-slice';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { }

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    const getProductData = async () => {
      try {
        const ingredientsData = await getIngredients();
        dispatch(setIngredients(ingredientsData.data));
      } catch (error) {
        console.error('Произошла ошибка при получении данных. Текст ошибки:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProductData();
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <main className='main'>
      {isLoading ? (
          <p>Магия...</p>
        ) : (
          <>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

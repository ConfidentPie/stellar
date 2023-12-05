import React, { useState, useEffect } from 'react';
import Header from '../app-header/app-header';
import './app.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../utils/burger-api';
import { setIngredients } from '../../services/burger-constructor/burger-constructor-slice';


function App() {
  // const [data, setData] = useState([]);
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
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        )}
      </main>
    </div>
  );
}

export default App;

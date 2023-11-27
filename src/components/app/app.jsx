import React, { useState, useEffect } from 'react';
import Header from '../app-header/app-header';
import './app.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../utils/burger-api';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const getProductData = async () => {
      try {
        const ingredientsData = await getIngredients();
        setData(ingredientsData.data);
      } catch (error) {
        console.error('Произошла ошибка при получении данных. Текст ошибки:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProductData();
  }, []);

  return (
    <div className='App'>
      <Header />
      <main className='main'>
      {isLoading ? (
          <p>Магия...</p>
        ) : (
          <>
            <BurgerIngredients ingredients={data} />
            <BurgerConstructor ingredients={data} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;

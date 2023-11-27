import React, { useState, useEffect } from 'react';
import Header from '../app-header/app-header';
import './app.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../utils/burger-api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const ingredientsData = await getIngredients();
        setData(ingredientsData.data);
      } catch (error) {
        console.error('Произошла ошибка при получении данных. Текст ошибки:', error.message);
      }
    };

    getProductData();
  }, []);

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor  ingredients={data}/>
      </main>
    </div>
  );
}

export default App;

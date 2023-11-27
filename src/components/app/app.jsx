import React, { useState, useEffect } from 'react';
import Header from '../app-header/app-header';
import './app.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { BURGER_API_URL } from '../../utils/burger-api';


const API_ADDRESS = `${BURGER_API_URL}/ingredients`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await fetch(API_ADDRESS);

        if (!res.ok) {
          throw new Error(
            `Зпрос не выполнен. Ошибка при выполнении запроса: ${res.status}`
          );
        }

        const data = await res.json();
        setData(data.data);
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

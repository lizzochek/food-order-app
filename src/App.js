import Header from './components/Header/Header';
import MealsDescription from './components/Meals/MealsDescription';
import MealsList from './components/Meals/MealsList';
import { createPortal } from 'react-dom';
import Cart from './components/Cart/Cart';
import MealContextProvider from './store/mealsContext';
import { useState } from 'react';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <MealContextProvider>
      <div className='app'>
        {createPortal(
          cartIsShown && <Cart hideCart={hideCartHandler} />,
          document.getElementById('modal-root')
        )}

        <Header showCart={showCartHandler} />
        <MealsDescription />
        <MealsList />
      </div>
    </MealContextProvider>
  );
}

export default App;

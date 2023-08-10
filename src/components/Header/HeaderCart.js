import { useContext } from 'react';
import { MealContext } from '../../store/mealsContext';
import CartIcon from './CartIcon';
import './HeaderCart.css';

export default function HeaderCart({ showCart }) {
  const mealContext = useContext(MealContext);
  return (
    <button
      className='button'
      onClick={showCart}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{mealContext.selectedMeals.length}</span>
    </button>
  );
}

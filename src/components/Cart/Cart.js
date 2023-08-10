import { Fragment, useContext } from 'react';
import { MealContext } from '../../store/mealsContext';
import CartItems from './CartItems';
import './Cart.css';

export default function Cart({ hideCart }) {
  const mealContext = useContext(MealContext);

  let totalAmount = 0;
  mealContext.selectedMeals.map((el) => (totalAmount += el.price * el.amount));
  const placeOrder = () => console.log('Ordering');

  return (
    <Fragment>
      <div className='backdrop'></div>
      <div className='cart'>
        <CartItems selectedMeals={mealContext.selectedMeals} />
        <div className='total'>
          <span>Total amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className='actions'>
          <button
            className='button--alt'
            onClick={hideCart}>
            Close
          </button>
          <button
            className='button'
            onClick={placeOrder}>
            Order
          </button>
        </div>
      </div>
    </Fragment>
  );
}

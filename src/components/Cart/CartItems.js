import { useContext, useEffect } from 'react';
import './CartItems.css';
import { MealContext } from '../../store/mealsContext';

export default function CartItems() {
  const mealContext = useContext(MealContext);
  const { selectedMeals } = mealContext;

  useEffect(() => {
    localStorage.setItem('selectedMeals', JSON.stringify(selectedMeals));
  }, [selectedMeals]);

  const onAddItem = (id) => {
    const mealIndex = selectedMeals.findIndex((el) => el.id === id);
    mealContext.setSelectedMeals((prevMeals) => {
      prevMeals[mealIndex].amount += 1;
      return [...prevMeals];
    });
  };

  const onRemoveItem = (id) => {
    const mealIndex = selectedMeals.findIndex((el) => el.id === id);

    mealContext.setSelectedMeals((prevMeals) => {
      if (prevMeals[mealIndex]?.amount <= 1)
        return [...prevMeals.splice(mealIndex, 1)];

      prevMeals[mealIndex].amount -= 1;
      return [...prevMeals];
    });
  };
  return (
    <ul className='cart-items'>
      {selectedMeals.map((meal) => (
        <li
          className='cart-item'
          key={meal.id}>
          <div>
            <h2>{meal.name}</h2>
            <div className='summary'>
              <span className='price'>${meal.price}</span>
              <span className='amount'>x {meal.amount}</span>
            </div>
          </div>
          <div className='cart-actions'>
            <button onClick={() => onRemoveItem(meal.id)}>−</button>
            <button onClick={() => onAddItem(meal.id)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

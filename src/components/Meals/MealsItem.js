import MealForm from '../MealForm/MealForm';
import './MealsItem.css';

export default function MealsItem({ meal }) {
  return (
    <li className='meal'>
      <div className='meal-data'>
        <h3>{meal.name}</h3>
        <span>{meal.description}</span>
        <div className='price'>${meal.price}</div>
      </div>
      <MealForm meal={meal} />
    </li>
  );
}

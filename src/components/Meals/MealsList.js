import './MealsList.css';
import MealsItem from './MealsItem';
import { DUMMY_MEALS } from '../../data/meals';

export default function MealsList() {
  return (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealsItem
          meal={meal}
          key={meal.id}
        />
      ))}
    </ul>
  );
}

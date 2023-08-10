import { useContext, useEffect, useState } from 'react';
import { MealContext } from '../../store/mealsContext';
import Input from './Input';
import './MealForm.css';

export default function MealForm({ meal }) {
  const mealContext = useContext(MealContext);
  const { selectedMeals } = mealContext;
  const [selectedAmount, setSelectedAmount] = useState(0);

  useEffect(() => {
    if (selectedMeals.length === 0) return;
    localStorage.setItem('selectedMeals', JSON.stringify(selectedMeals));
  }, [selectedMeals]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const mealIndex = selectedMeals.findIndex((el) => el.id === meal.id);
    if (mealIndex >= 0) {
      mealContext.setSelectedMeals((prevMeals) => {
        prevMeals[mealIndex].amount += selectedAmount;
        return prevMeals;
      });
    } else {
      mealContext.setSelectedMeals((prevMeals) => [
        ...prevMeals,
        { ...meal, amount: selectedAmount },
      ]);
    }
  };

  const onInput = (e) => {
    setSelectedAmount(+e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Input
        onInput={onInput}
        label='Amount'
      />
      <button>+Add</button>
    </form>
  );
}

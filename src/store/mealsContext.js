import React, { useEffect } from 'react';
import { useState } from 'react';

export const MealContext = React.createContext({
  selectedMeals: [],
});

const MealContextProvider = (props) => {
  const [selectedMeals, setSelectedMeals] = useState([]);

  useEffect(() => {
    const meals = JSON.parse(localStorage.getItem('selectedMeals'));
    if (meals) setSelectedMeals(meals);
  }, []);

  return (
    <MealContext.Provider value={{ selectedMeals, setSelectedMeals }}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealContextProvider;

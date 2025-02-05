import { useState } from 'react';

const meals = [
  { name: "Grilled Chicken with Quinoa", protein: 40, carbs: 50, fat: 10, calories: 500 },
  { name: "Oatmeal with Almond Butter", protein: 15, carbs: 45, fat: 12, calories: 350 },
  { name: "Salmon with Brown Rice & Veggies", protein: 45, carbs: 55, fat: 15, calories: 600 },
  { name: "Egg Scramble with Avocado", protein: 30, carbs: 10, fat: 20, calories: 350 },
  { name: "Turkey Wrap with Whole Wheat Tortilla", protein: 35, carbs: 40, fat: 8, calories: 420 }
];

const MealPlanGenerator = ({ macros }) => {
    const [mealPlan, setMealPlan] = useState([]);

    const generateMealPlan = () => {
        let remainingProtein = macros.protein;
        let remainingCarbs = macros.carbs;
        let remainingFat = macros.fat;
        let selectedMeals = [];

        while (remainingProtein > 0 || remainingCarbs > 0 || remainingFat > 0) {
            const meal = meals[Math.floor(Math.random() * meals.length)];
            if (!selectedMeals.includes(meal)) {
                selectedMeals.push(meal);
                remainingProtein -= meal.protein;
                remainingCarbs -= meal.carbs;
                remainingFat -= meal.fat;
            }
            if (selectedMeals.length >= 3) break; // Ensure no excessive meals
        }

        setMealPlan(selectedMeals);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center" style={{ color: "#f1ffc4" }}>Generated Meal Plan</h2>
            <button className="custom-btn" style={{ background: "#8884ff" }} onClick={generateMealPlan}>Generate Meal Plan</button>
            {mealPlan.length > 0 && (
                <div className="mt-3">
                    {mealPlan.map((meal, index) => (
                        <div key={index} className="card p-3 mb-2" style={{ background: "#5d576b", color: "#f1ffc4" }}>
                            <h4>{meal.name}</h4>
                            <p>Protein: {meal.protein}g, Carbs: {meal.carbs}g, Fats: {meal.fat}g</p>
                            <p>Calories: {meal.calories} kcal</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MealPlanGenerator;

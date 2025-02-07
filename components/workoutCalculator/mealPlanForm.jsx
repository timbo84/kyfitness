import { useState } from "react";

export default function MealPlanForm() {
  const [size, setSize] = useState(7);
  const [healthFilters, setHealthFilters] = useState(["SOY_FREE"]);
  const [calories, setCalories] = useState({ min: 1200, max: 2500 });
  const [mealPlan, setMealPlan] = useState(null);

  const fetchMealPlan = async () => {
    const response = await fetch("/api/mealPlan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        size,
        healthFilters,
        calorieRange: calories,
      }),
    });

    const data = await response.json();
    setMealPlan(data);
  };

  return (
    <div>
      <h2>Generate Meal Plan</h2>
      <button onClick={fetchMealPlan}>Get Meal Plan</button>
      {mealPlan && <pre>{JSON.stringify(mealPlan, null, 2)}</pre>}
    </div>
  );
}

// const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const mealPlanData = {
//       size: 7,
//       plan: { /* Your meal plan object */ },
//     };
  
//     try {
//       const response = await fetch("/api/mealPlan", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(mealPlanData),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to generate meal plan");
//       }
  
//       const data = await response.json();
//       console.log("Meal Plan:", data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
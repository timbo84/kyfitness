import { useState, useEffect } from "react";

export default function MealPlanForm({ macros }) {
  const [mealPlan, setMealPlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (macros) {
      fetchMealPlan();
    }
  }, [macros]);

  const fetchMealPlan = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/meal-planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          size: 3, // Number of meals
          minCalories: parseFloat(macros.totalCalories) * 0.9,
          maxCalories: parseFloat(macros.totalCalories) * 1,
          minProtein: parseFloat(macros.protein) * 0.9,
          maxProtein: parseFloat(macros.protein) * 1,
          minFat: parseFloat(macros.fat) * 0.9,
          maxFat: parseFloat(macros.fat) * 1,
          minCarbs: parseFloat(macros.carbs) * 0.9,
          maxCarbs: parseFloat(macros.carbs) * 1,
          cuisine: [],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate meal plan");
      }

      const data = await response.json();
      console.log("✅ Meal Plan Data:", data);

      // Process and format meal plan
      const formattedMealPlan = data.selection.map((day, index) => ({
        day: index + 1,
        breakfast: day.sections.Breakfast?.assigned
          ? `https://www.edamam.com/recipe/${
              day.sections.Breakfast.assigned.split("#recipe_")[1]
            }`
          : "No breakfast found",
        lunch: day.sections.Lunch?.assigned
          ? `https://www.edamam.com/recipe/${
              day.sections.Lunch.assigned.split("#recipe_")[1]
            }`
          : "No lunch found",
        dinner: day.sections.Dinner?.assigned
          ? `https://www.edamam.com/recipe/${
              day.sections.Dinner.assigned.split("#recipe_")[1]
            }`
          : "No dinner found",
      }));

      setMealPlan(formattedMealPlan);
    } catch (err) {
      console.error("❌ Error fetching meal plan:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Meal Plan</h2>

      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}

      {mealPlan.length > 0 && (
        <div>
          {mealPlan.map((meal) => (
            <div key={meal.day}>
              <h4>Day {meal.day}</h4>
              <p>
                <strong>Breakfast:</strong>{" "}
                {meal.breakfast.startsWith("https") ? (
                  <a
                    href={meal.breakfast}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Recipe
                  </a>
                ) : (
                  meal.breakfast
                )}
              </p>
              <p>
                <strong>Lunch:</strong>{" "}
                {meal.lunch.startsWith("https") ? (
                  <a
                    href={meal.lunch}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Recipe
                  </a>
                ) : (
                  meal.lunch
                )}
              </p>
              <p>
                <strong>Dinner:</strong>{" "}
                {meal.dinner.startsWith("https") ? (
                  <a
                    href={meal.dinner}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Recipe
                  </a>
                ) : (
                  meal.dinner
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";

export default function MealPlanner({ macros }) {
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealPlan = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/meal-planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          size: 3, // Generate 3 meal plans
          health: ["HIGH_PROTEIN"],
          cuisine: ["American", "Mexican"],
          minCalories: macros.calories * 0.9,
          maxCalories: macros.calories * 1.1,
          minProtein: macros.protein * 0.9,
          maxProtein: macros.protein * 1.1
        })
      });

      const data = await response.json();
      if (response.ok) {
        setMealPlan(data);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Meal Planner</h2>
      <button
        onClick={fetchMealPlan}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Loading..." : "Generate Meal Plan"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {mealPlan && (
        <div className="mt-4">
          <h3 className="text-md font-semibold">Your Meal Plan:</h3>
          {mealPlan.selection.map((plan, index) => (
            <div key={index} className="border p-2 rounded-md mt-2">
              <h4 className="text-sm font-bold">Plan {index + 1}</h4>
              <ul className="list-disc pl-4">
                {Object.entries(plan.sections).map(([meal, details]) => (
                  <li key={meal}>
                    {meal}:{" "}
                    {details.sections
                      ? Object.entries(details.sections).map(([subMeal, subDetails]) => (
                          <a
                            key={subMeal}
                            href={subDetails._links.self.href}
                            target="_blank"
                            className="text-blue-500 underline"
                          >
                            {subMeal}
                          </a>
                        ))
                      : details._links && (
                          <a href={details._links.self.href} target="_blank" className="text-blue-500 underline">
                            {meal}
                          </a>
                        )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

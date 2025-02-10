import { useState } from "react";

export default function MealPlanForm({ macros }) {
  const [mealPlan, setMealPlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [size, setSize] = useState("3"); // Default: 3 days

  const fetchMealPlan = async () => {
    setLoading(true);
    setMealPlan([]);
    setError("");
  
    let totalDays = parseInt(size, 10);
    let batchSize = 3; // Fetch 3 days at a time
    let allMeals = [];
  
    for (let i = 0; i < totalDays; i += batchSize) {
      let attempts = 0;
      let success = false;
      while (attempts < 3 && !success) { // Try up to 3 times
        try {
          const response = await fetch("/api/meal-planner", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              size: Math.min(batchSize, totalDays - i),
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
  
          if (!response.ok) throw new Error("Failed to generate meal plan");
  
          const data = await response.json();
          console.log("✅ Meal Plan Data:", data);
  
          if (data.status === "TIME_OUT") {
            attempts++;
            console.warn(`⚠️ Attempt ${attempts}: Request timed out, retrying...`);
            await new Promise((res) => setTimeout(res, 1000 * attempts)); // Wait before retrying
          } else {
            allMeals.push(...data.selection);
            success = true;
          }
        } catch (err) {
          console.error("❌ Error fetching meal plan:", err);
          setError(err.message);
          break;
        }
      }
    }
  
    setMealPlan(
      allMeals.map((day, index) => ({
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
      }))
    );
  
    setLoading(false);
  };
  

  return (
    <div className="card p-4 my-3 shadow-lg" style={{ background: "#5d576b", borderRadius: "15px", color: "#f1ffc4" }}>
      <h2 className="text-center fw-bold">Generate Meal Plan</h2>

      {/* Meal Plan Size Selection */}
      <div className="form-group mb-3">
        <label htmlFor="size" className="form-label fw-bold">Number of Days</label>
        <select
          className="form-control rounded-pill"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="3">3 Days</option>
          <option value="5">5 Days</option>
          <option value="7">7 Days</option>
        </select>
      </div>

      {/* Generate Button */}
      <button onClick={fetchMealPlan} className="custom-btn" disabled={loading}>
        {loading ? "Generating..." : "Generate Meal Plan"}
      </button>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}

      {/* Meal Plan Display */}
      {mealPlan.length > 0 && (
        <div>
          <h3 className="text-center mt-3">Your Meal Plan ({size} Days)</h3>
          <hr style={{ borderTop: "2px solid #f1ffc4" }} />

          {mealPlan.map((meal) => (
            <div key={meal.day} className="mb-3 p-3" style={{ border: "1px solid #f1ffc4", borderRadius: "10px" }}>
              <h4>Day {meal.day}</h4>
              <p>
                <strong>Breakfast:</strong>{" "}
                {meal.breakfast.startsWith("https") ? (
                  <a href={meal.breakfast} target="_blank" rel="noopener noreferrer">View Recipe</a>
                ) : meal.breakfast}
              </p>
              <p>
                <strong>Lunch:</strong>{" "}
                {meal.lunch.startsWith("https") ? (
                  <a href={meal.lunch} target="_blank" rel="noopener noreferrer">View Recipe</a>
                ) : meal.lunch}
              </p>
              <p>
                <strong>Dinner:</strong>{" "}
                {meal.dinner.startsWith("https") ? (
                  <a href={meal.dinner} target="_blank" rel="noopener noreferrer">View Recipe</a>
                ) : meal.dinner}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

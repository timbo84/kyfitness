import { useState, useEffect } from "react";
import axios from "axios";
import MealPlanGenerator from "./mealPlanGenerator";

const MacroCalculator = () => {
const [weight, setWeight] = useState("");
const [heightFeet, setHeightFeet] = useState("");
const [heightInches, setHeightInches] = useState("");
const [age, setAge] = useState("");
const [gender, setGender] = useState("male");
const [activity, setActivity] = useState("1.2");
const [goal, setGoal] = useState("maintain");
const [diet, setDiet] = useState("vegetarian");
const [meal, setMeal] = useState("lunch");
const [macros, setMacros] = useState(null);
const [recipes, setRecipes] = useState(null);

useEffect(() => {
if (macros) {
fetchRecipes(macros.carbs, macros.protein, macros.fat);
}
}, [macros]);

const calculateMacros = () => {
const weight_kg = parseFloat(weight) * 0.453592;
const height_cm =
parseFloat(heightFeet) * 30.48 + parseFloat(heightInches) * 2.54;
const age_years = parseFloat(age);
const gender_factor = gender === "male" ? 5 : -161;

// Calculate Basal Metabolic Rate (BMR)
const BMR =
10 * weight_kg + 6.25 * height_cm - 5 * age_years + gender_factor;

let TDEE = BMR * parseFloat(activity);

// Adjust TDEE based on goal
if (goal === "lose") {
TDEE *= 0.8; // Reduce by 20% for weight loss
} else if (goal === "gain") {
TDEE *= 1.2; // Increase by 20% for muscle gain
}

// Macronutrient breakdown (adjustable)
const protein_ratio = 0.3;
const fat_ratio = 0.25;
const carb_ratio = 0.45;

const protein_calories = TDEE * protein_ratio;
const fat_calories = TDEE * fat_ratio;
const carb_calories = TDEE * carb_ratio;

const protein_grams = protein_calories / 4;
const fat_grams = fat_calories / 9;
const carb_grams = carb_calories / 4;

setMacros({
totalCalories: TDEE.toFixed(2),
protein: protein_grams.toFixed(2),
fat: fat_grams.toFixed(2),
carbs: carb_grams.toFixed(2),
});
};

const fetchRecipes = async (carbs, protein, fat) => {
try {
const responseStream = await fetch("https://api.chefgpt.com/api/generate/stream/recipe-from-macros", {
  method: 'POST',
  headers: {
    'Authorization': 'f05f46fb-3be1-4547-80ff-2377f6235922',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    carbs: parseFloat(carbs),
    proteins: parseFloat(protein),
    fats: parseFloat(fat),
    diet,
  })
});

const reader = responseStream.body.getReader();
const decoder = new TextDecoder();
let done = false;
let chunks = '';

while (!done) {
  const { value, done: doneReading } = await reader.read();
  done = doneReading;
  const newValue = decoder.decode(value);
  chunks += newValue;
}

const recipeData = JSON.parse(chunks);
setRecipes(recipeData.recipes);
console.log(recipeData);

} catch (error) {
console.error("Error fetching recipes:", error);
}
};

return (
<div className="container mt-5">
<h2
  className="text-center mb-4"
  style={{ color: "#f1ffc4", fontWeight: "bold" }}
>
  Macro Calculator
</h2>
<form
  onSubmit={(e) => {
    e.preventDefault();
    calculateMacros();
  }}
  className="card p-4 my-3 shadow-lg"
  style={{
    color: "#f1ffc4",
    background: "#5d576b",
    borderRadius: "15px",
  }}
>
  <div className="form-group mb-3">
    <label htmlFor="weight" className="form-label fw-bold">
      Weight (lbs)
    </label>
    <input
      type="number"
      className="form-control rounded-pill"
      id="weight"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
    />
  </div>
  <div className="form-group mb-3 d-flex gap-2">
    <div className="w-50">
      <label htmlFor="heightFeet" className="form-label fw-bold">
        Height (feet)
      </label>
      <input
        type="number"
        className="form-control rounded-pill"
        id="heightFeet"
        value={heightFeet}
        onChange={(e) => setHeightFeet(e.target.value)}
      />
    </div>
    <div className="w-50">
      <label htmlFor="heightInches" className="form-label fw-bold">
        Height (inches)
      </label>
      <input
        type="number"
        className="form-control rounded-pill"
        id="heightInches"
        value={heightInches}
        onChange={(e) => setHeightInches(e.target.value)}
      />
    </div>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="age" className="form-label fw-bold">
      Age
    </label>
    <input
      type="number"
      className="form-control rounded-pill"
      id="age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
  </div>
  <div className="form-group mb-3">
    <label htmlFor="gender" className="form-label fw-bold">
      Gender
    </label>
    <select
      className="form-control rounded-pill"
      id="gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="activity" className="form-label fw-bold">
      Activity Level
    </label>
    <select
      className="form-control rounded-pill"
      id="activity"
      value={activity}
      onChange={(e) => setActivity(e.target.value)}
    >
      <option value="1.2">Sedentary</option>
      <option value="1.375">Lightly active</option>
      <option value="1.55">Moderately active</option>
      <option value="1.725">Very active</option>
      <option value="1.9">Super active</option>
    </select>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="goal" className="form-label fw-bold">
      Fitness Goal
    </label>
    <select
      className="form-control rounded-pill"
      id="goal"
      value={goal}
      onChange={(e) => setGoal(e.target.value)}
    >
      <option value="maintain">Maintain Weight</option>
      <option value="lose">Lose Weight</option>
      <option value="gain">Gain Muscle</option>
    </select>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="diet" className="form-label fw-bold">
      Diet Preference
    </label>
    <select
      className="form-control rounded-pill"
      id="diet"
      value={diet}
      onChange={(e) => setDiet(e.target.value)}
    >
      <option value="vegetarian">Vegetarian</option>
      <option value="vegan">Vegan</option>
      <option value="keto">Keto</option>
      <option value="paleo">Paleo</option>
      <option value="none">None</option>
    </select>
  </div>
  <button type="submit" className="custom-btn">
    Calculate
  </button>
</form>

{macros && (
  <div
    className="card p-4 my-3 shadow-lg"
    style={{
      color: "#f1ffc4",
      background: "#5d576b",
      borderRadius: "15px",
    }}
  >
    <h4 className="text-center fw-bold">Macronutrient Breakdown</h4>
    <hr style={{ borderTop: "2px solid #f1ffc4" }} />
    <p className="text-center fs-5">
      <strong>Total Calories:</strong> {macros.totalCalories} kcal
    </p>
    <p className="text-center fs-5">
      <strong>Protein:</strong> {macros.protein} grams
    </p>
    <p className="text-center fs-5">
      <strong>Fat:</strong> {macros.fat} grams
    </p>
    <p className="text-center fs-5">
      <strong>Carbs:</strong> {macros.carbs} grams
    </p>
    <MealPlanGenerator macros={macros} />
  </div>
)}

{recipes && (
  <div className="card p-4 my-3 shadow-lg">
    <h4 className="text-center fw-bold">Recipe Suggestions</h4>
    <hr style={{ borderTop: "2px solid #f1ffc4" }} />
    {recipes.map((recipe, index) => (
      <div key={index} className="recipe">
        <h5 className="text-center">{recipe.name}</h5>
        <p>{recipe.description}</p>
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">
          View Recipe
        </a>
        <hr />
      </div>
    ))}
  </div>
)}
</div>
);
};

export default MacroCalculator;
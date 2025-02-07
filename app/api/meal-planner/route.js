export async function POST(req) {
    try {
      const body = await req.json();
      const { size, health, cuisine, minCalories, maxCalories, minProtein, maxProtein } = body;
  
      const requestBody = {
        size: size || 2,
        plan: {
          accept: {
            all: [
              { health: health || ["VEGAN"] },
              { cuisine: cuisine || ["Mediterranean"] }
            ]
          },
          fit: {
            ENERC_KCAL: { min: minCalories || 1800, max: maxCalories || 2200 },
            PROCNT: { min: minProtein || 50, max: maxProtein || 300 }
          },
          sections: {
            Breakfast: {},
            Lunch: { sections: { Starter: {}, Main: {}, Dessert: {} } },
            Dinner: { sections: { Main: {}, Dessert: {} } }
          }
        }
      };
  
      const response = await fetch("https://api.edamam.com/api/meal-planner/v1/cc9733d2/select?type=public", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "Edamam-Account-User": process.env.EDAMAM_APP_ID,
          "Authorization": `Basic ${process.env.EDAMAM_API_KEY}`
        },
        body: JSON.stringify(requestBody)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        return new Response(JSON.stringify({ error: data.message || "Failed to fetch meal plan" }), { status: 500 });
      }
  
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  
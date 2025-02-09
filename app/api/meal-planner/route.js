export async function POST(req) {
  try {
    console.log("🔹 Received request to meal planner API");

    const body = await req.json();
    console.log("📌 Request Body:", body);

    const {
      minCalories,
      maxCalories,
      minProtein,
      maxProtein,
      minFat,
      maxFat,
      minCarbs,
      maxCarbs,
      size,
      health = [],
      cuisine = [],
    } = body;

    if (
      ![
        minCalories,
        maxCalories,
        minProtein,
        maxProtein,
        minFat,
        maxFat,
        minCarbs,
        maxCarbs,
        size,
      ].every(Boolean)
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields in request" }),
        { status: 400 }
      );
    }

    const requestBody = {
      size,
      plan: {
        accept: {
          all: [
            ...(health.length ? [{ health }] : []),
            ...(cuisine.length ? [{ cuisine }] : []),
          ],
        },
        fit: {
          ENERC_KCAL: { min: minCalories, max: maxCalories },
          PROCNT: { min: minProtein, max: maxProtein },
          FAT: { min: minFat, max: maxFat },
          CHOCDF: { min: minCarbs, max: maxCarbs },
        },
        sections: {
          Breakfast: {
            accept: {
              all: [
                {
                  dish: [
                    "drinks",
                    "egg",
                    "biscuits and cookies",
                    "bread",
                    "pancake",
                    "cereals",
                  ],
                },
                { meal: ["breakfast"] },
              ],
            },
          },
          Lunch: {},
          Dinner: {},
        },
      },
    };

    console.log("📝 Request Body to API:", requestBody);

    const response = await fetch(
      `https://api.edamam.com/api/meal-planner/v1/${process.env.EDAMAM_APP_ID}/select?type=public`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "Edamam-Account-User": process.env.EDAMAM_APP_ID,
          Authorization: `Basic ${process.env.EDAMAM_API_KEY}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ API Error:", errorData);
      return new Response(
        JSON.stringify({
          error: errorData.message || "Failed to fetch meal plan",
        }),
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("✅ Response from API:", data);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("🚨 Server Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

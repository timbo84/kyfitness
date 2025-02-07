// import axios from 'axios';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { size, healthFilters, calorieRange } = req.body;

//   const API_ID = process.env.EDAMAM_APP_ID;
//   const API_KEY = process.env.EDAMAM_APP_KEY;
//   const url = `https://api.edamam.com/api/meal-planner/v1/${API_ID}/select`;

//   const headers = {
//     'Content-Type': 'application/json',
//   };

//   const body = {
//     size: size || 7, // Default to 7-day meal plan
//     plan: {
//       accept: {
//         all: [
//           {
//             health: healthFilters || ["SOY_FREE", "FISH_FREE", "MEDITERRANEAN"], // Custom user filters
//           },
//         ],
//       },
//       fit: {
//         ENERC_KCAL: {
//           min: calorieRange?.min || 1200,
//           max: calorieRange?.max || 2500,
//         },
//       },
//       sections: {
//         Breakfast: {
//           accept: {
//             all: [{ meal: ["breakfast"] }],
//           },
//           fit: {
//             ENERC_KCAL: {
//               min: 200,
//               max: 600,
//             },
//           },
//         },
//         Lunch: {
//           accept: {
//             all: [{ meal: ["lunch/dinner"] }],
//           },
//           fit: {
//             ENERC_KCAL: {
//               min: 400,
//               max: 900,
//             },
//           },
//         },
//         Dinner: {
//           accept: {
//             all: [{ meal: ["lunch/dinner"] }],
//           },
//           fit: {
//             ENERC_KCAL: {
//               min: 300,
//               max: 800,
//             },
//           },
//         },
//       },
//     },
//   };

//   try {
//     const response = await axios.post(url, body, { headers });
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Error fetching meal plan:', error);
//     res.status(500).json({ message: 'Failed to fetch meal plan', error: error.message });
//   }
// }

export async function POST(req) {
  try {
    const body = await req.json();

    // Process the request (e.g., call Edamam API)
    const response = await fetch("https://api.edamam.com/api/meal-planner/v1/YOUR_APP_ID/select", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Edamam-Account-User": "YOUR_ACCOUNT_ID",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Edamam API error: ${response.statusText}`);
    }

    const data = await response.json();
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}


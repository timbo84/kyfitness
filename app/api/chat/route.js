export const POST = async (req) => {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405 });
    }

    try {
      const apiKey = process.env.OPENAI_API_KEY;
      
      if (!apiKey) {
        return new Response(JSON.stringify({ error: "Missing OpenAI API Key" }), { status: 500 });
      }
  
      const { messages } = await req.json();
  
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // Or change to "gpt-3.5-turbo" if you don't have access to "gpt-4"
          messages,
          max_tokens: 150,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("OpenAI API Error:", errorData);
        return new Response(JSON.stringify(errorData), { status: response.status });
      }
  
      const data = await response.json();
      return new Response(JSON.stringify({ message: data.choices[0].message.content }), { status: 200 });
  
    } catch (error) {
      console.error("Server Error:", error);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
};

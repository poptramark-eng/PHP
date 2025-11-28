// app/api/news/route.js
export async function GET(request) {
  console.log("API KEY:", process.env.NEWS_API_KEY);
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "general";

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.NEWS_API_KEY}`
  );

  const data = await res.json();
  return Response.json(data);
}



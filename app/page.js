import NewsClient from "./components/NewsClient";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
  
    <div className="p-6">
      
      <h1 className="text-3xl font-bold mb-6">Top Headlines</h1>
      <NewsClient category="general" />
    </div>
  );
}

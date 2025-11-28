import NewsClient from "./components/NewsClient";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
  
    <div className="p-6">
      
    
      <NewsClient category="general" />
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// PAGES
import HomePage from "./pages/homepage/HomePage.component";
import RoadmapPage from "./pages/roadmap/Roadmap.component";
import CalculatorPage from "./pages/calculator/Calculator.component";
import SocialPage from "./pages/social/SocialPage.component";
import StoryPage from "./pages/storypage/StoryPage.component";
import BuyPage from "./pages/buypage/BuyPage.component";

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route path="/home" element={<HomePage />} />
               <Route path="/story" element={<StoryPage />} />
               <Route path="/roadmap" element={<RoadmapPage />} />
               <Route path="/calculator" element={<CalculatorPage />} />
               <Route path="/social" element={<SocialPage />} />
               <Route path="/buy%20now" element={<BuyPage />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;

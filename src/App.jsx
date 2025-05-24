// App.jsx
import 'tailwindcss/tailwind.css';
import './App.css';

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NewRestaurant from "./pages/NewRestaurant";
import baseRestaurants from "./data/restaurants"; // Renombrado para evitar confusión

function App() {
  const [restaurants, setRestaurants] = useState(baseRestaurants);

  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-beige text-texto p-6">
        <Routes>
          <Route path="/" element={<Home restaurants={restaurants} />} />
          <Route path="/search" element={<Search restaurants={restaurants} />} />
          <Route path="/new" element={<NewRestaurant setRestaurants={setRestaurants} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

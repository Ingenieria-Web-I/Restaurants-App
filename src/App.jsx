import 'tailwindcss/tailwind.css';
import './App.css';

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NewRestaurant from "./pages/NewRestaurant";
import defaultRestaurants from "./data/restaurants";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("restaurants");

    if (stored && stored !== "undefined" && stored !== "null") {
      const parsed = JSON.parse(stored);
      const merged = [
        ...defaultRestaurants.filter(
          (r) => !parsed.some((storedR) => storedR.id === r.id)
        ),
        ...parsed,
      ];
      setRestaurants(merged);
      localStorage.setItem("restaurants", JSON.stringify(merged));
    } else {
      setRestaurants(defaultRestaurants);
      localStorage.setItem("restaurants", JSON.stringify(defaultRestaurants));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }, [restaurants]);

  const handleDeleteRestaurant = (id) => {
    const filtered = restaurants.filter((r) => r.id !== id);
    setRestaurants(filtered);
  };

  const handleReset = () => {
    setRestaurants(defaultRestaurants);
    localStorage.setItem("restaurants", JSON.stringify(defaultRestaurants));
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-fondo text-texto">
        <Navbar />
       
        <main className="flex-grow p-6">
          <Routes>
            <Route
              path="/"
              element={<Home restaurants={restaurants} onDelete={handleDeleteRestaurant} onReset={handleReset} />}
            />
            <Route path="/search" element={<Search restaurants={restaurants} />} />
            <Route path="/new" element={<NewRestaurant setRestaurants={setRestaurants} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
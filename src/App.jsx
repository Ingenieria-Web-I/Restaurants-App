// Importando el CSS de Tailwind
import 'tailwindcss/tailwind.css';
// Importando el CSS de la aplicación
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NewRestaurant from "./pages/NewRestaurant";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/new" element={<NewRestaurant />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
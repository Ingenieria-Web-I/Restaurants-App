import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">🍽️ Restaurants App</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition">Inicio</Link>
          <Link to="/search" className="text-gray-600 hover:text-blue-600 font-medium transition">Buscar</Link>
          <Link to="/new" className="text-gray-600 hover:text-blue-600 font-medium transition">Nuevo</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
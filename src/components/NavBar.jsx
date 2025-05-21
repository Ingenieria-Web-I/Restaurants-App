import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primario text-white shadow-md">
       <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold">🍽️ Restaurants App</span>
          <div className="space-x-4">
            <Link to="/" className="hover:text-secundario transition">Inicio</Link>
            <Link to="/search" className="hover:text-secundario transition">Buscar</Link>
           <Link to="/new" className="hover:text-secundario transition">Nuevo</Link>
         </div>
      </div>
    </nav>
  );
}

export default Navbar;
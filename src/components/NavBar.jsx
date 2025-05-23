import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-primario text-white shadow-md relative z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-secundario transition" style={{ fontFamily: 'cursive' }}>
          🍽️ RestaurantsApp
        </Link>

        {/* Botón menú móvil */}
        <button onClick={toggleMenu} className="sm:hidden focus:outline-none" aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú desktop */}
        <div className="hidden sm:flex items-center text-sm sm:text-base">
          <NavItem to="/" label="Inicio" />
          <span className="border-l h-5 border-white/30 mx-3" />
          <NavItem to="/search" label="Buscar" />
          <span className="border-l h-5 border-white/30 mx-3" />
          <NavItem to="/new" label="Nuevo" />
        </div>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden absolute top-full left-0 w-full bg-primario/80 backdrop-blur-md text-white px-6 py-4 space-y-3 shadow-md"
          >
            <NavItem to="/" label="Inicio" toggle={toggleMenu} />
            <NavItem to="/search" label="Buscar" toggle={toggleMenu} />
            <NavItem to="/new" label="Nuevo" toggle={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavItem({ to, label, toggle }) {
  return (
    <NavLink
      to={to}
      onClick={() => toggle && toggle()}
      className={({ isActive }) =>
        `block sm:inline hover:text-secundario transition ${
          isActive ? "text-secundario font-semibold" : ""
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default Navbar;
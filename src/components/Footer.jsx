import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primario text-white py-5 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p className="mb-2">
          Hecho con ❤️ por{" "}
          <strong>
            Jair Moreno y Geronimo Bedoya
          </strong>
        </p>

        <div className="flex justify-center gap-6 text-lg mb-2">
          <a
            href="https://github.com/JairMorenolml"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secundario transition flex items-center gap-1"
          >
            <FaGithub />
            <span className="text-sm">GitHub de Jair</span>
          </a>
          <a
            href="https://github.com/ProyectosDesarrollo97"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secundario transition flex items-center gap-1"
          >
            <FaGithub />
            <span className="text-sm">GitHub de Geronimo</span>
          </a>
        </div>

        <p className="opacity-60">© {new Date().getFullYear()} RestaurantsApp</p>
      </div>
    </footer>
  );
}

export default Footer;
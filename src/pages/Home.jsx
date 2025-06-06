import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { Link } from "react-router-dom";
import { fetchRestaurants, deleteRestaurant } from "../services/restaurantService";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Error al cargar restaurantes:", error);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        await deleteRestaurant(id);
        setRestaurants((prev) => prev.filter((r) => r.id !== id));
        Swal.fire("Eliminado", "El restaurante ha sido eliminado", "success");
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-primario">Directorio de Restaurantes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurants.map((rest) => (
          <div key={rest.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={rest.image} alt={rest.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-texto mb-2">{rest.name}</h3>
              <p className="text-secundario text-sm">{rest.description}</p>
              <p className="text-texto text-sm mb-3">{rest.address}</p>
              <div className="flex">
                <Link
                  to={`/edit/${rest.id}`}
                  className="bg-primario text-white text-sm px-3 py-1 rounded hover:bg-secundario transition mr-2"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(rest.id)}
                  className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
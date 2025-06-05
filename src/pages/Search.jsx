import { useEffect, useState } from "react";
import { restaurantService } from "../services/firebaseRestaurantServices";

function Search() {
  const [query, setQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await restaurantService.getAll();
        setRestaurants(data);
      } catch (error) {
        console.error("Error al obtener restaurantes:", error);
      }
    };
    fetchRestaurants();
  }, []);

  const filtered = restaurants.filter((rest) =>
    rest.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mt-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-primario">Buscar Restaurantes</h2>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primario"
        />
      </div>

      {/* Mostrar resultados solo si hay texto en el input */}
      {query.trim() !== "" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((rest) => (
              <div
                key={rest.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <img
                  src={rest.image}
                  alt={rest.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-texto mb-2">{rest.name}</h3>
                  <p className="text-secundario text-sm mb-1">{rest.description}</p>
                  <p className="text-texto text-sm mb-1">{rest.address}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No se encontraron restaurantes
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
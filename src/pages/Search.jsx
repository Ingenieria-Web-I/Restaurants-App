import { useState } from "react";

function Search({ restaurants }) {
  const [query, setQuery] = useState("");

  const filteredRestaurants = restaurants.filter((rest) =>
    rest.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Buscar Restaurantes</h1>

      <input
        type="text"
        placeholder="Escribe el nombre del restaurante..."
        className="w-full p-2 border rounded-lg mb-6"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query !== "" && (
        <>
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredRestaurants.map((rest) => (
                <div key={rest.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={rest.image} alt={rest.name} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-700">{rest.name}</h2>
                    <p className="text-gray-500 text-sm">{rest.description}</p>
                    <p className="text-gray-400 text-sm">{rest.address}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No se encontraron restaurantes.</p>
          )}
        </>
      )}
    </div>
  );
}

export default Search;

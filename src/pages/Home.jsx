import restaurants from "../data/restaurants";

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Directorio de Restaurantes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurants.map((rest) => (
          <div
            key={rest.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img src={rest.image} alt={rest.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-700 mb-2">{rest.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{rest.description}</p>
              <p className="text-gray-400 text-sm">{rest.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
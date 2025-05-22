import { useState } from "react";

function NewRestaurant() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    address: "",
    image: "",
  });

  const [restaurants, setRestaurants] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      ...form,
      id: Date.now(), // ID único
    };

    setRestaurants([...restaurants, newRestaurant]);

    // Limpiar formulario
    setForm({
      name: "",
      description: "",
      address: "",
      image: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Nuevo Restaurante</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="name"
          placeholder="Nombre del restaurante"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={form.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-primario text-white px-4 py-2 rounded hover:bg-secundario transition"
        >
          Agregar Restaurante
        </button>
      </form>

      {restaurants.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Restaurantes Agregados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {restaurants.map((rest) => (
              <div key={rest.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={rest.image} alt={rest.name} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-700">{rest.name}</h3>
                  <p className="text-gray-500 text-sm">{rest.description}</p>
                  <p className="text-gray-400 text-sm">{rest.address}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NewRestaurant;
